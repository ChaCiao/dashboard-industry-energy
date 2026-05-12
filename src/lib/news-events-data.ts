// Curated news & events feed — country-level recent updates.
// Distinct from PolicyHistoryEvent (official policy milestones) — captures
// market, industry, project, and international developments.

import type { NewsEvent } from "@/types/policy";

export const NEWS_EVENTS: NewsEvent[] = [
  // ============================================
  // KR — Korea (5 events)
  // ============================================
  {
    country: "KR",
    date: "2025-08-14",
    title: "Korea CHPS general auction allocates 8.5 TWh",
    summary: "Second general CHPS auction expanded allocation by 30% vs first round. Hyundai Motor and SK E&S consortium secured largest single contract.",
    sourceName: "MOTIE",
    sourceUrl: "https://www.motie.go.kr",
    category: "policy",
  },
  {
    country: "KR",
    date: "2025-06-03",
    title: "POSCO signs LH2 import MOU with Saudi Aramco",
    summary: "20-year offtake framework targeting 500 kt/yr by 2030. Among the largest single bilateral H2 import agreements signed by Korea.",
    sourceName: "S&P Global Platts",
    sourceUrl: "https://www.spglobal.com",
    category: "international",
  },
  {
    country: "KR",
    date: "2025-04-22",
    title: "Doosan Fuel Cell records first profitable quarter since IPO",
    summary: "Q1 2025 results show KRW 4.2B operating profit, driven by 92 MW of new domestic fuel cell installations under CHPS auction.",
    sourceName: "DART",
    sourceUrl: "https://dart.fss.or.kr",
    category: "industry",
  },
  {
    country: "KR",
    date: "2025-02-18",
    title: "Hyundai Motor Group invests in Australian green H2 project",
    summary: "USD 200M strategic investment in 250 MW WA-based renewable hydrogen project. Production targeted for FCEV supply chain to Korea.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "project",
  },
  {
    country: "KR",
    date: "2024-12-10",
    title: "Hydrogen Ammonia Cluster designated in Ulsan",
    summary: "MOTIE designates Ulsan as the first national hydrogen-ammonia cluster. KRW 1.2 trillion combined public-private investment by 2030.",
    sourceName: "MOTIE",
    sourceUrl: "https://www.motie.go.kr",
    category: "policy",
  },

  // ============================================
  // US — United States (6 events)
  // ============================================
  {
    country: "US",
    date: "2025-09-05",
    title: "Treasury issues 45V transition relief guidance",
    summary: "New guidance softens three-pillar test compliance window, extending hourly matching transition until 2032. Industry response broadly positive.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "policy",
  },
  {
    country: "US",
    date: "2025-07-29",
    title: "Plug Power signs $500M loan facility for Texas project",
    summary: "DOE Loan Programs Office finalizes loan guarantee for 200 MW PEM electrolyzer facility in Texas. Conditional on three-pillar compliance.",
    sourceName: "DOE LPO",
    sourceUrl: "https://www.energy.gov/lpo",
    category: "project",
  },
  {
    country: "US",
    date: "2025-06-12",
    title: "Air Products withdraws from Louisiana blue H2 project",
    summary: "USD 4.5B Louisiana CCS-blue H2 project paused indefinitely due to permitting delays and equity partner uncertainty.",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    category: "project",
  },
  {
    country: "US",
    date: "2025-04-18",
    title: "PJM grid operator approves first H2 generation interconnection",
    summary: "First grid-scale hydrogen turbine peaker project (175 MW) approved for PJM interconnection. Long Ridge Energy Terminal phase 2.",
    sourceName: "S&P Global Commodity Insights",
    sourceUrl: "https://www.spglobal.com",
    category: "market",
  },
  {
    country: "US",
    date: "2025-02-25",
    title: "Hyzon Motors files for bankruptcy",
    summary: "FCEV truck maker enters Chapter 11. Reflects ongoing financial stress in pure-play hydrogen mobility companies despite IRA support.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "industry",
  },
  {
    country: "US",
    date: "2024-12-03",
    title: "DOE H2 Hubs Phase 2 negotiations advance for 4 of 7 hubs",
    summary: "Pacific Northwest, California, Midwest, Mid-Atlantic hubs move to Phase 2 design/permitting with combined USD 3.2B federal allocation.",
    sourceName: "DOE OCED",
    sourceUrl: "https://www.energy.gov/oced",
    category: "policy",
  },

  // ============================================
  // EU — European Union (5 events)
  // ============================================
  {
    country: "EU",
    date: "2025-09-22",
    title: "Third European Hydrogen Bank auction launches",
    summary: "Third round opens with EUR 1.5B budget. Adds dedicated lots for industrial offtake and ammonia carriers.",
    sourceName: "European Commission",
    sourceUrl: "https://climate.ec.europa.eu",
    category: "policy",
  },
  {
    country: "EU",
    date: "2025-06-18",
    title: "Member states miss RED III transposition deadline",
    summary: "Only 11 of 27 EU member states formally transpose RED III hydrogen quota by May 2025 deadline. Commission issues warning letters to laggards.",
    sourceName: "Euractiv",
    sourceUrl: "https://www.euractiv.com",
    category: "policy",
  },
  {
    country: "EU",
    date: "2025-03-14",
    title: "First RFNBO-certified hydrogen produced in Spain",
    summary: "Iberdrola's Puertollano facility receives first official RFNBO certification under RED III delegated acts. 20 MW PEM facility.",
    sourceName: "Hydrogen Europe",
    sourceUrl: "https://hydrogeneurope.eu",
    category: "project",
  },
  {
    country: "EU",
    date: "2024-11-20",
    title: "EU launches Hydrogen Backbone investment plan",
    summary: "EUR 80B investment plan for trans-European hydrogen pipeline backbone by 2040. 5 priority corridors identified.",
    sourceName: "ENTSOG",
    sourceUrl: "https://www.entsog.eu",
    category: "policy",
  },
  {
    country: "EU",
    date: "2024-10-08",
    title: "CBAM hydrogen scope clarification published",
    summary: "Commission clarifies CBAM application to imported hydrogen derivatives (ammonia, methanol). Embedded emissions calculation methodology released.",
    sourceName: "European Commission",
    sourceUrl: "https://taxation-customs.ec.europa.eu",
    category: "policy",
  },

  // ============================================
  // DE — Germany (5 events)
  // ============================================
  {
    country: "DE",
    date: "2025-08-07",
    title: "RWE breaks ground on 100 MW Lingen electrolyzer",
    summary: "Germany's first GW-class electrolyzer hub starts construction. Phase 1 of planned 300 MW capacity at Lingen industrial cluster.",
    sourceName: "RWE",
    sourceUrl: "https://www.rwe.com",
    category: "project",
  },
  {
    country: "DE",
    date: "2025-05-30",
    title: "H2Global expands to Asia-Pacific offtake",
    summary: "Hintco awards second wave H2Global contracts including offtake from Australian Origin Energy. Total contracted volume reaches 70 kt/yr.",
    sourceName: "H2Global",
    sourceUrl: "https://www.h2-global.de",
    category: "international",
  },
  {
    country: "DE",
    date: "2025-03-04",
    title: "Bundestag approves Hydrogen Core Network financing",
    summary: "EUR 19.7B Wasserstoff-Kernnetz financing approved with FNB Gas as backbone operator. 9,040 km network planned by 2032.",
    sourceName: "BMWK",
    sourceUrl: "https://www.bmwk.de",
    category: "policy",
  },
  {
    country: "DE",
    date: "2024-12-17",
    title: "Thyssenkrupp Steel hits hydrogen DRI milestone",
    summary: "First H2-based DRI module at Duisburg site commissioned. EUR 2B project supported by IPCEI Hydrogen funding.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "industry",
  },
  {
    country: "DE",
    date: "2024-11-04",
    title: "Siemens Energy raises 2026 electrolyzer output guidance",
    summary: "Siemens Energy lifts 2026 PEM electrolyzer output target to 3 GW, citing strong EU and US order book despite US 45V uncertainty.",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    category: "industry",
  },

  // ============================================
  // FR — France (4 events)
  // ============================================
  {
    country: "FR",
    date: "2025-07-15",
    title: "France approves nuclear-electrolysis RFNBO certification",
    summary: "ADEME issues first nuclear-powered RFNBO certification under newly clarified EU framework. Lhyfe Carene project receives initial approval.",
    sourceName: "ADEME",
    sourceUrl: "https://www.ademe.fr",
    category: "policy",
  },
  {
    country: "FR",
    date: "2025-04-09",
    title: "EDF launches GW-scale hydrogen tender",
    summary: "EDF Hynamics opens tender for up to 1 GW electrolysis capacity by 2030. Mixed nuclear-renewable feedstock model.",
    sourceName: "Hydrogen Insight",
    sourceUrl: "https://www.hydrogeninsight.com",
    category: "project",
  },
  {
    country: "FR",
    date: "2025-02-12",
    title: "Air Liquide commissions 200 MW PEM at Normandy",
    summary: "Europe's largest single PEM electrolyzer (Siemens Energy supplied) starts operation at Air Liquide's Normandy hub. Output targets refineries.",
    sourceName: "Air Liquide",
    sourceUrl: "https://www.airliquide.com",
    category: "project",
  },
  {
    country: "FR",
    date: "2024-12-19",
    title: "France strikes hydrogen MOU with Morocco",
    summary: "Bilateral MOU on Morocco-France green hydrogen supply chain. Cross-Mediterranean pipeline pre-feasibility study commissioned.",
    sourceName: "Ministere de la Transition energetique",
    sourceUrl: "https://www.ecologie.gouv.fr",
    category: "international",
  },

  // ============================================
  // UK — United Kingdom (5 events)
  // ============================================
  {
    country: "UK",
    date: "2025-08-21",
    title: "HAR3 tender launches with new CCUS-blue pathway",
    summary: "Third Hydrogen Allocation Round opens, including for the first time CCUS-paired blue hydrogen projects. Combined budget GBP 500M.",
    sourceName: "DESNZ",
    sourceUrl: "https://www.gov.uk",
    category: "policy",
  },
  {
    country: "UK",
    date: "2025-05-07",
    title: "HyNet North West reaches FID",
    summary: "UK's first large-scale CCUS-paired blue hydrogen project reaches financial close. Eni-led joint venture, 350 MW capacity by 2028.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "project",
  },
  {
    country: "UK",
    date: "2025-02-04",
    title: "ITM Power restructuring deepens losses",
    summary: "UK electrolyzer maker reports widened H1 losses despite cost reduction. Cancels Sheffield 1 GW factory expansion plan.",
    sourceName: "Financial Times",
    sourceUrl: "https://www.ft.com",
    category: "industry",
  },
  {
    country: "UK",
    date: "2024-12-20",
    title: "First HAR1 project commissioning announced",
    summary: "Carlton Power's 35 MW Trafford Park electrolyzer becomes first HAR1 project to enter commissioning phase. Targets industrial offtakers in NW England.",
    sourceName: "Hydrogen Insight",
    sourceUrl: "https://www.hydrogeninsight.com",
    category: "project",
  },
  {
    country: "UK",
    date: "2024-10-30",
    title: "UK government commits GBP 22B to CCUS",
    summary: "Track 2 CCUS funding commitment confirmed in Autumn Budget. Indirect support for UK blue hydrogen pathway.",
    sourceName: "HM Treasury",
    sourceUrl: "https://www.gov.uk/government/organisations/hm-treasury",
    category: "policy",
  },

  // ============================================
  // JP — Japan (5 events)
  // ============================================
  {
    country: "JP",
    date: "2025-09-12",
    title: "METI announces second batch of CfD recipients",
    summary: "Second selection adds 4 projects: 3 ammonia co-firing and 1 large-scale LH2 import infrastructure. JPY 800B committed.",
    sourceName: "METI",
    sourceUrl: "https://www.meti.go.jp",
    category: "policy",
  },
  {
    country: "JP",
    date: "2025-06-25",
    title: "JERA commences first commercial ammonia co-firing",
    summary: "Hekinan unit 4 (1 GW coal) begins 20% NH3 co-firing under commercial operation. First commercial-scale demonstration globally.",
    sourceName: "JERA",
    sourceUrl: "https://www.jera.co.jp",
    category: "project",
  },
  {
    country: "JP",
    date: "2025-03-21",
    title: "Toyota and Honda restructure FCEV partnerships",
    summary: "Toyota-Honda announce joint FCEV component R&D for next-gen heavy-duty applications. Implicit consolidation of Japanese FCEV ecosystem.",
    sourceName: "Nikkei Asia",
    sourceUrl: "https://asia.nikkei.com",
    category: "industry",
  },
  {
    country: "JP",
    date: "2024-12-05",
    title: "Japan-Australia LH2 supply chain phase 2 announced",
    summary: "HESC project phase 2 advances with USD 3B commitment from Kawasaki Heavy/J-POWER/AGL consortium. Commercial LH2 shipments target 2030.",
    sourceName: "Nikkei",
    sourceUrl: "https://www.nikkei.com",
    category: "international",
  },
  {
    country: "JP",
    date: "2024-11-12",
    title: "AZEC framework expanded to 14 countries",
    summary: "Asia Zero Emission Community framework now includes 14 Asia-Pacific countries. Coordinated H2/NH3 supply chain rules in development.",
    sourceName: "METI",
    sourceUrl: "https://www.meti.go.jp",
    category: "international",
  },

  // ============================================
  // AU — Australia (5 events)
  // ============================================
  {
    country: "AU",
    date: "2025-08-29",
    title: "ARENA awards first H2 Headstart conditional offer",
    summary: "Stanwell-Iwatani consortium receives first conditional A$2B Headstart offer. 720 MW renewable hydrogen project at Gladstone.",
    sourceName: "ARENA",
    sourceUrl: "https://arena.gov.au",
    category: "project",
  },
  {
    country: "AU",
    date: "2025-05-15",
    title: "Origin Energy exits Hunter Valley green H2 project",
    summary: "Origin withdraws from 5 GW Hunter Valley Hub citing project economics. Reflects broader rationalization of mega-project pipeline.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "project",
  },
  {
    country: "AU",
    date: "2025-03-07",
    title: "Pilbara Minerals signs offtake with Hyundai for green H2",
    summary: "Western Australia-based developer signs 10-year green hydrogen offtake agreement targeting Hyundai FCEV value chain.",
    sourceName: "S&P Global Platts",
    sourceUrl: "https://www.spglobal.com",
    category: "international",
  },
  {
    country: "AU",
    date: "2024-12-11",
    title: "Australia-EU green hydrogen partnership signed",
    summary: "Bilateral framework signed at COP29 covering certification mutual recognition and Australian export pipeline to EU markets.",
    sourceName: "DCCEEW",
    sourceUrl: "https://www.dcceew.gov.au",
    category: "international",
  },
  {
    country: "AU",
    date: "2024-09-19",
    title: "Future Made in Australia Act passes Parliament",
    summary: "Legislative framework for HPTI and supporting industrial policy now in force. Production credit operational from FY2027-28.",
    sourceName: "Australian Parliament",
    sourceUrl: "https://www.aph.gov.au",
    category: "policy",
  },

  // ============================================
  // CA — Canada (4 events)
  // ============================================
  {
    country: "CA",
    date: "2025-07-22",
    title: "EverWind Fuels secures Atlantic Loop offtake",
    summary: "Nova Scotia-based EverWind signs 1 Mt/yr ammonia offtake with E.ON. First major Atlantic Canada to Germany supply agreement.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "international",
  },
  {
    country: "CA",
    date: "2025-04-29",
    title: "CRA finalizes Clean H2 ITC regulations",
    summary: "Canada Revenue Agency publishes final ITC compliance regulations including CI verification protocols. Predictability for project sponsors improves.",
    sourceName: "Government of Canada",
    sourceUrl: "https://www.canada.ca",
    category: "policy",
  },
  {
    country: "CA",
    date: "2025-01-23",
    title: "Air Products Edmonton blue H2 project nears completion",
    summary: "CAD 1.6B blue hydrogen-CCS facility expected to start operations Q2 2025. Major demonstration of Alberta blue pathway competitiveness.",
    sourceName: "Air Products",
    sourceUrl: "https://www.airproducts.com",
    category: "project",
  },
  {
    country: "CA",
    date: "2024-11-08",
    title: "Quebec announces provincial H2 strategy",
    summary: "Quebec releases hydrogen strategy with provincial top-up to federal Clean H2 ITC. Targets green hydrogen via abundant hydro power.",
    sourceName: "Government of Quebec",
    sourceUrl: "https://www.quebec.ca",
    category: "policy",
  },

  // ============================================
  // SA — Saudi Arabia (5 events)
  // ============================================
  {
    country: "SA",
    date: "2025-09-04",
    title: "NEOM Green Hydrogen on-site construction 60% complete",
    summary: "Air Products confirms NEOM construction reaches 60% milestone. COD remains targeted for 2026 with 600 t/day output capacity.",
    sourceName: "Air Products",
    sourceUrl: "https://www.airproducts.com",
    category: "project",
  },
  {
    country: "SA",
    date: "2025-05-22",
    title: "ACWA Power expands hydrogen JV with Indonesia",
    summary: "ACWA Power signs JV with PT PLN Indonesia Power for 100 kt/yr green hydrogen production at South Sumatra. Targeting Japanese offtake.",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    category: "international",
  },
  {
    country: "SA",
    date: "2025-03-30",
    title: "Aramco-POSCO sign LH2 supply MOU",
    summary: "20-year framework for LH2 supply from Aramco to Korean industrial cluster. Targets 500 kt/yr ammonia-cracked H2 by 2030.",
    sourceName: "Aramco",
    sourceUrl: "https://www.aramco.com",
    category: "international",
  },
  {
    country: "SA",
    date: "2024-12-29",
    title: "Saudi Arabia files for IRENA green H2 export certification",
    summary: "First MENA-region green hydrogen certification application filed with IRENA. NEOM project flagged as initial case.",
    sourceName: "IRENA",
    sourceUrl: "https://www.irena.org",
    category: "international",
  },
  {
    country: "SA",
    date: "2024-10-16",
    title: "Aramco joins Hydrogen Council",
    summary: "Aramco confirmed as principal member of Hydrogen Council. Reflects MENA hydrocarbon majors' positioning in blue+green hydrogen value chain.",
    sourceName: "Hydrogen Council",
    sourceUrl: "https://hydrogencouncil.com",
    category: "industry",
  },

  // ============================================
  // CN — China (6 events)
  // ============================================
  {
    country: "CN",
    date: "2025-09-01",
    title: "Sinopec activates 30 MW Xinjiang green H2 facility",
    summary: "Sinopec Kuqa green hydrogen project enters expansion phase. Aggregated capacity targets 100 MW by 2026 — Asia's largest single-site capacity.",
    sourceName: "Sinopec",
    sourceUrl: "https://www.sinopec.com",
    category: "project",
  },
  {
    country: "CN",
    date: "2025-06-30",
    title: "China NDRC mandates hydrogen blending in industrial parks",
    summary: "NDRC releases guideline requiring eligible industrial parks to assess hydrogen blending in gas networks. Voluntary framework for now.",
    sourceName: "NDRC",
    sourceUrl: "https://www.ndrc.gov.cn",
    category: "policy",
  },
  {
    country: "CN",
    date: "2025-04-05",
    title: "Chinese electrolyzer makers capture 60% of global capacity",
    summary: "BNEF analysis shows Chinese alkaline electrolyzer manufacturers capture 60% of global installed capacity in 2024. Pricing 30-50% below Western peers.",
    sourceName: "BloombergNEF",
    sourceUrl: "https://about.bnef.com",
    category: "market",
  },
  {
    country: "CN",
    date: "2025-02-08",
    title: "Inner Mongolia green H2 policy framework expanded",
    summary: "Provincial government adds methanol/SAF synthesis pathways to existing green hydrogen mandate. Total RMB 5B subsidy budget.",
    sourceName: "Inner Mongolia DRC",
    sourceUrl: "https://fgw.nmg.gov.cn",
    category: "policy",
  },
  {
    country: "CN",
    date: "2024-12-15",
    title: "Hebei issues China's largest single FCEV order",
    summary: "Hebei province orders 4,500 fuel cell trucks for steel logistics fleet. Largest single FCEV order globally to date.",
    sourceName: "Caixin",
    sourceUrl: "https://www.caixinglobal.com",
    category: "market",
  },
  {
    country: "CN",
    date: "2024-10-21",
    title: "China-EU electrolyzer trade dispute opens",
    summary: "EU launches anti-subsidy investigation against Chinese electrolyzer exports. Initial scope covers PEM and alkaline systems.",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    category: "international",
  },
];

// ============================================
// Helpers
// ============================================

export type NewsCategory = NewsEvent["category"];

export const NEWS_CATEGORIES: { key: NewsCategory; label: string; color: string }[] = [
  { key: "policy", label: "Policy", color: "#0E4F4F" },
  { key: "project", label: "Project", color: "#3B82F6" },
  { key: "market", label: "Market", color: "#16A34A" },
  { key: "industry", label: "Industry", color: "#F59E0B" },
  { key: "international", label: "International", color: "#9333EA" },
];

export function getNewsByCountry(country: string): NewsEvent[] {
  return NEWS_EVENTS.filter((n) => n.country === country).sort(
    (a, b) => b.date.localeCompare(a.date)
  );
}

export function getNewsByCountryFiltered(
  country: string,
  categories: NewsCategory[]
): NewsEvent[] {
  const filtered =
    categories.length === 0
      ? getNewsByCountry(country)
      : getNewsByCountry(country).filter((n) => categories.includes(n.category));
  return filtered;
}
