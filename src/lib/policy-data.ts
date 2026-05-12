import type {
  Policy,
  CountryInfo,
  PolicyTheme,
  CountryAttractiveness,
  NationalFramework,
  ScoringDimensionMeta,
} from "@/types/policy";

// ============================================
// 1) Country metadata (DE/FR now independent)
// shortName: concise label for compact UI (heatmap, mode 2 selector)
// ============================================

export const COUNTRIES: CountryInfo[] = [
  { code: "KR", name: "Korea", shortName: "Korea", flag: "KR" },
  { code: "US", name: "United States", shortName: "U.S.", flag: "US" },
  { code: "EU", name: "European Union", shortName: "EU", flag: "EU" },
  { code: "DE", name: "Germany", shortName: "Germany", flag: "DE" },
  { code: "FR", name: "France", shortName: "France", flag: "FR" },
  { code: "UK", name: "United Kingdom", shortName: "U.K.", flag: "UK" },
  { code: "JP", name: "Japan", shortName: "Japan", flag: "JP" },
  { code: "AU", name: "Australia", shortName: "Australia", flag: "AU" },
  { code: "CA", name: "Canada", shortName: "Canada", flag: "CA" },
  { code: "SA", name: "Saudi Arabia", shortName: "Saudi Arabia", flag: "SA" },
  { code: "CN", name: "China", shortName: "China", flag: "CN" },
];

// ============================================
// 2) Scoring dimensions (for tooltips)
// ============================================

export const SCORING_DIMENSIONS: ScoringDimensionMeta[] = [
  {
    key: "incentive",
    shortLabel: "Incent.",
    fullLabel: "Incentive intensity",
    definition: "Magnitude of per-kg or equivalent subsidy delivered by the policy mix.",
    scaleDescription: [
      "1 = No explicit per-kg incentive",
      "2 = below $1.00/kg equivalent",
      "3 = $1.00-2.00/kg",
      "4 = $2.00-3.00/kg",
      "5 = above $3.00/kg (e.g. IRA 45V Tier 1)",
    ],
  },
  {
    key: "stability",
    shortLabel: "Stable",
    fullLabel: "Policy stability",
    definition: "Legal status and resilience to political change. Hydrogen Law or Roadmap presence weighted heavily.",
    scaleDescription: [
      "1 = No formal policy",
      "2 = Executive order / guidance only",
      "3 = General legislation",
      "4 = Dedicated hydrogen law / multi-year plan / EU directive",
      "5 = 4 + cross-party consensus + 15+ year horizon",
    ],
  },
  {
    key: "scope",
    shortLabel: "Scope",
    fullLabel: "Sectoral scope",
    definition: "Number and breadth of sectors covered (industry, transport, power, export, etc.).",
    scaleDescription: [
      "1 = 1 sector",
      "2 = 2 sectors",
      "3 = 3 sectors",
      "4 = 4 sectors",
      "5 = all sectors / economy-wide",
    ],
  },
  {
    key: "access",
    shortLabel: "Access",
    fullLabel: "Market access",
    definition: "Ease of entry for foreign developers, including parity treatment and rule-based access.",
    scaleDescription: [
      "1 = Effectively closed to foreign players",
      "2 = Case-by-case negotiation",
      "3 = Restricted access with conditions",
      "4 = Equal treatment with domestic players",
      "5 = 4 + active foreign investment promotion",
    ],
  },
  {
    key: "stack",
    shortLabel: "Stack",
    fullLabel: "Stackability",
    definition: "Number of policies that can be combined for a single project (incl. national + sub-national + supranational).",
    scaleDescription: [
      "1 = Only 1 policy",
      "2 = 2 stackable policies",
      "3 = 3 stackable policies",
      "4 = 4 stackable policies with explicit synergy",
      "5 = 5+ policies stackable (e.g. US IRA 45V + ITC + DOE Hubs + State + EPA)",
    ],
  },
];

// ============================================
// 3) National frameworks (top-level law/strategy/roadmap)
// ============================================

export const NATIONAL_FRAMEWORKS: NationalFramework[] = [
  {
    country: "KR",
    name: "Hydrogen Economy Promotion and Hydrogen Safety Management Act",
    nameKo: "수소경제 육성 및 수소 안전관리에 관한 법률",
    enactedYear: 2020,
    latestUpdateYear: 2023,
    category: "law",
    summary: "The world's first comprehensive national hydrogen law. Establishes the legal foundation for hydrogen production, distribution, storage, utilization, and safety management. Underpins CHPS and Korea's hydrogen industry framework.",
    keyTargets: [
      "Cumulative hydrogen vehicle deployment: 850k by 2030",
      "Hydrogen refueling stations: 660 by 2030",
      "Clean hydrogen ratio: 30% by 2030, 50% by 2040",
    ],
    scope: "Production - Distribution - Storage - Utilization - Safety - Industry promotion",
    status: "in-force",
    officialSourceUrl: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=212286",
    notes: "First-of-its-kind national hydrogen law globally. Mandates 5-year master plans.",
  },
  {
    country: "US",
    name: "National Clean Hydrogen Strategy and Roadmap",
    enactedYear: 2023,
    category: "roadmap",
    summary: "DOE-led federal strategy coordinating IRA 45V, BIL DOE H2 Hubs, and federal R&D. Sets production targets and provides the strategic frame for the entire clean hydrogen ecosystem.",
    keyTargets: [
      "Clean hydrogen production: 10 Mt/yr by 2030, 20 Mt by 2040, 50 Mt by 2050",
      "Cost target: $1/kg by 2031 (Hydrogen Shot)",
      "Domestic value chain: prioritize US manufacturing",
    ],
    scope: "Federal coordination across DOE, EPA, DOT, Treasury for production, infrastructure, end-use",
    status: "in-force",
    officialSourceUrl: "https://www.hydrogen.energy.gov/library/roadmaps-vision/clean-hydrogen-strategy-roadmap",
    notes: "Strategy document, not legislation. Implementation depends on appropriations and Treasury guidance.",
  },
  {
    country: "EU",
    name: "EU Hydrogen Strategy",
    enactedYear: 2020,
    latestUpdateYear: 2024,
    category: "strategy",
    summary: "Cornerstone of the European Green Deal. Establishes renewable hydrogen as the priority pathway, sets electrolyzer capacity targets, and underpins RED III, EU Hydrogen Bank, and CBAM.",
    keyTargets: [
      "Electrolyzer capacity: 40 GW within EU by 2030",
      "Renewable hydrogen production: 10 Mt by 2030 (domestic)",
      "Renewable hydrogen import: 10 Mt by 2030",
    ],
    scope: "Production - Demand creation - Infrastructure - Trade - International cooperation",
    status: "in-force",
    officialSourceUrl: "https://energy.ec.europa.eu/topics/eu-hydrogen-policy_en",
    notes: "Implemented via RED III, ETS, CBAM, Hydrogen Bank. REPowerEU added import targets in 2022.",
  },
  {
    country: "DE",
    name: "Nationale Wasserstoffstrategie (National Hydrogen Strategy)",
    enactedYear: 2020,
    latestUpdateYear: 2023,
    category: "strategy",
    summary: "Germany's national hydrogen strategy, updated in 2023 to double electrolyzer targets. Operates alongside EU framework (RED III) and complements with H2Global, IPCEI, and import strategy.",
    keyTargets: [
      "Domestic electrolyzer capacity: 10 GW by 2030 (doubled from 5 GW)",
      "H2 demand: 95-130 TWh by 2030",
      "Hydrogen import strategy: 50-70% of demand",
    ],
    scope: "Production (domestic + import) - Industry decarbonization (steel, chemicals) - Mobility - Power",
    status: "in-force",
    officialSourceUrl: "https://www.bmwk.de/Redaktion/EN/Publikationen/Energie/the-national-hydrogen-strategy.html",
    notes: "Most active EU member state on hydrogen. EU RED III applies on top.",
  },
  {
    country: "FR",
    name: "Strategie nationale pour le developpement de l'hydrogene decarbone",
    enactedYear: 2020,
    latestUpdateYear: 2024,
    category: "strategy",
    summary: "France 2030 hydrogen plan with EUR 9B commitment. Notably classifies nuclear-powered electrolysis as low-carbon (distinct from EU green-only definitions in some contexts).",
    keyTargets: [
      "Electrolyzer capacity: 6.5 GW by 2030",
      "Total public investment: EUR 9B by 2030",
      "CO2 reduction: 6 Mt CO2/yr by 2030",
    ],
    scope: "Industrial decarbonization - Heavy mobility - Nuclear-powered electrolysis - Export",
    status: "in-force",
    officialSourceUrl: "https://www.ecologie.gouv.fr/strategie-nationale-developpement-lhydrogene-decarbone-en-france",
    notes: "Nuclear-allowed for low-carbon classification. EU RED III applies on top.",
  },
  {
    country: "UK",
    name: "UK Hydrogen Strategy",
    enactedYear: 2021,
    latestUpdateYear: 2023,
    category: "strategy",
    summary: "Post-Brexit independent hydrogen strategy. Establishes twin-track (green + blue) approach and underpins UK Hydrogen Business Model CfD.",
    keyTargets: [
      "Production capacity: 10 GW by 2030 (at least half electrolytic)",
      "Sectoral demand: significant in heavy industry, power, transport",
      "Low-carbon hydrogen standard: WTG CI threshold",
    ],
    scope: "Production - Distribution - End-use (industry, power, transport) - Standards",
    status: "in-force",
    officialSourceUrl: "https://www.gov.uk/government/publications/uk-hydrogen-strategy",
    notes: "Independent from EU. Twin-track (green + blue) approach distinguishes UK.",
  },
  {
    country: "JP",
    name: "Basic Hydrogen Strategy",
    nameKo: "水素基本戦略",
    enactedYear: 2017,
    latestUpdateYear: 2023,
    category: "strategy",
    summary: "World's first national hydrogen strategy (2017), revised in 2023. Focuses on hydrogen society vision with strong emphasis on imports via carriers (NH3, MCH, LH2).",
    keyTargets: [
      "Annual hydrogen supply: 3 Mt by 2030, 12 Mt by 2040, 20 Mt by 2050",
      "Hydrogen cost: JPY 30/Nm3 (about $2.7/kg) by 2030",
      "JPY 15 trillion (3 from public) over 15 years",
    ],
    scope: "Power generation - Transport - Industry - Heavy mobility - Import infrastructure",
    status: "in-force",
    officialSourceUrl: "https://www.meti.go.jp/english/policy/energy_environment/hydrogen/index.html",
    notes: "First mover globally. 2023 revision adds AZEC and supply chain frameworks.",
  },
  {
    country: "AU",
    name: "National Hydrogen Strategy",
    enactedYear: 2019,
    latestUpdateYear: 2024,
    category: "strategy",
    summary: "Originally 2019, revised in 2024 as part of Future Made in Australia. Positions Australia as a major hydrogen exporter, particularly to Korea and Japan.",
    keyTargets: [
      "Export-oriented: target leading hydrogen exporter by 2030",
      "Production cost: A$2/kg by 2030",
      "Aligned with Future Made in Australia A$22.7B industrial policy",
    ],
    scope: "Production - Export infrastructure - Domestic decarbonization (limited)",
    status: "in-force",
    officialSourceUrl: "https://www.dcceew.gov.au/energy/hydrogen/national-hydrogen-strategy",
    notes: "Bipartisan support but export focus means domestic demand limited.",
  },
  {
    country: "CA",
    name: "Hydrogen Strategy for Canada",
    enactedYear: 2020,
    category: "strategy",
    summary: "Federal strategy positioning Canada as a top-3 global hydrogen producer. Leverages both blue (natural gas + CCS in Alberta) and green hydrogen.",
    keyTargets: [
      "Hydrogen contribution to energy mix: up to 30% by 2050",
      "Production: 4 Mt H2/yr capacity by 2030",
      "Both blue and green pathways supported",
    ],
    scope: "Production (blue + green) - Domestic use + export - Provincial coordination",
    status: "in-force",
    officialSourceUrl: "https://www.nrcan.gc.ca/climate-change/canadas-green-future/the-hydrogen-strategy/23080",
    notes: "Federal strategy; provinces (Alberta, Quebec, BC) have their own hydrogen plans.",
  },
  {
    country: "SA",
    name: "Saudi Vision 2030 (hydrogen sub-strategy)",
    enactedYear: 2021,
    category: "sub-strategy",
    summary: "Not a standalone hydrogen law but a sub-component of Vision 2030. Hydrogen is positioned as a key export commodity alongside oil, leveraging NEOM mega-project.",
    keyTargets: [
      "NEOM Green Hydrogen Project: 600 t/day by 2026",
      "Aspirational target: world's largest hydrogen exporter",
      "Project-by-project rather than rule-based",
    ],
    scope: "Mega-project driven export, primarily to EU and Asia",
    status: "in-force",
    officialSourceUrl: "https://www.vision2030.gov.sa/en",
    notes: "Lacks comprehensive hydrogen legislation. Bilateral negotiation with strategic partners.",
  },
  {
    country: "CN",
    name: "Medium- and Long-Term Plan for the Development of Hydrogen Energy (2021-2035)",
    enactedYear: 2022,
    category: "roadmap",
    summary: "First national-level hydrogen plan from NDRC. Sets the strategic frame but implementation is decentralized to provinces (Shandong, Inner Mongolia, Hebei most active).",
    keyTargets: [
      "Green hydrogen production: 100-200 kt/yr by 2025",
      "Domestic FCEV deployment scale-up",
      "Provincial subsidies determine actual deployment",
    ],
    scope: "Production - Provincial implementation - Industrial supply chain",
    status: "in-force",
    officialSourceUrl: "https://www.ndrc.gov.cn/",
    notes: "No standalone hydrogen law. Implementation depends on provincial governments.",
  },
];

// ============================================
// 4) Policies (DE/FR policies added)
// ============================================

export const POLICIES: Policy[] = [
  {
    id: "kr-chps",
    country: "KR",
    category: "hydrogen",
    name: "CHPS",
    fullName: "Clean Hydrogen Portfolio Standard",
    type: "Quota+Premium",
    incentiveSize: "650 KRW/kg",
    incentiveValueUsdPerKg: 0.5,
    eligibility: "CI < 4 kgCO2e/kg H2; certified by KEA",
    sectors: ["power", "industry"],
    startYear: 2024,
    endYear: 2030,
    budget: "Annual auction allocation",
    status: "active",
    stackable: true,
    stackableNote: "Can combine with R&D grants",
    stability: "high",
    stabilityNote: "Established by Hydrogen Law; bipartisan support",
    reviewCycle: "Annual auction; 5-year policy review",
    scores: { incentive: 2, stability: 4, scope: 2, access: 4, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Mandatory quota ensures demand floor for clean hydrogen producers",
        "Premium auction format allows price discovery but limits maximum incentive size",
        "Strong policy stability backed by Hydrogen Law and cross-party support",
      ],
    },
    milestones: [
      { year: 2022, type: "announced" },
      { year: 2023, type: "effective", label: "Pilot auction" },
      { year: 2024, type: "review", label: "Full launch" },
      { year: 2030, type: "end" },
    ],
    officialSourceUrl: "https://www.motie.go.kr",
    googleNewsQuery: "Korea CHPS clean hydrogen",
    reutersQuery: "Korea hydrogen policy CHPS",
  },
  {
    id: "us-ira45v",
    country: "US",
    category: "hydrogen",
    name: "IRA 45V",
    fullName: "Inflation Reduction Act Section 45V Production Tax Credit",
    type: "PTC",
    incentiveSize: "up to $3.00/kg",
    incentiveValueUsdPerKg: 3.0,
    eligibility: "Well-to-gate CI < 4 kgCO2e/kg; 10-year claim period",
    sectors: ["all"],
    startYear: 2023,
    endYear: 2032,
    budget: "Uncapped (tax-credit based)",
    status: "active",
    stackable: true,
    stackableNote: "Stackable with PTC, ITC, DOE Hub grants",
    stability: "medium",
    stabilityNote: "Administration change creates reinterpretation risk on CI methodology",
    tierStructure: [
      { tierName: "Tier 4", incentiveValue: "$0.60/kg", condition: "CI 2.5-4.0" },
      { tierName: "Tier 3", incentiveValue: "$0.75/kg", condition: "CI 1.5-2.5" },
      { tierName: "Tier 2", incentiveValue: "$1.00/kg", condition: "CI 0.45-1.5" },
      { tierName: "Tier 1", incentiveValue: "$3.00/kg", condition: "CI < 0.45" },
    ],
    reviewCycle: "Annual Treasury guidance updates",
    scores: { incentive: 5, stability: 3, scope: 4, access: 4, stack: 5 },
    aiAnalysis: {
      highlights: [
        "Highest incentive intensity globally - Tier 1 of $3.00/kg lowers Green H2 LCOH by ~$2.40/kg",
        "Medium stability - administration change creates reinterpretation risk on well-to-gate CI methodology",
        "Strong stackability with PTC, ITC, DOE Hubs makes combined effective incentive among the highest",
      ],
    },
    milestones: [
      { year: 2022, type: "announced", label: "IRA passed" },
      { year: 2023, type: "effective" },
      { year: 2026, type: "review", label: "Final rule" },
      { year: 2032, type: "end" },
    ],
    officialSourceUrl: "https://www.irs.gov",
    googleNewsQuery: "IRA 45V hydrogen tax credit",
    reutersQuery: "IRA 45V hydrogen",
  },
  {
    id: "us-doe-hubs",
    country: "US",
    category: "hydrogen",
    name: "DOE H2 Hubs",
    fullName: "DOE Regional Clean Hydrogen Hubs Program",
    type: "Grant",
    incentiveSize: "$7B total allocation",
    eligibility: "Selected regional consortia",
    sectors: ["all"],
    startYear: 2024,
    endYear: 2030,
    budget: "$7B (BIL allocation)",
    status: "active",
    stackable: true,
    stackableNote: "Stackable with IRA 45V where applicable",
    stability: "medium",
    scores: { incentive: 4, stability: 3, scope: 4, access: 3, stack: 5 },
    aiAnalysis: {
      highlights: [
        "Targeted regional support for 7 selected hub consortia",
        "Complements IRA 45V by funding shared infrastructure",
        "Disbursement schedule subject to congressional appropriations",
      ],
    },
    milestones: [
      { year: 2023, type: "announced", label: "7 hubs selected" },
      { year: 2024, type: "effective" },
      { year: 2030, type: "end" },
    ],
    officialSourceUrl: "https://www.energy.gov/oced",
    googleNewsQuery: "DOE hydrogen hubs",
  },
  {
    id: "eu-red3",
    country: "EU",
    category: "hydrogen",
    name: "RED III",
    fullName: "Renewable Energy Directive III - Renewable Hydrogen Quota",
    type: "Quota",
    incentiveSize: "42% RFNBO target by 2030 (industry)",
    eligibility: "RFNBO certification; well-to-wheel CI methodology",
    sectors: ["industry", "transport"],
    startYear: 2024,
    endYear: 2030,
    budget: "Not applicable (quota-based)",
    status: "active",
    stackable: true,
    stability: "high",
    stabilityNote: "EU legislation; difficult to repeal",
    reviewCycle: "Every 5 years",
    scores: { incentive: 3, stability: 5, scope: 4, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Demand-side quota creates mandatory market for renewable hydrogen in industry",
        "Strictest CI methodology globally - well-to-wheel including upstream emissions",
        "Stability advantage from EU directive status; difficult to reverse",
      ],
    },
    milestones: [
      { year: 2023, type: "announced" },
      { year: 2024, type: "effective" },
      { year: 2030, type: "end" },
    ],
    officialSourceUrl: "https://energy.ec.europa.eu",
    googleNewsQuery: "EU RED III renewable hydrogen",
  },
  {
    id: "eu-h2cfd",
    country: "EU",
    category: "hydrogen",
    name: "EU Hydrogen CfD",
    fullName: "European Hydrogen Bank - Auction-as-a-Service",
    type: "CfD",
    incentiveSize: "EUR 4.00/kg (avg auction strike)",
    incentiveValueUsdPerKg: 4.3,
    eligibility: "RFNBO-certified projects; competitive auction",
    sectors: ["all"],
    startYear: 2025,
    endYear: 2035,
    budget: "EUR 800M first auction",
    status: "active",
    stackable: false,
    stackableNote: "Not stackable with national CfD schemes",
    stability: "high",
    scores: { incentive: 4, stability: 4, scope: 4, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Reverse auction format ensures cost-efficient incentive delivery",
        "First auction in 2024 set EUR 0.37-0.48/kg strike prices for selected projects",
        "Not stackable with national CfDs - choice between EU bank and national scheme",
      ],
    },
    milestones: [
      { year: 2024, type: "announced", label: "1st auction" },
      { year: 2025, type: "effective" },
      { year: 2030, type: "review" },
      { year: 2035, type: "end" },
    ],
    officialSourceUrl: "https://climate.ec.europa.eu",
    googleNewsQuery: "European Hydrogen Bank auction",
  },
  {
    id: "de-h2global",
    country: "DE",
    category: "hydrogen",
    name: "H2Global",
    fullName: "H2Global Funding Instrument for Green Hydrogen Import",
    type: "CfD",
    incentiveSize: "Double-auction mechanism (price-gap)",
    eligibility: "International suppliers selling to EU via Hintco intermediary",
    sectors: ["import"],
    startYear: 2022,
    endYear: 2032,
    budget: "EUR 900M (initial), increasing",
    status: "active",
    stackable: true,
    stackableNote: "Stackable with EU Hydrogen Bank and German national R&D",
    stability: "high",
    scores: { incentive: 4, stability: 4, scope: 2, access: 5, stack: 5 },
    aiAnalysis: {
      highlights: [
        "Double-auction (international suppliers + EU buyers) reduces price-gap risk",
        "First import-focused CfD globally; complements RED III demand quota",
        "Stackable with EU programs makes German projects globally competitive",
      ],
    },
    milestones: [
      { year: 2021, type: "announced" },
      { year: 2022, type: "effective" },
      { year: 2024, type: "review", label: "Expanded budget" },
      { year: 2032, type: "end" },
    ],
    officialSourceUrl: "https://www.h2-global.de",
    googleNewsQuery: "H2Global hydrogen import",
  },
  {
    id: "de-ipcei",
    country: "DE",
    category: "hydrogen",
    name: "IPCEI Hydrogen",
    fullName: "Important Project of Common European Interest - Hydrogen",
    type: "Grant",
    incentiveSize: "EUR 8B (federal + state)",
    eligibility: "Selected national champion projects in EU IPCEI framework",
    sectors: ["industry", "transport"],
    startYear: 2022,
    endYear: 2030,
    budget: "EUR 8B (Germany portion)",
    status: "active",
    stackable: true,
    stability: "high",
    scores: { incentive: 4, stability: 4, scope: 3, access: 3, stack: 5 },
    aiAnalysis: {
      highlights: [
        "Large-scale R&D and industrial deployment grants for German hydrogen value chain",
        "Coordinates with other EU IPCEI countries (France, Netherlands, Spain)",
        "Industrial demand focus - steel, chemicals, refining decarbonization",
      ],
    },
    milestones: [
      { year: 2021, type: "announced" },
      { year: 2022, type: "effective" },
      { year: 2030, type: "end" },
    ],
    officialSourceUrl: "https://www.bmwk.de",
    googleNewsQuery: "IPCEI hydrogen Germany",
  },
  {
    id: "fr-france2030-h2",
    country: "FR",
    category: "hydrogen",
    name: "France 2030 Hydrogen Plan",
    fullName: "France 2030 - Decarbonized Hydrogen Strategy",
    type: "Hybrid",
    incentiveSize: "EUR 9B total commitment",
    eligibility: "French projects; nuclear-powered electrolysis included",
    sectors: ["industry", "transport"],
    startYear: 2020,
    endYear: 2030,
    budget: "EUR 9B",
    status: "active",
    stackable: true,
    stackableNote: "Stackable with EU Hydrogen Bank, IPCEI",
    stability: "high",
    scores: { incentive: 3, stability: 4, scope: 3, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Nuclear-powered electrolysis allowed - differentiates from green-only frameworks",
        "EUR 9B over 10 years - significant industrial demand pull",
        "Stackable with EU programs creates strong combined incentive",
      ],
    },
    milestones: [
      { year: 2020, type: "announced" },
      { year: 2021, type: "effective" },
      { year: 2024, type: "review", label: "Plan revision" },
      { year: 2030, type: "end" },
    ],
    officialSourceUrl: "https://www.economie.gouv.fr",
    googleNewsQuery: "France 2030 hydrogen plan",
  },
  {
    id: "uk-hbm",
    country: "UK",
    category: "hydrogen",
    name: "Hydrogen Business Model",
    fullName: "UK Low Carbon Hydrogen Business Model (HBM)",
    type: "CfD",
    incentiveSize: "GBP 9.50/kg (avg strike)",
    incentiveValueUsdPerKg: 12.0,
    eligibility: "Low-carbon hydrogen standard certified",
    sectors: ["industry", "power"],
    startYear: 2023,
    endYear: 2037,
    budget: "GBP 240M (pilot rounds)",
    status: "active",
    stackable: true,
    stability: "high",
    scores: { incentive: 4, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Highest per-kg CfD strike price globally, reflecting UK premium gas markets",
        "15-year contract duration provides long-term revenue certainty",
        "Post-Brexit independent design - distinct from EU Hydrogen Bank",
      ],
    },
    milestones: [
      { year: 2022, type: "announced" },
      { year: 2023, type: "effective" },
      { year: 2037, type: "end" },
    ],
    officialSourceUrl: "https://www.gov.uk/government/publications/hydrogen-business-model",
  },
  {
    id: "jp-h2cfd",
    country: "JP",
    category: "hydrogen",
    name: "Hydrogen CfD",
    fullName: "Hydrogen Contract for Difference Subsidy",
    type: "CfD",
    incentiveSize: "Price-gap based",
    eligibility: "Long-term offtake agreements; ammonia, LH2, MCH carriers",
    sectors: ["import", "power"],
    startYear: 2024,
    endYear: 2039,
    budget: "JPY 3 trillion (15-year)",
    status: "active",
    stackable: true,
    stability: "high",
    scores: { incentive: 3, stability: 5, scope: 2, access: 3, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Largest single-policy budget allocation globally (JPY 3 trillion)",
        "Designed for long-term import contracts - favors Australia, Middle East suppliers",
        "15-year contract duration unmatched in scope",
      ],
    },
    milestones: [
      { year: 2023, type: "announced" },
      { year: 2024, type: "effective" },
      { year: 2039, type: "end" },
    ],
  },
  {
    id: "au-headstart",
    country: "AU",
    category: "hydrogen",
    name: "H2 Headstart",
    fullName: "Hydrogen Headstart Production Credit Program",
    type: "CfD",
    incentiveSize: "A$2.00/kg (max)",
    incentiveValueUsdPerKg: 1.3,
    eligibility: "Large-scale renewable hydrogen production",
    sectors: ["export", "industry"],
    startYear: 2024,
    endYear: 2034,
    budget: "A$2B",
    status: "active",
    stackable: true,
    stability: "medium",
    scores: { incentive: 3, stability: 4, scope: 2, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Production-based credit favoring large-scale export-oriented projects",
        "A$2B budget covers about 2-3 large projects - selection-driven, not entitlement",
        "Strong synergy with Future Made in Australia industrial policy",
      ],
    },
    milestones: [
      { year: 2023, type: "announced" },
      { year: 2024, type: "effective" },
      { year: 2034, type: "end" },
    ],
  },
  {
    id: "ca-itc",
    country: "CA",
    category: "hydrogen",
    name: "Clean H2 ITC",
    fullName: "Clean Hydrogen Investment Tax Credit",
    type: "ITC",
    incentiveSize: "15-40% CAPEX",
    eligibility: "CI tiers based on well-to-gate emissions",
    sectors: ["all"],
    startYear: 2024,
    endYear: 2034,
    budget: "Uncapped (tax-credit based)",
    status: "active",
    stackable: true,
    stability: "high",
    scores: { incentive: 3, stability: 4, scope: 4, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Investment-stage incentive complementing production-stage policies elsewhere",
        "4-tier structure (15/25/35/40 percent) based on CI",
        "Lower headline rate than IRA 45V but CAPEX-based delivery reduces project risk",
      ],
    },
    milestones: [
      { year: 2023, type: "announced" },
      { year: 2024, type: "effective" },
      { year: 2034, type: "end" },
    ],
  },
  {
    id: "sa-vision2030",
    country: "SA",
    category: "hydrogen",
    name: "Vision 2030 H2",
    fullName: "Saudi Vision 2030 Hydrogen Strategy",
    type: "Hybrid",
    incentiveSize: "Project-specific (grants, equity, offtake guarantees)",
    eligibility: "Strategic projects (NEOM, etc.)",
    sectors: ["export"],
    startYear: 2021,
    endYear: 2030,
    budget: "Project-by-project",
    status: "partial",
    stackable: true,
    stability: "medium",
    scores: { incentive: 2, stability: 2, scope: 1, access: 2, stack: 1 },
    aiAnalysis: {
      highlights: [
        "No explicit per-kg incentive - bilateral negotiation per project",
        "Strong state-backed support for NEOM and selected mega-projects",
        "Low policy transparency; reliance on sovereign commitment",
      ],
    },
    milestones: [
      { year: 2021, type: "announced" },
      { year: 2030, type: "end" },
    ],
  },
  {
    id: "cn-fyp14",
    country: "CN",
    category: "hydrogen",
    name: "Hydrogen Plan 2021-2035",
    fullName: "Medium- and Long-Term Plan for Hydrogen Energy 2021-2035",
    type: "Hybrid",
    incentiveSize: "Provincial subsidies (varies)",
    eligibility: "Province-specific criteria",
    sectors: ["all"],
    startYear: 2022,
    endYear: 2035,
    budget: "Provincial budgets",
    status: "partial",
    stackable: true,
    stability: "medium",
    scores: { incentive: 2, stability: 3, scope: 3, access: 1, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Decentralized to provincial governments - Shandong, Inner Mongolia, Hebei most active",
        "Subsidy structures vary widely; lack of unified national framework",
        "Industrial policy approach prioritizing domestic supply chain",
      ],
    },
    milestones: [
      { year: 2022, type: "announced" },
      { year: 2035, type: "end" },
    ],
  },
];

// ============================================
// 5) Country-level aggregated attractiveness (11 countries)
// Includes dimensionAnalysis - per-dimension narrative explaining why each
// country scored as it did (2-3 bullet sentences each).
// ============================================

export const COUNTRY_ATTRACTIVENESS: CountryAttractiveness[] = [
  {
    country: "KR",
    scores: { incentive: 2, stability: 4, scope: 3, access: 4, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Hydrogen Law (2020) provides highest legal stability - first comprehensive hydrogen legislation globally",
        "Moderate per-kg incentive size, but stable framework reduces project risk",
        "Limited stackability - primarily one-track CHPS mechanism with R&D grants",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "CHPS premium auction delivers about 650 KRW/kg (~$0.50/kg) - below $1/kg equivalent threshold",
        "Premium auction format inherently caps maximum incentive size to maintain budget discipline",
        "No demand-side per-kg subsidy comparable to PTC or CfD strike prices",
      ],
      stability: [
        "Hydrogen Law (2020) provides the strongest legal anchor among all surveyed countries",
        "Bipartisan support unusual in Korean energy policy enhances longevity",
        "5-year master plan structure mandated by law ensures policy continuity beyond election cycles",
      ],
      scope: [
        "CHPS focuses on power and industry sectors, omitting transport and broader applications",
        "Hydrogen Law itself is economy-wide but specific incentive instrument is sector-limited",
        "Transport-related incentives operate via separate FCEV subsidy schemes",
      ],
      access: [
        "Equal treatment for foreign developers in CHPS auctions without nationality restrictions",
        "Active foreign partnership promotion via H2 Cluster designations (Ulsan, etc.)",
        "However, certification process favors locally established supply chain participants in practice",
      ],
      stack: [
        "Primary stack: CHPS auction + R&D grants - limited additional layering",
        "Lacks investment-stage incentive (no ITC equivalent) to combine with production-stage CHPS",
        "Provincial top-ups exist but small relative to federal-state stacking in other jurisdictions",
      ],
    },
  },
  {
    country: "US",
    scores: { incentive: 5, stability: 3, scope: 4, access: 4, stack: 5 },
    aiAnalysis: {
      highlights: [
        "Highest combined incentive intensity globally - IRA 45V Tier 1 plus DOE H2 Hubs plus state-level support",
        "Medium stability - Strategy and Roadmap are guidance, not legislation; administration change creates risk",
        "Highest stackability with 5+ policies combinable (IRA, ITC, DOE Hubs, state, EPA)",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "IRA 45V Tier 1 delivers $3.00/kg - highest per-kg subsidy in any major economy",
        "Tier 1 incentive alone exceeds 2025 spot green H2 LCOH estimates, enabling net-negative production cost",
        "Stackable additional credits (ITC, state, DOE Hubs) push effective incentive above $4/kg in optimal cases",
      ],
      stability: [
        "Strategy and Roadmap are executive guidance documents - not legislation - creating reinterpretation risk",
        "2024-2025 Treasury guidance shifts on three-pillar test illustrate administration-driven volatility",
        "45V itself is statute (IRA passed Congress) but operational implementation depends on regulatory discretion",
      ],
      scope: [
        "IRA 45V applies economy-wide without sector restrictions, covering industry, transport, power, refining",
        "DOE Hubs explicitly fund cross-sector regional infrastructure",
        "Lacks dedicated maritime or aviation fuel mechanism - falls short of full economy-wide coverage",
      ],
      access: [
        "Domestic content provisions in IRA 45V favor US-built components but do not exclude foreign developers",
        "OFAC and CFIUS reviews can complicate certain foreign-controlled investments",
        "Korean and European developers have active project pipelines under 45V framework",
      ],
      stack: [
        "Five-plus policies combinable: IRA 45V + ITC + BIL DOE Hubs + state PTC + EPA classification benefits",
        "Stack synergy explicitly designed into IRA architecture - 45V and ITC stackable on different project phases",
        "California, Texas, New York state-level credits add second layer; effective stack reaches 5-7 policies",
      ],
    },
  },
  {
    country: "EU",
    scores: { incentive: 4, stability: 5, scope: 5, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "EU Hydrogen Strategy backed by RED III directive provides highest stability",
        "Largest combined incentive program - RED III plus Hydrogen Bank CfD plus CBAM",
        "Strictest CI methodology globally (well-to-wheel)",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "Hydrogen Bank auction strike prices (~EUR 0.37-0.48/kg in 2024) understate true incentive value",
        "Combined with implicit CBAM-driven premium and member-state CfD layers, total incentive approaches $3/kg equivalent",
        "Indirect demand creation via RED III quota effectively forces willingness-to-pay above $4/kg in industrial offtake",
      ],
      stability: [
        "RED III is a directive with binding legal force on all 27 member states until 2030",
        "EU directives extremely difficult to repeal - require qualified majority in Council plus Parliament agreement",
        "EU Hydrogen Strategy is policy framework but RED III, CBAM, Innovation Fund create durable institutional structure",
      ],
      scope: [
        "Coverage includes industry (42% RFNBO mandate), transport (RFNBO sub-targets), power (state aid frameworks), maritime (FuelEU)",
        "CBAM extends scope to imports, creating economy-wide effect including non-EU producers",
        "Comprehensive sectoral coverage exceeds any single national policy framework",
      ],
      access: [
        "Single Market rules guarantee non-discriminatory access to RFNBO-certified hydrogen across all 27 members",
        "Hydrogen Bank auctions explicitly designed for international supply (REPowerEU 10 Mt import target)",
        "Bureaucratic complexity (RFNBO certification, member-state transposition) raises de facto barriers",
      ],
      stack: [
        "Stackable: Hydrogen Bank CfD + RED III demand + national CfDs + Innovation Fund + CBAM uplift",
        "However, Hydrogen Bank not stackable with national CfDs - forces strategic choice between layers",
        "Member states (DE, FR, ES) add national stack on top of EU framework, reaching 4-5 policies",
      ],
    },
  },
  {
    country: "DE",
    scores: { incentive: 4, stability: 5, scope: 5, access: 5, stack: 5 },
    aiAnalysis: {
      highlights: [
        "National Hydrogen Strategy (2020, updated 2023) plus EU framework provides dual-layer stability",
        "Most active EU member state - H2Global, IPCEI plus EU RED III creates highest stackability globally",
        "Strong industrial demand base (steel, chemicals) plus active import strategy",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "H2Global double-auction mechanism delivers price-gap closure - effective subsidy varies but typically $2-3/kg",
        "IPCEI Hydrogen provides additional EUR 8B in grants, complementing CfD mechanism",
        "Hydrogen Core Network (EUR 19.7B) absorbs infrastructure costs that would otherwise be passed to producers",
      ],
      stability: [
        "Dual-layer protection: national strategy plus EU RED III directive creates redundant legal foundation",
        "Cross-party support unusual in German energy policy - bipartisan commitment beyond coalition cycles",
        "15-year H2Global contract duration locks in supplier and buyer commitments beyond political cycles",
      ],
      scope: [
        "Industrial decarbonization (steel via Thyssenkrupp, chemicals via BASF), transport, power, import infrastructure all covered",
        "Hydrogen Core Network provides full transport infrastructure coverage from 2027",
        "Aligned with EU RED III gives effective economy-wide coverage including aviation and maritime via FuelEU",
      ],
      access: [
        "H2Global mechanism explicitly designed for international suppliers via Hintco intermediary",
        "Active foreign investment promotion via 50-70% import strategy in National Hydrogen Strategy",
        "Highest access score among surveyed countries due to import-focused policy design",
      ],
      stack: [
        "Five-plus layers: EU Hydrogen Bank + RED III + national H2Global + IPCEI + Core Network funding",
        "Each layer designed to be complementary rather than mutually exclusive",
        "Highest stackability score globally; explicit synergy across federal, state, EU jurisdictions",
      ],
    },
  },
  {
    country: "FR",
    scores: { incentive: 3, stability: 5, scope: 4, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "France 2030 hydrogen plan plus EU RED III provides dual-layer stability",
        "Nuclear-powered electrolysis allowed - distinct from green-only frameworks",
        "EUR 9B national commitment plus EU programs stackable",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "EUR 9B over 10 years equates to about $1.00-2.00/kg average across deployment cycle",
        "Lower headline incentive than Germany H2Global or UK HBM due to lower baseline LCOH from nuclear electrolysis",
        "Indirect cost advantage from nuclear feedstock partially substitutes for explicit per-kg subsidy",
      ],
      stability: [
        "France 2030 plan plus EU RED III provides dual-layer protection similar to Germany",
        "Bipartisan support for nuclear ensures hydrogen-nuclear linkage survives political transitions",
        "Multi-year budget commitment (EUR 9B) structured to outlast presidential terms",
      ],
      scope: [
        "Industrial decarbonization (chemicals, refining) and heavy mobility (trucks, trains) primary focus",
        "Nuclear electrolysis pathway adds power-sector linkage absent in renewable-only frameworks",
        "Limited maritime and aviation coverage relative to EU framework",
      ],
      access: [
        "Equal treatment for foreign developers in France 2030 tenders",
        "EU Hydrogen Bank participation gives French projects same access as German, Spanish counterparts",
        "Localization preferences favor French champions (Air Liquide, Lhyfe, EDF) in practice",
      ],
      stack: [
        "Four-layer stack: France 2030 + EU Hydrogen Bank + IPCEI + RED III",
        "Nuclear-related state aid (EDF Hynamics) potentially compounds with hydrogen incentives",
        "Stackability constrained by EU state aid review for cumulative aid intensity",
      ],
    },
  },
  {
    country: "UK",
    scores: { incentive: 4, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "UK Hydrogen Strategy (2021) plus Hydrogen Business Model provides stable framework",
        "Highest per-kg CfD strike reflecting UK premium gas markets",
        "Independent from EU - twin-track (green + blue) approach",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "HBM strike price of GBP 9.50/kg average (~$12/kg in early rounds) is the highest per-kg subsidy globally",
        "Premium reflects UK's higher industrial gas price baseline and gap-closing nature of CfD",
        "Strike prices declining in HAR2 (~GBP 7.40/kg) as project pipeline matures",
      ],
      stability: [
        "UK Hydrogen Strategy is policy framework (not law) but underpinned by Low Carbon Hydrogen Standard regulations",
        "15-year HBM contract duration provides project-level certainty independent of policy changes",
        "Twin-track (green plus blue) approach broadens political constituency, enhances resilience",
      ],
      scope: [
        "Industry (HBM CfD) and power (separate CCUS framework) primary coverage",
        "Transport and aviation handled by separate sub-strategies - not unified",
        "Maritime and heating sectors not yet covered by dedicated hydrogen instruments",
      ],
      access: [
        "Post-Brexit independent design allows direct foreign developer participation without EU certification overhead",
        "HBM CfD eligibility based on Low Carbon Hydrogen Standard, not nationality",
        "However, UK domestic content guidance increasingly favors UK supply chain in HAR3",
      ],
      stack: [
        "Stack options: HBM + Net Zero Hydrogen Fund + state aid (within UK rules) + Track 2 CCUS",
        "Lacks EU-level stacking; no equivalent to RED III demand quota or CBAM",
        "Three-policy stack typical, less than EU member states' four-to-five layer combinations",
      ],
    },
  },
  {
    country: "JP",
    scores: { incentive: 3, stability: 5, scope: 3, access: 3, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Basic Hydrogen Strategy (2017, world first) plus 15-year CfD provides unmatched stability",
        "JPY 3 trillion budget signals strong long-term commitment",
        "Designed primarily for imports - favors offshore suppliers over domestic",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "Japanese CfD targets JPY 30/Nm3 (~$2.70/kg) by 2030 - within $1-2/kg incentive band when netted against current import cost",
        "Effective subsidy depends on imported H2/NH3 LCOH from Australia, Middle East - typically $2-3/kg net",
        "JPY 3 trillion 15-year budget gives unprecedented predictability for supplier offtake agreements",
      ],
      stability: [
        "World's first national hydrogen strategy (2017) - longest continuous policy track record",
        "Hydrogen Society Promotion Act (2024) provides legislative basis for CfD - elevates stability beyond guidance level",
        "15-year contract duration is longest among surveyed CfD mechanisms globally",
      ],
      scope: [
        "Power generation (ammonia co-firing, hydrogen turbines) and import infrastructure primary scope",
        "Heavy mobility limited to fuel cell trucks - passenger FCEV market shrinking",
        "Industrial decarbonization underweighted relative to EU and US frameworks",
      ],
      access: [
        "CfD designed for foreign suppliers (Australia, UAE, Saudi) - high theoretical access",
        "However, complex AZEC framework and bilateral negotiation requirements limit practical access for new entrants",
        "Trading house intermediation (Mitsui, Mitsubishi, Sumitomo) effectively gatekeeps supply chains",
      ],
      stack: [
        "Limited stack options: Hydrogen CfD + Green Innovation Fund + supply chain build-out grants",
        "No production-stage equivalent stackable with CfD - one mechanism dominates",
        "Lacks investment-stage incentive comparable to Canada Clean H2 ITC",
      ],
    },
  },
  {
    country: "AU",
    scores: { incentive: 3, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "National Hydrogen Strategy backed by bipartisan Future Made in Australia (A$22.7B)",
        "Production credit supports large-scale export-oriented projects",
        "Limited domestic demand - export focus may constrain stack opportunities",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "Hydrogen Headstart delivers A$2/kg (~$1.30/kg USD) - falls in $1-2/kg incentive band",
        "Future Made in Australia adds Hydrogen Production Tax Incentive of A$2/kg over 10 years from FY2027-28",
        "Combined effective incentive approaches $2.50-3/kg with state-level top-ups in some jurisdictions",
      ],
      stability: [
        "National Hydrogen Strategy (2019, updated 2024) plus Future Made in Australia legislation provides solid framework",
        "Bipartisan support unusual in Australian energy policy - both major parties endorse hydrogen export strategy",
        "Hydrogen Production Tax Incentive built into HPTI Act provides legislative basis beyond program-level commitments",
      ],
      scope: [
        "Export production primary focus - domestic industrial decarbonization limited",
        "FCEV deployment marginal; transport sector under-served relative to peers",
        "Recent expansion to include maritime and steel decarbonization via Hydrogen Headstart amendments",
      ],
      access: [
        "Open to foreign project sponsors - bilateral MOUs with Korea, Japan, Germany, EU active",
        "Foreign Investment Review Board approval required for major projects but rarely blocking",
        "Indigenous land title and environmental approvals can delay timeline but apply equally to domestic and foreign",
      ],
      stack: [
        "Three-layer stack: Hydrogen Headstart + Hydrogen Production Tax Incentive + state schemes (WA, QLD)",
        "ARENA grants and CEFC equity overlap with subsidy programs",
        "Export-focused projects can additionally access offtake country incentives (e.g. EU Hydrogen Bank)",
      ],
    },
  },
  {
    country: "CA",
    scores: { incentive: 3, stability: 4, scope: 4, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Hydrogen Strategy plus Clean H2 ITC plus provincial plans creates layered framework",
        "Investment-stage incentive (15-40 percent CAPEX) complements production-stage policies elsewhere",
        "Federal + provincial structure enables stacking across jurisdictions",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "Clean H2 ITC delivers 15-40% of CAPEX as upfront tax credit - translates to about $1.50-2/kg over project life",
        "Investment-stage delivery reduces project financing cost and risk premium relative to production-stage credits",
        "Provincial top-ups (Quebec, Alberta) add 5-15% additional incentive in selected jurisdictions",
      ],
      stability: [
        "Clean H2 ITC enacted via Bill C-59 in 2024 - statutory basis stronger than guidance documents",
        "Federal-provincial coordination structure provides redundant policy anchoring",
        "Hydrogen Strategy for Canada (2020) is framework document but ITC and provincial laws provide operational stability",
      ],
      scope: [
        "Economy-wide application (industry, transport, power) without sector restrictions",
        "Blue and green pathways both supported - twin-track approach similar to UK",
        "Sectoral coverage exceeds peer countries due to CAPEX-based application",
      ],
      access: [
        "Tax credit framework neutral to nationality - any Canadian-incorporated project entity eligible",
        "Industrial investment promotion via Invest in Canada actively targets foreign developers",
        "Provincial differences in permitting (Alberta fast-tracking vs Quebec lengthier processes) affect timeline",
      ],
      stack: [
        "Federal ITC + provincial top-ups + Strategic Innovation Fund + CleanH2 Hub designations create four-layer stack",
        "Clean Hydrogen ITC explicitly stackable with regional development incentives",
        "Limited stackability with US 45V for cross-border projects due to mutual exclusivity rules",
      ],
    },
  },
  {
    country: "SA",
    scores: { incentive: 2, stability: 2, scope: 1, access: 2, stack: 1 },
    aiAnalysis: {
      highlights: [
        "Vision 2030 hydrogen is sub-strategy, not comprehensive law - lower stability",
        "Mega-project (NEOM) driven; bilateral negotiation rather than rule-based access",
        "Limited stackability - one-off project deals rather than program-based",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "No explicit per-kg subsidy mechanism - sovereign equity, offtake guarantees vary by project",
        "Equivalent effective subsidy through low-cost equity and PIF backing estimated at $0.50-1/kg",
        "Below explicit per-kg incentives in surveyed countries; reliance on cost-side competitiveness rather than subsidy",
      ],
      stability: [
        "Vision 2030 hydrogen is sub-component of larger strategy, not standalone law",
        "Sovereign discretion creates project-level continuity but legal-framework predictability is low",
        "Lacks comprehensive hydrogen legislation comparable to Korean Hydrogen Law or Japanese Hydrogen Society Act",
      ],
      scope: [
        "Single-sector focus on hydrogen export - lacks industrial, transport, power coverage in national framework",
        "Domestic hydrogen demand effectively absent",
        "Narrowest scope among surveyed countries; lowest score reflects mono-purpose framework",
      ],
      access: [
        "Project access requires direct negotiation with PIF or sovereign-linked entities",
        "Selected international partners welcomed (Air Products, ACWA Power, POSCO) but case-by-case",
        "No rule-based access framework for foreign developers outside designated partnerships",
      ],
      stack: [
        "Single-mechanism approach - mega-project equity/offtake bundle constitutes the entire support package",
        "No domestic stackable instruments due to absence of broader policy framework",
        "Lowest stack score reflects program-by-program rather than rule-based architecture",
      ],
    },
  },
  {
    country: "CN",
    scores: { incentive: 2, stability: 3, scope: 3, access: 1, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Hydrogen Plan (2022) from NDRC sets strategic frame but no standalone law",
        "Decentralized provincial implementation reduces predictability",
        "Industrial policy approach prioritizing domestic supply chain limits foreign access",
      ],
    },
    dimensionAnalysis: {
      incentive: [
        "Provincial subsidies vary widely - Shandong (~RMB 20/kg ~ $2.80/kg) to provinces with no subsidy",
        "National-level subsidy absent - effective per-kg incentive averages below $1/kg when weighted by national output",
        "Indirect incentives via state-owned manufacturer cost reduction (40-60% cheaper electrolyzers) substitute for explicit subsidy",
      ],
      stability: [
        "Hydrogen Plan 2021-2035 sets national-level strategic frame but lacks legislative basis",
        "Provincial implementation creates execution uncertainty - Inner Mongolia mandate exceeds national targets while other provinces underperform",
        "5-Year Plan integration provides medium-term continuity but vulnerable to provincial-level policy reversals",
      ],
      scope: [
        "National plan covers production, distribution, and end-use across multiple sectors",
        "Effective sectoral coverage limited by provincial implementation - typically 2-3 sectors per province",
        "FCEV deployment via central government subsidies has been most consistent national-level instrument",
      ],
      access: [
        "Foreign developer access effectively constrained by industrial policy and domestic supply chain mandates",
        "Joint venture requirements and technology transfer expectations create de facto barriers",
        "Lowest access score globally - reflects systematic preference for domestic champions",
      ],
      stack: [
        "Stack typically combines: national FCEV subsidy + provincial production credit + state-owned enterprise priority access",
        "No formal stackability framework - provincial schemes vary in compatibility",
        "Limited stack score reflects program-by-program rather than rule-based architecture",
      ],
    },
  },
];

// ============================================
// 6) Themes
// ============================================

export const POLICY_THEMES: PolicyTheme[] = [
  {
    countries: ["US", "CN"],
    labelEn: "Global Energy Giants",
    labelKo: "글로벌 에너지 패권 경쟁",
    analysisKo: "상반된 정책 철학의 양강 대결. 미국은 IRA 45V 기반 시장 메커니즘과 명확한 CI 기준, 중국은 지방정부 보조금과 자국 공급망 우선의 산업정책 접근.",
  },
  {
    countries: ["EU", "DE", "FR", "UK"],
    labelEn: "European Hydrogen Bloc",
    labelKo: "유럽 수소 블록",
    analysisKo: "EU 통합 정책과 회원국별 보조 정책의 이중 구조. RED III와 CBAM은 EU 공통, H2Global(독일), France 2030(프랑스), UK Hydrogen Business Model 등은 국가별.",
  },
  {
    countries: ["US", "CA"],
    labelEn: "North American Hydrogen Hub",
    labelKo: "북미 수소 통합 거점",
    analysisKo: "PTC vs ITC의 구조적 차이. 미국 IRA 45V는 생산 단계 인센티브($/kg), 캐나다 Clean H2 ITC는 투자 단계 인센티브(%CAPEX).",
  },
  {
    countries: ["KR", "JP"],
    labelEn: "Asia Demand Leaders",
    labelKo: "아시아 수소 수입 수요 양강",
    analysisKo: "수요 정책의 두 가지 모델. 한국 CHPS는 발전·산업 수요 의무화, 일본 CfD는 가격 차액 보전.",
  },
  {
    countries: ["KR", "JP", "AU"],
    labelEn: "Asia-Pacific Demand Triangle",
    labelKo: "아·태 수요-공급 삼각구도",
    analysisKo: "수요(한·일)와 공급(호주)의 역할 분담. 한·일은 수입 인센티브, 호주는 수출 생산 보조.",
  },
  {
    countries: ["AU", "SA", "CA"],
    labelEn: "Export Powerhouses",
    labelKo: "수소 수출 강국",
    analysisKo: "자원·기술 기반의 분화. 호주 그린수소, 사우디 NEOM 메가 프로젝트, 캐나다 블루 중심.",
  },
  {
    countries: ["KR", "US", "EU"],
    labelEn: "Korea's Major Markets",
    labelKo: "한국 주요 진출 시장",
    analysisKo: "인센티브 강도의 3단계 격차. 미국 IRA 45V ≫ EU CfD ≫ 한국 CHPS. 한국 기업의 해외 진출 시 미국이 가장 매력적.",
  },
  {
    countries: ["KR"],
    labelEn: "Domestic Market Focus",
    labelKo: "국내 시장 집중 분석",
    analysisKo: "수소법과 CHPS 기반 국내 수요 우선 정책. 단가는 낮으나 안정성과 접근성에서 강점.",
  },
  {
    countries: ["US"],
    labelEn: "IRA-driven Premium Market",
    labelKo: "IRA 주도 프리미엄 시장",
    analysisKo: "IRA 45V의 4단계 차등 인센티브가 핵심. 정권 교체에 따른 가이드라인 재해석 리스크 상존.",
  },
  {
    countries: ["KR", "US", "EU", "DE", "FR", "UK", "JP", "AU", "CA", "SA", "CN"],
    labelEn: "Comprehensive Global View",
    labelKo: "전 권역 종합 비교",
    analysisKo: "인센티브 메커니즘의 세 가지 패턴. ① 시장 메커니즘, ② 가격 차액 보전, ③ 의무화·할당. 사우디·중국은 명시적 메커니즘보다 정책적 지원 중심.",
  },
];

// ============================================
// 7) Helpers
// ============================================

export function findThemeForSelection(selected: string[]): PolicyTheme | null {
  const sortedSelection = [...selected].sort();
  for (const theme of POLICY_THEMES) {
    const sortedThemeCountries = [...theme.countries].sort();
    if (
      sortedSelection.length === sortedThemeCountries.length &&
      sortedSelection.every((c, i) => c === sortedThemeCountries[i])
    ) {
      return theme;
    }
  }
  return null;
}

export function getPoliciesByCountry(country: string): Policy[] {
  return POLICIES.filter((p) => p.country === country);
}

export function getPoliciesByCountries(countries: string[]): Policy[] {
  return POLICIES.filter((p) => countries.includes(p.country));
}

export function getNationalFrameworkByCountry(country: string): NationalFramework | null {
  return NATIONAL_FRAMEWORKS.find((f) => f.country === country) ?? null;
}
