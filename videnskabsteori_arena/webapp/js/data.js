// Data module - contains all quiz questions and lesson content
const Data = {
    items: [
        // ==========================================
        // CASE-SPECIFIKKE SPØRGSMÅL (Support Solutions / SoluTalent)
        // ==========================================
        {
            "id": "popper_falsifikation_1",
            "lens": "Popper",
            "category": "case",
            "difficulty": "7",
            "prompt": "En supportleder siger: 'Vores nye AI-matching reducerer spildtid.' Hvordan kan påstanden gøres testbar?",
            "options": [
                "Formulér en falsificerbar hypotese og definer et målepunkt (fx tid pr. kandidat) før/efter",
                "Gentag påstanden oftere for at skabe konsensus",
                "Vælg kun cases hvor AI'en virker bedst"
            ],
            "correct_index": 0,
            "explanation": "Popper: Videnskabelige udsagn skal kunne falsificeres; operationalisér påstanden og gør den testbar. Kilde: Popper, K. (1959) Logic of Scientific Discovery."
        },
        {
            "id": "kuhn_paradigme_1",
            "lens": "Kuhn",
            "category": "case",
            "difficulty": "7",
            "prompt": "Teamet er uenige om, hvad 'god matching' betyder. Hvilken Kuhn-forklaring passer bedst?",
            "options": [
                "De arbejder under forskellige paradigmer med forskellige standarder for 'rigtig' løsning",
                "Det er et rent teknisk problem der kan løses uden begreber",
                "Uenighed betyder at ingen metoder kan bruges"
            ],
            "correct_index": 0,
            "explanation": "Kuhn: Paradigmer styrer, hvilke problemer/standarder der anses som legitime. Et paradigme er et fælles sæt antagelser og metoder. Kilde: Kuhn, T. (1962) The Structure of Scientific Revolutions."
        },
        {
            "id": "lakatos_program_1",
            "lens": "Lakatos",
            "category": "case",
            "difficulty": "12",
            "prompt": "I tester AI-forslag, men ændrer løbende reglerne for hvad der tæller som 'match'. Hvordan kan det ses i Lakatos-termer?",
            "options": [
                "Som et forskningsprogram hvor hjælpeakser (auxiliaries) justeres for at beskytte en kerneantagelse",
                "Som en endelig verifikation der stopper al videre udvikling",
                "Som et bevis på at teori altid er ligegyldig"
            ],
            "correct_index": 0,
            "explanation": "Lakatos: Et forskningsprogram har en 'hard core' (uforanderlig kerne) og en beskyttende bælte af hjælpehypoteser der kan justeres. Kilde: Lakatos, I. (1978) The Methodology of Scientific Research Programmes."
        },
        {
            "id": "feyerabend_metode_1",
            "lens": "Feyerabend",
            "category": "case",
            "difficulty": "7",
            "prompt": "En udvikler foreslår at blande kvalitative interviews og logdata, selvom processen ikke er 'ren'. Hvilken Feyerabend-vinkel passer bedst?",
            "options": [
                "Metodisk pluralisme: 'anything goes' som kritik af metodisk dogmatisme",
                "Kun RCT-studier er gyldige",
                "Data uden teori er altid bedre"
            ],
            "correct_index": 0,
            "explanation": "Feyerabend: Kritiserer metode-monopol; flere metoder kan give bedre indsigt i praksis. Kilde: Feyerabend, P. (1975) Against Method."
        },
        {
            "id": "pragmatisme_abduktion_1",
            "lens": "Pragmatisme",
            "category": "case",
            "difficulty": "7",
            "prompt": "I ser et mønster: kandidater med bestemte tags matches hurtigere. I opstiller en mulig forklaring og tester den i næste sprint. Hvad kaldes det?",
            "options": [
                "Abduktion: bedste forklaring → efterprøvning i praksis",
                "Deduktion: udledt direkte fra aksiomer uden empiri",
                "Ren induktion uden hypotese"
            ],
            "correct_index": 0,
            "explanation": "Pragmatisk/abduktiv tilgang: man danner en plausibel forklaring og afprøver den iterativt. Peirce kaldte det 'inference to the best explanation'. Kilde: Peirce, C.S.; Saunders et al. (2023)."
        },
        {
            "id": "pragmatisme_ontologi_1",
            "lens": "Pragmatisme",
            "category": "case",
            "difficulty": "7",
            "prompt": "Jeres projekt kombinerer interviews (kvalitativt) og KPI-data (kvantitativt). Hvilken ontologisk position legitimerer dette?",
            "options": [
                "Pragmatisk ontologi: fokus på praktisk problemløsning, ikke én sandhed",
                "Positivistisk ontologi: kun kvantitative data er gyldige",
                "Hermeneutisk ontologi: kun fortolkning er mulig"
            ],
            "correct_index": 0,
            "explanation": "Pragmatisme: Vælges når problemløsningen skaber behov for både kvantitative og kvalitative data. I behøver ikke argumentere for én sandhed, men for praktisk problemløsning."
        },
        {
            "id": "deduktion_1",
            "lens": "Slutningsformer",
            "category": "case",
            "difficulty": "7",
            "prompt": "I vil teste om Lean-teoriens forudsigelse om ventetid holder i jeres case. Hvilken slutningsform bruger I?",
            "options": [
                "Deduktion: teori → empiri (test af teoretiske forudsigelser)",
                "Induktion: empiri → teori (opdage mønstre)",
                "Abduktion: vekslen mellem teori og empiri"
            ],
            "correct_index": 0,
            "explanation": "Deduktion går fra teori til empiri. Man starter med en teori, udleder en hypotese, og tester den med data."
        },
        {
            "id": "abduktion_dybde_1",
            "lens": "Slutningsformer",
            "category": "case",
            "difficulty": "12",
            "prompt": "I observerer lang ventetid → bruger Lean-teori → opdager at årsagen er organisatorisk forsigtighedsprincip → nuancerer forklaringen med TOE. Hvad hedder denne proces?",
            "options": [
                "Abduktion: iterativ vekslen mellem observation og teori for bedste forklaring",
                "Ren induktion: kun data, ingen teori",
                "Ren deduktion: kun teori, ingen data-drevet tilpasning"
            ],
            "correct_index": 0,
            "explanation": "Abduktion er iterativ: Observation → Teori → Ny observation → Nuanceret teori. Det er 'inference to the best explanation'. Forskellig fra induktion der stopper ved mønsteret."
        },
        {
            "id": "casestudie_type_1",
            "lens": "Casestudie",
            "category": "case",
            "difficulty": "7",
            "prompt": "Jeres projekt analyserer en specifik proces (bemanding) og et specifikt system (SoluTalent) inden for SS. Hvilken casestudie-type er det?",
            "options": [
                "Indlejret single-case studie: specifikke enheder analyseres inden for én organisation",
                "Holistisk casestudie: hele organisationen som helhed",
                "Multiple-case studie: flere organisationer sammenlignes"
            ],
            "correct_index": 0,
            "explanation": "Indlejret casestudie: Vælges når man ønsker at forstå specifikke enheder/processer inden for organisationen. Jeres indlejrede enheder er: SoluTalent-platformen + bemandingsprocessen. Kilde: Holm (2023)."
        },
        {
            "id": "analytisk_generaliserbarhed_1",
            "lens": "Casestudie",
            "category": "case",
            "difficulty": "12",
            "prompt": "En censor spørger: 'Hvordan kan jeres fund gælde for andre virksomheder?' Hvad er det korrekte svar?",
            "options": [
                "Casestudier generaliserer analytisk til teori, ikke statistisk til population",
                "Vores fund gælder for alle konsulenthuse",
                "Man kan ikke generalisere fra casestudier"
            ],
            "correct_index": 0,
            "explanation": "Analytisk generaliserbarhed: 'Vores fund understøtter TOE-frameworkets forudsigelse om organisatoriske barrierer ved AI-adoption' (til teori) – IKKE 'Dette gælder for alle konsulenthuse' (statistisk). Kilde: Holm (2023); Kuada (2012)."
        },
        {
            "id": "triangulering_1",
            "lens": "Validitet",
            "category": "case",
            "difficulty": "7",
            "prompt": "Hvordan styrker I troværdigheden (credibility) af jeres fund?",
            "options": [
                "Triangulering: kombiner interview + artefaktanalyse + KPI-data",
                "Kun interviews fra én informant",
                "Kun platformdata uden menneskelig kontekst"
            ],
            "correct_index": 0,
            "explanation": "Triangulering: Fund understøttes af mindst 2 empirikilder (interview + artefakt/data). Det er et af Lincoln & Gubas troværdighedskriterier."
        },
        {
            "id": "lean_waste_ventetid_1",
            "lens": "Lean",
            "category": "case",
            "difficulty": "7",
            "prompt": "Jobs ligger i staging-køen i gennemsnit 4 timer før behandling. Hvilken Lean waste-kategori er det?",
            "options": [
                "Ventetid: opgaver/matches venter i kø",
                "Overprocessering: mere bearbejdning end nødvendigt",
                "Fejl/Rework: forkerte matches"
            ],
            "correct_index": 0,
            "explanation": "Lean: Ventetid er en af de 7 spildkategorier. I produktionskontekst er det 'venter på maskine/materialer' – i jeres kontekst er det 'jobs i staging; pending matches'. Kilde: Womack & Jones (2003)."
        },
        {
            "id": "lean_waste_overprocessering_1",
            "lens": "Lean",
            "category": "case",
            "difficulty": "7",
            "prompt": "En admin manuelt godkender matches som AI'en allerede har klassificeret med høj confidence. Hvilken waste-type?",
            "options": [
                "Overprocessering: manuel behandling af noget der kunne auto-håndteres",
                "Ventetid: venter på ressourcer",
                "Uudnyttet talent: medarbejdere bruges forkert"
            ],
            "correct_index": 0,
            "explanation": "Overprocessering: 'Mere bearbejdning end nødvendigt'. I jeres case: manuel curation af high-confidence jobs der kunne auto-godkendes. Kilde: Womack & Jones (2003)."
        },
        {
            "id": "lean_waste_fejl_1",
            "lens": "Lean",
            "category": "case",
            "difficulty": "7",
            "prompt": "Et match afvises fordi konsulenten manglede en specifik kompetence som AI'en ikke fangede. Hvilken waste-type?",
            "options": [
                "Fejl/Rework: forkerte matches der skal laves om",
                "Overproduktion: for mange forslag",
                "Transport: unødvendig informationsflytning"
            ],
            "correct_index": 0,
            "explanation": "Fejl/Rework: 'Defekter → reparation'. I jeres kontekst registreres det i rejection_reasons (mismatch, skill_level). Kilde: Womack & Jones (2003)."
        },
        {
            "id": "lean_waste_talent_1",
            "lens": "Lean",
            "category": "case",
            "difficulty": "7",
            "prompt": "En projektleder med dyb brancheviden bruger 2 timer om dagen på at reviewe trivielle matches. Hvilken waste-type?",
            "options": [
                "Uudnyttet talent: medarbejdere bruges til lavværdi-opgaver",
                "Ventetid: venter på godkendelse",
                "Lager: ophobning af items"
            ],
            "correct_index": 0,
            "explanation": "Uudnyttet talent: 'Medarbejdere bruges forkert'. Projektlederen kunne skabe mere værdi på komplekse matches i stedet for trivielle godkendelser. Kilde: Womack & Jones (2003)."
        },
        {
            "id": "toe_technology_1",
            "lens": "TOE",
            "category": "case",
            "difficulty": "7",
            "prompt": "Override rate er 15% – dvs. admin ændrer 15% af AI's forslag. Hvilken TOE-dimension handler dette om?",
            "options": [
                "Technology: er AI-matchingen præcis nok til at stole på?",
                "Organization: har teamet kompetencer?",
                "Environment: markedspres og konkurrence?"
            ],
            "correct_index": 0,
            "explanation": "TOE Technology-dimensionen: Er teknologien (AI) præcis nok? Måles via Precision@5, override rate, enrichment confidence. Kilde: Tornatzky & Fleischer (1990)."
        },
        {
            "id": "toe_organization_1",
            "lens": "TOE",
            "category": "case",
            "difficulty": "7",
            "prompt": "Teamet tøver med at aktivere auto-approval fordi de ikke stoler på AI'en endnu. Hvilken TOE-dimension?",
            "options": [
                "Organization: tillid til AI, ændringsvillighed, kultur",
                "Technology: systemets præcision",
                "Environment: kundekrav og regulering"
            ],
            "correct_index": 0,
            "explanation": "TOE Organization-dimensionen: Organisatoriske faktorer som tillid, kompetencer, ledelsesopbakning, kultur og ressourcer påvirker adoption. Kilde: Tornatzky & Fleischer (1990)."
        },
        {
            "id": "toe_environment_1",
            "lens": "TOE",
            "category": "case",
            "difficulty": "7",
            "prompt": "Konkurrenter kan levere kandidater inden for 2 timer, hvilket presser SS til at automatisere hurtigere. Hvilken TOE-dimension?",
            "options": [
                "Environment: markedspres, konkurrence, hastighed som parameter",
                "Organization: interne ressourcer",
                "Technology: AI-performance"
            ],
            "correct_index": 0,
            "explanation": "TOE Environment-dimensionen: Eksterne faktorer som markedspres, konkurrence, regulering (GDPR, EU AI Act), og kundekrav. Kilde: Tornatzky & Fleischer (1990)."
        },
        {
            "id": "dss_human_in_loop_1",
            "lens": "DSS",
            "category": "case",
            "difficulty": "7",
            "prompt": "SoluTalent genererer match-forslag med scores, og admin godkender/afviser med rejection_reason. Hvad kaldes dette designprincip?",
            "options": [
                "Human-in-the-loop: AI foreslår, mennesket beslutter",
                "Full automation: ingen menneskelig involvering",
                "Manual processing: ingen AI-assistance"
            ],
            "correct_index": 0,
            "explanation": "Human-in-the-loop: AI genererer forslag (match_requests med scores), mennesket godkender/afviser (match review), feedback påvirker systemet (match_analytics). Kilde: Turban et al. (2014)."
        },
        {
            "id": "dss_graense_1",
            "lens": "DSS",
            "category": "case",
            "difficulty": "12",
            "prompt": "Hvad er det centrale spørgsmål for USP 3 (grænsen for automatisering)?",
            "options": [
                "Hvornår giver human-in-the-loop mening, og hvornår er det unødvendigt spild?",
                "Hvordan bygger man en bedre AI?",
                "Hvordan måler man ROI af software?"
            ],
            "correct_index": 0,
            "explanation": "DSS-perspektivet på automatisering: Spørgsmålet er ikke 'kan vi automatisere?' men 'hvornår er menneskelig vurdering værdiskabende vs. spildtid?'"
        },
        {
            "id": "davenport_asis_1",
            "lens": "Davenport",
            "category": "case",
            "difficulty": "7",
            "prompt": "I kortlægger den nuværende proces med SoluTalents automatisering + manuelle trin. Hvad kaldes dette?",
            "options": [
                "As-is analyse: forståelse af nuværende proces",
                "To-be design: fremtidig ønsket proces",
                "Gap-analyse: afstand mellem as-is og to-be"
            ],
            "correct_index": 0,
            "explanation": "Davenport As-is: Forstå den nuværende proces. I jeres projekt: processen MED SoluTalents nuværende automatisering + manuelle trin. Kilde: Davenport (1993)."
        },
        {
            "id": "davenport_tobe_1",
            "lens": "Davenport",
            "category": "case",
            "difficulty": "7",
            "prompt": "I foreslår at aktivere auto-approval for matches med confidence > 0.9. Hvad er dette i procesoptimeringstermer?",
            "options": [
                "To-be design: forbedret proces med yderligere automatisering",
                "As-is kortlægning: nuværende tilstand",
                "Root cause analyse: årsag til problemer"
            ],
            "correct_index": 0,
            "explanation": "Davenport To-be: Design den forbedrede proces. I har en fordel: I kan pege på konkrete auto-approval gates og KPI-tærskler der allerede er delvist implementeret. Kilde: Davenport (1993)."
        },
        {
            "id": "teori_samspil_1",
            "lens": "Helhedsbillede",
            "category": "case",
            "difficulty": "12",
            "prompt": "Lean identificerer ventetid (USP1), AI adresserer det via DSS (USP2), men organisatoriske faktorer begrænser automatiseringen (USP4). Hvilken teori strukturerer barriererne?",
            "options": [
                "TOE: strukturerer teknologiske, organisatoriske og miljømæssige barrierer",
                "Lean: kategoriserer spildtyper",
                "DSS: forklarer beslutningsstøttesystemer"
            ],
            "correct_index": 0,
            "explanation": "Teorisamspil: Lean (USP1 spild) → Davenport + DSS (USP2 AI-effekt) → DSS human-in-loop (USP3 grænse) → TOE (USP4 forudsætninger)."
        },
        {
            "id": "bias_refleksion_1",
            "lens": "Validitet",
            "category": "case",
            "difficulty": "12",
            "prompt": "I er praktikanter hos SS og har været med til at udvikle SoluTalent. Hvordan håndterer I denne potentielle bias?",
            "options": [
                "Reflekter eksplicit over bias, inkluder data der viser systemets begrænsninger",
                "Ignorer det – praktikstatus er irrelevant",
                "Fremhæv kun positive resultater"
            ],
            "correct_index": 0,
            "explanation": "Bekræftbarhed (confirmability): I har privilegeret adgang MEN bias-risiko. Enhver positiv påstand om platformen skal have kritisk modvægt. Inkluder rejection reasons, override rate og begrænsninger. Kilde: Lincoln & Guba."
        },
        {
            "id": "tematisk_analyse_1",
            "lens": "Metode",
            "category": "case",
            "difficulty": "7",
            "prompt": "I bruger Lean waste-kategorier som udgangspunkt men er åbne for nye temaer fra data. Hvad hedder denne tilgang?",
            "options": [
                "Kombineret deduktiv/induktiv kodning: foruddefinerede + emergente temaer",
                "Ren induktion: ingen forudgående kategorier",
                "Ren deduktion: kun teori-drevne kategorier"
            ],
            "correct_index": 0,
            "explanation": "Tematisk analyse: Brug Lean-waste som deduktive temaer, men vær åben for induktive/emergente temaer fra data. Det er abduktion i praksis. Kilde: Braun & Clarke (2006)."
        },
        {
            "id": "interviewguide_1",
            "lens": "Metode",
            "category": "case",
            "difficulty": "7",
            "prompt": "Jeres interviewguide har temaer koblet til USP 1-4. Hvilken spørgsmålstype bør I undgå?",
            "options": [
                "Ledende/lukkede spørgsmål som 'Synes du AI er godt?'",
                "Åbne spørgsmål som 'Beskriv processen fra...'",
                "Opfølgende spørgsmål som 'Kan du give et eksempel?'"
            ],
            "correct_index": 0,
            "explanation": "Semistrukturerede interviews: Undgå ledende spørgsmål. Brug åbne ('Beskriv...'), opfølgende ('Kan du give et eksempel?') og kontrasterende ('Hvad hvis AI'en tog fejl?')."
        },
        {
            "id": "artefaktanalyse_1",
            "lens": "Metode",
            "category": "case",
            "difficulty": "7",
            "prompt": "I analyserer SoluTalent som artefakt. Hvad fokuserer I IKKE på?",
            "options": [
                "Code review eller teknisk evaluering af kodestruktur",
                "Workflow-states og transitions",
                "Manuelle vs. automatiserede trin"
            ],
            "correct_index": 0,
            "explanation": "Artefaktanalyse: Funktionel analyse af hvad platformen gør i processen – IKKE code review eller teknisk evaluering. I kigger på workflow, states, AI-pipeline, auto-approval gates, KPI'er, rejection reasons."
        },
        {
            "id": "kontekstafhaengighed_1",
            "lens": "Casestudie",
            "category": "case",
            "difficulty": "12",
            "prompt": "Jeres fund om tillidsbarrierer gælder for SS i 2026. Kan de overføres til andre kontekster?",
            "options": [
                "De teoretiske indsigter kan overføres analytisk, men konteksten bestemmer de specifikke mønstre",
                "Nej, casestudier kan aldrig overføres",
                "Ja, fund gælder universelt for alle virksomheder"
            ],
            "correct_index": 0,
            "explanation": "Kontekstafhængighed: Fund er gyldige for DENNE kontekst (SS, SoluTalent, dansk marked, 2026). Andre kontekster kan have andre mønstre – men teoretiske indsigter om fx tillidsbarrierer ved AI kan overføres analytisk. Kilde: Holm (2023)."
        },
        {
            "id": "pragmatisme_forkert_brug_1",
            "lens": "Pragmatisme",
            "category": "case",
            "difficulty": "12",
            "prompt": "En studerende skriver: 'Vi har valgt pragmatisme fordi det er det bredeste paradigme.' Hvad er problemet?",
            "options": [
                "Det er ikke en begrundelse – man skal forklare hvorfor det passer til den specifikke PF",
                "Det er en perfekt begrundelse",
                "Pragmatisme er faktisk det smalleste paradigme"
            ],
            "correct_index": 0,
            "explanation": "Typisk fejl: Pragmatisme er ikke 'det bredeste' eller 'vi gør lidt af hvert'. Det er en bevidst position der siger at spørgsmålet driver metoden. Forklar HVORFOR det passer til JERES PF."
        },

        // ==========================================
        // GENERELLE AKADEMISKE SPØRGSMÅL
        // ==========================================

        // VIDENSKABSTEORI - Generelle
        {
            "id": "positivisme_1",
            "lens": "Positivisme",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "En forsker hævder at man kun kan opnå sand viden gennem systematisk måling og statistisk analyse. Hvilken position repræsenterer dette?",
            "options": [
                "Positivisme: viden er objektiv, generaliserbar og lovmæssig",
                "Hermeneutik: viden er fortolkningsbaseret",
                "Pragmatisme: viden vurderes på anvendelighed"
            ],
            "correct_index": 0,
            "explanation": "Positivisme: Der eksisterer én objektiv virkelighed der kan måles. Viden opnås gennem kvantitative metoder, eksperimenter og statistik. Typisk slutningsform er deduktiv (teori → hypotese → test)."
        },
        {
            "id": "hermeneutik_1",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "En forsker ønsker at forstå hvordan projektledere oplever og fortolker deres arbejde med AI-værktøjer. Hvilken position passer bedst?",
            "options": [
                "Fortolkende/hermeneutisk: viden er kontekstuel og fortolkningsbaseret",
                "Positivisme: viden kræver eksperimentel kontrol",
                "Kritisk realisme: vi skal finde skjulte mekanismer"
            ],
            "correct_index": 0,
            "explanation": "Hermeneutik: Virkeligheden er socialt konstrueret. Viden er kontekstuel og fortolkningsbaseret. Metode er typisk kvalitativ (interviews, observation). Slutningsform er induktiv (data → mønstre → teori)."
        },
        {
            "id": "kritisk_realisme_1",
            "lens": "Kritisk realisme",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "En forsker vil forstå de underliggende strukturer der forklarer hvorfor AI-adoption ofte møder modstand. Hvilken position passer?",
            "options": [
                "Kritisk realisme: virkeligheden har lag, og vi søger dybereliggende mekanismer",
                "Positivisme: kun det målbare er relevant",
                "Pragmatisme: det der virker er sandt"
            ],
            "correct_index": 0,
            "explanation": "Kritisk realisme: Virkelighed i lag (det faktiske, det aktualiserede, det empiriske). Viden er fejlbar men vi kan nærme os dybereliggende strukturer via retroduktion."
        },
        {
            "id": "induktion_1",
            "lens": "Slutningsformer",
            "category": "metode",
            "difficulty": "7",
            "prompt": "I koder interviews og finder at 'tillid' nævnes af alle informanter. Hvad er slutningsformen?",
            "options": [
                "Induktion: fra gentagne observationer til et mønster/tema",
                "Deduktion: fra teori til test",
                "Retroduktion: fra effekt til underliggende årsag"
            ],
            "correct_index": 0,
            "explanation": "Induktion går fra empiri til teori. Man observerer mønstre i data og generaliserer til et tema eller teori."
        },
        {
            "id": "informantvalidering_1",
            "lens": "Validitet",
            "category": "metode",
            "difficulty": "7",
            "prompt": "I sender jeres analyseudkast til informanterne for at tjekke om I har forstået dem korrekt. Hvad hedder denne teknik?",
            "options": [
                "Informantvalidering (member checking): deltagerne bekræfter tolkningen",
                "Peer review: andre forskere vurderer",
                "Bias-analyse: I undersøger jeres egne fordomme"
            ],
            "correct_index": 0,
            "explanation": "Informantvalidering er et krav i kvalitativ forskning: deltagerne skal have mulighed for at bekræfte at forskernes tolkning repræsenterer dem korrekt. Kilde: Lincoln & Guba."
        },
        {
            "id": "pragmatisme_hvornaar_ikke_1",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvornår er pragmatisme det FORKERTE valg?",
            "options": [
                "Når man vil teste én specifik hypotese (→ brug positivisme)",
                "Når man har en 'hvordan påvirker...'-problemformulering",
                "Når man kombinerer interviews og data"
            ],
            "correct_index": 0,
            "explanation": "Pragmatisme er forkert hvis: man vil teste specifik hypotese (→ positivisme), forstå dybe meningsstrukturer (→ hermeneutik), afdække magtstrukturer (→ kritisk realisme), eller PF er 'hvorfor oplever X...' (→ fortolkende)."
        },
        {
            "id": "ontologi_definition",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad handler ontologi om i forskningssammenhæng?",
            "options": [
                "Antagelser om virkelighedens natur – hvad eksisterer og kan undersøges",
                "Hvordan man indsamler data korrekt",
                "Statistiske metoder til dataanalyse"
            ],
            "correct_index": 0,
            "explanation": "Ontologi handler om 'hvad er virkelighed?' – fx om der findes én objektiv virkelighed (realisme) eller om virkeligheden er socialt konstrueret (konstruktivisme). Kilde: Saunders et al. (2023)."
        },
        {
            "id": "epistemologi_definition",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad handler epistemologi om?",
            "options": [
                "Hvad der tæller som gyldig viden, og hvordan vi kan opnå den",
                "Hvordan man skriver akademiske tekster",
                "Regler for dataindsamling"
            ],
            "correct_index": 0,
            "explanation": "Epistemologi handler om 'hvad er viden?' og 'hvordan kan vi vide noget?' – fx om viden skal være objektiv og målbar (positivisme) eller kontekstuel og fortolket (hermeneutik). Kilde: Saunders et al. (2023)."
        },
        {
            "id": "paradigme_definition",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er et videnskabeligt paradigme ifølge Kuhn?",
            "options": [
                "Et fælles sæt antagelser, teorier, metoder og standarder som et forskningsfællesskab deler",
                "En enkelt teori der er bevist",
                "En statistisk metode"
            ],
            "correct_index": 0,
            "explanation": "Kuhn definerer paradigme som det overordnede 'verdensbillede' der styrer hvad der anses som legitime problemer, acceptable metoder og gyldige løsninger inden for et felt. Kilde: Kuhn (1962) The Structure of Scientific Revolutions."
        },
        {
            "id": "paradigmeskift",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er et paradigmeskift?",
            "options": [
                "En fundamental ændring i de grundlæggende antagelser og metoder inden for et forskningsfelt",
                "Når man skifter fra kvalitativ til kvantitativ metode",
                "Når man ændrer forskningsspørgsmål"
            ],
            "correct_index": 0,
            "explanation": "Paradigmeskift sker når anomalier akkumuleres og det eksisterende paradigme ikke længere kan forklare observationer – fx skiftet fra newtonsk fysik til relativitetsteori. Det er en videnskabelig revolution. Kilde: Kuhn (1962)."
        },
        {
            "id": "falsifikation_princip",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er falsifikationsprincippet?",
            "options": [
                "En teori er kun videnskabelig hvis den i princippet kan modbevises af empiri",
                "En teori er sand hvis den er verificeret mange gange",
                "Teorier kan aldrig testes"
            ],
            "correct_index": 0,
            "explanation": "Popper argumenterede for at videnskab adskiller sig fra pseudovidenskab ved falsificerbarhed. 'Alle svaner er hvide' er falsificerbar (én sort svane modbeviser den). Kilde: Popper (1959) Logic of Scientific Discovery."
        },
        {
            "id": "verifikation_vs_falsifikation",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvorfor foretrak Popper falsifikation frem for verifikation?",
            "options": [
                "Fordi én modstridende observation kan falsificere en teori, men uendelig mange bekræftelser kan ikke bevise den",
                "Fordi verifikation er for dyrt",
                "Fordi falsifikation er hurtigere"
            ],
            "correct_index": 0,
            "explanation": "Induktionsproblemet: uanset hvor mange hvide svaner du ser, beviser det ikke at ALLE svaner er hvide. Men én sort svane falsificerer påstanden. Derfor er falsifikation logisk stærkere. Kilde: Popper (1959)."
        },
        {
            "id": "hermeneutisk_cirkel",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er den hermeneutiske cirkel?",
            "options": [
                "Forståelse af helheden kræver forståelse af delene, og omvendt – en iterativ fortolkningsproces",
                "En cirkulær fejlslutning der skal undgås",
                "En statistisk analysemodel"
            ],
            "correct_index": 0,
            "explanation": "Den hermeneutiske cirkel beskriver at vi forstår en tekst/fænomen ved at bevæge os mellem del og helhed: vi forstår sætningen ud fra ordene, men ordene ud fra sætningen. Det er ikke en fejl, men selve fortolkningens natur. Kilde: Gadamer."
        },
        {
            "id": "forforstaelse",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er forforståelse i hermeneutisk forskning?",
            "options": [
                "Forskerens eksisterende viden, antagelser og fordomme som påvirker fortolkningen",
                "At man forstår alt på forhånd",
                "At man ikke må have viden om emnet"
            ],
            "correct_index": 0,
            "explanation": "Gadamer argumenterede for at forforståelse er uundgåelig og produktiv – vi kan ikke fortolke 'neutralt'. Det vigtige er at være bevidst om sin forforståelse og lade den udfordre. Kilde: Gadamer, Truth and Method."
        },
        {
            "id": "kritisk_realisme_lag",
            "lens": "Kritisk realisme",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Kritisk realisme skelner mellem tre 'domæner' af virkelighed. Hvilke?",
            "options": [
                "Det empiriske (erfaringer), det faktiske (begivenheder), det virkelige (underliggende mekanismer)",
                "Det subjektive, det objektive, det intersubjektive",
                "Fortid, nutid, fremtid"
            ],
            "correct_index": 0,
            "explanation": "Bhaskar skelner: (1) Det empiriske = hvad vi observerer, (2) Det faktiske = begivenheder der sker, (3) Det virkelige = dybereliggende strukturer og mekanismer. Vi kan kun observere det empiriske, men søger at forklare det virkelige. Kilde: Bhaskar (1975)."
        },
        {
            "id": "retroduktion",
            "lens": "Kritisk realisme",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er retroduktion?",
            "options": [
                "At slutte fra observerede fænomener til de underliggende mekanismer der må eksistere for at forklare dem",
                "At gentage et eksperiment baglæns",
                "At reducere data til simple kategorier"
            ],
            "correct_index": 0,
            "explanation": "Retroduktion spørger: 'Hvad må være tilfældet for at dette fænomen er muligt?' Man slutter fra effekt til årsag/mekanisme. Bruges især i kritisk realisme. Kilde: Bhaskar (1975)."
        },
        {
            "id": "peirce_abduktion",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Peirce introducerede abduktion. Hvad adskiller det fra induktion?",
            "options": [
                "Abduktion genererer nye hypoteser som bedste forklaring, induktion generaliserer fra observationer",
                "Abduktion bruger kun kvantitative data",
                "Der er ingen forskel"
            ],
            "correct_index": 0,
            "explanation": "Induktion: 'Alle observerede svaner er hvide → alle svaner er hvide'. Abduktion: 'Græsset er vådt. Bedste forklaring: det har regnet.' Abduktion er kreativ hypotesegenerering. Kilde: Peirce."
        },
        {
            "id": "dewey_inquiry",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er Deweys syn på videnskabelig undersøgelse (inquiry)?",
            "options": [
                "En problemløsende proces der starter med en usikkerhed og søger at genoprette handleevne",
                "Neutral observation uden formål",
                "Kun teoriudvikling uden praksis"
            ],
            "correct_index": 0,
            "explanation": "Dewey så inquiry som en aktiv, problemdrevet proces: vi undersøger fordi noget er uafklaret og hindrer handling. Viden er et redskab til at løse problemer, ikke en afspejling af en statisk virkelighed. Kilde: Dewey, Logic: The Theory of Inquiry."
        },

        // METODE - Generelle
        {
            "id": "reliabilitet_definition",
            "lens": "Validitet",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad betyder reliabilitet i forskning?",
            "options": [
                "Konsistens – at gentagne målinger giver samme resultat under samme betingelser",
                "At resultaterne er sande",
                "At forskningen er etisk korrekt"
            ],
            "correct_index": 0,
            "explanation": "Reliabilitet handler om målingens pålidelighed: hvis du måler det samme fænomen igen, får du så samme resultat? Lav reliabilitet = tilfældig variation. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "validitet_definition",
            "lens": "Validitet",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad betyder validitet i forskning?",
            "options": [
                "At man faktisk måler det, man påstår at måle – at konklusionerne er gyldige",
                "At data er indtastet korrekt",
                "At respondenterne er ærlige"
            ],
            "correct_index": 0,
            "explanation": "Validitet handler om gyldighed: måler IQ-testen faktisk intelligens? Fanger interviewet det fænomen vi undersøger? Man kan have høj reliabilitet men lav validitet (konsistent forkert måling). Kilde: Saunders et al. (2023)."
        },
        {
            "id": "intern_validitet",
            "lens": "Validitet",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad er intern validitet?",
            "options": [
                "Om der er en kausal sammenhæng mellem variablerne – at X faktisk forårsager Y",
                "Om resultaterne kan generaliseres",
                "Om dataindsamlingen var korrekt"
            ],
            "correct_index": 0,
            "explanation": "Intern validitet handler om kausalitet: kan vi være sikre på at det er X der forårsager Y, og ikke en tredje variabel? Trusler: confounding, selection bias, historie-effekter. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "ekstern_validitet",
            "lens": "Validitet",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad er ekstern validitet?",
            "options": [
                "Om resultaterne kan generaliseres til andre kontekster, populationer eller tidspunkter",
                "Om målingen er præcis",
                "Om forskningen er publiceret"
            ],
            "correct_index": 0,
            "explanation": "Ekstern validitet = generaliserbarhed. Kan fund fra dette sample/denne kontekst overføres til andre? Ofte trade-off: høj intern validitet (kontrolleret eksperiment) → lav ekstern validitet (kunstig setting). Kilde: Saunders et al. (2023)."
        },
        {
            "id": "purposive_sampling",
            "lens": "Sampling",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad er purposive sampling (målrettet udvælgelse)?",
            "options": [
                "Bevidst at vælge informanter baseret på specifikke kriterier relevante for forskningsspørgsmålet",
                "At vælge tilfældige personer",
                "At tage alle der melder sig"
            ],
            "correct_index": 0,
            "explanation": "Purposive sampling bruges når man bevidst vælger informanter der har særlig viden eller erfaring. Ikke repræsentativt, men informationsrigt. Bruges ofte i kvalitativ forskning. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "theoretical_sampling",
            "lens": "Sampling",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad er teoretisk sampling?",
            "options": [
                "At lade den fremvoksende teori styre hvem/hvad der samples næste gang",
                "At sample baseret på eksisterende teori",
                "At bruge statistiske modeller"
            ],
            "correct_index": 0,
            "explanation": "Teoretisk sampling bruges i grounded theory: efterhånden som mønstre opstår, vælger man nye cases/informanter der kan belyse eller udfordre den fremvoksende teori. Iterativ proces. Kilde: Glaser & Strauss (1967)."
        },
        {
            "id": "saturation",
            "lens": "Sampling",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad betyder 'mætning' (saturation) i kvalitativ forskning?",
            "options": [
                "At nye interviews/observationer ikke længere tilføjer ny indsigt – mønstrene gentager sig",
                "At alle har svaret på spørgeskemaet",
                "At datasættet er komplet"
            ],
            "correct_index": 0,
            "explanation": "Mætning er et kriterium for at stoppe dataindsamling: når nye data kun bekræfter eksisterende mønstre og ikke tilføjer nye kategorier/temaer. Indikerer tilstrækkelig dybde. Kilde: Glaser & Strauss (1967)."
        },
        {
            "id": "grounded_theory",
            "lens": "Metodologi",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad er grounded theory?",
            "options": [
                "En induktiv metode hvor teori udvikles fra data gennem systematisk kodning og konstant sammenligning",
                "At teste eksisterende teori med data",
                "En statistisk analysemetode"
            ],
            "correct_index": 0,
            "explanation": "Grounded theory (Glaser & Strauss) udvikler teori 'grounded in data' gennem åben kodning, aksial kodning og selektiv kodning. Man starter uden forudfattet teori og lader mønstre emerge. Kilde: Glaser & Strauss (1967)."
        },
        {
            "id": "mixed_methods",
            "lens": "Metodologi",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad er mixed methods?",
            "options": [
                "At kombinere kvalitative og kvantitative metoder i samme studie for at udnytte begges styrker",
                "At bruge flere kvalitative metoder",
                "At analysere data to gange"
            ],
            "correct_index": 0,
            "explanation": "Mixed methods kombinerer fx surveys (kvant) og interviews (kval). Kan være sekventielt (kval → kvant eller omvendt) eller concurrent (samtidig). Kræver bevidst integration af fund. Kilde: Creswell & Plano Clark."
        },
        {
            "id": "operationalisering",
            "lens": "Metodologi",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad betyder operationalisering?",
            "options": [
                "At oversætte abstrakte begreber til målbare indikatorer og konkrete dataindsamlingsmetoder",
                "At starte dataindsamlingen",
                "At automatisere analysen"
            ],
            "correct_index": 0,
            "explanation": "Operationalisering: Hvordan måler man 'jobsatisfaktion'? → Definér dimensioner, vælg indikatorer (fx svaritems), specificér skalaer. Bro mellem teori og empiri. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "semistruktureret_definition",
            "lens": "Dataindsamling",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad kendetegner et semistruktureret interview?",
            "options": [
                "En fleksibel interviewguide med temaer og åbne spørgsmål, hvor rækkefølge og opfølgning kan variere",
                "Strikt foruddefinerede spørgsmål i fast rækkefølge",
                "Ingen forberedelse – helt åben samtale"
            ],
            "correct_index": 0,
            "explanation": "Semistruktureret interview balancerer struktur (sikrer dækning af temaer) med fleksibilitet (tillader uddybning og opfølgning). Mest brugt i kvalitativ forskning. Kilde: Kvale & Brinkmann."
        },
        {
            "id": "kodning_kvalitativ",
            "lens": "Analyse",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad er kodning i kvalitativ dataanalyse?",
            "options": [
                "At tildele labels/kategorier til datasegmenter for at identificere mønstre og temaer",
                "At kryptere data af sikkerhedshensyn",
                "At programmere analysesoftware"
            ],
            "correct_index": 0,
            "explanation": "Kodning er grundlæggende i kvalitativ analyse: du læser data, identificerer meningsfulde segmenter, og giver dem koder/labels. Koder grupperes til kategorier og temaer. Kilde: Braun & Clarke (2006); Miles & Huberman."
        },
        {
            "id": "in_vivo_koder",
            "lens": "Analyse",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad er in vivo koder?",
            "options": [
                "Koder der bruger informanternes egne ord og udtryk direkte",
                "Koder fra eksisterende teori",
                "Koder genereret af software"
            ],
            "correct_index": 0,
            "explanation": "In vivo koder bevarer informanternes sprog: fx hvis en informant siger 'det føles som at råbe ind i en pude', kan det blive en in vivo kode. Sikrer nærhed til data. Kilde: Strauss & Corbin."
        },
        {
            "id": "refleksivitet",
            "lens": "Kvalitetskriterier",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad er refleksivitet i forskning?",
            "options": [
                "Kritisk selvbevidsthed om hvordan forskerens position, antagelser og handlinger påvirker forskningen",
                "At reflektere lys korrekt i laboratoriet",
                "At genbruge data fra tidligere studier"
            ],
            "correct_index": 0,
            "explanation": "Refleksivitet kræver at forskeren overvejer: Hvordan påvirker min baggrund, mine antagelser og min tilstedeværelse dataindsamling og fortolkning? Centralt i kvalitativ forskning. Kilde: Alvesson & Sköldberg."
        },
        {
            "id": "thick_description",
            "lens": "Kvalitetskriterier",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad er 'thick description' (tyk beskrivelse)?",
            "options": [
                "Detaljeret, kontekstrig beskrivelse der gør det muligt for læseren at vurdere overførbarhed",
                "At skrive meget tekst",
                "At beskrive statistiske resultater"
            ],
            "correct_index": 0,
            "explanation": "Thick description (Geertz) beskriver ikke bare hvad der sker, men konteksten, betydningen og fortolkningen. Gør det muligt for læseren at vurdere om fund kan overføres til deres kontekst. Kilde: Geertz (1973); Lincoln & Guba."
        },

        // TEORI - Generelle
        {
            "id": "lean_oprindelse",
            "lens": "Lean",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvor stammer Lean-filosofien fra?",
            "options": [
                "Toyota Production System i Japan, udviklet efter 2. verdenskrig",
                "Amerikansk masseproduktion i 1920'erne",
                "Europæisk håndværkstradition"
            ],
            "correct_index": 0,
            "explanation": "Lean stammer fra Toyota Production System (TPS), udviklet af Taiichi Ohno. Fokus på at eliminere muda (spild) og skabe flow. Populariseret i Vesten af Womack & Jones. Kilde: Womack & Jones (2003)."
        },
        {
            "id": "lean_vaerdi",
            "lens": "Lean",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvordan defineres 'værdi' i Lean?",
            "options": [
                "Det kunden er villig til at betale for – alt andet er potentielt spild",
                "Virksomhedens profit",
                "Medarbejdernes tilfredshed"
            ],
            "correct_index": 0,
            "explanation": "I Lean er værdi defineret fra kundens perspektiv: skaber dette trin værdi for slutkunden? Hvis nej, er det spild (muda) der bør elimineres eller reduceres. Kilde: Womack & Jones (2003)."
        },
        {
            "id": "lean_8_waste",
            "lens": "Lean",
            "category": "teori",
            "difficulty": "7",
            "prompt": "Den 8. spildtype (tilføjet til de oprindelige 7) er ofte:",
            "options": [
                "Uudnyttet medarbejderpotentiale / talent",
                "Dårligt vejr",
                "Konkurrence"
            ],
            "correct_index": 0,
            "explanation": "De oprindelige 7 spildtyper fra Toyota er: transport, lager, bevægelse, ventetid, overproduktion, overprocessering, defekter. Den 8. (tilføjet senere) er uudnyttet talent/kreativitet. Kilde: Liker (2004)."
        },
        {
            "id": "kaizen",
            "lens": "Lean",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvad betyder Kaizen?",
            "options": [
                "Kontinuerlig forbedring – små, inkrementelle forbedringer over tid",
                "Radikal transformation",
                "Kvalitetskontrol"
            ],
            "correct_index": 0,
            "explanation": "Kaizen (改善) betyder 'forandring til det bedre'. I Lean er det filosofien om konstant at søge små forbedringer frem for store spring. Alle medarbejdere deltager. Kilde: Imai (1986)."
        },
        {
            "id": "bpr_definition",
            "lens": "Procesoptimering",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvad er Business Process Reengineering (BPR)?",
            "options": [
                "Fundamental nytænkning og radikal redesign af processer for at opnå dramatiske forbedringer",
                "Små justeringer af eksisterende processer",
                "Automatisering af manuelle opgaver"
            ],
            "correct_index": 0,
            "explanation": "BPR (Hammer & Champy) handler om at starte forfra: 'Hvis vi skulle designe denne proces fra bunden i dag, hvordan ville den se ud?' Radikal frem for inkrementel. Kilde: Hammer & Champy (1993)."
        },
        {
            "id": "bpmn_formaal",
            "lens": "Procesoptimering",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvad bruges BPMN (Business Process Model and Notation) til?",
            "options": [
                "Standardiseret grafisk notation til at modellere forretningsprocesser",
                "Programmering af software",
                "Finansiel rapportering"
            ],
            "correct_index": 0,
            "explanation": "BPMN er en standard for procesdiagrammer med definerede symboler for aktiviteter, gateways, events og flows. Gør det muligt at kommunikere processer på tværs af IT og forretning. Kilde: OMG, BPMN 2.0."
        },
        {
            "id": "technology_acceptance_model",
            "lens": "Adoption",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvad er TAM (Technology Acceptance Model)?",
            "options": [
                "En model der forklarer teknologiadoption ud fra perceived usefulness og perceived ease of use",
                "En model for hardware-specifikationer",
                "En finansiel vurderingsmodel"
            ],
            "correct_index": 0,
            "explanation": "TAM (Davis, 1989) postulerer at adoption afhænger af: (1) Perceived usefulness – tror brugeren systemet hjælper? (2) Perceived ease of use – er det nemt? Disse påvirker attitude og intention. Kilde: Davis (1989)."
        },
        {
            "id": "diffusion_of_innovations",
            "lens": "Adoption",
            "category": "teori",
            "difficulty": "7",
            "prompt": "Rogers' Diffusion of Innovations beskriver adoptionskategorier. Hvilken gruppe adopterer først?",
            "options": [
                "Innovators (2.5% af population)",
                "Early majority (34%)",
                "Laggards (16%)"
            ],
            "correct_index": 0,
            "explanation": "Rogers' adoptionskurve: Innovators (2.5%) → Early Adopters (13.5%) → Early Majority (34%) → Late Majority (34%) → Laggards (16%). Innovators er risikovillige og teknologientusiastiske. Kilde: Rogers (1962)."
        },
        {
            "id": "sociotechnical_systems",
            "lens": "IT & Organisation",
            "category": "teori",
            "difficulty": "7",
            "prompt": "Hvad er pointen i socioteknisk systemteori?",
            "options": [
                "At teknologi og sociale systemer er gensidigt afhængige og skal designes sammen",
                "At teknologi bestemmer social adfærd",
                "At sociale faktorer er irrelevante for IT"
            ],
            "correct_index": 0,
            "explanation": "Socioteknisk teori (Trist & Bamforth) påpeger at man ikke kan optimere det tekniske system isoleret – det sociale system (mennesker, roller, kultur) påvirker og påvirkes af teknologien. Joint optimization er målet. Kilde: Trist & Bamforth (1951)."
        },
        {
            "id": "actor_network_theory",
            "lens": "IT & Organisation",
            "category": "teori",
            "difficulty": "12",
            "prompt": "Hvad er Actor-Network Theory (ANT)?",
            "options": [
                "En teori der behandler mennesker og teknologi (aktanter) symmetrisk som dele af netværk",
                "En teori om sociale netværk på internettet",
                "En teori om skuespillere"
            ],
            "correct_index": 0,
            "explanation": "ANT (Latour, Callon) siger at både mennesker og ikke-mennesker (teknologi, dokumenter, etc.) er 'aktanter' der former netværk. Ingen har iboende agens – det opstår i relationerne. Kilde: Latour (2005)."
        },
        {
            "id": "digital_transformation_def",
            "lens": "Digital transformation",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvad er digital transformation?",
            "options": [
                "Fundamental ændring af forretningsmodeller, processer og kultur gennem digital teknologi",
                "At købe nye computere",
                "At digitalisere papirdokumenter"
            ],
            "correct_index": 0,
            "explanation": "Digital transformation er mere end digitalisering (konvertering til digital form). Det handler om at gentænke forretningen: nye forretningsmodeller, kundeinteraktioner og værdiskabelse muliggjort af digital teknologi. Kilde: Vial (2019)."
        },
        {
            "id": "digital_maturity",
            "lens": "Digital transformation",
            "category": "teori",
            "difficulty": "7",
            "prompt": "Hvad måler en digital modenhedsmodel?",
            "options": [
                "Organisationens evne til at udnytte digitale teknologier på tværs af dimensioner som strategi, kultur, processer",
                "Alderen på IT-udstyr",
                "Antal ansatte i IT-afdelingen"
            ],
            "correct_index": 0,
            "explanation": "Digital modenhedsmodeller (fx MIT/Capgemini) vurderer hvor langt organisationen er med digital transformation på dimensioner som ledelse, kompetencer, kultur, teknologi og data. Kilde: Kane et al. (2015)."
        },
        {
            "id": "toe_general",
            "lens": "TOE",
            "category": "teori",
            "difficulty": "02",
            "prompt": "TOE-frameworket forklarer teknologiadoption ud fra tre dimensioner. Hvilke?",
            "options": [
                "Technology, Organization, Environment",
                "Time, Output, Efficiency",
                "Training, Operations, Evaluation"
            ],
            "correct_index": 0,
            "explanation": "TOE (Tornatzky & Fleischer, 1990): Technology (teknologiens egenskaber), Organization (organisatoriske ressourcer, kompetencer, kultur), Environment (markedspres, konkurrence, regulering). Kilde: Tornatzky & Fleischer (1990)."
        },
        {
            "id": "dss_general",
            "lens": "DSS",
            "category": "teori",
            "difficulty": "02",
            "prompt": "Hvad er formålet med Decision Support Systems (DSS)?",
            "options": [
                "At understøtte – ikke erstatte – menneskelige beslutninger med data og modeller",
                "At automatisere alle beslutninger",
                "At erstatte ledelse med AI"
            ],
            "correct_index": 0,
            "explanation": "DSS (Keen & Scott Morton) er IT-systemer der hjælper mennesker med at træffe bedre beslutninger gennem data, modeller og analyseværktøjer. Mennesket forbliver i kontrol. Kilde: Turban et al. (2014)."
        },

        // AKADEMISK SKRIVNING
        {
            "id": "akademisk_argumentation",
            "lens": "Akademisk skrivning",
            "category": "metode",
            "difficulty": "7",
            "prompt": "Hvad kendetegner god akademisk argumentation?",
            "options": [
                "Påstand understøttet af belæg (evidens) med tydelig begrundelse for sammenhængen",
                "Personlige meninger uden kilder",
                "At gentage påstanden mange gange"
            ],
            "correct_index": 0,
            "explanation": "Toulmins argumentationsmodel: Claim (påstand) + Grounds (belæg/evidens) + Warrant (begrundelse for at belæg støtter påstand). Akademisk argumentation kræver eksplicit kobling mellem evidens og konklusion."
        },
        {
            "id": "primaer_sekundaer_kilde",
            "lens": "Kilder",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad er forskellen på primære og sekundære kilder?",
            "options": [
                "Primære kilder er originalværker/-data, sekundære kilder fortolker/analyserer primære",
                "Primære er vigtigst, sekundære er uvigtige",
                "Der er ingen forskel"
            ],
            "correct_index": 0,
            "explanation": "Primær kilde: Original (fx Poppers bog, din egen empiri). Sekundær kilde: Omtale af originalen (fx lærebog der forklarer Popper). Brug primære kilder når muligt, især for centrale teorier."
        },
        {
            "id": "peer_review",
            "lens": "Kilder",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad betyder peer review i akademisk kontekst?",
            "options": [
                "At andre eksperter vurderer en artikels kvalitet før publicering",
                "At studerende retter hinandens opgaver",
                "At læse artikler sammen"
            ],
            "correct_index": 0,
            "explanation": "Peer review er kvalitetssikring: før en artikel udgives i et videnskabeligt tidsskrift, vurderes den (ofte anonymt) af 2-3 eksperter i feltet. Peer-reviewede artikler har højere troværdighed."
        },
        {
            "id": "plagiat",
            "lens": "Akademisk integritet",
            "category": "metode",
            "difficulty": "02",
            "prompt": "Hvad er plagiat?",
            "options": [
                "At fremstille andres idéer, ord eller arbejde som sit eget uden korrekt kildehenvisning",
                "At citere for mange kilder",
                "At skrive om samme emne som andre"
            ],
            "correct_index": 0,
            "explanation": "Plagiat er akademisk uredelighed. Det inkluderer: copy-paste uden citation, parafrasering uden kilde, selvplagiat (genbruge eget materiale uden angivelse). Konsekvens kan være afvisning af opgave."
        },

        // ==========================================
        // VIDENSKABSTEORI - EKSTRA EKSAMENSSPØRGSMÅL
        // ==========================================

        // POPPER - Flere spørgsmål
        {
            "id": "popper_demarcation",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Popper ville løse 'demarkationsproblemet'. Hvad handler det om?",
            "options": [
                "At skelne videnskab fra pseudovidenskab via falsificerbarhed",
                "At adskille naturvidenskab fra samfundsvidenskab metodisk",
                "At definere grænsen mellem teori og empiri i forskning"
            ],
            "correct_index": 0,
            "explanation": "Demarkationsproblemet: Hvad adskiller videnskab fra fx astrologi eller marxisme? Poppers svar: Falsificerbarhed. En teori er kun videnskabelig hvis den i princippet kan modbevises. Kilde: Popper (1959)."
        },
        {
            "id": "popper_induktionsproblem",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Popper kritiserede induktion. Hvad er 'induktionsproblemet'?",
            "options": [
                "At induktive slutninger ofte er statistisk upålidelige i små samples",
                "At generaliseringer fra observationer kræver repræsentative stikprøver",
                "At man ikke logisk kan slutte fra endelige observationer til universel lov"
            ],
            "correct_index": 2,
            "explanation": "Humes induktionsproblem: Uanset hvor mange hvide svaner du ser, kan du ikke logisk bevise at alle svaner er hvide. Den næste kan være sort. Popper accepterede dette og foreslog falsifikation i stedet. Kilde: Popper (1959)."
        },
        {
            "id": "popper_conjectures",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad mener Popper med 'conjectures and refutations'?",
            "options": [
                "At videnskab udvikler sig gennem gradvis akkumulering af verificerede teorier",
                "Fremsæt dristige hypoteser og forsøg systematisk at modbevise dem",
                "At teori og empiri skal holdes adskilt i forskningsprocessen"
            ],
            "correct_index": 1,
            "explanation": "Conjectures and Refutations: Videnskab vokser ikke ved verifikation, men ved at fremsætte dristige gætterier (conjectures) og forsøge at gendrive dem (refutations). Jo mere falsificerbar en teori er, jo mere informativ er den. Kilde: Popper (1963)."
        },
        {
            "id": "popper_corroboration",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvis en teori overlever forsøg på falsifikation, hvad siger Popper så?",
            "options": [
                "Teorien er verificeret og kan anses for sand indtil videre",
                "Teorien skal testes med andre metoder for at bekræfte den",
                "Teorien er styrket (corroborated) men kan aldrig bevises endegyldigt"
            ],
            "correct_index": 2,
            "explanation": "Corroboration: En teori kan aldrig bevises sand, kun styrkes (corroborated) midlertidigt. Jo flere hårde tests den overlever, jo mere robust er den – indtil den evt. falsificeres. Kilde: Popper (1959)."
        },

        // KUHN - Flere spørgsmål
        {
            "id": "kuhn_normal_science",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er 'normalvidenskab' ifølge Kuhn?",
            "options": [
                "Forskning der følger etablerede etiske standarder og peer review",
                "Puzzle-solving inden for et paradigme uden at udfordre grundantagelser",
                "Videnskab der producerer reproducerbare og generaliserbare resultater"
            ],
            "correct_index": 1,
            "explanation": "Normalvidenskab: Det meste forskning sker inden for et paradigme. Forskere løser 'puzzles' – fx finjusterer teorier eller laver præcisionsmålinger – uden at udfordre paradigmets kerneantager. Kilde: Kuhn (1962)."
        },
        {
            "id": "kuhn_anomaly",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er en 'anomali' i Kuhns terminologi?",
            "options": [
                "En observation som paradigmet ikke kan forklare tilfredsstillende",
                "En metodisk fejl der kræver gentagelse af eksperimentet",
                "Et uventet resultat der skyldes konfunderende variabler"
            ],
            "correct_index": 0,
            "explanation": "Anomali: Observationer som paradigmet ikke kan forklare. Enkelte anomalier ignoreres ofte, men når de akkumuleres, opstår en 'krise' der kan føre til paradigmeskift. Kilde: Kuhn (1962)."
        },
        {
            "id": "kuhn_incommensurability",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad mener Kuhn med 'inkommensurabilitet'?",
            "options": [
                "Paradigmer kan ikke sammenlignes direkte – de bruger forskellige begreber og standarder",
                "At forskellige forskningsmetoder ikke kan kombineres i samme studie",
                "At kvalitativ og kvantitativ forskning har uforenelige ontologier"
            ],
            "correct_index": 0,
            "explanation": "Inkommensurabilitet: Paradigmer er som forskellige 'verdener' – fx så newtonsk og relativistisk fysik på 'masse' forskelligt. Derfor kan man ikke neutralt sammenligne dem. Kilde: Kuhn (1962)."
        },
        {
            "id": "kuhn_vs_popper",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad er Kuhns kritik af Poppers falsifikationisme?",
            "options": [
                "Popper undervurderede betydningen af replikation i videnskaben",
                "Falsifikation kræver for strenge metodiske standarder i praksis",
                "Forskere forkaster ikke teorier ved anomalier – de beskytter dem med hjælpehypoteser"
            ],
            "correct_index": 2,
            "explanation": "Kuhn vs. Popper: Popper sagde teorier bør forkastes ved falsifikation. Kuhn påpegede at forskere i praksis beskytter deres paradigme ved at justere hjælpehypoteser. Paradigmeskift sker kun ved akkumuleret krise. Kilde: Kuhn (1962)."
        },

        // LAKATOS - Flere spørgsmål
        {
            "id": "lakatos_hard_core",
            "lens": "Lakatos",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er 'hard core' i Lakatos' forskningsprogrammer?",
            "options": [
                "De empiriske fund der udgør programmets stærkeste evidens",
                "Centrale antagelser som programmet beskytter mod falsifikation",
                "De metodiske principper der definerer god forskning i programmet"
            ],
            "correct_index": 1,
            "explanation": "Hard core: Forskningsprogrammets kerne af antagelser der aldrig opgives (fx 'planeter bevæger sig i ellipser'). Hvis data modsiger dem, justeres hjælpehypoteser i stedet. Kilde: Lakatos (1978)."
        },
        {
            "id": "lakatos_protective_belt",
            "lens": "Lakatos",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er 'the protective belt' (beskyttende bælte) i Lakatos' model?",
            "options": [
                "Peer review og replikationsstudier der validerer kerneantagelser",
                "Teoretiske afgrænsninger der definerer programmets scope",
                "Hjælpehypoteser der justeres for at beskytte kerneantagelserne"
            ],
            "correct_index": 2,
            "explanation": "Protective belt: Ring af hjælpehypoteser omkring hard core. Når anomalier opstår, justeres bæltet (fx 'der må være en uopdaget planet') i stedet for at opgive kernen. Kilde: Lakatos (1978)."
        },
        {
            "id": "lakatos_progressive_degenerating",
            "lens": "Lakatos",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Lakatos skelner mellem 'progressive' og 'degenerating' forskningsprogrammer. Hvad kendetegner et progressivt program?",
            "options": [
                "Det har bred accept i forskersamfundet og mange citationer",
                "Det forudsiger nye fænomener der efterfølgende bekræftes empirisk",
                "Det bygger systematisk videre på tidligere etableret viden"
            ],
            "correct_index": 1,
            "explanation": "Progressivt program: Forudsiger novel facts – nye fænomener der opdages og bekræftes. Degenerating program: Forklarer kun bagudrettet og tilføjer ad hoc-justeringer. Kilde: Lakatos (1978)."
        },
        {
            "id": "lakatos_vs_popper_kuhn",
            "lens": "Lakatos",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvordan forsøger Lakatos at forene Popper og Kuhn?",
            "options": [
                "Ved at argumentere for at paradigmer kan sammenlignes objektivt via falsifikation",
                "Teorier vurderes over tid som progressive eller degenererende – ikke ved enkelt-tests",
                "Ved at kombinere falsifikation med hermeneutisk fortolkning af data"
            ],
            "correct_index": 1,
            "explanation": "Lakatos' syntese: Popper har ret i at falsificerbarhed er vigtig. Kuhn har ret i at forskere beskytter teorier. Løsning: Vurdér forskningsprogrammer over tid – er de progressive eller degenerating? Kilde: Lakatos (1978)."
        },

        // FEYERABEND - Flere spørgsmål
        {
            "id": "feyerabend_anything_goes",
            "lens": "Feyerabend",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad mente Feyerabend med 'anything goes'?",
            "options": [
                "At metodepluralisme er nødvendig fordi ingen universel metode garanterer fremskridt",
                "At videnskab bør afvise alle metodiske begrænsninger for at fremme kreativitet",
                "At forskningsresultater er relative og ingen er mere sande end andre"
            ],
            "correct_index": 0,
            "explanation": "'Anything goes' er en ironisk konklusion: Hvis man analyserer videnskabshistorien, finder man at store gennembrud ofte brød metoderegler. Feyerabend kritiserer metodisk dogmatisme, ikke videnskab selv. Kilde: Feyerabend (1975)."
        },
        {
            "id": "feyerabend_counterinduction",
            "lens": "Feyerabend",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad er 'kontrainduktion' ifølge Feyerabend?",
            "options": [
                "At teste hypoteser ved at søge modeksempler systematisk",
                "At udvikle teorier der bevidst modsiger etablerede fakta og teorier",
                "At bruge deduktion i stedet for induktion i teoriudvikling"
            ],
            "correct_index": 1,
            "explanation": "Kontrainduktion: Feyerabend argumenterer for at udvikle teorier der strider mod 'kendte fakta' – fordi fakta selv er teoriladet. Galileo gjorde dette ved at forsvare Copernicus mod 'sanseevidens'. Kilde: Feyerabend (1975)."
        },
        {
            "id": "feyerabend_galileo",
            "lens": "Feyerabend",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Feyerabend bruger Galileo som eksempel. Hvad var pointen?",
            "options": [
                "At Galileo demonstrerede styrken ved systematisk eksperimentel metode",
                "At Galileo brød metoderegler og brugte retorik, men alligevel havde ret",
                "At Galileo's succes skyldtes hans brug af matematisk modellering"
            ],
            "correct_index": 1,
            "explanation": "Galileo-casen: Galileo forsvarede heliocentrisme med svage argumenter, ignorerede modbevis (parallakse), og brugte retorik. Alligevel fik han ret. Konklusion: Fremskridt kræver ikke metoderenfølgelse. Kilde: Feyerabend (1975)."
        },

        // ONTOLOGI OG EPISTEMOLOGI - Flere spørgsmål
        {
            "id": "realisme_vs_konstruktivisme",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er forskellen på ontologisk realisme og konstruktivisme?",
            "options": [
                "Realisme: virkelighed eksisterer uafhængigt af os. Konstruktivisme: den er socialt skabt",
                "Realisme fokuserer på observerbare fænomener, konstruktivisme på latente strukturer",
                "Realisme bruger kvantitative metoder, konstruktivisme bruger kvalitative"
            ],
            "correct_index": 0,
            "explanation": "Ontologisk realisme: Der findes en virkelighed 'derude' uafhængigt af observatøren. Konstruktivisme: Virkelighed skabes/formes af sociale processer, sprog, magt. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "objektivisme_vs_subjektivisme",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er forskellen på epistemologisk objektivisme og subjektivisme?",
            "options": [
                "Objektivisme kræver kvantitative data, subjektivisme accepterer kvalitative",
                "Objektivisme: viden kan være uafhængig af forskeren. Subjektivisme: altid perspektivisk",
                "Objektivisme bruger deduktion, subjektivisme bruger induktion"
            ],
            "correct_index": 1,
            "explanation": "Objektivisme: Forskeren kan opnå neutral, objektiv viden. Subjektivisme: Al viden er perspektivisk – forskerens position, værdier og forforståelse påvirker altid. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "positivisme_vs_postpositivisme",
            "lens": "Positivisme",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad adskiller postpositivisme fra klassisk positivisme?",
            "options": [
                "Postpositivisme accepterer kun kvalitative metoder som gyldige",
                "Postpositivisme anerkender at observation er teoriladet og viden fejlbar",
                "Postpositivisme afviser muligheden for kausal forklaring"
            ],
            "correct_index": 1,
            "explanation": "Postpositivisme (fx Popper): Kritisk af naiv positivisme. Anerkender at observation er teoriladet og viden er midlertidig. Men fastholder at vi kan nærme os objektivitet gennem kritisk test. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "interpretivisme_definition",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er interpretivisme (fortolkende position)?",
            "options": [
                "At forskeren skal fortolke data objektivt uden forudantagelser",
                "At sociale fænomener kræver fortolkning af subjektiv mening og kontekst",
                "At kvantitative resultater skal fortolkes i lyset af teori"
            ],
            "correct_index": 1,
            "explanation": "Interpretivisme: Mennesker og sociale fænomener kan ikke forstås som naturvidenskabelige objekter. Vi må fortolke subjektiv mening, intentioner og kontekst. Metode: kvalitativ, hermeneutisk. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "double_hermeneutics",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad menes med 'dobbelt hermeneutik' (Giddens)?",
            "options": [
                "At forskeren skal validere sin fortolkning med informanterne",
                "Forskeren fortolker aktører der selv allerede fortolker deres verden",
                "At teori og empiri gensidigt informerer hinanden i analysen"
            ],
            "correct_index": 1,
            "explanation": "Dobbelt hermeneutik: Naturvidenskab fortolker objekter. Samfundsvidenskab fortolker subjekter der selv fortolker. Forskerens fortolkning er en fortolkning af en fortolkning. Kilde: Giddens (1984)."
        },
        {
            "id": "verstehen",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad betyder 'Verstehen' i samfundsvidenskabelig kontekst?",
            "options": [
                "At forklare sociale fænomener gennem kausalmodeller og statistik",
                "At opnå intersubjektiv enighed mellem forskere om fortolkningen",
                "Indlevende forståelse af handlinger fra aktørens eget perspektiv"
            ],
            "correct_index": 2,
            "explanation": "Verstehen (Weber): For at forstå sociale handlinger må vi forstå den subjektive mening aktøren tillægger dem. Modsat naturvidenskabens 'Erklären' (kausal forklaring). Kilde: Weber; Saunders et al. (2023)."
        },
        {
            "id": "theory_laden_observation",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad menes med at observationer er 'teoriladede'?",
            "options": [
                "At teori skal informere design af dataindsamlingsinstrumenter",
                "At gode observationer kræver solid teoretisk baggrund hos forskeren",
                "At vores eksisterende teorier og begreber påvirker hvad vi overhovedet ser"
            ],
            "correct_index": 2,
            "explanation": "Teoriladet observation: Vi ser aldrig 'rå data'. Vores teorier og begreber former hvad vi lægger mærke til og hvordan vi kategoriserer det. To forskere med forskellige paradigmer kan 'se' forskellige ting. Kilde: Kuhn, Hanson."
        },
        {
            "id": "research_philosophy_choice",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvorfor skal man vælge en videnskabsteoretisk position i et forskningsprojekt?",
            "options": [
                "For at signalere akademisk kompetence over for bedømmere",
                "Den former hvad der tæller som gyldig viden og legitime metoder",
                "For at afgrænse litteratursøgningen til relevante kilder"
            ],
            "correct_index": 1,
            "explanation": "Videnskabsteoretisk position påvirker: (1) Hvad du undersøger (ontologi), (2) Hvordan du ved noget (epistemologi), (3) Hvilke metoder der er legitime, (4) Hvordan du vurderer validitet. Det er ikke bare dekoration. Kilde: Saunders et al. (2023)."
        },

        // SLUTNINGSFORMER - Flere spørgsmål
        {
            "id": "deduktion_eksempel",
            "lens": "Slutningsformer",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvilket er et eksempel på deduktiv slutning?",
            "options": [
                "Jeg har observeret mange eksempler, så jeg generaliserer til en regel",
                "Alle mennesker er dødelige. Sokrates er menneske. Ergo er Sokrates dødelig.",
                "Jeg ser et overraskende mønster og foreslår en forklaring"
            ],
            "correct_index": 1,
            "explanation": "Deduktion: Konklusion følger med logisk nødvendighed fra præmisserne. Hvis præmisserne er sande, MÅ konklusionen være sand. Bevæger sig fra generelt til specifikt. Kilde: Logik/filosofi."
        },
        {
            "id": "induktion_eksempel",
            "lens": "Slutningsformer",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvilket er et eksempel på induktiv slutning?",
            "options": [
                "Fra generelle præmisser udleder jeg en specifik konklusion logisk",
                "Jeg observerer et fænomen og foreslår den bedste forklaring på det",
                "Solen er stået op hver morgen. Altså vil den sandsynligvis gøre det i morgen."
            ],
            "correct_index": 2,
            "explanation": "Induktion: Generaliserer fra observationer til lov. Konklusionen er sandsynlig, men ikke logisk garanteret. Bevæger sig fra specifikt til generelt. Risiko: 'den sorte svane'. Kilde: Hume; Popper."
        },
        {
            "id": "abduktion_eksempel",
            "lens": "Slutningsformer",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvilket er et eksempel på abduktiv slutning?",
            "options": [
                "Fra generel regel til specifik konklusion med logisk nødvendighed",
                "Fra gentagne observationer til generalisering om mønsteret",
                "Græsset er vådt. Den bedste forklaring er at det har regnet."
            ],
            "correct_index": 2,
            "explanation": "Abduktion: 'Inference to the best explanation'. Man slutter fra effekt til sandsynlig årsag. Konklusionen er den bedste – ikke den eneste – forklaring. Bruges til hypotesegenerering. Kilde: Peirce."
        },
        {
            "id": "retroduktion_vs_abduktion",
            "lens": "Slutningsformer",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad er forskellen på abduktion og retroduktion?",
            "options": [
                "Abduktion bruges i kvalitativ forskning, retroduktion i kvantitativ",
                "Abduktion søger bedste forklaring, retroduktion søger underliggende mekanismer",
                "Abduktion er induktiv, retroduktion er deduktiv i sin logik"
            ],
            "correct_index": 1,
            "explanation": "Abduktion (Peirce): Bedste forklaring på det observerede. Retroduktion (Bhaskar/kritisk realisme): Hvilke underliggende strukturer/mekanismer MÅ eksistere for at fænomenet er muligt? Går dybere. Kilde: Bhaskar (1975)."
        },

        // VIDENSKABSTEORI I PRAKSIS
        {
            "id": "paradigme_valg_konsekvens",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "En studerende vælger positivisme. Hvad betyder det for metodevalget?",
            "options": [
                "Metodefrihed – positivisme er neutral omkring metodevalg",
                "Primært kvantitative metoder med fokus på måling og objektivitet",
                "Mixed methods for at kombinere bredde og dybde"
            ],
            "correct_index": 1,
            "explanation": "Positivisme → kvantitativ metode: surveys, eksperimenter, statistik. Fokus på operationalisering, måling, hypotesetest. Idealet er naturvidenskabelig objektivitet. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "paradigme_valg_hermeneutik",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "En studerende vælger hermeneutik/fortolkende position. Hvad betyder det for metodevalget?",
            "options": [
                "Kvalitative metoder med fokus på mening, kontekst og fortolkning",
                "Kvantitative metoder suppleret med kvalitativ validering",
                "Eksperimentelle designs for at teste fortolkninger kausalt"
            ],
            "correct_index": 0,
            "explanation": "Hermeneutik → kvalitativ metode: dybdeinterviews, observation, tekstanalyse. Fokus på at forstå subjektiv mening i kontekst. Idealet er indlevelse (Verstehen). Kilde: Saunders et al. (2023)."
        },
        {
            "id": "metodetriangulering",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er metodetriangulering?",
            "options": [
                "At anvende tre forskellige teoretiske perspektiver på samme data",
                "At bruge flere metoder på samme fænomen for at styrke validiteten",
                "At lade tre uafhængige forskere analysere de samme data"
            ],
            "correct_index": 1,
            "explanation": "Metodetriangulering: Kombinerer fx interviews, observation og dokumentanalyse. Hvis forskellige metoder peger i samme retning, styrkes tilliden til fundene. Kan også være datatriangulering, forskertriangulering, teoritriangulering. Kilde: Denzin."
        },
        {
            "id": "naturvidenskab_vs_samfundsvidenskab",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad er den klassiske debat om forskellen på naturvidenskab og samfundsvidenskab?",
            "options": [
                "Om samfundsvidenskab kan opnå samme præcision som naturvidenskab",
                "Om kvantitative eller kvalitative metoder er mest pålidelige",
                "Om mennesker kræver fortolkende metoder eller kan studeres som naturfænomener"
            ],
            "correct_index": 2,
            "explanation": "Naturalistisk position: Samfundsvidenskab bør efterligne naturvidenskab (positivisme). Anti-naturalistisk: Mennesker har mening og intentionalitet – kræver Verstehen. Debatten går tilbage til Dilthey vs. Comte. Kilde: Filosofihistorie."
        },
        {
            "id": "axiologi",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad handler 'axiologi' om i forskning?",
            "options": [
                "Forskerens værdier og hvordan de påvirker forskningsprocessen",
                "De grundlæggende antagelser der ligger til grund for teorier",
                "Kriterierne for at vurdere forskningens kvalitet og bidrag"
            ],
            "correct_index": 0,
            "explanation": "Axiologi: Læren om værdier. I forskning: Hvilke værdier driver forskningen? Kan forskning være værdifri? Positivisme siger ideelt ja; kritiske traditioner siger nej. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "wertfreiheit",
            "lens": "Grundbegreber",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad mentes med 'Wertfreiheit' (værdifrihed)?",
            "options": [
                "At forskning bør være fri for politisk indblanding og styring",
                "At forskningsresultater skal være tilgængelige for alle uden betaling",
                "At videnskabelig analyse bør holdes fri for forskerens personlige værdier"
            ],
            "correct_index": 2,
            "explanation": "Wertfreiheit (Weber): Idealet om at holde personlige værdier adskilt fra videnskabelig analyse. Kan man opnå det? Positivister siger ja (metodisk objektivitet). Kritikere siger al forskning er værdibundet. Kilde: Weber."
        },

        // EKSAMENSRETTEDE SPØRGSMÅL
        {
            "id": "eksamen_hvilken_position",
            "lens": "Eksamen",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "En censor spørger: 'Hvorfor har I valgt pragmatisme frem for positivisme?' Hvad er et godt svar?",
            "options": [
                "Pragmatisme tillader os at undgå de vanskelige ontologiske diskussioner",
                "Vores PF er handlingsorienteret og kræver både forståelse og måling af fænomenet",
                "Pragmatisme er den mest udbredte position i moderne forskning"
            ],
            "correct_index": 1,
            "explanation": "Begrund med PF: 'Hvordan påvirker...' er ikke en hypotese til test (positivisme), men et åbent spørgsmål der kræver forståelse. Empirien har dualitet (mennesker + artefakt). Pragmatisme legitimerer mixed tilgang. Kilde: Saunders et al. (2023)."
        },
        {
            "id": "eksamen_kuhn_kritik",
            "lens": "Eksamen",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "En censor spørger: 'Hvad er problemet med Kuhns paradigmebegreb?' Hvad kunne man svare?",
            "options": [
                "Kuhn undervurderede betydningen af kumulativ vidensopbygning",
                "Begrebet er vagt – Kuhn brugte det på mindst 21 forskellige måder",
                "Kuhn ignorerede eksperimentel evidens' rolle i paradigmeskift"
            ],
            "correct_index": 1,
            "explanation": "Kritik af Kuhn: Masterman identificerede 21 betydninger af 'paradigme' hos Kuhn. Desuden kritiseres inkommensurabilitet (kan man slet ikke sammenligne?) og relativisme-anklagen (er ethvert paradigmeskift fremskridt?). Kilde: Masterman; Popper."
        },
        {
            "id": "eksamen_falsifikation_kritik",
            "lens": "Eksamen",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "En censor spørger: 'Hvad er hovedkritikken af Poppers falsifikationisme?' Hvad kunne man svare?",
            "options": [
                "Falsifikation kræver perfekte måleinstrumenter som ikke eksisterer",
                "Forskere forkaster ikke teorier ved enkelt-falsifikation – de justerer hjælpehypoteser",
                "Falsifikation fungerer kun i naturvidenskab, ikke i samfundsvidenskab"
            ],
            "correct_index": 1,
            "explanation": "Duhem-Quine tesen: Man kan altid redde en teori ved at justere hjælpehypoteser. Kuhn og Lakatos påpegede at forskere i praksis ikke opgiver teorier ved første modbevis – det ville være 'naiv falsifikationisme'. Kilde: Kuhn; Lakatos."
        },
        {
            "id": "eksamen_abduktion_eksempel",
            "lens": "Eksamen",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "En censor beder om et konkret eksempel på abduktion i jeres projekt. Hvad kunne man sige?",
            "options": [
                "Vi opstillede hypoteser fra teori og testede dem systematisk med data",
                "Vi observerede ventetid → klassificerede med Lean → interviews afslørede tillid → nuancerede med TOE",
                "Vi lod temaer emerge rent induktivt fra data uden teoretisk forhåndsstruktur"
            ],
            "correct_index": 1,
            "explanation": "Abduktion i praksis: Iterativ vekslen. Start med observation (ventetid), bring teori ind (Lean), ny observation (tillid-tema), tilføj teori (TOE). Konklusionen er den bedste forklaring – ikke bevist, men velfunderet."
        },
        {
            "id": "eksamen_generalisering",
            "lens": "Eksamen",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "En censor spørger: 'Kan jeres fund generaliseres?' Hvad er det korrekte svar?",
            "options": [
                "Ja, med forbehold – vores sample er repræsentativt for branchen",
                "Analytisk til teori – ikke statistisk til population",
                "Nej, kvalitativ forskning kan principielt ikke generaliseres"
            ],
            "correct_index": 1,
            "explanation": "Analytisk generaliserbarhed: Casestudier generaliserer til teori, ikke population. 'Vores fund understøtter teorien om...' – ikke 'dette gælder for alle'. Det er en styrke, ikke en svaghed. Kilde: Holm (2023); Kuada (2012)."
        },

        // ==========================================
        // NYE TEORETIKER-SPØRGSMÅL (tilføjet for sværhedsgrader)
        // ==========================================

        // POPPER - Nye spørgsmål (mål: 10+)
        {
            "id": "popper_basic_def",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvem var Karl Popper?",
            "options": [
                "En østrigsk-britisk videnskabsfilosof kendt for falsifikationsprincippet",
                "En dansk sociolog der udviklede diskursteori",
                "En tysk fysiker der opdagede kvanteteorien"
            ],
            "correct_index": 0,
            "explanation": "Karl Popper (1902-1994) var en af det 20. århundredes mest indflydelsesrige videnskabsfilosoffer. Hans hovedværk 'The Logic of Scientific Discovery' (1959) etablerede falsifikation som kriterium for videnskabelighed. Kilde: Popper (1959)."
        },
        {
            "id": "popper_pseudoscience",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvilke teorier kritiserede Popper som pseudovidenskab?",
            "options": [
                "Marxisme og psykoanalyse – fordi de kunne forklare alt og dermed ikke falsificeres",
                "Newtons fysik – fordi den var for matematisk",
                "Darwins evolutionsteori – fordi den var for gammel"
            ],
            "correct_index": 0,
            "explanation": "Popper kritiserede marxisme og Freuds psykoanalyse fordi de altid kunne omfortolke modbevis. En teori der kan forklare ALT, forklarer reelt INTET – den er ikke falsificerbar og dermed ikke videnskabelig. Kilde: Popper (1963)."
        },
        {
            "id": "popper_critical_rationalism",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er 'kritisk rationalisme'?",
            "options": [
                "Poppers filosofiske position: al viden er foreløbig og skal kritisk afprøves",
                "En statistisk metode til at teste hypoteser",
                "En hermeneutisk tilgang til tekstanalyse"
            ],
            "correct_index": 0,
            "explanation": "Kritisk rationalisme er Poppers filosofi: Vi kan aldrig bevise teorier sande, men vi kan og bør konstant udsætte dem for kritisk test. Videnskab vokser gennem fejl og korrektion. Kilde: Popper (1959, 1963)."
        },
        {
            "id": "popper_open_society",
            "lens": "Popper",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvordan hænger Poppers videnskabsteori sammen med hans politiske filosofi i 'The Open Society'?",
            "options": [
                "Ligesom videnskab kræver falsificerbarhed, kræver demokrati åben kritik og mulighed for at afsætte ledere",
                "Videnskab og politik er helt adskilte domæner uden sammenhæng",
                "Kun videnskabsfolk bør have politisk indflydelse"
            ],
            "correct_index": 0,
            "explanation": "Popper så paralleller: Et åbent samfund tillader kritik af magthavere (ligesom teorier), mens totalitære systemer (som dogmatiske teorier) immuniserer sig mod kritik. Falsifikation i videnskab = checks and balances i politik. Kilde: Popper (1945) The Open Society."
        },

        // KUHN - Nye spørgsmål (mål: 10+)
        {
            "id": "kuhn_basic_def",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er Thomas Kuhns hovedværk?",
            "options": [
                "The Structure of Scientific Revolutions (1962)",
                "The Logic of Scientific Discovery (1959)",
                "Against Method (1975)"
            ],
            "correct_index": 0,
            "explanation": "Thomas Kuhn (1922-1996) skrev 'The Structure of Scientific Revolutions' i 1962. Bogen introducerede begreberne paradigme, normalvidenskab og videnskabelige revolutioner, og ændrede fundamentalt vores forståelse af videnskabshistorie. Kilde: Kuhn (1962)."
        },
        {
            "id": "kuhn_scientific_revolution",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er en videnskabelig revolution ifølge Kuhn?",
            "options": [
                "Et fundamentalt skift fra ét paradigme til et andet, der ændrer feltets grundantagelser",
                "En gradvis forbedring af eksisterende teorier gennem nye eksperimenter",
                "En politisk proces hvor forskere stemmer om nye teorier"
            ],
            "correct_index": 0,
            "explanation": "Videnskabelige revolutioner er paradigmeskift: ikke gradvise forbedringer, men fundamentale brud hvor hele feltet omdefineres. Eksempler: Copernicus, Darwin, Einstein. Kilde: Kuhn (1962)."
        },
        {
            "id": "kuhn_crisis",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad fører til en 'krise' i Kuhns model?",
            "options": [
                "Akkumulering af anomalier som paradigmet ikke kan forklare",
                "Mangel på forskningsfinansiering",
                "Uenighed mellem forskere om metoder"
            ],
            "correct_index": 0,
            "explanation": "Krise opstår når anomalier akkumuleres og ikke længere kan ignoreres. Det etablerede paradigme mister tillid, og feltet åbner sig for alternative forklaringer. En krise kan føre til paradigmeskift. Kilde: Kuhn (1962)."
        },
        {
            "id": "kuhn_gestalt_switch",
            "lens": "Kuhn",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Kuhn sammenlignede paradigmeskift med 'gestalt-switch'. Hvad mente han?",
            "options": [
                "At forskere bogstaveligt ser verden anderledes – ikke bare reviderer meninger, men perciperer anderledes",
                "At paradigmeskift sker hurtigt og uden modstand",
                "At ældre forskere altid skifter paradigme først"
            ],
            "correct_index": 0,
            "explanation": "Gestalt-switch: Som når man ser and-kanin-billedet 'flippe'. Paradigmeskift er ikke bare ny teori, men en ny måde at SE på: hvad der tæller som data, problemer og løsninger ændres fundamentalt. Kilde: Kuhn (1962)."
        },

        // HERMENEUTIK - Nye spørgsmål (mål: 10+)
        {
            "id": "hermeneutik_basic_def",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad betyder 'hermeneutik'?",
            "options": [
                "Læren om fortolkning og forståelse af tekster og menneskelige handlinger",
                "En statistisk metode til dataanalyse",
                "En fysisk lov om energibevarelse"
            ],
            "correct_index": 0,
            "explanation": "Hermeneutik (fra græsk 'hermēneuein' = at fortolke) er videnskaben om fortolkning. Oprindeligt tekstfortolkning (bibeleksegese), nu også forståelse af sociale handlinger og kulturelle fænomener. Centrale tænkere: Schleiermacher, Dilthey, Gadamer. Kilde: Gadamer."
        },
        {
            "id": "hermeneutik_gadamer_main",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvem er Hans-Georg Gadamer?",
            "options": [
                "En tysk filosof der udviklede filosofisk hermeneutik i 'Truth and Method' (1960)",
                "En fransk sociolog kendt for strukturalisme",
                "En amerikansk økonom der udviklede rational choice-teori"
            ],
            "correct_index": 0,
            "explanation": "Hans-Georg Gadamer (1900-2002) er den vigtigste figur i moderne hermeneutik. Hans hovedværk 'Wahrheit und Methode' (1960) argumenterer for at forståelse altid er historisk betinget og involverer en 'horisontsammensmeltning'. Kilde: Gadamer (1960)."
        },
        {
            "id": "hermeneutik_horizon_fusion",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvad er 'horisontsammensmeltning' (Horizontverschmelzung)?",
            "options": [
                "Forståelse opstår når fortolkerens horisont mødes med tekstens/den andens horisont",
                "At se klart uden forudforståelse",
                "At kombinere flere forskningsmetoder"
            ],
            "correct_index": 0,
            "explanation": "Gadamers begreb: Vi forstår aldrig fra et neutralt sted. Vores 'horisont' (forforståelse, historisk situation) mødes med tekstens/den andens horisont. Ægte forståelse er denne sammensmeltning – ikke at slette sin egen horisont. Kilde: Gadamer (1960)."
        },
        {
            "id": "hermeneutik_prejudice",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvorfor er 'fordomme' (Vorurteile) produktive ifølge Gadamer?",
            "options": [
                "De er forudsætningen for forståelse overhovedet – vi kan kun forstå noget ud fra noget",
                "De garanterer objektiv forståelse",
                "De bør elimineres for at opnå sand viden"
            ],
            "correct_index": 0,
            "explanation": "Gadamer rehabiliterer 'fordomme': De er ikke fejl der skal fjernes, men forudsætninger for forståelse. Vi kan kun stille spørgsmål og fortolke ud fra en eksisterende horisont. Det afgørende er at være åben for at revidere dem. Kilde: Gadamer (1960)."
        },
        {
            "id": "hermeneutik_dilthey",
            "lens": "Hermeneutik",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad er Diltheys skelnen mellem 'Erklären' og 'Verstehen'?",
            "options": [
                "Naturvidenskab forklarer (Erklären) kausalt, mens åndsvidenskab forstår (Verstehen) mening",
                "Erklären er teoretisk, Verstehen er praktisk viden",
                "Begge begreber handler om kausal forklaring"
            ],
            "correct_index": 0,
            "explanation": "Wilhelm Dilthey (1833-1911) grundlagde metodisk skelnen: Naturvidenskab søger kausal forklaring af objekter. Ånds-/samfundsvidenskab søger indlevende forståelse af subjekters mening og intentioner. Dette er hermeneutikkens metodiske kerne. Kilde: Dilthey; Gadamer."
        },

        // PRAGMATISME - Nye spørgsmål (mål: 10+)
        {
            "id": "pragmatisme_basic_def",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvad er pragmatismens hovedidé?",
            "options": [
                "Viden vurderes på sin praktiske anvendelighed – 'sandhed er det der virker'",
                "Kun matematisk bevis giver sand viden",
                "Al viden er relativ og subjektiv"
            ],
            "correct_index": 0,
            "explanation": "Pragmatisme vurderer teorier og idéer på deres praktiske konsekvenser. William James: 'Sandheden af en idé er ikke en iboende egenskab, men noget der sker med idéen – den bliver sand, den gøres sand af begivenheder.' Kilde: James (1907); Dewey."
        },
        {
            "id": "pragmatisme_peirce",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "02",
            "prompt": "Hvem grundlagde pragmatismen?",
            "options": [
                "Charles Sanders Peirce, med bidrag fra William James og John Dewey",
                "Karl Popper og Thomas Kuhn",
                "Hans-Georg Gadamer og Martin Heidegger"
            ],
            "correct_index": 0,
            "explanation": "Pragmatismen opstod i USA i 1870'erne. C.S. Peirce (1839-1914) formulerede de første idéer, William James (1842-1910) populariserede dem, og John Dewey (1859-1952) udviklede dem til pædagogik og demokratiteori. Kilde: Peirce; James; Dewey."
        },
        {
            "id": "pragmatisme_james",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "William James definerede pragmatisk sandhed som 'cash value'. Hvad mente han?",
            "options": [
                "En idés værdi ligger i de praktiske forskelle den gør – dens 'vekselværdi' i handling",
                "At sandhed kan købes og sælges",
                "At kun økonomiske teorier er sande"
            ],
            "correct_index": 0,
            "explanation": "James brugte 'cash value' som metafor: Hvilken praktisk forskel gør det at tro dette? Hvis to teorier har identiske praktiske konsekvenser, er forskellen mellem dem meningsløs. Sandhed måles på handlingskonsekvenser. Kilde: James (1907) Pragmatism."
        },
        {
            "id": "pragmatisme_dewey_education",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "7",
            "prompt": "Hvordan anvendte Dewey pragmatismen på uddannelse?",
            "options": [
                "'Learning by doing' – viden erhverves gennem aktiv problemløsning, ikke passiv modtagelse",
                "Kun bøger og forelæsninger giver ægte viden",
                "Uddannelse bør være apolitisk og værdifri"
            ],
            "correct_index": 0,
            "explanation": "Dewey revolutionerede pædagogik: Læring sker bedst gennem erfaring og problemløsning. Skolen skal være et miniatursamfund hvor børn lærer demokrati ved at praktisere det. Kilde: Dewey (1916) Democracy and Education."
        },
        {
            "id": "pragmatisme_rorty",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad er Richard Rortys 'neopragmatisme'?",
            "options": [
                "Afvisning af repræsentationalisme: Sprog afspejler ikke virkeligheden, men er et redskab til at klare sig",
                "En tilbagevenden til klassisk positivisme",
                "En kombination af pragmatisme og marxisme"
            ],
            "correct_index": 0,
            "explanation": "Rorty (1931-2007) radikaliserede pragmatismen: Opgiv idéen om at vores teorier 'repræsenterer' virkeligheden. Sprog og viden er redskaber vi bruger til at navigere i verden, ikke spejle af den. Sandhed er hvad vores fællesskab accepterer. Kilde: Rorty (1979)."
        },
        {
            "id": "pragmatisme_vs_positivisme",
            "lens": "Pragmatisme",
            "category": "videnskabsteori",
            "difficulty": "12",
            "prompt": "Hvad er hovedforskellen mellem pragmatisme og positivisme?",
            "options": [
                "Positivisme søger objektiv, universel sandhed; pragmatisme vurderer viden på anvendelighed i kontekst",
                "Pragmatisme bruger kun kvalitative metoder",
                "Positivisme afviser empiri, pragmatisme accepterer den"
            ],
            "correct_index": 0,
            "explanation": "Positivisme: Én sandhed, objektiv metode, universelle love. Pragmatisme: Viden er kontekstuel, vurderes på konsekvenser, metodepluralisme er ok. Pragmatisme er mere fleksibel men mindre ambitiøs i sandshedsfordringer. Kilde: Saunders et al. (2023)."
        }
    ],

    lessons: {
        videnskabsteori: {
            id: "videnskabsteori",
            title: "Videnskabsteori",
            icon: "📚",
            description: "De fire hovedpositioner og deres anvendelse i forskning",
            chapters: [
                {
                    id: "positioner",
                    title: "De fire hovedpositioner",
                    content: `## De fire hovedpositioner

### 1. Positivisme
- **Ontologi:** Én objektiv virkelighed der kan måles
- **Epistemologi:** Viden er objektiv, generaliserbar, lovmæssig
- **Metode:** Kvantitativ, eksperimenter, statistik
- **Slutningsform:** Deduktiv (teori → hypotese → test)

### 2. Fortolkende / Hermeneutik
- **Ontologi:** Virkeligheden er socialt konstrueret
- **Epistemologi:** Viden er kontekstuel og fortolkningsbaseret
- **Metode:** Kvalitativ, interviews, observation
- **Slutningsform:** Induktiv (data → mønstre → teori)

### 3. Kritisk realisme
- **Ontologi:** Virkelighed i lag: det faktiske, det aktualiserede, det empiriske
- **Epistemologi:** Viden er fejlbar men vi kan nærme os dybereliggende strukturer
- **Metode:** Mixed, retroduktion
- **Slutningsform:** Retroduktiv (hvilke mekanismer forklarer det vi ser?)

### 4. Pragmatisme
- **Ontologi:** Virkelighed er kompleks; vi fokuserer på det praktisk relevante
- **Epistemologi:** Viden vurderes på sin anvendelighed
- **Metode:** Det der bedst besvarer spørgsmålet
- **Slutningsform:** Abduktiv (vekslen teori ↔ empiri)

**Kilde:** Saunders et al. (2023)`
                },
                {
                    id: "pragmatisme",
                    title: "Pragmatisme i dybden",
                    content: `## Pragmatisme i dybden

**Hovedtanke:** Forskningsspørgsmålet driver metodevalget. Ontologiske og epistemologiske debatter er sekundære i forhold til "hvad virker for at besvare dette spørgsmål?"

**Nøgletænkere:** John Dewey, Charles Sanders Peirce, William James

### Fire dimensioner:

| Dimension | Position | Konsekvens |
|---|---|---|
| **Ontologi** | Giver typisk mixed methods | Behov for både at måle og forstå |
| **Epistemologi** | Viden vurderes på anvendelighed | Fund skal være nyttige, ikke universelle love |
| **Slutningsform** | Abduktiv vekslen | Start med empiri, bring teori ind, vend tilbage med nuancerede fund |
| **Metode** | Metodepluralisme | Legitimerer flere datakilder i samme studie |

### Hvornår vælge pragmatisme:
1. PF er handlingsorienteret ("Hvordan påvirker...") – ikke teoretisk abstrakt
2. Empirien har naturlig dualitet: menneskers oplevelser + teknisk artefakt
3. Formålet er anvendelsesorienteret
4. Man ønsker ikke at bevise en universel lov, men at skabe kontekstuel forståelse

### Typiske fejl:
- "Vi har valgt pragmatisme fordi det er det bredeste" → Forklar HVORFOR det passer til PF
- Blander pragmatisme med "vi gør lidt af hvert" → Det er en bevidst position
- Glemmer abduktionen → Vis eksplicit at man veksler mellem empiri og teori

**Kilde:** Holm (2023); Kuada (2012); Saunders et al. (2023)`
                },
                {
                    id: "slutningsformer",
                    title: "Slutningsformer",
                    content: `## Slutningsformer: Induktion, Deduktion og Abduktion

### Deduktion (Teori → Empiri)
- **Retning:** Fra teori til test
- **Brug:** Når man tester teoretiske forudsigelser
- **Eksempel:** "Teori siger X" → "Vi måler X" → "Fund bekræfter/afkræfter"

### Induktion (Empiri → Teori)
- **Retning:** Fra data til mønstre
- **Brug:** Når man koder data og finder gentagne temaer
- **Eksempel:** "Tillid nævnes af alle informanter" → "Tillid er et centralt tema"

### Abduktion (Empiri ↔ Teori)
- **Retning:** Iterativ vekslen – bedste forklaring
- **Brug:** Hovedmetode i pragmatisk forskning

### Abduktion i praksis:

\`\`\`
OBSERVATION: "Vi ser et mønster i data"
    ↓
TEORI: "Teori X kan forklare dette"
    ↓
NY OBSERVATION: "Men informant siger..."
    ↓
NUANCERET TEORI: "Forklaringen er mere kompleks"
\`\`\`

**Forskel fra induktion:** Induktion stopper ved "X nævnes ofte → X er vigtigt". Abduktion går videre og forklarer HVORFOR med teori.

**Kilde:** Peirce; Saunders et al. (2023)`
                },
                {
                    id: "hvornaar_ikke_pragmatisme",
                    title: "Hvornår IKKE pragmatisme",
                    content: `## Hvornår er pragmatisme det FORKERTE valg?

Pragmatisme passer IKKE hvis:

| Situation | Brug i stedet |
|---|---|
| Du vil teste én specifik hypotese | **Positivisme** + deduktion |
| Du vil forstå dybe meningsstrukturer | **Hermeneutik** |
| Du vil afdække skjulte magtstrukturer | **Kritisk realisme** |
| PF er "Hvorfor oplever X at..." | **Fortolkende** position |

### Pragmatisme passer når:
- PF er handlingsorienteret ("Hvordan påvirker...")
- Fokus på praktisk forståelse
- Kombinerer mennesker og teknologi
- Mixed methods giver mening

**Kilde:** Saunders et al. (2023)`
                }
            ]
        },
        metode: {
            id: "metode",
            title: "Metode",
            icon: "🔬",
            description: "Casestudie, interviews, analyse og validitet",
            chapters: [
                {
                    id: "casestudie",
                    title: "Casestudie",
                    content: `## Casestudie (Holm, 2023; Kuada, 2012; Saunders, 2023)

**Note:** Case-studie-metoden forankres i pensum. Yin (2018) bruges ofte men er ikke altid pensum.

### Holistisk vs. Indlejret

| Type | Beskrivelse | Hvornår vælges |
|---|---|---|
| **Holistisk** | Hele organisationen som enhed | Forstå org. som helhed |
| **Indlejret** | Specifikke enheder inden for org. | Forstå specifikke processer/systemer |

### Analytisk generaliserbarhed

Casestudier generaliserer **analytisk til teori**, IKKE statistisk til population:

- <span class="error">✗</span> "Dette gælder for alle virksomheder" (statistisk)
- <span class="success">✓</span> "Vores fund understøtter teoriens forudsigelse om..." (analytisk)
- <span class="success">✓</span> "Lean-kategorien manifesterer sig i vidensarbejde som..." (teoretisk udvidelse)

**Kontekstafhængighed:** Fund gælder for den specifikke kontekst. Teoretiske indsigter kan overføres analytisk.

**Kilde:** Holm (2023); Kuada (2012)`
                },
                {
                    id: "interviews",
                    title: "Semistrukturerede interviews",
                    content: `## Semistrukturerede interviews

**Udvælgelse:** Purposive sampling
**Varighed:** Typisk 30-60 min
**Dokumentation:** Lydoptagelse + transskription (med samtykke)

### Interviewguide-struktur:
1. **Introduktion** – formål, anonymitet, samtykke
2. **Baggrund** – rolle, erfaring, daglig involvering
3. **Temaer** – koblet til forskningsspørgsmål
4. **Afrunding** – noget vi ikke har spurgt om?

### Spørgsmålstyper:

| Type | Eksempel | Formål |
|---|---|---|
| **Åbne** | "Beskriv processen fra..." | Få informantens perspektiv |
| **Opfølgende** | "Kan du give et eksempel?" | Uddybe og konkretisere |
| **Kontrasterende** | "Hvordan var det før?" | Sammenligne |

### Undgå:
- <span class="error">✗</span> "Synes du X er godt?" (ledende)
- <span class="error">✗</span> "Er du enig i at..." (ledende)
- <span class="error">✗</span> Ja/nej-spørgsmål (lukkede)

**Kilde:** Kvale & Brinkmann`
                },
                {
                    id: "tematisk_analyse",
                    title: "Tematisk analyse",
                    content: `## Tematisk analyse (Braun & Clarke, 2006)

### 6 faser:

1. **Bliv fortrolig med data** – læs transskriptioner gentagne gange
2. **Generér initielle koder** – fx "ventetid", "tillid", "kompetencer"
3. **Søg efter temaer** – gruppér koder under kategorier
4. **Gennemgå temaer** – tjek mod data: holder de?
5. **Definér og navngiv temaer**
6. **Producér rapport**

### Deduktiv vs. Induktiv kodning

| Tilgang | Beskrivelse | Eksempel |
|---|---|---|
| **Deduktiv** | Foruddefinerede temaer fra teori | Lean waste-kategorier |
| **Induktiv** | Emergente temaer fra data | Nye temaer der dukker op |

Den kombinerede tilgang er **abduktion i praksis**: teori giver struktur, men data kan udvide forståelsen.

**Kilde:** Braun & Clarke (2006)`
                },
                {
                    id: "validitet",
                    title: "Validitet og troværdighed",
                    content: `## Validitet og troværdighed (Lincoln & Guba)

### Fire kriterier:

| Kriterium | Handling |
|---|---|
| **Troværdighed (credibility)** | Triangulering, informantvalidering, langvarigt engagement |
| **Overførbarhed (transferability)** | Tyk beskrivelse af kontekst |
| **Pålidelighed (dependability)** | Transparent interviewguide, kodningsstrategi |
| **Bekræftbarhed (confirmability)** | Bias-refleksion, data der viser begrænsninger |

### Triangulering:
Fund understøttes af mindst 2 empirikilder:
- Interview + dokumentanalyse
- Interview + observationsdata
- Flere informanter om samme emne

### Informantvalidering (member checking):
Deltagerne skal have mulighed for at bekræfte at man har forstået dem korrekt.

### Bias-refleksion:
Overvej hvordan forskerens position påvirker dataindsamling og tolkning.

**Kilde:** Lincoln & Guba (1985)`
                }
            ]
        },
        teori: {
            id: "teori",
            title: "Teoretisk ramme",
            icon: "🧠",
            description: "Lean, TOE, DSS og procesoptimering",
            chapters: [
                {
                    id: "lean",
                    title: "Lean Waste",
                    content: `## Lean Waste (Womack & Jones, 2003)

**Oprindelse:** Toyota Production System. Tilpasset vidensarbejde af bl.a. Staats & Upton (2011).

### De 7+1 spildtyper:

| # | Spildtype | Produktion | Vidensarbejde |
|---|---|---|---|
| 1 | **Ventetid** | Venter på maskine | Opgaver venter i kø |
| 2 | **Overprocessering** | Mere bearbejdning end nødv. | Manuel behandling der kunne automatiseres |
| 3 | **Fejl/Rework** | Defekter → reparation | Forkerte resultater der skal laves om |
| 4 | **Uudnyttet talent** | Medarbejdere bruges forkert | Eksperter på lavværdi-opgaver |
| 5 | **Transport** | Unødvendig flytning | Unødvendig videreformidling |
| 6 | **Overproduktion** | Mere end behov | Output der aldrig bruges |
| 7 | **Lager** | Ophobning | Ubehandlede items i kø |
| 8 | **Bevægelse** | Unødvendig bevægelse | Søgen efter information |

### Kerneidé:
Værdi defineres fra kundens perspektiv. Alt der ikke skaber værdi er potentielt spild der bør elimineres eller reduceres.

**Kilde:** Womack & Jones (2003)`
                },
                {
                    id: "davenport",
                    title: "Procesoptimering (Davenport)",
                    content: `## Procesoptimering: As-is / To-be (Davenport, 1993)

**Kerneidé:** Forstå nuværende proces (as-is), design forbedret proces (to-be), analysér gabet.

### Procesanalyse:

| Tilstand | Beskrivelse |
|---|---|
| **As-is** | Nuværende proces med alle trin |
| **To-be** | Forbedret proces med optimering |
| **Gap** | Hvad forhindrer bevægelsen? |

### BPR vs. kontinuerlig forbedring:

| Tilgang | Beskrivelse |
|---|---|
| **BPR** | Radikal nytænkning fra bunden |
| **Kaizen** | Små, inkrementelle forbedringer |

### BPMN:
Business Process Model and Notation – standardiseret notation til procesdiagrammer.

**Kilde:** Davenport (1993); Hammer & Champy (1993); OMG BPMN 2.0`
                },
                {
                    id: "toe",
                    title: "TOE-frameworket",
                    content: `## TOE-frameworket (Tornatzky & Fleischer, 1990)

**Formål:** Forklarer hvilke faktorer der påvirker adoption og implementering af teknologisk innovation.

### Tre dimensioner:

| Dimension | Spørgsmål | Eksempler |
|---|---|---|
| **Technology** | Er teknologien moden nok? | Præcision, pålidelighed, integration |
| **Organization** | Er organisationen klar? | Kompetencer, ledelse, kultur, ressourcer |
| **Environment** | Hvad kræver omgivelserne? | Markedspres, konkurrence, regulering |

### Anvendelse:
TOE bruges til at strukturere analyse af barrierer og forudsætninger ved teknologiadoption. Interview-fund kan sorteres i T, O og E kategorier.

**Kilde:** Tornatzky & Fleischer (1990)`
                },
                {
                    id: "dss",
                    title: "Decision Support Systems",
                    content: `## Decision Support Systems (Keen & Scott Morton, 1978; Turban et al., 2014)

**Kerneidé:** IT-systemer der **understøtter** menneskelige beslutninger, ikke erstatter dem.

### Human-in-the-loop

\`\`\`
System genererer forslag
        ↓
Mennesket vurderer og beslutter
        ↓
Feedback kan forbedre systemet
\`\`\`

### DSS-typologi:

| Type | Beskrivelse |
|---|---|
| **Data-drevet** | Analyse af store datasæt |
| **Model-drevet** | Beregningsmodeller og simulering |
| **Vidensbaseret** | Ekspertsystemer og AI |

### Central problemstilling:
Hvornår giver human-in-the-loop mening, og hvornår er det unødvendigt? Ikke "kan vi automatisere alt?" men "hvor skaber menneskelig vurdering værdi?"

**Kilde:** Turban et al. (2014)`
                },
                {
                    id: "samspil",
                    title: "Teoriernes samspil",
                    content: `## Hvordan teorierne samarbejder

\`\`\`
PROBLEM: Identificer ineffektivitet
    → LEAN WASTE klassificerer hvad der er spild
            ↓
ANALYSE: Forstå nuværende og ønsket tilstand
    → DAVENPORT strukturerer as-is vs. to-be
            ↓
LØSNING: Teknologi som beslutningsstøtte
    → DSS forklarer hvordan systemer kan hjælpe
            ↓
IMPLEMENTERING: Hvad kræves?
    → TOE strukturerer barrierer/enablers
\`\`\`

### Teori til formål:

| Formål | Teori |
|---|---|
| Klassificere spildtid | Lean |
| Processer as-is/to-be | Davenport/Dumas |
| Forudsætninger/barrierer | TOE |
| Menneske vs. system | DSS |

**VIGTIGT:** Bland ikke vilkårligt. Brug teorien der passer til spørgsmålet.`
                }
            ]
        }
    },

    categories: {
        videnskabsteori: { id: 'videnskabsteori', title: 'Videnskabsteori', icon: '📚' },
        metode: { id: 'metode', title: 'Metode', icon: '🔬' },
        teori: { id: 'teori', title: 'Teori', icon: '🧠' },
        case: { id: 'case', title: 'Case (Bachelor)', icon: '🎓' }
    }
};
