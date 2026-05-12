// Policy governance — government agencies responsible for hydrogen policy.
// Lead / Supporting / Implementing structure to aid MI team policy outreach.

import type { PolicyGovernance } from "@/types/policy";

export const POLICY_GOVERNANCE: PolicyGovernance[] = [
  // ============================================
  // KR — Korea
  // ============================================
  {
    country: "KR",
    leadAgency: {
      shortName: "MOTIE",
      fullName: "Ministry of Trade, Industry and Energy",
      role: "Lead authority for the Hydrogen Law, Master Plan, and CHPS oversight. Sets hydrogen industry strategy.",
      url: "https://www.motie.go.kr",
    },
    supportingAgencies: [
      {
        shortName: "ME",
        fullName: "Ministry of Environment",
        role: "Clean Hydrogen Certification CI methodology and emissions standards.",
        url: "https://www.me.go.kr",
      },
      {
        shortName: "MOLIT",
        fullName: "Ministry of Land, Infrastructure and Transport",
        role: "HRS deployment, hydrogen distribution infrastructure, transport regulations.",
        url: "https://www.molit.go.kr",
      },
      {
        shortName: "MOEF",
        fullName: "Ministry of Economy and Finance",
        role: "Budget allocation, tax incentives, fiscal coordination for hydrogen projects.",
        url: "https://www.moef.go.kr",
      },
    ],
    implementingBodies: [
      {
        shortName: "KEA",
        fullName: "Korea Energy Agency",
        role: "CHPS auction operator and clean hydrogen certification administrator.",
        url: "https://www.energy.or.kr",
      },
      {
        shortName: "H2KOREA",
        fullName: "Korea Hydrogen Industry Association",
        role: "Industry-government coordination, public-private project facilitation.",
        url: "https://h2korea.or.kr",
      },
      {
        shortName: "KIER",
        fullName: "Korea Institute of Energy Research",
        role: "National research lab for hydrogen technology R&D.",
        url: "https://www.kier.re.kr",
      },
    ],
    notes: "MOTIE-led with strong inter-ministry coordination. 5-year master plan mandated by Hydrogen Law structures policy continuity.",
  },

  // ============================================
  // US — United States
  // ============================================
  {
    country: "US",
    leadAgency: {
      shortName: "DOE",
      fullName: "Department of Energy",
      role: "National Clean Hydrogen Strategy and Roadmap. Hydrogen Shot, Hubs program, R&D coordination.",
      url: "https://www.energy.gov",
    },
    supportingAgencies: [
      {
        shortName: "Treasury",
        fullName: "Department of the Treasury / IRS",
        role: "IRA 45V Production Tax Credit guidance and administration. CI methodology rules.",
        url: "https://home.treasury.gov",
      },
      {
        shortName: "EPA",
        fullName: "Environmental Protection Agency",
        role: "Greenhouse gas emissions methodology, GREET model coordination.",
        url: "https://www.epa.gov",
      },
      {
        shortName: "DOT",
        fullName: "Department of Transportation",
        role: "Heavy-duty FCEV deployment programs, hydrogen safety standards.",
        url: "https://www.transportation.gov",
      },
    ],
    implementingBodies: [
      {
        shortName: "OCED",
        fullName: "Office of Clean Energy Demonstrations",
        role: "DOE Regional Clean Hydrogen Hubs ($7B BIL) negotiation and disbursement.",
        url: "https://www.energy.gov/oced",
      },
      {
        shortName: "LPO",
        fullName: "Loan Programs Office",
        role: "Loan guarantees for large-scale clean hydrogen projects.",
        url: "https://www.energy.gov/lpo",
      },
      {
        shortName: "NREL",
        fullName: "National Renewable Energy Laboratory",
        role: "Technical analysis, GREET-related modeling, technology benchmarking.",
        url: "https://www.nrel.gov",
      },
    ],
    notes: "DOE leads strategy but Treasury holds 45V interpretation power. Administration changes create CI methodology volatility.",
  },

  // ============================================
  // EU — European Union
  // ============================================
  {
    country: "EU",
    leadAgency: {
      shortName: "DG ENER",
      fullName: "European Commission DG Energy",
      role: "EU Hydrogen Strategy lead, REPowerEU coordination, energy security framework.",
      url: "https://energy.ec.europa.eu",
    },
    supportingAgencies: [
      {
        shortName: "DG CLIMA",
        fullName: "European Commission DG Climate Action",
        role: "RFNBO Delegated Acts, CBAM administration, EU ETS for hydrogen.",
        url: "https://climate.ec.europa.eu",
      },
      {
        shortName: "DG GROW",
        fullName: "European Commission DG Internal Market and Industry",
        role: "Industrial policy, IPCEI coordination, Net-Zero Industry Act.",
        url: "https://single-market-economy.ec.europa.eu",
      },
      {
        shortName: "DG MOVE",
        fullName: "European Commission DG Mobility and Transport",
        role: "FuelEU Maritime, alternative fuels infrastructure, hydrogen in transport.",
        url: "https://transport.ec.europa.eu",
      },
    ],
    implementingBodies: [
      {
        shortName: "CINEA",
        fullName: "European Climate, Infrastructure and Environment Executive Agency",
        role: "European Hydrogen Bank auction execution, Innovation Fund management.",
        url: "https://cinea.ec.europa.eu",
      },
      {
        shortName: "ACER",
        fullName: "Agency for the Cooperation of Energy Regulators",
        role: "Hydrogen market regulation, network code development.",
        url: "https://www.acer.europa.eu",
      },
      {
        shortName: "Clean Hydrogen Partnership",
        fullName: "Clean Hydrogen Joint Undertaking",
        role: "Horizon Europe public-private R&I partnership for hydrogen technology.",
        url: "https://www.clean-hydrogen.europa.eu",
      },
    ],
    notes: "Multi-DG coordination required. RFNBO certification administered by member states under Commission guidelines.",
  },

  // ============================================
  // DE — Germany
  // ============================================
  {
    country: "DE",
    leadAgency: {
      shortName: "BMWK",
      fullName: "Federal Ministry for Economic Affairs and Climate Action",
      role: "National Hydrogen Strategy oversight, H2Global and IPCEI funding decisions.",
      url: "https://www.bmwk.de",
    },
    supportingAgencies: [
      {
        shortName: "BMUV",
        fullName: "Federal Ministry for the Environment, Nature Conservation, Nuclear Safety and Consumer Protection",
        role: "Environmental approvals, emissions methodology for hydrogen projects.",
        url: "https://www.bmuv.de",
      },
      {
        shortName: "BMDV",
        fullName: "Federal Ministry for Digital and Transport",
        role: "Hydrogen mobility deployment, HRS network planning.",
        url: "https://www.bmdv.bund.de",
      },
      {
        shortName: "BMF",
        fullName: "Federal Ministry of Finance",
        role: "Budget for Hydrogen Core Network (EUR 19.7B), fiscal coordination.",
        url: "https://www.bundesfinanzministerium.de",
      },
    ],
    implementingBodies: [
      {
        shortName: "Hintco",
        fullName: "Hydrogen Intermediary Network Company (H2Global)",
        role: "Double-auction executor for international green hydrogen procurement.",
        url: "https://www.h2-global.de",
      },
      {
        shortName: "FNB Gas",
        fullName: "Association of Gas Transmission System Operators",
        role: "Hydrogen Core Network operator (Wasserstoff-Kernnetz).",
        url: "https://www.fnb-gas.de",
      },
      {
        shortName: "PtJ",
        fullName: "Project Management Juelich",
        role: "Federal R&D funding administrator for hydrogen programs.",
        url: "https://www.ptj.de",
      },
    ],
    notes: "Strong federal-Lander coordination; states (NRW, NS, Bayern) operate parallel hydrogen strategies. EU framework applied on top.",
  },

  // ============================================
  // FR — France
  // ============================================
  {
    country: "FR",
    leadAgency: {
      shortName: "MTECT",
      fullName: "Ministry for Ecological Transition and Territorial Cohesion",
      role: "France 2030 hydrogen plan lead, nuclear electrolysis pathway advocacy.",
      url: "https://www.ecologie.gouv.fr",
    },
    supportingAgencies: [
      {
        shortName: "MEFR",
        fullName: "Ministry of the Economy, Finance and Industrial and Digital Sovereignty",
        role: "Industrial policy for hydrogen, France 2030 budget coordination.",
        url: "https://www.economie.gouv.fr",
      },
      {
        shortName: "MENESR",
        fullName: "Ministry of Higher Education and Research",
        role: "Hydrogen R&D coordination, university-industry partnerships.",
        url: "https://www.enseignementsup-recherche.gouv.fr",
      },
    ],
    implementingBodies: [
      {
        shortName: "ADEME",
        fullName: "French Agency for Ecological Transition",
        role: "Hydrogen project funding, RFNBO certification administration, environmental analysis.",
        url: "https://www.ademe.fr",
      },
      {
        shortName: "BPI",
        fullName: "Bpifrance (French Public Investment Bank)",
        role: "Hydrogen project financing, France 2030 investment fund management.",
        url: "https://www.bpifrance.fr",
      },
      {
        shortName: "CEA",
        fullName: "French Alternative Energies and Atomic Energy Commission",
        role: "Nuclear-coupled hydrogen R&D, advanced electrolysis technology.",
        url: "https://www.cea.fr",
      },
    ],
    notes: "Nuclear-renewable dual pathway requires coordination with EDF (state-owned). EU RED III applied on top of national framework.",
  },

  // ============================================
  // UK — United Kingdom
  // ============================================
  {
    country: "UK",
    leadAgency: {
      shortName: "DESNZ",
      fullName: "Department for Energy Security and Net Zero",
      role: "UK Hydrogen Strategy, Hydrogen Business Model (HBM), Low Carbon Hydrogen Standard.",
      url: "https://www.gov.uk/government/organisations/department-for-energy-security-and-net-zero",
    },
    supportingAgencies: [
      {
        shortName: "HM Treasury",
        fullName: "Her Majesty's Treasury",
        role: "HBM CfD budget allocation, CCUS funding, fiscal framework.",
        url: "https://www.gov.uk/government/organisations/hm-treasury",
      },
      {
        shortName: "DEFRA",
        fullName: "Department for Environment, Food and Rural Affairs",
        role: "Environmental permitting, emissions reporting for hydrogen facilities.",
        url: "https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs",
      },
      {
        shortName: "DfT",
        fullName: "Department for Transport",
        role: "Hydrogen mobility, HRS deployment, maritime and aviation pathways.",
        url: "https://www.gov.uk/government/organisations/department-for-transport",
      },
    ],
    implementingBodies: [
      {
        shortName: "Ofgem",
        fullName: "Office of Gas and Electricity Markets",
        role: "HBM CfD scheme operation, low carbon hydrogen standard administration.",
        url: "https://www.ofgem.gov.uk",
      },
      {
        shortName: "LCCC",
        fullName: "Low Carbon Contracts Company",
        role: "HBM contract counterparty, allocation round administration.",
        url: "https://www.lowcarboncontracts.uk",
      },
      {
        shortName: "Innovate UK",
        fullName: "Innovate UK (UKRI)",
        role: "Net Zero Hydrogen Fund and innovation grants.",
        url: "https://www.ukri.org/councils/innovate-uk",
      },
    ],
    notes: "Post-Brexit independent design. Twin-track (green + blue) approach requires CCUS coordination with DESNZ Track-1/Track-2 clusters.",
  },

  // ============================================
  // JP — Japan
  // ============================================
  {
    country: "JP",
    leadAgency: {
      shortName: "METI",
      fullName: "Ministry of Economy, Trade and Industry",
      role: "Basic Hydrogen Strategy, Hydrogen Society Promotion Act, CfD administration.",
      url: "https://www.meti.go.jp",
    },
    supportingAgencies: [
      {
        shortName: "MOE",
        fullName: "Ministry of the Environment",
        role: "Carbon neutrality framework, emissions accounting for hydrogen.",
        url: "https://www.env.go.jp",
      },
      {
        shortName: "MLIT",
        fullName: "Ministry of Land, Infrastructure, Transport and Tourism",
        role: "HRS network, hydrogen ports (Kobe, Yokohama), maritime regulations.",
        url: "https://www.mlit.go.jp",
      },
      {
        shortName: "MOFA",
        fullName: "Ministry of Foreign Affairs",
        role: "AZEC framework, bilateral hydrogen agreements (Australia, Middle East, ASEAN).",
        url: "https://www.mofa.go.jp",
      },
    ],
    implementingBodies: [
      {
        shortName: "NEDO",
        fullName: "New Energy and Industrial Technology Development Organization",
        role: "Green Innovation Fund (JPY 2 trillion) management, hydrogen R&D.",
        url: "https://www.nedo.go.jp",
      },
      {
        shortName: "JOGMEC",
        fullName: "Japan Organization for Metals and Energy Security",
        role: "Overseas hydrogen supply chain financing, equity participation in foreign projects.",
        url: "https://www.jogmec.go.jp",
      },
      {
        shortName: "ANRE",
        fullName: "Agency for Natural Resources and Energy",
        role: "METI subsidiary; CfD recipient selection, energy resource policy.",
        url: "https://www.enecho.meti.go.jp",
      },
    ],
    notes: "Strong METI-led centralization. Trading houses (Mitsubishi, Mitsui, Sumitomo) function as de facto implementing partners.",
  },

  // ============================================
  // AU — Australia
  // ============================================
  {
    country: "AU",
    leadAgency: {
      shortName: "DCCEEW",
      fullName: "Department of Climate Change, Energy, the Environment and Water",
      role: "National Hydrogen Strategy, Hydrogen Headstart program, Future Made in Australia hydrogen pillar.",
      url: "https://www.dcceew.gov.au",
    },
    supportingAgencies: [
      {
        shortName: "Treasury",
        fullName: "Department of the Treasury",
        role: "Hydrogen Production Tax Incentive (HPTI) administration, fiscal coordination.",
        url: "https://treasury.gov.au",
      },
      {
        shortName: "DISR",
        fullName: "Department of Industry, Science and Resources",
        role: "Industrial policy, critical minerals coordination for hydrogen value chain.",
        url: "https://www.industry.gov.au",
      },
    ],
    implementingBodies: [
      {
        shortName: "ARENA",
        fullName: "Australian Renewable Energy Agency",
        role: "Hydrogen Headstart conditional offers, R&D grant administration.",
        url: "https://arena.gov.au",
      },
      {
        shortName: "CEFC",
        fullName: "Clean Energy Finance Corporation",
        role: "Equity and debt financing for hydrogen project development.",
        url: "https://www.cefc.com.au",
      },
      {
        shortName: "EFA",
        fullName: "Export Finance Australia",
        role: "Export credit support for hydrogen and ammonia supply contracts.",
        url: "https://www.exportfinance.gov.au",
      },
    ],
    notes: "Federal-state coordination important; WA, QLD, SA, NSW operate parallel hydrogen strategies with state-specific incentives.",
  },

  // ============================================
  // CA — Canada
  // ============================================
  {
    country: "CA",
    leadAgency: {
      shortName: "NRCan",
      fullName: "Natural Resources Canada",
      role: "Hydrogen Strategy for Canada lead, R&D coordination, federal-provincial liaison.",
      url: "https://www.nrcan.gc.ca",
    },
    supportingAgencies: [
      {
        shortName: "ECCC",
        fullName: "Environment and Climate Change Canada",
        role: "Clean Fuel Regulations, GHG accounting for hydrogen CI tiers.",
        url: "https://www.canada.ca/en/environment-climate-change.html",
      },
      {
        shortName: "Finance Canada",
        fullName: "Department of Finance Canada",
        role: "Clean Hydrogen ITC administration, tax credit oversight.",
        url: "https://www.canada.ca/en/department-finance.html",
      },
      {
        shortName: "ISED",
        fullName: "Innovation, Science and Economic Development Canada",
        role: "Strategic Innovation Fund, industrial decarbonization support.",
        url: "https://ised-isde.canada.ca",
      },
    ],
    implementingBodies: [
      {
        shortName: "CRA",
        fullName: "Canada Revenue Agency",
        role: "Clean H2 ITC claims administration, CI verification protocols.",
        url: "https://www.canada.ca/en/revenue-agency.html",
      },
      {
        shortName: "NRC",
        fullName: "National Research Council Canada",
        role: "Hydrogen technology R&D, standards development.",
        url: "https://nrc.canada.ca",
      },
    ],
    notes: "Strong provincial role: Alberta (blue), Quebec (green via hydro), BC (transport), NS (export) each operate provincial hydrogen plans.",
  },

  // ============================================
  // SA — Saudi Arabia
  // ============================================
  {
    country: "SA",
    leadAgency: {
      shortName: "MEIM",
      fullName: "Ministry of Energy",
      role: "Vision 2030 hydrogen sub-strategy, project selection oversight.",
      url: "https://www.moenergy.gov.sa",
    },
    supportingAgencies: [
      {
        shortName: "MIM",
        fullName: "Ministry of Industry and Mineral Resources",
        role: "Industrial policy alignment, Jubail and Yanbu hydrogen industrial zones.",
        url: "https://www.mim.gov.sa",
      },
      {
        shortName: "MOI",
        fullName: "Ministry of Investment",
        role: "Foreign investment promotion, project incentive structuring.",
        url: "https://www.misa.gov.sa",
      },
    ],
    implementingBodies: [
      {
        shortName: "PIF",
        fullName: "Public Investment Fund",
        role: "Sovereign equity in hydrogen projects (NEOM Green Hydrogen Co. anchor investor).",
        url: "https://www.pif.gov.sa",
      },
      {
        shortName: "NEOM",
        fullName: "NEOM Company",
        role: "NEOM Green Hydrogen Project execution, infrastructure development.",
        url: "https://www.neom.com",
      },
      {
        shortName: "KAUST",
        fullName: "King Abdullah University of Science and Technology",
        role: "Hydrogen R&D, technology partnerships with global institutions.",
        url: "https://www.kaust.edu.sa",
      },
    ],
    notes: "Project-by-project negotiation model. No standalone hydrogen law; mega-projects rely on sovereign decree and bilateral agreements.",
  },

  // ============================================
  // CN — China
  // ============================================
  {
    country: "CN",
    leadAgency: {
      shortName: "NDRC",
      fullName: "National Development and Reform Commission",
      role: "Medium- and Long-Term Plan for Hydrogen Energy 2021-2035, macro-coordination.",
      url: "https://www.ndrc.gov.cn",
    },
    supportingAgencies: [
      {
        shortName: "NEA",
        fullName: "National Energy Administration",
        role: "Energy sector hydrogen integration, electrolyzer connection rules.",
        url: "http://www.nea.gov.cn",
      },
      {
        shortName: "MIIT",
        fullName: "Ministry of Industry and Information Technology",
        role: "FCEV deployment, industrial hydrogen value chain, manufacturing capacity.",
        url: "https://www.miit.gov.cn",
      },
      {
        shortName: "MOST",
        fullName: "Ministry of Science and Technology",
        role: "Hydrogen R&D programs, key technology breakthrough plans.",
        url: "https://www.most.gov.cn",
      },
    ],
    implementingBodies: [
      {
        shortName: "Provincial DRCs",
        fullName: "Provincial Development and Reform Commissions",
        role: "Province-level subsidy schemes and hydrogen mandates (Shandong, Inner Mongolia, Hebei lead).",
      },
      {
        shortName: "CNGA",
        fullName: "China National Gas Association",
        role: "Industry standards for hydrogen gas blending, infrastructure coordination.",
      },
      {
        shortName: "CHIDA",
        fullName: "China Hydrogen Industry Development Alliance",
        role: "Industry-government coordination, technology benchmark publication.",
      },
    ],
    notes: "Highly decentralized implementation. Provincial governments (Shandong, Inner Mongolia, Hebei) drive actual subsidy mechanisms with significant variation.",
  },
];

// ============================================
// Helpers
// ============================================

export function getGovernanceByCountry(country: string): PolicyGovernance | null {
  return POLICY_GOVERNANCE.find((g) => g.country === country) ?? null;
}
