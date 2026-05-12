// Type definitions for Policy Tracker.
// Designed to support future expansion: renewable energy and carbon policies.

export type CountryCode =
  | "KR"
  | "US"
  | "EU"
  | "DE"
  | "FR"
  | "UK"
  | "JP"
  | "AU"
  | "CA"
  | "SA"
  | "CN";

export type PolicyCategory = "hydrogen" | "renewable" | "carbon";

export type PolicyType =
  | "PTC" // Production Tax Credit
  | "ITC" // Investment Tax Credit
  | "Grant"
  | "CfD" // Contract for Difference
  | "Quota"
  | "Premium"
  | "Quota+Premium"
  | "Quota+CfD"
  | "Hybrid";

export type PolicyStatus =
  | "active"
  | "pending"
  | "proposed"
  | "partial"
  | "expired";

export type Sector = "industry" | "transport" | "power" | "export" | "all";

export type StabilityLevel = "high" | "medium" | "low";

// Policy milestone for timeline visualization
export type MilestoneType = "announced" | "effective" | "review" | "end";

export type PolicyMilestone = {
  year: number;
  type: MilestoneType;
  label?: string;
};

// IRA-style tier structure (optional, for detailed incentive breakdown)
export type PolicyTier = {
  tierName: string;
  incentiveValue: string;
  condition: string;
};

// Score for heatmap (1-5 per dimension)
export type AttractivenessScore = {
  incentive: number;
  stability: number;
  scope: number;
  access: number;
  stack: number;
};

// AI analysis bullets for radar chart
export type AIAnalysis = {
  highlights: string[]; // 2-4 bullets
};

// Main Policy entity
export type Policy = {
  id: string;
  country: CountryCode;
  category: PolicyCategory;
  name: string; // e.g. "IRA 45V"
  fullName: string; // e.g. "Inflation Reduction Act Section 45V Production Tax Credit"

  // Core 7 dimensions
  type: PolicyType;
  incentiveSize: string; // human-readable, e.g. "up to $3.00/kg"
  incentiveValueUsdPerKg?: number; // numeric value for sorting, optional
  eligibility: string;
  sectors: Sector[];
  startYear: number;
  endYear: number;
  budget: string;
  status: PolicyStatus;

  // Enhancement 2
  stackable: boolean;
  stackableNote?: string;
  stability: StabilityLevel;
  stabilityNote?: string;

  // Detail dimensions (your additions)
  tierStructure?: PolicyTier[];
  reviewCycle?: string;

  // Visualization data
  scores: AttractivenessScore;
  aiAnalysis: AIAnalysis;
  milestones: PolicyMilestone[];

  // External links
  officialSourceUrl?: string;
  googleNewsQuery?: string;
  reutersQuery?: string;
};

// Country metadata for selector and display
export type CountryInfo = {
  code: CountryCode;
  name: string;
  flag: string; // emoji
  parentCode?: CountryCode; // e.g. DE's parent is EU
  isSubRegion?: boolean;
};

// Theme card data
export type PolicyTheme = {
  countries: CountryCode[]; // exact match required
  labelEn: string;
  labelKo: string;
  analysisKo: string;
};
