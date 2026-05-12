// Policy Tracker — type definitions.

export type CountryCode =
  | "KR" | "US" | "EU" | "DE" | "FR" | "UK"
  | "JP" | "AU" | "CA" | "SA" | "CN";

export type PolicyCategory = "hydrogen" | "renewable" | "carbon";

export type PolicyType =
  | "PTC" | "ITC" | "CfD" | "Quota" | "Quota+Premium"
  | "Grant" | "Hybrid" | "Tax credit";

export type PolicyStatus = "active" | "partial" | "pending" | "proposed" | "expired";

export type Sector =
  | "industry"
  | "transport"
  | "power"
  | "export"
  | "import"
  | "all";

export type StabilityLevel = "high" | "medium" | "low";

export type MilestoneType = "announced" | "effective" | "review" | "end";

export type PolicyMilestone = {
  year: number;
  type: MilestoneType;
  label?: string;
};

export type PolicyTier = {
  tierName: string;
  incentiveValue: string;
  condition: string;
};

export type AttractivenessScore = {
  incentive: number;
  stability: number;
  scope: number;
  access: number;
  stack: number;
};

export type AIAnalysis = {
  highlights: string[];
};

export type DimensionAnalysis = {
  incentive?: string[];
  stability?: string[];
  scope?: string[];
  access?: string[];
  stack?: string[];
};

export type CountryAttractiveness = {
  country: CountryCode;
  scores: AttractivenessScore;
  aiAnalysis: AIAnalysis;
  dimensionAnalysis?: DimensionAnalysis;
};

export type NationalFramework = {
  country: CountryCode;
  name: string;
  nameKo?: string;
  enactedYear: number;
  latestUpdateYear?: number;
  category: "law" | "strategy" | "roadmap" | "sub-strategy";
  summary: string;
  keyTargets: string[];
  scope: string;
  status: "in-force" | "under-revision" | "draft";
  officialSourceUrl?: string;
  notes?: string;
};

export type Policy = {
  id: string;
  country: CountryCode;
  category: PolicyCategory;
  name: string;
  fullName: string;
  type: PolicyType | string;
  incentiveSize: string;
  incentiveValueUsdPerKg?: number;
  eligibility: string;
  sectors: Sector[];
  startYear: number;
  endYear: number;
  budget: string;
  status: PolicyStatus;
  stackable: boolean;
  stackableNote?: string;
  stability: StabilityLevel;
  stabilityNote?: string;
  tierStructure?: PolicyTier[];
  reviewCycle?: string;
  scores: AttractivenessScore;
  aiAnalysis: AIAnalysis;
  milestones: PolicyMilestone[];
  officialSourceUrl?: string;
  googleNewsQuery?: string;
  reutersQuery?: string;
};

export type CountryInfo = {
  code: CountryCode;
  name: string;
  shortName: string;
  flag: string;
  parentCode?: CountryCode;
  isSubRegion?: boolean;
};

export type PolicyTheme = {
  countries: string[];
  labelEn: string;
  labelKo: string;
  analysisKo: string;
};

export type ScoringDimensionMeta = {
  key: keyof AttractivenessScore;
  shortLabel: string;
  fullLabel: string;
  definition: string;
  scaleDescription: string[];
};

// ============================================
// Mode 2 (S-P7) — types for deep-dive sections
// ============================================

export type PolicyHistoryEventType =
  | "law"
  | "strategy"
  | "roadmap"
  | "amendment"
  | "auction"
  | "target-revision"
  | "international-agreement"
  | "regulatory";

export type PolicyHistoryEvent = {
  country: CountryCode;
  year: number;
  month?: number;
  type: PolicyHistoryEventType;
  title: string;
  description: string;
  sourceUrl?: string;
  impact?: "high" | "medium" | "low";
};

export type NewsEvent = {
  country: CountryCode;
  date: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  category: "policy" | "project" | "market" | "industry" | "international";
};

// (Player/Project types kept for future Market & Industry module)
export type ValueChainSegment =
  | "production-green"
  | "production-blue"
  | "production-other"
  | "electrolyzer"
  | "infrastructure"
  | "carrier"
  | "fcev-mobility"
  | "fuel-cell"
  | "industrial-utilization"
  | "ccus"
  | "integrated";

export type CountryProject = {
  country: CountryCode;
  projectName: string;
  developer: string;
  segment: ValueChainSegment;
  scaleNote?: string;
  targetYear?: number;
  status?: "operating" | "construction" | "FID" | "announced" | "feasibility";
  sourceUrl?: string;
};

export type CountryPlayer = {
  country: CountryCode;
  companyName: string;
  segment: ValueChainSegment;
  positionNote: string;
  isDomestic?: boolean;
  sourceUrl?: string;
};

export type CountryPlayers = {
  country: CountryCode;
  players: CountryPlayer[];
  projects: CountryProject[];
};

// ============================================
// Policy Governance — Mode 2 final section
// Captures the government agencies and bodies responsible for hydrogen policy
// at lead, supporting, and implementing levels.
// ============================================

export type GovernanceAgency = {
  shortName: string;       // e.g. "MOTIE", "BMWK"
  fullName: string;        // e.g. "Ministry of Trade, Industry and Energy"
  role: string;            // Concise description of responsibility
  url?: string;            // Official website
};

export type PolicyGovernance = {
  country: CountryCode;
  leadAgency: GovernanceAgency;
  supportingAgencies: GovernanceAgency[];
  implementingBodies: GovernanceAgency[];
  notes?: string;
};
