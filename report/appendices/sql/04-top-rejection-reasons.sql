-- Bilag SQL 4: Top Rejection Reasons (seneste 30 dage)
--
-- Definition: Frekvensfordeling af rejection_reason
-- Tidsperiode: Seneste 30 dage
-- Datakilde: match_analytics
--
-- BRUG: Kopier og kør i Supabase SQL Editor

WITH rejection_counts AS (
  SELECT
    ma.rejection_reason,
    COUNT(*) AS count,
    ROUND(
      (COUNT(*)::NUMERIC / (SELECT COUNT(*) FROM match_analytics WHERE outcome = 'rejected' AND match_request_id IN (SELECT id FROM match_requests WHERE created_at >= NOW() - INTERVAL '30 days'))::NUMERIC) * 100,
      2
    ) AS percent
  FROM match_analytics ma
  INNER JOIN match_requests mr ON mr.id = ma.match_request_id
  WHERE ma.outcome = 'rejected'
    AND mr.created_at >= NOW() - INTERVAL '30 days'
    AND ma.rejection_reason IS NOT NULL
  GROUP BY ma.rejection_reason
  ORDER BY count DESC
)
SELECT
  rejection_reason,
  count,
  percent
FROM rejection_counts;

-- FORVENTET OUTPUT:
-- rejection_reason              | count | percent
-- ------------------------------|-------|--------
-- missing_domain_experience     | [X]   | [Y.YY]
-- rate_too_high                 | [A]   | [B.BB]
-- skill_level_too_low           | [C]   | [D.DD]
-- ...

-- INDSÆT RESULTATET I RAPPORT:
-- Top 3 rejection reasons:
-- 1. [rejection_reason] ([percent]%)
-- 2. [rejection_reason] ([percent]%)
-- 3. [rejection_reason] ([percent]%)
