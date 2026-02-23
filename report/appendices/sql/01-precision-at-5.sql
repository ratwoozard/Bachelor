-- Bilag SQL 1: Precision@5 (seneste 30 dage)
--
-- Definition: Andel af top-5 matches (efter overall_score) der godkendes af admin
-- Tidsperiode: Seneste 30 dage
-- Datakilde: match_results + match_analytics
--
-- BRUG: Kopier og kør i Supabase SQL Editor

WITH ranked_matches AS (
  SELECT
    mr.match_request_id,
    mr.overall_score,
    ma.outcome,
    ROW_NUMBER() OVER (PARTITION BY mr.match_request_id ORDER BY mr.overall_score DESC) AS rank_position
  FROM match_results mr
  LEFT JOIN match_analytics ma ON ma.match_request_id = mr.match_request_id
  LEFT JOIN match_requests mrq ON mrq.id = mr.match_request_id
  WHERE mrq.created_at >= NOW() - INTERVAL '30 days'
),
top_5_matches AS (
  SELECT
    match_request_id,
    overall_score,
    outcome,
    rank_position
  FROM ranked_matches
  WHERE rank_position <= 5
)
SELECT
  COUNT(*) FILTER (WHERE outcome IN ('approved', 'hired')) AS approved_in_top_5,
  COUNT(*) AS total_top_5,
  ROUND(
    (COUNT(*) FILTER (WHERE outcome IN ('approved', 'hired'))::NUMERIC / COUNT(*)::NUMERIC) * 100,
    2
  ) AS precision_at_5_percent
FROM top_5_matches;

-- FORVENTET OUTPUT:
-- approved_in_top_5 | total_top_5 | precision_at_5_percent
-- -------------------|-------------|------------------------
-- [TAL]             | [TAL]       | [X.XX]

-- INDSÆT RESULTATET I RAPPORT:
-- Precision@5 = [precision_at_5_percent]%
