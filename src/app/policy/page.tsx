"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import { ModeToggle, type PolicyMode } from "@/components/policy/mode-toggle";
import { CountrySelector } from "@/components/policy/country-selector";
import { ThemeCard } from "@/components/policy/theme-card";
import { Heatmap } from "@/components/policy/heatmap";
import { ComparisonMatrix } from "@/components/policy/comparison-matrix";
import { Timeline } from "@/components/policy/timeline";
import { CountryDetails } from "@/components/policy/country-details";
import { Mode2Container } from "@/components/policy/mode2-container";
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

  const [detailsSelection, setDetailsSelection] = useState<string>("country:US");

  const handleSelectPolicy = (policyId: string) => {
    setDetailsSelection("policy:" + policyId);
  };

  const handleSelectCountryFromHeatmap = (code: CountryCode) => {
    setDetailsSelection("country:" + code);
  };

  const highlightedPolicyId = detailsSelection.startsWith("policy:")
    ? detailsSelection.slice("policy:".length)
    : null;

  const highlightedCountry: CountryCode | null = detailsSelection.startsWith("country:")
    ? (detailsSelection.slice("country:".length) as CountryCode)
    : null;

  return (
    <div className="mx-auto max-w-7xl space-y-4 px-8 py-8">
      <header className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-3">
          <Scale className="h-6 w-6 text-foreground" />
          <div>
            <h1 className="text-xl font-medium tracking-tight">
              Policy Tracker
            </h1>
            <p className="text-xs text-muted-foreground">
              Clean Hydrogen - 11 countries - 5 dimensions
            </p>
          </div>
        </div>
        <ModeToggle mode={mode} onModeChange={setMode} />
      </header>

      {mode === "comparison" && (
        <>
          <CountrySelector
            selected={selectedCountries}
            onChange={setSelectedCountries}
          />
          <ThemeCard selected={selectedCountries} />

          <Heatmap
            selectedCountries={selectedCountries}
            selectedCountry={highlightedCountry}
            onSelectCountry={handleSelectCountryFromHeatmap}
          />

          <ComparisonMatrix
            selectedCountries={selectedCountries}
            selectedPolicyId={highlightedPolicyId}
            onSelectPolicy={handleSelectPolicy}
          />

          <Timeline selectedCountries={selectedCountries} />

          <CountryDetails
            selection={detailsSelection}
            onSelectionChange={setDetailsSelection}
          />
        </>
      )}

      {mode === "deep-dive" && (
        <Mode2Container initialCountry={highlightedCountry ?? "KR"} />
      )}
    </div>
  );
}
