-- Bilag SQL 7: Auto-Approval Rate (trin 3)
--
-- Definition: Andel jobs der springer manuel curation over via auto-approval gate
-- Tidsperiode: Seneste 30 dage
-- Datakilde: projects (kræver auto_approved flag eller enrichment_confidence + validation)
--
-- OBS: Dette query antager at jobs med høj enrichment_confidence (≥75) og ingen
-- contact_info blev auto-approved. Hvis I har et eksplicit 'auto_approved' flag,
-- brug det i stedet.
--
-- BRUG: Kopier og kør i Supabase SQL Editor

-- Variant 1: Hvis I har 'auto_approved' boolean flag
SELECT
  COUNT(*) FILTER (WHERE auto_approved = TRUE) AS auto_approved_jobs,
  COUNT(*) AS total_jobs,
  ROUND(
    (COUNT(*) FILTER (WHERE auto_approved = TRUE)::NUMERIC / COUNT(*)::NUMERIC) * 100,
    2
  ) AS auto_approval_rate_percent
FROM projects
WHERE created_at >= NOW() - INTERVAL '30 days'
  AND status IN ('bidding_open', 'matched', 'active');

-- Variant 2: Hvis I IKKE har 'auto_approved' flag, approksimer baseret på betingelser
-- (enrichment_confidence ≥75, ingen contact_info, etc.)
-- BEMÆRK: Dette kræver at felter 'enrichment_confidence' og 'has_contact_info' eksisterer

-- SELECT
--   COUNT(*) FILTER (
--     WHERE enrichment_confidence >= 75
--       AND has_contact_info = FALSE
--       AND char_length(description) >= 50
--       AND char_length(title) >= 5
--   ) AS likely_auto_approved,
--   COUNT(*) AS total_jobs,
--   ROUND(
--     (COUNT(*) FILTER (
--       WHERE enrichment_confidence >= 75
--         AND has_contact_info = FALSE
--         AND char_length(description) >= 50
--         AND char_length(title) >= 5
--     )::NUMERIC / COUNT(*)::NUMERIC) * 100,
--     2
--   ) AS auto_approval_rate_percent
-- FROM projects
-- WHERE created_at >= NOW() - INTERVAL '30 days'
--   AND status IN ('bidding_open', 'matched', 'active');

-- FORVENTET OUTPUT:
-- auto_approved_jobs | total_jobs | auto_approval_rate_percent
-- -------------------|------------|---------------------------
-- [TAL]             | [TAL]      | [X.XX]

-- INDSÆT RESULTATET I RAPPORT:
-- Auto-approval rate = [auto_approval_rate_percent]%
