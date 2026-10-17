-- User-only schema introduced with personal favorite songs.
-- This module must not be applied to the bundled read-only catalog.

CREATE TABLE IF NOT EXISTS song_favorite (
  song_source TEXT NOT NULL CHECK (song_source IN ('official', 'user')),
  song_slug TEXT NOT NULL CHECK (
    length(trim(song_slug)) > 0
    AND song_slug = lower(song_slug)
  ),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  PRIMARY KEY (song_source, song_slug)
) WITHOUT ROWID;

CREATE INDEX IF NOT EXISTS idx_song_favorite_created_at
  ON song_favorite(created_at DESC, song_source, song_slug);
