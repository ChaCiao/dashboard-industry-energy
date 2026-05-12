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

// Country-level aggregated attractiveness assessment.
export type CountryAttractiveness = {
  country: CountryCode;
  scores: AttractivenessScore;
  aiAnalysis: AIAnalysis;
};

// National-level framework (hydrogen law, strategy, roadmap).
// Distinct from individual policies — represents the top-level vision.
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

// Scoring methodology for tooltips and Methodology section.
export type ScoringDimensionMeta = {
  key: keyof AttractivenessScore;
  shortLabel: string;
  fullLabel: string;
  definition: string;
  scaleDescription: string[];
};
