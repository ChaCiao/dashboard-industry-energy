"use client";

import { useMemo, useState } from "react";
import { POLICIES, COUNTRIES, SCORING_DIMENSIONS } from "@/lib/policy-data";
import type { CountryCode } from "@/types/policy";

type HeatmapProps = {
  selectedCountries: CountryCode[];
  selectedCountry: CountryCode | null;
  onSelectCountry: (code: CountryCode) => void;
};

const SCORE_COLORS: Record<number, string> = {
  1: "#EAF3DE",
  2: "#C0DD97",
  3: "#97C459",
  4: "#639922",
  5: "#3B6D11",
};

export function Heatmap({
  selectedCountries,
  selectedCountry,
  onSelectCountry,
}: HeatmapProps) {
  const [hoveredDimension, setHoveredDimension] = useState<string | null>(null);

  // Sort selected countries by their canonical order in COUNTRIES
  const sortedSelected = useMemo(() => {
    const order = COUNTRIES.map((c) => c.code);
    return [...selectedCountries].sort(
      (a, b) => order.indexOf(a) - order.indexOf(b)
    );
  }, [selectedCountries]);

  const rows = useMemo(() => {
    return sortedSelected
      .map((code) => {
        const policy = POLICIES.find((p) => p.country === code);
        const country = COUNTRIES.find((c) => c.code === code);
        if (!policy || !country) return null;
        return { country, policy };
      })
      .filter((r): r is { country: typeof COUNTRIES[0]; policy: typeof POLICIES[0] } => r !== null);
  }, [sortedSelected]);

  const countryTotals = useMemo(() => {
    return rows
      .map((r) => {
        const total =
          r.policy.scores.incentive +
          r.policy.scores.stability +
          r.policy.scores.scope +
          r.policy.scores.access +
          r.policy.scores.stack;
        return { code: r.country.code, shortName: r.country.shortName, total };
      })
      .sort((a, b) => b.total - a.total);
  }, [rows]);

  const { avgTotal, strongest, weakest } = useMemo(() => {
    if (rows.length === 0) {
      return { avgTotal: 0, strongest: "", weakest: "" };
    }
    const totals = SCORING_DIMENSIONS.map((d) => {
      const sum = rows.reduce((acc, r) => acc + r.policy.scores[d.key], 0);
      return { key: d.key, label: d.shortLabel, avg: sum / rows.length };
    });
    const overallAvg = totals.reduce((acc, t) => acc + t.avg, 0) / totals.length;
    const strongest = [...totals].sort((a, b) => b.avg - a.avg)[0];
    const weakest = [...totals].sort((a, b) => a.avg - b.avg)[0];
    return { avgTotal: overallAvg, strongest: strongest.label, weakest: weakest.label };
  }, [rows]);

  if (rows.length === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        Select countries to see heatmap
      </div>
    );
  }

  const maxTotal = 25;
  const hoveredMeta = SCORING_DIMENSIONS.find((d) => d.key === hoveredDimension);

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Attractiveness heatmap</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            {rows.length} countries - 5 dimensions - hover dimension names for definitions
          </p>
        </div>
        <p className="text-[10px] text-muted-foreground">1 (low) to 5 (high)</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div className="grid grid-cols-[90px_repeat(5,1fr)] gap-1.5">
            <span />
            {SCORING_DIMENSIONS.map((d) => (
              <button
                key={d.key}
                type="button"
                onMouseEnter={() => setHoveredDimension(d.key)}
                onMouseLeave={() => setHoveredDimension(null)}
                className="text-center text-[9px] text-muted-foreground hover:text-foreground hover:underline"
              >
                {d.shortLabel}
              </button>
            ))}
          </div>

          {hoveredMeta && (
            <div className="mt-2 rounded-md border bg-background p-3 text-[10px]">
              <p className="font-medium text-foreground">{hoveredMeta.fullLabel}</p>
              <p className="mt-1 text-muted-foreground">{hoveredMeta.definition}</p>
              <ul className="mt-2 space-y-0.5 text-muted-foreground/80">
                {hoveredMeta.scaleDescription.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-2 space-y-1">
            {rows.map((row) => {
              const isSelected = selectedCountry === row.country.code;
              return (
                <button
                  key={row.country.code}
                  type="button"
                  onClick={() => onSelectCountry(row.country.code)}
                  className={"grid w-full grid-cols-[90px_repeat(5,1fr)] items-center gap-1.5 rounded-sm py-0.5 text-left transition-colors " + (isSelected ? "bg-muted ring-1 ring-foreground/20" : "hover:bg-muted/40")}
                >
                  <span className="truncate text-[10px] font-medium" title={row.country.shortName}>
                    {row.country.shortName}
                  </span>
                  {SCORING_DIMENSIONS.map((d) => {
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
                </button>
              );
            })}
          </div>

          <div className="mt-4 border-t pt-3">
            <div className="mb-2 flex items-center gap-1.5">
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
                <p className="text-muted-foreground">Average</p>
                <p className="mt-0.5 font-medium tabular-nums text-foreground">
                  {avgTotal.toFixed(1)} / 5
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Strongest</p>
                <p className="mt-0.5 font-medium text-foreground">{strongest}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Weakest</p>
                <p className="mt-0.5 font-medium text-foreground">{weakest}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Total score by country (sorted)
          </p>
          <div className="space-y-1.5">
            {countryTotals.map((c) => {
              const widthPct = (c.total / maxTotal) * 100;
              const isSelected = selectedCountry === c.code;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => onSelectCountry(c.code as CountryCode)}
                  className={"grid w-full grid-cols-[90px_1fr_40px] items-center gap-2 rounded-sm py-0.5 text-left transition-colors " + (isSelected ? "bg-muted ring-1 ring-foreground/20" : "hover:bg-muted/40")}
                >
                  <span className="truncate text-[10px]" title={c.shortName}>
                    {c.shortName}
                  </span>
                  <div className="h-3 rounded-sm bg-muted">
                    <div
                      className="h-full rounded-sm"
                      style={{
                        width: widthPct + "%",
                        backgroundColor: "#639922",
                      }}
                    />
                  </div>
                  <span className="text-right text-[10px] tabular-nums text-muted-foreground">
                    {c.total} / {maxTotal}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
