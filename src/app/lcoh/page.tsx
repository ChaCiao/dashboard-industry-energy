// LCOH Calculator page - top section (S2-3-B)
// Header + Pathway selector + KPI cards with vertical bars.

import { Button } from "@/components/ui/button";
import { Flame, Save, Download, Check, Leaf, Droplet } from "lucide-react";
import { InputsPanel } from "@/components/lcoh/inputs-panel";
import { CostBreakdown } from "@/components/lcoh/cost-breakdown";
import { ScenarioComparison } from "@/components/lcoh/scenario-comparison";
import { SensitivityChart } from "@/components/lcoh/sensitivity-chart";
import { PeerCountryComparison } from "@/components/lcoh/peer-country-comparison";

// Mock data - will be replaced with real calculation in S3-S4
const PATHWAYS = [
  { id: "PEM", category: "Green H2", lcoh: 4.82, color: "green" },
  { id: "Alkaline", category: "Green H2", lcoh: 4.21, color: "green" },
  { id: "SMR+CCS", category: "Blue H2", lcoh: 2.15, color: "blue" },
  { id: "ATR+CCS", category: "Blue H2", lcoh: 2.34, color: "blue" },
];

const MAX_LCOH = Math.max(...PATHWAYS.map((p) => p.lcoh));

export default function LCOHPage() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-primary" />
            <span className="font-medium">LCOH Calculator</span>
            <span className="text-sm text-muted-foreground">
              · Korea · Base case 2026
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Pathway selector */}
        <div className="rounded-lg border bg-card p-4">
          <p className="mb-2 text-sm text-muted-foreground">
            Production pathways
          </p>
          <div className="flex flex-wrap gap-2">
            {PATHWAYS.map((p) => (
              <span
                key={p.id}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs ${
                  p.color === "green"
                    ? "border-green-h2-light bg-green-h2-light/20 text-green-h2-dark"
                    : "border-blue-h2-light bg-blue-h2-light/20 text-blue-h2-dark"
                }`}
              >
                <Check className="h-3 w-3" />
                {p.id}
              </span>
            ))}
          </div>
        </div>

        {/* KPI cards with vertical bars */}
        <div className="rounded-lg border bg-card p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium">Levelized cost of hydrogen</p>
            <p className="text-xs text-muted-foreground">USD per kg H2</p>
          </div>

          <div className="grid h-52 grid-cols-4 items-end gap-4">
            {PATHWAYS.map((p) => {
              const heightPct = (p.lcoh / MAX_LCOH) * 100;
              const isGreen = p.color === "green";
              return (
                <div
                  key={p.id}
                  className="flex h-full flex-col items-center justify-end"
                >
                  <span className="mb-1 text-xs text-muted-foreground">
                    ${p.lcoh.toFixed(2)}
                  </span>
                  <div
                    className={`w-[70%] rounded-t ${
                      isGreen ? "bg-green-h2" : "bg-blue-h2"
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                  <div className="mt-2 flex flex-col items-center gap-0.5">
                    <span className="text-sm font-medium flex items-center gap-1">
                      {isGreen ? (
                        <Leaf className="h-3 w-3" />
                      ) : (
                        <Droplet className="h-3 w-3" />
                      )}
                      {p.id}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {p.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gap analysis */}
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>
              Best green:{" "}
              <strong className="text-green-h2-dark">
                $
                {Math.min(
                  ...PATHWAYS.filter((p) => p.color === "green").map(
                    (p) => p.lcoh,
                  ),
                ).toFixed(2)}
              </strong>
            </span>
            <span>
              Best blue:{" "}
              <strong className="text-blue-h2-dark">
                $
                {Math.min(
                  ...PATHWAYS.filter((p) => p.color === "blue").map(
                    (p) => p.lcoh,
                  ),
                ).toFixed(2)}
              </strong>
            </span>
            <span>
              Gap:{" "}
              <strong>
                $
                {(
                  Math.min(
                    ...PATHWAYS.filter((p) => p.color === "green").map(
                      (p) => p.lcoh,
                    ),
                  ) -
                  Math.min(
                    ...PATHWAYS.filter((p) => p.color === "blue").map(
                      (p) => p.lcoh,
                    ),
                  )
                ).toFixed(2)}
              </strong>
            </span>
          </div>
        </div>

        {/* Main content: Inputs (left) + Charts (right) */}
        <div className="grid grid-cols-[280px_1fr] gap-3">
          <InputsPanel />
          <div className="space-y-3">
            <CostBreakdown />
            <ScenarioComparison />
            <SensitivityChart />
          </div>
        </div>
        <div className="grid grid-cols-[280px_1fr] gap-3">
          <InputsPanel />
          <div className="space-y-3">
            <CostBreakdown />
            <ScenarioComparison />
            <SensitivityChart />
          </div>
        </div>

        <PeerCountryComparison />
      </div>
    </main>
  );
}
