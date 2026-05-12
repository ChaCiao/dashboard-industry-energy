// Tornado sensitivity chart with pathway dropdown

"use client";
import { useState } from "react";

type Pathway = "PEM" | "Alkaline" | "SMR+CCS" | "ATR+CCS";

const SENSITIVITY: Record<
  Pathway,
  { variable: string; impact: number; color: string }[]
> = {
  PEM: [
    { variable: "Electricity price", impact: 1.62, color: "#185FA5" },
    { variable: "CAPEX", impact: 1.05, color: "#534AB7" },
    { variable: "CF", impact: 0.82, color: "#0F6E56" },
    { variable: "WACC", impact: 0.58, color: "#BA7517" },
    { variable: "Stack life", impact: 0.34, color: "#993C1D" },
  ],
  Alkaline: [
    { variable: "Electricity price", impact: 1.45, color: "#185FA5" },
    { variable: "CAPEX", impact: 0.92, color: "#534AB7" },
    { variable: "CF", impact: 0.74, color: "#0F6E56" },
    { variable: "WACC", impact: 0.52, color: "#BA7517" },
    { variable: "Stack life", impact: 0.31, color: "#993C1D" },
  ],
  "SMR+CCS": [
    { variable: "NG price", impact: 0.85, color: "#BA7517" },
    { variable: "Carbon price", impact: 0.42, color: "#D85A30" },
    { variable: "CO2 T&S cost", impact: 0.38, color: "#D85A30" },
    { variable: "CAPEX", impact: 0.32, color: "#534AB7" },
    { variable: "WACC", impact: 0.25, color: "#BA7517" },
  ],
  "ATR+CCS": [
    { variable: "NG price", impact: 0.78, color: "#BA7517" },
    { variable: "CO2 T&S cost", impact: 0.48, color: "#D85A30" },
    { variable: "Carbon price", impact: 0.35, color: "#D85A30" },
    { variable: "CAPEX", impact: 0.38, color: "#534AB7" },
    { variable: "WACC", impact: 0.27, color: "#BA7517" },
  ],
};

export function SensitivityChart() {
  const [pathway, setPathway] = useState<Pathway>("Alkaline");
  const data = SENSITIVITY[pathway];
  const maxImpact = Math.max(...data.map((d) => d.impact));

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium">Sensitivity — Tornado (±20%)</p>
        <select
          value={pathway}
          onChange={(e) => setPathway(e.target.value as Pathway)}
          className="rounded-md border bg-background px-2 py-1 text-xs"
        >
          <option>PEM</option>
          <option>Alkaline</option>
          <option>SMR+CCS</option>
          <option>ATR+CCS</option>
        </select>
      </div>

      <div className="space-y-1.5 text-xs">
        {data.map((row) => {
          const widthPct = (row.impact / maxImpact) * 45;
          return (
            <div
              key={row.variable}
              className="grid grid-cols-[90px_1fr_90px] items-center gap-2"
            >
              <span className="text-right text-muted-foreground">
                {row.variable}
              </span>
              <div className="relative h-3.5">
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border" />
                <div
                  className="absolute right-1/2 h-3.5 rounded-l-sm"
                  style={{ backgroundColor: row.color, width: `${widthPct}%` }}
                />
                <div
                  className="absolute left-1/2 h-3.5 rounded-r-sm"
                  style={{ backgroundColor: row.color, width: `${widthPct}%` }}
                />
              </div>
              <span className="text-muted-foreground">
                ±${row.impact.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
