// Policy Tracker page — Mode 1 (Cross-country comparison).
// MVP scope: Header + Country selector + Theme card.
// Other sections (matrix, heatmap, radar, detail, timeline, news) added incrementally.

"use client";

import { useState } from "react";
import { Scale } from "lucide-react";
import { ModeToggle, type PolicyMode } from "@/components/policy/mode-toggle";
import { CountrySelector } from "@/components/policy/country-selector";
import { ThemeCard } from "@/components/policy/theme-card";
import type { CountryCode } from "@/types/policy";

// Default selection on page load
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

          {/* Placeholder for next steps */}
          <div className="rounded-lg border border-dashed bg-card/30 p-12 text-center text-xs text-muted-foreground">
            Comparison matrix, heatmap, radar, detail card, timeline, news box —
            <br />
            coming in S-P3 through S-P6.
          </div>
        </>
      )}

      {/* Mode 2: Single-country deep dive (coming in S-P7) */}
      {mode === "deep-dive" && (
        <div className="rounded-lg border border-dashed bg-card/30 p-12 text-center text-xs text-muted-foreground">
          Single-country deep dive — coming in S-P7
        </div>
      )}
    </div>
  );
}
