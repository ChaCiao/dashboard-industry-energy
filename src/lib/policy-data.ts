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
// ============================================

export const COUNTRIES: CountryInfo[] = [
  { code: "KR", name: "Korea", flag: "KR" },
  { code: "US", name: "United States", flag: "US" },
  { code: "EU", name: "European Union", flag: "EU" },
  { code: "DE", name: "Germany", flag: "DE" },
  { code: "FR", name: "France", flag: "FR" },
  { code: "UK", name: "United Kingdom", flag: "UK" },
  { code: "JP", name: "Japan", flag: "JP" },
  { code: "AU", name: "Australia", flag: "AU" },
  { code: "CA", name: "Canada", flag: "CA" },
  { code: "SA", name: "Saudi Arabia", flag: "SA" },
  { code: "CN", name: "China", flag: "CN" },
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
// DE/FR scores reflect EU policies + own national policies (stackable bonus)
// All scores reflect Hydrogen Law / Roadmap weighting on stability dimension
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
