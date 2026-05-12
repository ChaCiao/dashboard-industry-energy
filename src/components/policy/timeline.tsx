"use client";

import { useMemo } from "react";
import { POLICIES, COUNTRIES } from "@/lib/policy-data";
import type { CountryCode, MilestoneType } from "@/types/policy";

type TimelineProps = {
  selectedCountries: CountryCode[];
};

const MILESTONE_STYLE: Record<MilestoneType, { color: string; label: string }> = {
  announced: { color: "#B5D4F4", label: "Announced" },
  effective: { color: "#378ADD", label: "Effective" },
  review:    { color: "#F59E0B", label: "Review" },
  end:       { color: "#6B7280", label: "End" },
};

const YEAR_MIN = 2020;
const YEAR_MAX = 2040;

function yearToPercent(year: number): number {
  const clamped = Math.max(YEAR_MIN, Math.min(YEAR_MAX, year));
  return ((clamped - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100;
}

export function Timeline({ selectedCountries }: TimelineProps) {
  const rows = useMemo(() => {
    const order = COUNTRIES.map((c) => c.code);
    return POLICIES
      .filter((p) => selectedCountries.includes(p.country))
      .sort((a, b) => order.indexOf(a.country) - order.indexOf(b.country))
      .map((p) => {
        const country = COUNTRIES.find((c) => c.code === p.country);
        return { policy: p, country };
      });
  }, [selectedCountries]);

  if (rows.length === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        Select countries to see policy timeline
      </div>
    );
  }

  const tickYears = [2020, 2025, 2030, 2035, 2040];

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium">Policy timeline</p>
        <p className="text-[10px] text-muted-foreground">
          {rows.length} policies across {selectedCountries.length} countries - 2020 to 2040
        </p>
      </div>

      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.policy.id} className="grid grid-cols-[160px_1fr] items-center gap-3">
            <div>
              <p className="text-xs font-medium">
                {row.country?.flag} {row.policy.name}
              </p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">
                {row.policy.startYear}-{row.policy.endYear}
              </p>
            </div>

            <div className="relative h-8">
              <div
                className="absolute top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-muted-foreground/20"
                style={{
                  left: yearToPercent(row.policy.startYear) + "%",
                  right: (100 - yearToPercent(row.policy.endYear)) + "%",
                }}
              />

              {row.policy.milestones.map((m, i) => {
                const leftPct = yearToPercent(m.year);
                const style = MILESTONE_STYLE[m.type];
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: leftPct + "%" }}
                    title={style.label + " - " + m.year + (m.label ? " - " + m.label : "")}
                  >
                    <div
                      className="h-3 w-3 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: style.color }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="mb-2 grid grid-cols-[160px_1fr] gap-3">
          <span />
          <div className="relative h-4">
            {tickYears.map((y) => (
              <span
                key={y}
                className="absolute top-0 -translate-x-1/2 text-[10px] text-muted-foreground"
                style={{ left: yearToPercent(y) + "%" }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-muted-foreground">Legend:</span>
          {(Object.keys(MILESTONE_STYLE) as MilestoneType[]).map((key) => {
            const style = MILESTONE_STYLE[key];
            return (
              <div key={key} className="flex items-center gap-1.5">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: style.color }}
                />
                <span className="text-[10px] text-muted-foreground">{style.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
