-- Bilag SQL 2: Override Rate (seneste 30 dage)
--
-- Definition: Andel af matches med score ≥80 der afvises af admin
-- Tidsperiode: Seneste 30 dage
-- Datakilde: match_results + match_analytics
--
-- BRUG: Kopier og kør i Supabase SQL Editor

WITH high_score_matches AS (
  SELECT
    mr.match_request_id,
    mr.overall_score,
    ma.outcome
  FROM match_results mr
  LEFT JOIN match_analytics ma ON ma.match_request_id = mr.match_request_id
  LEFT JOIN match_requests mrq ON mrq.id = mr.match_request_id
  WHERE mrq.created_at >= NOW() - INTERVAL '30 days'
    AND mr.overall_score >= 80
)
SELECT
  COUNT(*) FILTER (WHERE outcome = 'rejected') AS rejected_high_score,
  COUNT(*) AS total_high_score,
  ROUND(
    (COUNT(*) FILTER (WHERE outcome = 'rejected')::NUMERIC / COUNT(*)::NUMERIC) * 100,
    2
  ) AS override_rate_percent
FROM high_score_matches;

-- FORVENTET OUTPUT:
-- rejected_high_score | total_high_score | override_rate_percent
-- --------------------|------------------|----------------------
-- [TAL]              | [TAL]            | [X.XX]

-- INDSÆT RESULTATET I RAPPORT:
-- Override Rate = [override_rate_percent]%
