// Cost breakdown stacked bar with policy indicators

import { CircleCheck, CircleX } from "lucide-react";

const COST_DATA = [
  {
    name: "PEM",
    lcoh: 4.82,
    parts: [
      { label: "Capital", value: 32, color: "#534AB7" },
      { label: "O&M", value: 12, color: "#7F77DD" },
      { label: "Electricity", value: 42, color: "#185FA5" },
      { label: "Water", value: 8, color: "#5F5E5A" },
      { label: "O2 credit", value: 6, color: "#0F6E56" },
    ],
  },
  {
    name: "Alkaline",
    lcoh: 4.21,
    parts: [
      { label: "Capital", value: 28, color: "#534AB7" },
      { label: "O&M", value: 14, color: "#7F77DD" },
      { label: "Electricity", value: 45, color: "#185FA5" },
      { label: "Water", value: 9, color: "#5F5E5A" },
      { label: "O2 credit", value: 4, color: "#0F6E56" },
    ],
  },
  {
    name: "SMR+CCS",
    lcoh: 2.15,
    parts: [
      { label: "Capital", value: 20, color: "#534AB7" },
      { label: "O&M", value: 10, color: "#7F77DD" },
      { label: "Fuel", value: 48, color: "#BA7517" },
      { label: "CO2 T&S", value: 18, color: "#D85A30" },
      { label: "Carbon", value: 4, color: "#993C1D" },
    ],
  },
  {
    name: "ATR+CCS",
    lcoh: 2.34,
    parts: [
      { label: "Capital", value: 25, color: "#534AB7" },
      { label: "O&M", value: 11, color: "#7F77DD" },
      { label: "Fuel", value: 42, color: "#BA7517" },
      { label: "CO2 T&S", value: 19, color: "#D85A30" },
      { label: "Carbon", value: 3, color: "#993C1D" },
    ],
  },
];

const POLICIES = [
  { label: "CHPS subsidy", applied: true, value: "Applied" },
  { label: "IRA 45V", applied: false, value: "Not applied" },
  { label: "Carbon price", applied: true, value: "$50/t" },
  { label: "Grant", applied: false, value: "Not applied" },
];

export function CostBreakdown() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium">Cost breakdown ($/kg H2)</p>
        <p className="text-xs text-muted-foreground">Stacked bar</p>
      </div>

      {/* Policy indicators */}
      <div className="mb-3 flex flex-wrap gap-3 rounded-md bg-muted px-3 py-2 text-xs">
        {POLICIES.map((p) => (
          <span key={p.label} className="flex items-center gap-1">
            {p.applied ? (
              <CircleCheck className="h-3 w-3 text-positive-fin" />
            ) : (
              <CircleX className="h-3 w-3 text-muted-foreground/50" />
            )}
            <span className="text-muted-foreground">{p.label}:</span>
            <strong
              className={
                p.applied ? "" : "text-muted-foreground/50 font-normal"
              }
            >
              {p.value}
            </strong>
          </span>
        ))}
      </div>

      {/* Stacked bars */}
      <div className="space-y-2.5">
        {COST_DATA.map((row) => (
          <div key={row.name}>
            <div className="mb-1 flex justify-between text-xs text-muted-foreground">
              <span>{row.name}</span>
              <span>${row.lcoh.toFixed(2)}</span>
            </div>
            <div className="flex h-5 overflow-hidden rounded">
              {row.parts.map((part, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: part.color, flex: part.value }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
        {[
          { label: "Capital", color: "#534AB7" },
          { label: "O&M", color: "#7F77DD" },
          { label: "Electricity", color: "#185FA5" },
          { label: "Fuel", color: "#BA7517" },
          { label: "CO2 T&S", color: "#D85A30" },
          { label: "O2 credit", color: "#0F6E56" },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-1">
            <span
              className="inline-block h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
