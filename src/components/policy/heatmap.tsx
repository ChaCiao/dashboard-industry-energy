// Attractiveness heatmap with overall country score bars below.

"use client";

import { useMemo } from "react";
import { POLICIES, COUNTRIES } from "@/lib/policy-data";
import type { CountryCode } from "@/types/policy";

type HeatmapProps = {
  selectedCountries: CountryCode[];
};

const DIMENSIONS = [
  { key: "incentive", label: "Incent." },
  { key: "stability", label: "Stable" },
  { key: "scope", label: "Scope" },
  { key: "access", label: "Access" },
  { key: "stack", label: "Stack" },
] as const;

const SCORE_COLORS: Record<number, string> = {
  1: "#EAF3DE",
  2: "#C0DD97",
  3: "#97C459",
  4: "#639922",
  5: "#3B6D11",
};

export function Heatmap({ selectedCountries }: HeatmapProps) {
  const rows = useMemo(() => {
    return selectedCountries
      .map((code) => {
        const policy = POLICIES.find((p) => p.country === code);
        const country = COUNTRIES.find((c) => c.code === code);
        if (!policy || !country) return null;
        return { country, policy };
      })
      .filter(
        (
          r,
        ): r is {
          country: (typeof COUNTRIES)[0];
          policy: (typeof POLICIES)[0];
        } => r !== null,
      );
  }, [selectedCountries]);

  // Overall scores per country (sum of 5 dimensions)
  const countryTotals = useMemo(() => {
    return rows
      .map((r) => {
        const total =
          r.policy.scores.incentive +
          r.policy.scores.stability +
          r.policy.scores.scope +
          r.policy.scores.access +
          r.policy.scores.stack;
        return {
          code: r.country.code,
          flag: r.country.flag,
          total,
          avg: total / 5,
        };
      })
      .sort((a, b) => b.total - a.total);
  }, [rows]);

  const { avgTotal, strongest, weakest } = useMemo(() => {
    if (rows.length === 0) {
      return { avgTotal: 0, strongest: "", weakest: "" };
    }

    const totals = DIMENSIONS.map((d) => {
      const sum = rows.reduce((acc, r) => acc + r.policy.scores[d.key], 0);
      return { key: d.key, label: d.label, avg: sum / rows.length };
    });

    const overallAvg =
      totals.reduce((acc, t) => acc + t.avg, 0) / totals.length;
    const strongest = [...totals].sort((a, b) => b.avg - a.avg)[0];
    const weakest = [...totals].sort((a, b) => a.avg - b.avg)[0];

    return {
      avgTotal: overallAvg,
      strongest: strongest.label,
      weakest: weakest.label,
    };
  }, [rows]);

  if (rows.length === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        Select countries to see heatmap
      </div>
    );
  }

  const maxTotal = 25; // 5 dimensions × max score 5

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Attractiveness heatmap</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            {rows.length} countries · 5 dimensions
          </p>
        </div>
        <p className="text-[10px] text-muted-foreground">1 (low) → 5 (high)</p>
      </div>

      {/* Heatmap grid */}
      <div>
        <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-1.5">
          <span />
          {DIMENSIONS.map((d) => (
            <span
              key={d.key}
              className="text-center text-[9px] text-muted-foreground"
            >
              {d.label}
            </span>
          ))}
        </div>

        <div className="mt-2 space-y-1">
          {rows.map((row) => (
            <div
              key={row.country.code}
              className="grid grid-cols-[80px_repeat(5,1fr)] items-center gap-1.5"
            >
              <span className="text-[10px]">
                {row.country.flag} {row.country.code}
              </span>
              {DIMENSIONS.map((d) => {
                const score = row.policy.scores[d.key];
                return (
                  <div
                    key={d.key}
                    className="flex h-5 items-center justify-center rounded-sm text-[9px] font-medium"
                    style={{
                      backgroundColor: SCORE_COLORS[score],
                      color: score >= 4 ? "white" : "#3B6D11",
                    }}
                  >
                    {score}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Insights row */}
      <div className="mt-4 border-t pt-3">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground">Scale:</span>
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className="flex h-3 w-6 items-center justify-center rounded-sm text-[8px]"
              style={{
                backgroundColor: SCORE_COLORS[s],
                color: s >= 4 ? "white" : "#3B6D11",
              }}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div>
            <p className="text-muted-foreground">Average across selected</p>
            <p className="mt-0.5 font-medium tabular-nums text-foreground">
              {avgTotal.toFixed(1)} / 5
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Strongest dimension</p>
            <p className="mt-0.5 font-medium text-foreground">{strongest}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Weakest dimension</p>
            <p className="mt-0.5 font-medium text-foreground">{weakest}</p>
          </div>
        </div>
      </div>

      {/* Overall country score bars */}
      <div className="mt-4 border-t pt-3">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Total score by country (sorted)
        </p>
        <div className="space-y-1.5">
          {countryTotals.map((c) => {
            const widthPct = (c.total / maxTotal) * 100;
            return (
              <div
                key={c.code}
                className="grid grid-cols-[60px_1fr_40px] items-center gap-2"
              >
                <span className="text-[10px]">
                  {c.flag} {c.code}
                </span>
                <div className="h-3 rounded-sm bg-muted">
                  <div
                    className="h-full rounded-sm"
                    style={{
                      width: `${widthPct}%`,
                      backgroundColor: "#639922",
                    }}
                  />
                </div>
                <span className="text-right text-[10px] tabular-nums text-muted-foreground">
                  {c.total} / {maxTotal}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
