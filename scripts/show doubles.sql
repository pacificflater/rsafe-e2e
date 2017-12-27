SELECT *
FROM ntfs_ace
WHERE id IN (
  SELECT
  max(id)
  FROM ntfs_ace
  WHERE is_last = TRUE
  GROUP BY source_id, subj_id, obj, ace_type, inheritance
  HAVING COUNT(id) > 1
);