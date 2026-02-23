-- Bilag SQL 6: Tid i Staging (trin 4 ventetid)
--
-- Definition: Tid fra projects.status = 'staging_imported' til godkendt/bidding_open
-- Tidsperiode: Seneste 30 dage
-- Datakilde: projects (kræver status-transition tracking – hvis ikke implementeret, brug created_at → updated_at approksimation)
--
-- OBS: Dette query antager at 'updated_at' opdateres når status ændres.
-- Hvis I har en audit_log eller status_history tabel, skal query justeres.
--
-- BRUG: Kopier og kør i Supabase SQL Editor

WITH staging_projects AS (
  SELECT
    id,
    created_at,
    updated_at,
    status,
    -- Antager at updated_at afspejler tidspunkt for status-ændring
    EXTRACT(EPOCH FROM (updated_at - created_at)) / 3600 AS hours_in_staging
  FROM projects
  WHERE created_at >= NOW() - INTERVAL '30 days'
    AND status IN ('bidding_open', 'matched', 'active') -- Jobs der har forladt staging
    -- Ekskluder outliers (>7 dage i staging)
    AND EXTRACT(EPOCH FROM (updated_at - created_at)) / 3600 <= 168
)
SELECT
  ROUND(AVG(hours_in_staging)::NUMERIC, 2) AS avg_hours_in_staging,
  ROUND(MIN(hours_in_staging)::NUMERIC, 2) AS min_hours,
  ROUND(MAX(hours_in_staging)::NUMERIC, 2) AS max_hours,
  ROUND(STDDEV(hours_in_staging)::NUMERIC, 2) AS std_dev_hours,
  COUNT(*) AS total_jobs
FROM staging_projects;

-- FORVENTET OUTPUT:
-- avg_hours_in_staging | min_hours | max_hours | std_dev_hours | total_jobs
-- ---------------------|-----------|-----------|---------------|------------
-- [X.XX]              | [Y.YY]    | [Z.ZZ]    | [A.AA]        | [TAL]

-- BEMÆRK: Hvis I har bedre tracking (fx audit_log med status-transitions),
-- juster query til at bruge faktiske timestamps for status-ændringer.

-- INDSÆT RESULTATET I RAPPORT:
-- Gennemsnitlig tid i staging = [avg_hours_in_staging] timer
