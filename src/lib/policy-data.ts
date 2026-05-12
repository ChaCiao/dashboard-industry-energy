// Policy data for the Policy Tracker.
// All data is MOCK / illustrative. Verify with official sources before publication.

import type {
  Policy,
  CountryInfo,
  PolicyTheme,
  CountryAttractiveness,
} from "@/types/policy";

// ============================================
// 1) Country metadata
// ============================================

export const COUNTRIES: CountryInfo[] = [
  { code: "KR", name: "Korea", flag: "🇰🇷" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "EU", name: "European Union", flag: "🇪🇺" },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    parentCode: "EU",
    isSubRegion: true,
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    parentCode: "EU",
    isSubRegion: true,
  },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "CN", name: "China", flag: "🇨🇳" },
];

// ============================================
// 2) Policies — hydrogen category for MVP
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
    stackableNote: "Can combine with R&D grants and CHPS premium",
    stability: "high",
    stabilityNote: "Established by 수소법; bipartisan support",
    reviewCycle: "Annual auction; 5-year policy review",
    scores: { incentive: 2, stability: 4, scope: 2, access: 4, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Mandatory quota structure ensures demand floor for clean hydrogen producers",
        "Premium auction format allows price discovery but limits maximum incentive size",
        "Strong policy stability backed by 수소법 legislation and cross-party support",
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
    stabilityNote:
      "Administration change creates reinterpretation risk on CI methodology",
    tierStructure: [
      {
        tierName: "Tier 4",
        incentiveValue: "$0.60/kg",
        condition: "CI 2.5–4.0",
      },
      {
        tierName: "Tier 3",
        incentiveValue: "$0.75/kg",
        condition: "CI 1.5–2.5",
      },
      {
        tierName: "Tier 2",
        incentiveValue: "$1.00/kg",
        condition: "CI 0.45–1.5",
      },
      {
        tierName: "Tier 1",
        incentiveValue: "$3.00/kg",
        condition: "CI < 0.45",
      },
    ],
    reviewCycle: "Annual Treasury guidance updates",
    scores: { incentive: 5, stability: 3, scope: 4, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Highest incentive intensity globally — Tier 1 of $3.00/kg lowers Green H2 LCOH by ~$2.40/kg",
        "Medium stability — administration change creates reinterpretation risk on well-to-gate CI methodology",
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
    scores: { incentive: 4, stability: 3, scope: 4, access: 3, stack: 4 },
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
    fullName: "Renewable Energy Directive III — Renewable Hydrogen Quota",
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
    scores: { incentive: 3, stability: 4, scope: 4, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Demand-side quota creates mandatory market for renewable hydrogen in industry",
        "Strictest CI methodology globally — well-to-wheel including upstream emissions",
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
    fullName: "European Hydrogen Bank — Auction-as-a-Service",
    type: "CfD",
    incentiveSize: "€4.00/kg (avg auction strike)",
    incentiveValueUsdPerKg: 4.3,
    eligibility: "RFNBO-certified projects; competitive auction",
    sectors: ["all"],
    startYear: 2025,
    endYear: 2035,
    budget: "€800M first auction",
    status: "active",
    stackable: false,
    stackableNote: "Not stackable with national CfD schemes",
    stability: "high",
    scores: { incentive: 4, stability: 4, scope: 4, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Reverse auction format ensures cost-efficient incentive delivery",
        "First auction in 2024 set €0.37–0.48/kg strike prices for selected projects",
        "Not stackable with national CfDs — choice between EU bank and national scheme",
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
    id: "uk-hbm",
    country: "UK",
    category: "hydrogen",
    name: "Hydrogen Business Model",
    fullName: "UK Low Carbon Hydrogen Business Model (HBM)",
    type: "CfD",
    incentiveSize: "£9.50/kg (avg strike)",
    incentiveValueUsdPerKg: 12.0,
    eligibility: "Low-carbon hydrogen standard certified",
    sectors: ["industry", "power"],
    startYear: 2023,
    endYear: 2037,
    budget: "£240M (pilot rounds)",
    status: "active",
    stackable: true,
    stability: "medium",
    scores: { incentive: 4, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Highest per-kg CfD strike price globally, reflecting UK's premium gas markets",
        "15-year contract duration provides long-term revenue certainty",
        "Post-Brexit independent design — distinct from EU Hydrogen Bank",
      ],
    },
    milestones: [
      { year: 2022, type: "announced" },
      { year: 2023, type: "effective" },
      { year: 2037, type: "end" },
    ],
    officialSourceUrl:
      "https://www.gov.uk/government/publications/hydrogen-business-model",
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
    budget: "3 trillion JPY (15-year)",
    status: "active",
    stackable: true,
    stability: "high",
    scores: { incentive: 2, stability: 4, scope: 2, access: 2, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Largest single-policy budget allocation globally (3 trillion JPY)",
        "Designed for long-term import contracts — favors Australia, Middle East suppliers",
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
    scores: { incentive: 2, stability: 4, scope: 2, access: 3, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Production-based credit favoring large-scale export-oriented projects",
        "A$2B budget covers ~2-3 large projects — selection-driven, not entitlement",
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
    incentiveSize: "15–40% CAPEX",
    eligibility: "CI tiers based on well-to-gate emissions",
    sectors: ["all"],
    startYear: 2024,
    endYear: 2034,
    budget: "Uncapped (tax-credit based)",
    status: "active",
    stackable: true,
    stability: "high",
    scores: { incentive: 3, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Investment-stage incentive complementing production-stage policies elsewhere",
        "4-tier structure (15%/25%/35%/40%) based on CI",
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
    scores: { incentive: 2, stability: 1, scope: 1, access: 1, stack: 1 },
    aiAnalysis: {
      highlights: [
        "No explicit per-kg incentive — bilateral negotiation per project",
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
    name: "14th 5-Year Plan",
    fullName: "14th Five-Year Plan for Hydrogen Energy",
    type: "Hybrid",
    incentiveSize: "Provincial subsidies (varies)",
    eligibility: "Province-specific criteria",
    sectors: ["all"],
    startYear: 2022,
    endYear: 2030,
    budget: "Provincial budgets",
    status: "partial",
    stackable: true,
    stability: "medium",
    scores: { incentive: 2, stability: 1, scope: 3, access: 1, stack: 1 },
    aiAnalysis: {
      highlights: [
        "Decentralized to provincial governments — Shandong, Inner Mongolia, Hebei most active",
        "Subsidy structures vary widely; lack of national framework",
        "Industrial policy approach prioritizing domestic supply chain",
      ],
    },
    milestones: [
      { year: 2022, type: "announced" },
      { year: 2030, type: "end" },
    ],
  },
];

// ============================================
// 3) Country-level aggregated attractiveness
// ============================================

export const COUNTRY_ATTRACTIVENESS: CountryAttractiveness[] = [
  {
    country: "KR",
    scores: { incentive: 2, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Moderate per-kg incentive size, but stable policy framework backed by 수소법 legislation reduces project risk",
        "Strong domestic market access — clear sectoral demand mandates via CHPS in power generation",
        "Limited stackability across central policies; primarily one-track CHPS mechanism with R&D grants",
      ],
    },
  },
  {
    country: "US",
    scores: { incentive: 5, stability: 3, scope: 4, access: 4, stack: 5 },
    aiAnalysis: {
      highlights: [
        "Highest combined incentive intensity globally — IRA 45V Tier 1 plus DOE H2 Hubs plus state-level support",
        "Medium stability — administration changes risk Treasury guidance reinterpretation on CI methodology",
        "Strong stackability with PTC, ITC, DOE Hubs creates one of the most flexible policy environments",
      ],
    },
  },
  {
    country: "EU",
    scores: { incentive: 4, stability: 4, scope: 5, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Largest combined incentive program — RED III mandatory quota plus Hydrogen Bank CfD plus CBAM",
        "Highest policy stability via EU directive status; difficult to reverse, multi-decade horizon",
        "Strictest CI methodology globally (well-to-wheel) — high access bar but high credibility",
      ],
    },
  },
  {
    country: "UK",
    scores: { incentive: 4, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Highest per-kg CfD strike (£9.50/kg avg) reflecting UK's premium gas markets",
        "Stable post-Brexit framework with 15-year contracts providing long-term revenue certainty",
        "Narrower sectoral scope than EU — focused on industrial decarbonization and power",
      ],
    },
  },
  {
    country: "JP",
    scores: { incentive: 3, stability: 5, scope: 3, access: 3, stack: 2 },
    aiAnalysis: {
      highlights: [
        "Largest single-policy budget (3 trillion JPY over 15 years) signals strong long-term commitment",
        "Highest policy stability via cross-ministerial consensus and 15-year contract duration",
        "Designed primarily for imports — favors offshore suppliers over domestic production",
      ],
    },
  },
  {
    country: "AU",
    scores: { incentive: 3, stability: 4, scope: 3, access: 3, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Production credit supports large-scale export-oriented projects but smaller budget than peers",
        "Stable framework backed by bipartisan Future Made in Australia industrial policy",
        "Limited number of projects supported — budget covers only 2-3 large projects",
      ],
    },
  },
  {
    country: "CA",
    scores: { incentive: 3, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "Investment-stage incentive complements production-stage policies elsewhere",
        "Stable framework similar to IRA structure but uncapped tax-credit delivery reduces project risk",
        "Lower headline rate than IRA 45V but CAPEX-based delivery helps with project financing",
      ],
    },
  },
  {
    country: "SA",
    scores: { incentive: 2, stability: 1, scope: 1, access: 1, stack: 1 },
    aiAnalysis: {
      highlights: [
        "No explicit per-kg incentive mechanism — bilateral negotiation per strategic project",
        "Low policy transparency despite strong state-backed support for NEOM and selected mega-projects",
        "Reliance on sovereign commitment rather than rule-based framework limits open market access",
      ],
    },
  },
  {
    country: "CN",
    scores: { incentive: 2, stability: 1, scope: 3, access: 1, stack: 1 },
    aiAnalysis: {
      highlights: [
        "Decentralized to provincial governments — Shandong, Inner Mongolia, Hebei most active but inconsistent",
        "Lack of unified national framework reduces predictability for foreign investors",
        "Industrial policy approach prioritizing domestic supply chain limits foreign access",
      ],
    },
  },
  {
    country: "DE",
    scores: { incentive: 4, stability: 4, scope: 4, access: 4, stack: 4 },
    aiAnalysis: {
      highlights: [
        "Most active EU member state with H2Global, IPCEI, and additional national programs on top of EU RED III",
        "Strong stackability between EU and German national programs",
        "Industrial demand base (steel, chemicals) provides clear sectoral pull",
      ],
    },
  },
  {
    country: "FR",
    scores: { incentive: 3, stability: 4, scope: 3, access: 4, stack: 3 },
    aiAnalysis: {
      highlights: [
        "EU RED III applies plus national hydrogen plan with €9B commitment by 2030",
        "Nuclear-allowed for low-carbon hydrogen classification — differentiates from green-only policies",
        "Strong access via established industrial clusters",
      ],
    },
  },
];

// ============================================
// 4) Policy themes — for theme card display
// ============================================

export const POLICY_THEMES: PolicyTheme[] = [
  {
    countries: ["US", "CN"],
    labelEn: "Global Energy Giants",
    labelKo: "글로벌 에너지 패권 경쟁",
    analysisKo:
      "상반된 정책 철학의 양강 대결. 미국은 IRA 45V 기반 시장 메커니즘 + 명확한 CI 기준, 중국은 지방정부 보조금·자국 공급망 우선의 산업정책 접근. 인센티브 투명성은 미국이, 자국 기업 보호는 중국이 우위.",
  },
  {
    countries: ["EU", "DE", "FR", "UK"],
    labelEn: "European Hydrogen Bloc",
    labelKo: "유럽 수소 블록",
    analysisKo:
      "EU 통합 정책 + 회원국별 보조 정책의 이중 구조. RED III·CBAM은 EU 공통, H2Global(독일)·UK Hydrogen Business Model 등은 국가별. 영국은 Brexit 후 독자 CfD로 가장 높은 €/kg 인센티브 제공.",
  },
  {
    countries: ["US", "CA"],
    labelEn: "North American Hydrogen Hub",
    labelKo: "북미 수소 통합 거점",
    analysisKo:
      "PTC vs ITC의 구조적 차이. 미국 IRA 45V는 생산 단계 인센티브($/kg), 캐나다 Clean H2 ITC는 투자 단계 인센티브(%CAPEX). CI 기준은 양국 모두 well-to-gate지만 한계점·검증 방식이 다름. 결합 시 시너지 가능.",
  },
  {
    countries: ["KR", "JP"],
    labelEn: "Asia Demand Leaders",
    labelKo: "아시아 수소 수입 수요 양강",
    analysisKo:
      "수요 정책의 두 가지 모델. 한국 CHPS는 발전·산업 수요 의무화(Quota+Premium), 일본 CfD는 가격 차액 보전(Price-gap). 한국은 단기 시장 형성에, 일본은 장기 인프라 확충에 적합.",
  },
  {
    countries: ["KR", "JP", "AU"],
    labelEn: "Asia-Pacific Demand Triangle",
    labelKo: "아·태 수요-공급 삼각구도",
    analysisKo:
      "수요(한·일) vs 공급(호주)의 역할 분담. 한·일은 수입 인센티브(CHPS·CfD), 호주는 수출 생산 보조(A$2.00/kg Headstart). 무역 회랑(LNG-NH3·LH2) 구축의 핵심 축이지만 가격 정렬 메커니즘 부재.",
  },
  {
    countries: ["AU", "SA", "CA"],
    labelEn: "Export Powerhouses",
    labelKo: "수소 수출 강국",
    analysisKo:
      "자원·기술 기반의 분화. 호주는 재생E 기반 그린수소(Headstart), 사우디는 NEOM 메가 프로젝트 + 그린·블루 병행, 캐나다는 천연가스·CCS 기반 블루 중심. 공급 안정성은 캐나다, 단가는 사우디, 인증·ESG는 호주가 우위.",
  },
  {
    countries: ["KR", "US", "EU"],
    labelEn: "Korea's Major Markets",
    labelKo: "한국 주요 진출 시장",
    analysisKo:
      "인센티브 강도의 3단계 격차. 미국 IRA 45V(up to $3.00/kg) ≫ EU CfD(€4.00/kg, 경쟁 입찰) ≫ 한국 CHPS(650 KRW/kg). 한국 기업의 해외 진출 시 미국이 가장 매력적, EU는 인증·CI 기준이 가장 엄격.",
  },
  {
    countries: ["KR"],
    labelEn: "Domestic Market Focus",
    labelKo: "국내 시장 집중 분석",
    analysisKo:
      "CHPS·수소법 기반 국내 수요 우선 정책. 글로벌 인센티브 대비 단가는 낮으나 안정성·접근성에서 강점. 발전·운송 부문 의무 비율이 핵심 변수.",
  },
  {
    countries: ["US"],
    labelEn: "IRA-driven Premium Market",
    labelKo: "IRA 주도 프리미엄 시장",
    analysisKo:
      "IRA 45V의 4단계 차등 인센티브가 핵심. CI < 0.45 충족 시 $3.00/kg, CI 2.5–4.0 구간은 $0.60/kg. 정권 교체에 따른 가이드라인 재해석 리스크 상존.",
  },
  {
    countries: [
      "KR",
      "US",
      "EU",
      "DE",
      "FR",
      "UK",
      "JP",
      "AU",
      "CA",
      "SA",
      "CN",
    ],
    labelEn: "Comprehensive Global View",
    labelKo: "전 권역 종합 비교",
    analysisKo:
      "인센티브 메커니즘의 세 가지 패턴. ① 시장 메커니즘(미국 PTC, 호주 CfD), ② 가격 차액 보전(일본·EU·영국 CfD), ③ 의무화·할당(한국 CHPS, EU RED III). 사우디·중국은 명시적 메커니즘보다 정책적 지원 중심.",
  },
];

// ============================================
// 5) Helpers
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
