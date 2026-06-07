PRAGMA foreign_keys = ON;

-- Common SQLite schema for both the bundled read-only catalog and the writable user database.
-- This file is portable to native SQLite and the Web provider; apply
-- sql/fts5.sql separately only when the runtime exposes FTS5.
-- The application persists Chord Markdown in song.cmd and derives search_text
-- from its lyrics without chord tokens before writing a song.
-- PRAGMA foreign_keys must also be enabled by the application on every connection.

CREATE TABLE IF NOT EXISTS song (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE CHECK (length(trim(slug)) > 0 AND slug = lower(slug)),
  title TEXT NOT NULL CHECK (length(trim(title)) > 0),
  subtitle TEXT,
  author TEXT COLLATE NOCASE CHECK (author IS NULL OR length(trim(author)) > 0),
  key_root INTEGER NOT NULL DEFAULT 0 CHECK (key_root BETWEEN 0 AND 11),
  key_quality TEXT NOT NULL DEFAULT 'major' CHECK (length(trim(key_quality)) > 0),
  draft INTEGER NOT NULL DEFAULT 0 CHECK (draft IN (0, 1)),
  cmd TEXT NOT NULL,
  search_text TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

-- song.cmd is the canonical CMD/Markdown source used by editor and exports.
-- song.slug is mandatory; the application generates it from author and title
-- when it is absent from CMD metadata.
-- song.search_text is plain lyrics without chord tokens and is used for search.
-- draft is stored as SQLite boolean integer: 0 = false, 1 = true.
-- A persisted song must have a non-empty display title.

CREATE TABLE IF NOT EXISTS tag (
  name TEXT PRIMARY KEY COLLATE NOCASE CHECK (length(trim(name)) > 0)
);

CREATE TABLE IF NOT EXISTS song_tag (
  song_id INTEGER NOT NULL REFERENCES song(id) ON DELETE CASCADE,
  tag_name TEXT NOT NULL COLLATE NOCASE REFERENCES tag(name) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (song_id, tag_name)
);

CREATE TABLE IF NOT EXISTS song_link (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  song_id INTEGER NOT NULL REFERENCES song(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (
    type = lower(type)
    AND type <> 'pdf'
    AND length(trim(type)) > 0
  ),
  url TEXT NOT NULL CHECK (
    (lower(url) LIKE 'http://_%' AND length(url) > length('http://'))
    OR (lower(url) LIKE 'https://_%' AND length(url) > length('https://'))
  )
);

CREATE TABLE IF NOT EXISTS songbook (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL COLLATE NOCASE UNIQUE CHECK (length(trim(name)) > 0),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

-- Songbook names are case-insensitively unique within this database/source.
CREATE TABLE IF NOT EXISTS songbook_section (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  songbook_id INTEGER NOT NULL REFERENCES songbook(id) ON DELETE CASCADE,
  position INTEGER NOT NULL CHECK (position >= 1),
  name TEXT NOT NULL COLLATE NOCASE CHECK (length(trim(name)) > 0),
  letter TEXT COLLATE NOCASE CHECK (
    letter IS NULL
    OR (
      length(letter) = 1
      AND letter = upper(letter)
      AND letter GLOB '[A-Z]'
    )
  ),
  UNIQUE (songbook_id, position),
  UNIQUE (songbook_id, name),
  UNIQUE (songbook_id, letter)
);

-- position defines section display order within a songbook; gaps are allowed.
-- song_source is needed because personal songbooks may contain records from
-- either local database; SQLite cannot enforce a foreign key across files.
-- The same song_slug may exist in both sources: ('official', slug) and
-- ('user', slug) are separate application identities.
CREATE TABLE IF NOT EXISTS songbook_song (
  songbook_section_id INTEGER NOT NULL REFERENCES songbook_section(id) ON DELETE CASCADE,
  number INTEGER NOT NULL CHECK (number >= 1),
  song_source TEXT NOT NULL CHECK (song_source IN ('official', 'user')),
  song_slug TEXT NOT NULL CHECK (
    length(trim(song_slug)) > 0
    AND song_slug = lower(song_slug)
  ),
  PRIMARY KEY (songbook_section_id, number),
  UNIQUE (songbook_section_id, song_source, song_slug)
);

-- number is manually assigned by the user; it must be positive and unique
-- within the section, but gaps are allowed and deletes do not renumber items.
-- A referenced song may appear in different sections, but only once per section.
-- Deleting referenced songs is cleaned up by the repository using song_source;
-- a generic trigger cannot resolve slugs held in the other database.

CREATE VIEW IF NOT EXISTS song_view AS
SELECT
  s.id,
  s.slug,
  s.title,
  s.subtitle,
  s.cmd,
  s.search_text,
  s.key_root,
  s.key_quality,
  s.draft,
  s.author,
  COALESCE(
    (
      SELECT json_group_array(tag_name)
      FROM (
        SELECT DISTINCT t.name AS tag_name
        FROM song_tag st
        JOIN tag t ON t.name = st.tag_name
        WHERE st.song_id = s.id
        ORDER BY t.name
      )
    ),
    '[]'
  ) AS tags,
  COALESCE(
    (
      SELECT json_group_array(json_object('type', type, 'url', url))
      FROM (
        SELECT DISTINCT sl.type AS type, sl.url AS url
        FROM song_link sl
        WHERE sl.song_id = s.id
        ORDER BY sl.type, sl.url
      )
    ),
    '[]'
  ) AS links,
  s.created_at,
  s.updated_at
FROM song s;

CREATE INDEX IF NOT EXISTS idx_song_author ON song(author);
CREATE INDEX IF NOT EXISTS idx_song_draft ON song(draft);
CREATE INDEX IF NOT EXISTS idx_song_link_song ON song_link(song_id);
CREATE INDEX IF NOT EXISTS idx_song_tag_tag ON song_tag(tag_name);
CREATE INDEX IF NOT EXISTS idx_songbook_song_song
ON songbook_song(song_source, song_slug);

CREATE TRIGGER IF NOT EXISTS trg_song_updated_at
AFTER UPDATE OF
  slug,
  title,
  subtitle,
  author,
  key_root,
  key_quality,
  draft,
  cmd,
  search_text
ON song
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = new.id;
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_song_on_song_tag_insert
AFTER INSERT ON song_tag
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = new.song_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_song_on_song_tag_update
AFTER UPDATE ON song_tag
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id IN (old.song_id, new.song_id);
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_song_on_song_tag_delete
AFTER DELETE ON song_tag
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = old.song_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_song_on_tag_update
AFTER UPDATE OF name ON tag
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id IN (SELECT song_id FROM song_tag WHERE tag_name = new.name);
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_song_on_song_link_insert
AFTER INSERT ON song_link
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = new.song_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_song_on_song_link_update
AFTER UPDATE ON song_link
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id IN (old.song_id, new.song_id);
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_song_on_song_link_delete
AFTER DELETE ON song_link
BEGIN
  UPDATE song
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = old.song_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_songbook_updated_at
AFTER UPDATE OF name ON songbook
BEGIN
  UPDATE songbook
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = new.id;
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_songbook_on_section_insert
AFTER INSERT ON songbook_section
BEGIN
  UPDATE songbook
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = new.songbook_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_songbook_on_section_update
AFTER UPDATE ON songbook_section
BEGIN
  UPDATE songbook
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id IN (old.songbook_id, new.songbook_id);
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_songbook_on_section_delete
AFTER DELETE ON songbook_section
BEGIN
  UPDATE songbook
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = old.songbook_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_songbook_on_song_insert
AFTER INSERT ON songbook_song
BEGIN
  UPDATE songbook
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = (
    SELECT songbook_id
    FROM songbook_section
    WHERE id = new.songbook_section_id
  );
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_songbook_on_song_update
AFTER UPDATE ON songbook_song
BEGIN
  UPDATE songbook
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id IN (
    SELECT songbook_id
    FROM songbook_section
    WHERE id IN (old.songbook_section_id, new.songbook_section_id)
  );
END;

CREATE TRIGGER IF NOT EXISTS trg_touch_songbook_on_song_delete
AFTER DELETE ON songbook_song
BEGIN
  UPDATE songbook
  SET updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
  WHERE id = (
    SELECT songbook_id
    FROM songbook_section
    WHERE id = old.songbook_section_id
  );
END;
