# Procesdiagrammer — as-is vs to-be

> **Formål**: Sammenligne eksisterende flow (as-is) med et foreslået flow,
> hvor AI-beslutningsstøtte indgår som input til admin-match.

---

## As-is (nuværende flow)

Flowet bygger på eksisterende dokumenter og implementering:
1. **Bud indsendes**  
   Kilde: `docs/flows/FLOW_BIDDING.md`
2. **Admin match/review**  
   Kilde: `docs/flows/FLOW_BIDDING.md`
3. **Kontrakt genereres**  
   Kilde: `docs/flows/FLOW_CONTRACT_SIGNING.md`,  
   `supabase/functions/generate-contract-from-bid/index.ts`
4. **Betaling/tid → E-conomic**  
   Kilde: `docs/MODULE_INTERACTIONS.md`,  
   `supabase/functions/sync-time-to-ecom/index.ts`

Diagram: `docs/bachelor/figures/process_as_is.mmd`

---

## To-be (med AI-beslutningsstøtte)

Samme kerneflow, men AI-beslutningsstøtte kan bruges under admin-gennemgang:
1. **Bud indsendes**  
2. **AI-beslutningsstøtte** (on-demand: match score + forklaring)  
   Kilde: `supabase/functions/ai-match/index.ts`  
   Trigger: On-demand via `supabase.functions.invoke('ai-match')` — IKKE automatisk ved bud  
   Kilde: `src/services/matchFitScore.ts:79`
3. **Admin match/review** *(godkender endeligt, med AI-anbefaling som input)*  
4. **Kontrakt genereres**  
5. **Tidsregistrering → E-conomic fakturering**

Diagram: `docs/bachelor/figures/process_to_be.mmd`

---

## Godkendelse (ansvar)

I begge flows er **admin** den endelige beslutningstager.  
To-be-flowet introducerer AI som **beslutningsstøtte**, ikke som automatisering.

