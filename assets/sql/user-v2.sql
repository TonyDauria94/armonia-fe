-- User-only schema introduced with local persistent setlists.
-- This module must not be applied to the bundled read-only catalog.

CREATE TABLE IF NOT EXISTS setlist (
  id TEXT PRIMARY KEY CHECK (length(trim(id)) > 0),
  title TEXT NOT NULL COLLATE NOCASE
    CHECK (length(trim(title)) BETWEEN 1 AND 120),
  items_json TEXT NOT NULL DEFAULT '[]'
    CHECK (json_valid(items_json) AND json_type(items_json) = 'array'),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  last_opened_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_setlist_updated_at
  ON setlist(updated_at DESC, title COLLATE NOCASE, id);

CREATE INDEX IF NOT EXISTS idx_setlist_last_opened_at
  ON setlist(last_opened_at DESC)
  WHERE last_opened_at IS NOT NULL;
