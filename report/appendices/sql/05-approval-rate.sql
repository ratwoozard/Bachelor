-- Bilag SQL 5: Approval Rate (seneste 30 dage)
--
-- Definition: Andel matches der godkendes (outcome = 'approved' OR 'hired')
-- Tidsperiode: Seneste 30 dage
-- Datakilde: match_analytics
--
-- BRUG: Kopier og kør i Supabase SQL Editor

SELECT
  COUNT(*) FILTER (WHERE outcome IN ('approved', 'hired')) AS approved_matches,
  COUNT(*) FILTER (WHERE outcome = 'rejected') AS rejected_matches,
  COUNT(*) AS total_matches,
  ROUND(
    (COUNT(*) FILTER (WHERE outcome IN ('approved', 'hired'))::NUMERIC / COUNT(*)::NUMERIC) * 100,
    2
  ) AS approval_rate_percent,
  ROUND(
    (COUNT(*) FILTER (WHERE outcome = 'rejected')::NUMERIC / COUNT(*)::NUMERIC) * 100,
    2
  ) AS rejection_rate_percent
FROM match_analytics ma
INNER JOIN match_requests mr ON mr.id = ma.match_request_id
WHERE mr.created_at >= NOW() - INTERVAL '30 days';

-- FORVENTET OUTPUT:
-- approved_matches | rejected_matches | total_matches | approval_rate_percent | rejection_rate_percent
-- -----------------|------------------|---------------|----------------------|----------------------
-- [TAL]           | [TAL]            | [TAL]         | [X.XX]               | [Y.YY]

-- INDSÆT RESULTATET I RAPPORT:
-- Approval Rate = [approval_rate_percent]%
-- Rejection Rate = [rejection_rate_percent]%
