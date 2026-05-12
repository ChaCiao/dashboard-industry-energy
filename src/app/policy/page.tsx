// Policy Tracker page — Mode 1 (Cross-country comparison).
// Radar can show either a country (aggregated) or a specific policy.

"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import { ModeToggle, type PolicyMode } from "@/components/policy/mode-toggle";
import { CountrySelector } from "@/components/policy/country-selector";
import { ThemeCard } from "@/components/policy/theme-card";
import { ComparisonMatrix } from "@/components/policy/comparison-matrix";
import { Heatmap } from "@/components/policy/heatmap";
import { RadarProfile } from "@/components/policy/radar-profile";
import type { CountryCode } from "@/types/policy";

const DEFAULT_COUNTRIES: CountryCode[] = [
  "KR",
  "US",
  "EU",
  "JP",
  "AU",
  "CA",
  "SA",
  "CN",
  "UK",
];

export default function PolicyPage() {
  const [mode, setMode] = useState<PolicyMode>("comparison");
  const [selectedCountries, setSelectedCountries] =
    useState<CountryCode[]>(DEFAULT_COUNTRIES);

  // Radar selection: "country:KR" or "policy:us-ira45v"
  const [radarSelection, setRadarSelection] = useState<string>("country:US");

  // When user clicks a row in the matrix, switch to policy mode
  const handleSelectPolicy = (policyId: string) => {
    setRadarSelection(`policy:${policyId}`);
  };

  // Extract the policy id from radar selection (for matrix highlighting)
  const highlightedPolicyId = radarSelection.startsWith("policy:")
    ? radarSelection.slice("policy:".length)
    : null;

  return (
    <div className="mx-auto max-w-7xl space-y-4 px-8 py-8">
      {/* Header */}
      <header className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-3">
          <Scale className="h-6 w-6 text-foreground" />
          <div>
            <h1 className="text-xl font-medium tracking-tight">
              Policy Tracker
            </h1>
            <p className="text-xs text-muted-foreground">
              Clean Hydrogen · 9 countries · 11 dimensions
            </p>
          </div>
        </div>
        <ModeToggle mode={mode} onModeChange={setMode} />
      </header>

      {/* Mode 1: Cross-country comparison */}
      {mode === "comparison" && (
        <>
          <CountrySelector
            selected={selectedCountries}
            onChange={setSelectedCountries}
          />
          <ThemeCard selected={selectedCountries} />
          <ComparisonMatrix
            selectedCountries={selectedCountries}
            selectedPolicyId={highlightedPolicyId}
            onSelectPolicy={handleSelectPolicy}
          />

          <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
            <Heatmap selectedCountries={selectedCountries} />
            <RadarProfile
              selection={radarSelection}
              onSelectionChange={setRadarSelection}
            />
          </div>

          <div className="rounded-lg border border-dashed bg-card/30 p-12 text-center text-xs text-muted-foreground">
            Detail card, timeline, news box — coming in S-P5 and S-P6.
          </div>
        </>
      )}

      {/* Mode 2: Single-country deep dive (S-P7) */}
      {mode === "deep-dive" && (
        <div className="rounded-lg border border-dashed bg-card/30 p-12 text-center text-xs text-muted-foreground">
          Single-country deep dive — coming in S-P7
        </div>
      )}
    </div>
  );
}
