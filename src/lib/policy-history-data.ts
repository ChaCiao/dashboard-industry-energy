// Policy history events — country-level evolution of hydrogen policy.
// Distinct from Policy.milestones (per-policy) — captures national-level shifts.

import type { PolicyHistoryEvent } from "@/types/policy";

export const POLICY_HISTORY_EVENTS: PolicyHistoryEvent[] = [
  // ============================================
  // KR — Korea (6 events)
  // ============================================
  {
    country: "KR",
    year: 2019,
    month: 1,
    type: "roadmap",
    title: "Hydrogen Economy Roadmap announced",
    description: "World's first national hydrogen roadmap published by MOTIE. Set FCEV (810k by 2040) and refueling station targets that became baseline for subsequent legislation.",
    sourceUrl: "https://www.motie.go.kr",
    impact: "high",
  },
  {
    country: "KR",
    year: 2020,
    month: 2,
    type: "law",
    title: "Hydrogen Law enacted",
    description: "Hydrogen Economy Promotion and Hydrogen Safety Management Act becomes the world's first comprehensive national hydrogen law. Establishes legal foundation for production, distribution, storage, utilization, and safety.",
    sourceUrl: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=212286",
    impact: "high",
  },
  {
    country: "KR",
    year: 2021,
    month: 11,
    type: "strategy",
    title: "First Hydrogen Economy Master Plan",
    description: "5-year master plan mandated by Hydrogen Law. Specified 6.94 Mt/yr clean hydrogen target by 2050 and clean hydrogen ratio path.",
    sourceUrl: "https://www.motie.go.kr",
    impact: "high",
  },
  {
    country: "KR",
    year: 2022,
    month: 11,
    type: "amendment",
    title: "Hydrogen Law amendment — Clean Hydrogen Certification",
    description: "Statutory definition of clean hydrogen added with CI threshold of 4 kgCO2e/kg H2. Foundation for CHPS implementation.",
    sourceUrl: "https://www.law.go.kr",
    impact: "medium",
  },
  {
    country: "KR",
    year: 2023,
    month: 12,
    type: "auction",
    title: "First CHPS pilot auction",
    description: "Pilot auction allocated 1.3 TWh to clean hydrogen power generation projects. Marked operational launch of the world's first Clean Hydrogen Portfolio Standard.",
    sourceUrl: "https://www.kea.kr",
    impact: "high",
  },
  {
    country: "KR",
    year: 2024,
    month: 5,
    type: "auction",
    title: "First general CHPS auction",
    description: "Full-scale CHPS auction launched with 6.5 TWh allocation. Established annual auction cycle and price discovery mechanism.",
    sourceUrl: "https://www.kea.kr",
    impact: "high",
  },

  // ============================================
  // US — United States (7 events)
  // ============================================
  {
    country: "US",
    year: 2021,
    month: 6,
    type: "strategy",
    title: "Hydrogen Shot announced",
    description: "DOE launches $1/kg by 2031 cost-target initiative under the Energy Earthshots program. Set strategic direction for federal R&D and Hubs program.",
    sourceUrl: "https://www.energy.gov/eere/fuelcells/hydrogen-shot",
    impact: "high",
  },
  {
    country: "US",
    year: 2021,
    month: 11,
    type: "law",
    title: "Bipartisan Infrastructure Law passed",
    description: "$9.5B allocated to clean hydrogen including $8B for Regional Hubs, $1B for electrolysis, $500M for manufacturing/recycling.",
    sourceUrl: "https://www.energy.gov/oced",
    impact: "high",
  },
  {
    country: "US",
    year: 2022,
    month: 8,
    type: "law",
    title: "Inflation Reduction Act signed — 45V PTC",
    description: "Section 45V Production Tax Credit established with up to $3/kg incentive, 10-year claim period. Highest per-kg subsidy in any major economy.",
    sourceUrl: "https://www.irs.gov",
    impact: "high",
  },
  {
    country: "US",
    year: 2023,
    month: 6,
    type: "strategy",
    title: "National Clean Hydrogen Strategy and Roadmap released",
    description: "DOE-led federal strategy coordinating IRA 45V, BIL Hubs, and R&D. Set production targets of 10/20/50 Mt/yr by 2030/2040/2050.",
    sourceUrl: "https://www.hydrogen.energy.gov/library/roadmaps-vision/clean-hydrogen-strategy-roadmap",
    impact: "high",
  },
  {
    country: "US",
    year: 2023,
    month: 10,
    type: "regulatory",
    title: "Seven Regional H2 Hubs selected",
    description: "DOE selected 7 regional clean hydrogen hubs for $7B in BIL funding. Geographic diversification across Appalachian, California, Gulf Coast, Heartland, Mid-Atlantic, Midwest, Pacific Northwest.",
    sourceUrl: "https://www.energy.gov/oced/regional-clean-hydrogen-hubs",
    impact: "high",
  },
  {
    country: "US",
    year: 2024,
    month: 12,
    type: "regulatory",
    title: "Treasury 45V final guidance issued",
    description: "Final rules on 45V Production Tax Credit released, including three-pillar test (incrementality, temporal matching, deliverability). Provided clarity but introduced operational complexity.",
    sourceUrl: "https://www.federalregister.gov",
    impact: "high",
  },
  {
    country: "US",
    year: 2025,
    month: 7,
    type: "regulatory",
    title: "Treasury 45V guidance reinterpretation under new administration",
    description: "Treasury issued amended guidance softening three-pillar test conditions. Increased flexibility on temporal matching transition period.",
    impact: "high",
  },

  // ============================================
  // EU — European Union (6 events)
  // ============================================
  {
    country: "EU",
    year: 2020,
    month: 7,
    type: "strategy",
    title: "EU Hydrogen Strategy adopted",
    description: "Cornerstone of European Green Deal. Established renewable hydrogen as priority pathway with 40 GW electrolyzer capacity target by 2030.",
    sourceUrl: "https://energy.ec.europa.eu/topics/eu-hydrogen-policy_en",
    impact: "high",
  },
  {
    country: "EU",
    year: 2022,
    month: 5,
    type: "target-revision",
    title: "REPowerEU adds import targets",
    description: "In response to Russia gas crisis, REPowerEU plan adds 10 Mt renewable hydrogen import target by 2030 on top of original 10 Mt domestic production.",
    sourceUrl: "https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal/repowereu-affordable-secure-and-sustainable-energy-europe_en",
    impact: "high",
  },
  {
    country: "EU",
    year: 2023,
    month: 6,
    type: "regulatory",
    title: "RFNBO Delegated Acts adopted",
    description: "Two delegated acts defining renewable fuels of non-biological origin (RFNBO). Established the well-to-wheel CI methodology — strictest globally.",
    sourceUrl: "https://eur-lex.europa.eu",
    impact: "high",
  },
  {
    country: "EU",
    year: 2023,
    month: 10,
    type: "law",
    title: "RED III enters into force",
    description: "Renewable Energy Directive III formally enters into force with 42% RFNBO target for industry hydrogen use by 2030. Member state transposition by May 2025.",
    sourceUrl: "https://energy.ec.europa.eu",
    impact: "high",
  },
  {
    country: "EU",
    year: 2024,
    month: 4,
    type: "auction",
    title: "First European Hydrogen Bank auction concluded",
    description: "First Innovation Fund-backed auction allocated EUR 720M to 7 projects across 4 member states. Strike prices EUR 0.37-0.48/kg far below initial expectations.",
    sourceUrl: "https://climate.ec.europa.eu",
    impact: "high",
  },
  {
    country: "EU",
    year: 2025,
    month: 4,
    type: "auction",
    title: "Second European Hydrogen Bank auction",
    description: "Second auction round with expanded EUR 1.2B budget and dedicated maritime fuel lot. Demonstrated maturing of EU CfD-based incentive mechanism.",
    impact: "medium",
  },

  // ============================================
  // DE — Germany (6 events)
  // ============================================
  {
    country: "DE",
    year: 2020,
    month: 6,
    type: "strategy",
    title: "Nationale Wasserstoffstrategie adopted",
    description: "First German national hydrogen strategy with EUR 9B initial commitment. Set 5 GW electrolyzer capacity target by 2030 (later doubled).",
    sourceUrl: "https://www.bmwk.de",
    impact: "high",
  },
  {
    country: "DE",
    year: 2021,
    month: 5,
    type: "international-agreement",
    title: "H2Global Foundation established",
    description: "First import-focused hydrogen CfD globally launched via Hintco intermediary. Initial funding EUR 900M for green hydrogen imports.",
    sourceUrl: "https://www.h2-global.de",
    impact: "high",
  },
  {
    country: "DE",
    year: 2022,
    month: 7,
    type: "regulatory",
    title: "First IPCEI Hydrogen wave approved",
    description: "EU Commission approves first wave of IPCEI Hydrogen projects with EUR 5.4B German federal+state funding for 23 projects.",
    sourceUrl: "https://www.bmwk.de",
    impact: "high",
  },
  {
    country: "DE",
    year: 2023,
    month: 7,
    type: "target-revision",
    title: "National Hydrogen Strategy update — electrolyzer target doubled",
    description: "2030 domestic electrolyzer target raised from 5 GW to 10 GW. Demand forecast updated to 95-130 TWh by 2030.",
    sourceUrl: "https://www.bmwk.de",
    impact: "high",
  },
  {
    country: "DE",
    year: 2024,
    month: 7,
    type: "auction",
    title: "Hintco awards first H2Global contracts",
    description: "First H2Global purchase contracts awarded to ammonia suppliers from UAE and Egypt. Demonstrated double-auction mechanism in practice.",
    sourceUrl: "https://www.h2-global.de",
    impact: "medium",
  },
  {
    country: "DE",
    year: 2024,
    month: 10,
    type: "regulatory",
    title: "Hydrogen Core Network approved by Bundestag",
    description: "EUR 19.7B Wasserstoff-Kernnetz approved for 9,040 km hydrogen pipeline network by 2032. Largest single national hydrogen infrastructure commitment globally.",
    sourceUrl: "https://www.bmwk.de",
    impact: "high",
  },

  // ============================================
  // FR — France (5 events)
  // ============================================
  {
    country: "FR",
    year: 2020,
    month: 9,
    type: "strategy",
    title: "Strategie nationale hydrogene decarbone launched",
    description: "EUR 7.2B initial commitment over 10 years. Established target of 6.5 GW electrolyzer by 2030 with nuclear-powered electrolysis recognized as low-carbon.",
    sourceUrl: "https://www.ecologie.gouv.fr",
    impact: "high",
  },
  {
    country: "FR",
    year: 2022,
    month: 10,
    type: "international-agreement",
    title: "France-led nuclear hydrogen alliance",
    description: "11 EU member states sign declaration on nuclear-powered hydrogen at Council of EU. Pushed for nuclear electrolysis recognition in RED III final text.",
    sourceUrl: "https://www.ecologie.gouv.fr",
    impact: "medium",
  },
  {
    country: "FR",
    year: 2023,
    month: 9,
    type: "target-revision",
    title: "France 2030 hydrogen budget increased",
    description: "Total hydrogen plan budget raised from EUR 7.2B to EUR 9B with additional EUR 4B allocated to industrial deployment.",
    sourceUrl: "https://www.economie.gouv.fr",
    impact: "high",
  },
  {
    country: "FR",
    year: 2024,
    month: 4,
    type: "regulatory",
    title: "First French Hydrogen Bank lot awarded",
    description: "Lhyfe project in Bretagne wins EU Hydrogen Bank auction. Demonstrated French project competitiveness despite higher electricity costs.",
    impact: "medium",
  },
  {
    country: "FR",
    year: 2025,
    month: 2,
    type: "regulatory",
    title: "Nuclear electrolysis pathway clarified",
    description: "France obtains formal EU Commission clarification on RFNBO eligibility for nuclear-powered electrolysis under specific grid conditions.",
    impact: "high",
  },

  // ============================================
  // UK — United Kingdom (6 events)
  // ============================================
  {
    country: "UK",
    year: 2021,
    month: 8,
    type: "strategy",
    title: "UK Hydrogen Strategy published",
    description: "Post-Brexit independent strategy establishing twin-track (green + blue) approach. 10 GW production target by 2030, at least half electrolytic.",
    sourceUrl: "https://www.gov.uk/government/publications/uk-hydrogen-strategy",
    impact: "high",
  },
  {
    country: "UK",
    year: 2022,
    month: 4,
    type: "target-revision",
    title: "British Energy Security Strategy doubles target",
    description: "Hydrogen production target doubled from 5 GW to 10 GW by 2030 in response to gas price crisis.",
    sourceUrl: "https://www.gov.uk",
    impact: "high",
  },
  {
    country: "UK",
    year: 2023,
    month: 4,
    type: "auction",
    title: "First HAR auction winners announced",
    description: "First Hydrogen Allocation Round selects 11 electrolytic projects (125 MW) for HBM CfD with avg GBP 7.40/kg strike (initially GBP 9.50/kg).",
    sourceUrl: "https://www.gov.uk/government/publications/hydrogen-business-model",
    impact: "high",
  },
  {
    country: "UK",
    year: 2023,
    month: 12,
    type: "regulatory",
    title: "Low Carbon Hydrogen Standard finalized",
    description: "WTG CI threshold of 20 gCO2e/MJ LHV established as eligibility for HBM. Aligned partially with EU RFNBO but allows nuclear pathway.",
    impact: "medium",
  },
  {
    country: "UK",
    year: 2024,
    month: 12,
    type: "auction",
    title: "Second HAR auction concluded",
    description: "HAR2 round allocated CfD support to 27 projects (765 MW), expanding from first auction's scope to include heavy industry and transport applications.",
    impact: "high",
  },
  {
    country: "UK",
    year: 2025,
    month: 6,
    type: "amendment",
    title: "HBM eligibility expanded to CCUS-paired hydrogen",
    description: "Following industry consultation, blue hydrogen projects paired with North Sea CCUS storage become explicitly eligible for HBM CfD.",
    impact: "medium",
  },

  // ============================================
  // JP — Japan (6 events)
  // ============================================
  {
    country: "JP",
    year: 2017,
    month: 12,
    type: "strategy",
    title: "Basic Hydrogen Strategy adopted",
    description: "World's first national hydrogen strategy. Established hydrogen society vision and import-focused supply chain.",
    sourceUrl: "https://www.meti.go.jp/english/policy/energy_environment/hydrogen/index.html",
    impact: "high",
  },
  {
    country: "JP",
    year: 2020,
    month: 10,
    type: "target-revision",
    title: "Carbon Neutrality 2050 declaration includes hydrogen",
    description: "PM Suga announces 2050 net-zero target, positioning hydrogen and ammonia as key decarbonization pillars. Triggered METI Green Growth Strategy.",
    impact: "high",
  },
  {
    country: "JP",
    year: 2021,
    month: 6,
    type: "strategy",
    title: "Green Growth Strategy — Hydrogen sector plan",
    description: "Sets 3 Mt/yr supply target by 2030, 20 Mt by 2050. Designates hydrogen as one of 14 priority growth sectors with JPY 2 trillion Green Innovation Fund.",
    sourceUrl: "https://www.meti.go.jp",
    impact: "high",
  },
  {
    country: "JP",
    year: 2023,
    month: 6,
    type: "amendment",
    title: "Basic Hydrogen Strategy revised",
    description: "Major revision adds CfD mechanism, AZEC framework, supply chain commitments. JPY 15 trillion (incl. JPY 3 trillion public) over 15 years committed.",
    sourceUrl: "https://www.meti.go.jp",
    impact: "high",
  },
  {
    country: "JP",
    year: 2024,
    month: 5,
    type: "law",
    title: "Hydrogen Society Promotion Act enacted",
    description: "Provides legal basis for JPY 3 trillion CfD subsidy budget. Established 15-year contract framework for hydrogen and ammonia.",
    sourceUrl: "https://www.meti.go.jp",
    impact: "high",
  },
  {
    country: "JP",
    year: 2025,
    month: 3,
    type: "auction",
    title: "First Hydrogen CfD recipients selected",
    description: "METI announced first batch of CfD recipients focusing on ammonia co-firing at coal plants and large-scale imports from Australia/Middle East.",
    impact: "high",
  },

  // ============================================
  // AU — Australia (6 events)
  // ============================================
  {
    country: "AU",
    year: 2019,
    month: 11,
    type: "strategy",
    title: "First National Hydrogen Strategy adopted",
    description: "COAG Energy Council strategy positioning Australia as major hydrogen exporter. Bipartisan support unusual in Australian energy policy.",
    sourceUrl: "https://www.dcceew.gov.au/energy/hydrogen/national-hydrogen-strategy",
    impact: "high",
  },
  {
    country: "AU",
    year: 2021,
    month: 11,
    type: "international-agreement",
    title: "Australia-Japan hydrogen supply chain MOU",
    description: "Bilateral agreement formalizing Australia as priority hydrogen supplier to Japan. Underpinned subsequent NH3 export projects.",
    impact: "medium",
  },
  {
    country: "AU",
    year: 2023,
    month: 5,
    type: "strategy",
    title: "Hydrogen Headstart Program announced",
    description: "A$2B production credit program in Federal Budget. First major production-based CfD in Australia, targeting large-scale renewable hydrogen.",
    sourceUrl: "https://www.dcceew.gov.au",
    impact: "high",
  },
  {
    country: "AU",
    year: 2024,
    month: 5,
    type: "strategy",
    title: "Future Made in Australia announced",
    description: "A$22.7B industrial policy framework with A$8B for Hydrogen Production Tax Incentive (HPTI). Production credit of A$2/kg over 10 years.",
    sourceUrl: "https://www.dcceew.gov.au",
    impact: "high",
  },
  {
    country: "AU",
    year: 2024,
    month: 9,
    type: "amendment",
    title: "Revised National Hydrogen Strategy released",
    description: "2019 strategy replaced with updated version aligned with Future Made in Australia. Adds export hub designation framework.",
    impact: "high",
  },
  {
    country: "AU",
    year: 2025,
    month: 4,
    type: "auction",
    title: "First H2 Headstart conditional offers",
    description: "ARENA announces first round conditional offers to 2-3 large-scale projects. Marked operational launch of Australia's largest hydrogen subsidy.",
    impact: "high",
  },

  // ============================================
  // CA — Canada (5 events)
  // ============================================
  {
    country: "CA",
    year: 2020,
    month: 12,
    type: "strategy",
    title: "Hydrogen Strategy for Canada released",
    description: "Federal strategy positioning Canada as top-3 global hydrogen producer. Both blue (Alberta CCS) and green pathways supported.",
    sourceUrl: "https://www.nrcan.gc.ca/climate-change/canadas-green-future/the-hydrogen-strategy/23080",
    impact: "high",
  },
  {
    country: "CA",
    year: 2022,
    month: 8,
    type: "international-agreement",
    title: "Canada-Germany Hydrogen Alliance signed",
    description: "Joint declaration of intent for hydrogen exports from Atlantic Canada to Germany by 2025. Anchored Bear Head LNG/H2 and EverWind projects.",
    impact: "medium",
  },
  {
    country: "CA",
    year: 2023,
    month: 3,
    type: "law",
    title: "Clean Hydrogen ITC announced in Budget 2023",
    description: "15-40% Investment Tax Credit based on CI tiers. Legislated through Bill C-59 in 2024.",
    sourceUrl: "https://www.canada.ca",
    impact: "high",
  },
  {
    country: "CA",
    year: 2024,
    month: 6,
    type: "law",
    title: "Clean Hydrogen ITC enacted via Bill C-59",
    description: "ITC formally enters force. 4-tier structure (15/25/35/40%) based on lifecycle CI. Investment-stage incentive complementing production-stage policies elsewhere.",
    sourceUrl: "https://laws-lois.justice.gc.ca",
    impact: "high",
  },
  {
    country: "CA",
    year: 2025,
    month: 3,
    type: "amendment",
    title: "Quebec hydrogen strategy provincial alignment",
    description: "Quebec releases provincial hydrogen strategy aligned with federal ITC. Adds province-specific incentive on top of federal credit for green projects.",
    impact: "medium",
  },

  // ============================================
  // SA — Saudi Arabia (5 events)
  // ============================================
  {
    country: "SA",
    year: 2020,
    month: 7,
    type: "strategy",
    title: "NEOM Green Hydrogen Project announced",
    description: "$5B JV between ACWA Power, Air Products, NEOM. World's largest announced green hydrogen project at 600 t/day output.",
    sourceUrl: "https://www.neom.com",
    impact: "high",
  },
  {
    country: "SA",
    year: 2021,
    month: 10,
    type: "strategy",
    title: "Saudi Green Initiative includes hydrogen",
    description: "Crown Prince Mohammed bin Salman positions hydrogen as key export commodity within Vision 2030. No specific CI threshold or per-kg subsidy.",
    sourceUrl: "https://www.greeninitiatives.gov.sa",
    impact: "high",
  },
  {
    country: "SA",
    year: 2023,
    month: 5,
    type: "regulatory",
    title: "NEOM Green Hydrogen Company FID achieved",
    description: "$8.4B financial close for NEOM Green Hydrogen Project. World's largest project financing for green hydrogen at time of close.",
    sourceUrl: "https://www.neom.com",
    impact: "high",
  },
  {
    country: "SA",
    year: 2024,
    month: 3,
    type: "international-agreement",
    title: "Saudi-Korea hydrogen partnership",
    description: "MOU between Saudi Arabia and Korea on hydrogen supply chain. POSCO and ACWA Power explore joint green ammonia projects.",
    impact: "medium",
  },
  {
    country: "SA",
    year: 2026,
    month: 1,
    type: "international-agreement",
    title: "NEOM expected commercial operation date",
    description: "Originally targeted COD for NEOM Green Hydrogen Project. Status: under construction, monitoring for delays.",
    impact: "high",
  },

  // ============================================
  // CN — China (6 events)
  // ============================================
  {
    country: "CN",
    year: 2019,
    month: 3,
    type: "regulatory",
    title: "Hydrogen added to Government Work Report",
    description: "First explicit national-level mention of hydrogen in annual Government Work Report. Signaled central government support.",
    impact: "medium",
  },
  {
    country: "CN",
    year: 2022,
    month: 3,
    type: "roadmap",
    title: "Hydrogen Plan 2021-2035 released",
    description: "First medium- and long-term plan from NDRC. Set 100-200 kt/yr green hydrogen target by 2025 but delegated implementation to provinces.",
    sourceUrl: "https://www.ndrc.gov.cn",
    impact: "high",
  },
  {
    country: "CN",
    year: 2022,
    month: 6,
    type: "regulatory",
    title: "Shandong issues provincial hydrogen subsidy",
    description: "First major provincial hydrogen subsidy in Shandong. Up to RMB 30M per FCEV station, RMB 20/kg green H2 production subsidy.",
    impact: "medium",
  },
  {
    country: "CN",
    year: 2023,
    month: 11,
    type: "regulatory",
    title: "Inner Mongolia green hydrogen mandate",
    description: "Inner Mongolia mandates min. 30% green hydrogen for new petrochemical projects above 100 kt/yr. Largest provincial-level mandate.",
    impact: "high",
  },
  {
    country: "CN",
    year: 2024,
    month: 4,
    type: "regulatory",
    title: "Green hydrogen production reaches 100 kt threshold",
    description: "Bloomberg NEF reports China cumulative green hydrogen production capacity exceeds 100 kt/yr — meeting 2025 plan target one year early.",
    impact: "medium",
  },
  {
    country: "CN",
    year: 2025,
    month: 5,
    type: "international-agreement",
    title: "China-EU hydrogen technology dialogue",
    description: "First high-level dialogue on hydrogen technology cooperation between China NDRC and EU DG ENER. Focused on electrolyzer manufacturing standards.",
    impact: "low",
  },
];

// ============================================
// Helpers
// ============================================

export function getHistoryByCountry(country: string): PolicyHistoryEvent[] {
  return POLICY_HISTORY_EVENTS.filter((e) => e.country === country);
}

export function getHistoryByCountryGroupedByYear(
  country: string
): Map<number, PolicyHistoryEvent[]> {
  const events = getHistoryByCountry(country);
  const grouped = new Map<number, PolicyHistoryEvent[]>();
  for (const e of events) {
    const arr = grouped.get(e.year) ?? [];
    arr.push(e);
    grouped.set(e.year, arr);
  }
  // Sort each year's events by month (if available)
  grouped.forEach((arr) => {
    arr.sort((a, b) => (a.month ?? 0) - (b.month ?? 0));
  });
  return grouped;
}
