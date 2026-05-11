// Type definitions for the LCOH calculator.
// Detailed types will be added in S4.

export type ElectrolyzerType = "PEM" | "Alkaline" | "SOEC" | "AEM";
export type ProductionPathway = "PEM" | "Alkaline" | "SMR+CCS" | "ATR+CCS";

// Placeholder - to be expanded in S4
export type LCOHInputs = {
  startYear: number;
  country: string;
  wacc: number;
  economicLife: number;
};

export type LCOHOutputs = {
  lcohUSDPerKg: number;
};
