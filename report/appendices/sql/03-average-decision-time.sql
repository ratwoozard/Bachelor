-- Bilag SQL 3: Gennemsnitlig beslutningstid (seneste 30 dage)
--
-- Definition: Tid fra match genereret til admin beslutter (ekskl. >7 dage)
-- Tidsperiode: Seneste 30 dage
-- Datakilde: match_requests + match_analytics
--
-- BRUG: Kopier og kør i Supabase SQL Editor

WITH decision_times AS (
  SELECT
    mr.id AS match_request_id,
    mr.created_at AS match_created,
    ma.decision_timestamp,
    EXTRACT(EPOCH FROM (ma.decision_timestamp - mr.created_at)) / 3600 AS hours_to_decision
  FROM match_requests mr
  LEFT JOIN match_analytics ma ON ma.match_request_id = mr.id
  WHERE mr.created_at >= NOW() - INTERVAL '30 days'
    AND ma.decision_timestamp IS NOT NULL
    -- Ekskluder outliers (>7 dage = 168 timer)
    AND EXTRACT(EPOCH FROM (ma.decision_timestamp - mr.created_at)) / 3600 <= 168
)
SELECT
  ROUND(AVG(hours_to_decision)::NUMERIC, 2) AS avg_hours_to_decision,
  ROUND(MIN(hours_to_decision)::NUMERIC, 2) AS min_hours,
  ROUND(MAX(hours_to_decision)::NUMERIC, 2) AS max_hours,
  ROUND(STDDEV(hours_to_decision)::NUMERIC, 2) AS std_dev_hours,
  COUNT(*) AS total_decisions
FROM decision_times;

-- FORVENTET OUTPUT:
-- avg_hours_to_decision | min_hours | max_hours | std_dev_hours | total_decisions
-- ----------------------|-----------|-----------|---------------|----------------
-- [X.XX]               | [Y.YY]    | [Z.ZZ]    | [A.AA]        | [TAL]

-- INDSÆT RESULTATET I RAPPORT:
-- Gennemsnitlig beslutningstid = [avg_hours_to_decision] timer (±[std_dev_hours] std.afv.)
