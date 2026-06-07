-- Optional FTS5 search module for SQLite runtimes that expose FTS5.
-- Apply sql/ddl.sql before applying this file.

-- FTS5 indexes display metadata, author and lyrics without inline chord tokens.
CREATE VIRTUAL TABLE IF NOT EXISTS song_search USING fts5(
  title,
  subtitle,
  author,
  search_text,
  tokenize = 'unicode61 remove_diacritics 2'
);

-- Rebuild records when this module is applied at database creation time.
DELETE FROM song_search;
INSERT INTO song_search(rowid, title, subtitle, author, search_text)
SELECT id, title, subtitle, author, search_text
FROM song;

CREATE TRIGGER IF NOT EXISTS trg_song_search_insert
AFTER INSERT ON song
BEGIN
  INSERT INTO song_search(rowid, title, subtitle, author, search_text)
  VALUES (
    new.id,
    new.title,
    new.subtitle,
    new.author,
    new.search_text
  );
END;

CREATE TRIGGER IF NOT EXISTS trg_song_search_delete
AFTER DELETE ON song
BEGIN
  DELETE FROM song_search WHERE rowid = old.id;
END;

CREATE TRIGGER IF NOT EXISTS trg_song_search_update
AFTER UPDATE OF title, subtitle, author, search_text ON song
BEGIN
  INSERT OR REPLACE INTO song_search(rowid, title, subtitle, author, search_text)
  VALUES (
    new.id,
    new.title,
    new.subtitle,
    new.author,
    new.search_text
  );
END;
