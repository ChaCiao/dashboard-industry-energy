"use client";

import {
  COUNTRIES,
  COUNTRY_ATTRACTIVENESS,
  NATIONAL_FRAMEWORKS,
  SCORING_DIMENSIONS,
} from "@/lib/policy-data";
import type { CountryCode } from "@/types/policy";

type Mode2HeaderProps = {
  country: CountryCode;
};

const SCORE_COLORS: Record<number, string> = {
  1: "#EAF3DE",
  2: "#C0DD97",
  3: "#97C459",
  4: "#639922",
  5: "#3B6D11",
};

export function Mode2Header({ country }: Mode2HeaderProps) {
  const info = COUNTRIES.find((c) => c.code === country);
  const attractiveness = COUNTRY_ATTRACTIVENESS.find((a) => a.country === country);
  const framework = NATIONAL_FRAMEWORKS.find((f) => f.country === country);

  if (!info || !attractiveness) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        Country data not found
      </div>
    );
  }

  const totalScore =
    attractiveness.scores.incentive +
    attractiveness.scores.stability +
    attractiveness.scores.scope +
    attractiveness.scores.access +
    attractiveness.scores.stack;

  // Identify strongest and weakest dimensions
  const dimensionScores = SCORING_DIMENSIONS.map((d) => ({
    key: d.key,
    label: d.shortLabel,
    fullLabel: d.fullLabel,
    score: attractiveness.scores[d.key],
  }));
  const sortedDims = [...dimensionScores].sort((a, b) => b.score - a.score);
  const strongest = sortedDims[0];
  const weakest = sortedDims[sortedDims.length - 1];

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              {info.name}
            </h2>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {info.code}
            </span>
          </div>
          {framework && (
            <p className="mt-1 text-xs text-muted-foreground">
              {framework.category.toUpperCase()} - {framework.name}
              {framework.latestUpdateYear
                ? " (updated " + framework.latestUpdateYear + ")"
                : " (" + framework.enactedYear + ")"}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-4 text-right">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Total
            </p>
            <p className="text-2xl font-semibold tabular-nums text-foreground">
              {totalScore}
              <span className="text-xs text-muted-foreground"> / 25</span>
            </p>
          </div>
        </div>
      </div>

      {/* 5-dimension mini scores */}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {dimensionScores.map((d) => (
          <div key={d.key} className="flex flex-col items-center">
            <p className="text-[9px] text-muted-foreground">{d.label}</p>
            <div
              className="mt-1 flex h-7 w-full items-center justify-center rounded-sm text-xs font-medium"
              style={{
                backgroundColor: SCORE_COLORS[d.score],
                color: d.score >= 4 ? "white" : "#3B6D11",
              }}
              title={d.fullLabel + ": " + d.score + "/5"}
            >
              {d.score}
            </div>
          </div>
        ))}
      </div>

      {/* Strongest / Weakest summary */}
      <div className="mt-3 grid grid-cols-2 gap-3 border-t pt-3 text-[10px]">
        <div>
          <p className="text-muted-foreground">Strongest dimension</p>
          <p className="mt-0.5 font-medium text-foreground">
            {strongest.fullLabel}{" "}
            <span className="text-muted-foreground">({strongest.score}/5)</span>
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Weakest dimension</p>
          <p className="mt-0.5 font-medium text-foreground">
            {weakest.fullLabel}{" "}
            <span className="text-muted-foreground">({weakest.score}/5)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
