"use client";

import { useMemo } from "react";
import {
  COUNTRY_ATTRACTIVENESS,
  COUNTRIES,
  SCORING_DIMENSIONS,
} from "@/lib/policy-data";
import type { AttractivenessScore, CountryCode } from "@/types/policy";

type DimensionBreakdownProps = {
  country: CountryCode;
};

const SCORE_COLORS: Record<number, string> = {
  1: "#EAF3DE",
  2: "#C0DD97",
  3: "#97C459",
  4: "#639922",
  5: "#3B6D11",
};

export function DimensionBreakdown({ country }: DimensionBreakdownProps) {
  const target = COUNTRY_ATTRACTIVENESS.find((a) => a.country === country);

  // For each dimension, compute peer distribution + selected country's position.
  const dimensionAnalysis = useMemo(() => {
    if (!target) return [];

    return SCORING_DIMENSIONS.map((d) => {
      const key = d.key as keyof AttractivenessScore;
      const peers = COUNTRY_ATTRACTIVENESS.map((a) => ({
        code: a.country,
        score: a.scores[key],
      }));
      const sorted = [...peers].sort((a, b) => b.score - a.score);
      const targetScore = target.scores[key];

      // Compute rank (1-based, ties share rank)
      const higherCount = peers.filter((p) => p.score > targetScore).length;
      const rank = higherCount + 1;
      const peerCount = peers.length;
      const avg =
        peers.reduce((acc, p) => acc + p.score, 0) / peers.length;

      return {
        key,
        shortLabel: d.shortLabel,
        fullLabel: d.fullLabel,
        definition: d.definition,
        targetScore,
        rank,
        peerCount,
        avg,
        sorted,
      };
    });
  }, [target]);

  if (!target) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        Country attractiveness data not found
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 border-b pb-3">
        <p className="text-sm font-medium text-foreground">
          5-dimension breakdown vs peers
        </p>
        <p className="mt-0.5 text-[10px] text-muted-foreground">
          Each dimension scored 1 (low) to 5 (high) - ranked against {target ? COUNTRY_ATTRACTIVENESS.length : 0} countries
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {dimensionAnalysis.map((d) => {
          const peerCountryOrder = [...COUNTRIES].map((c) => c.code);

          return (
            <div key={d.key} className="rounded-md border bg-background/40 p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-foreground">
                    {d.fullLabel}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-[10px] text-muted-foreground">
                    {d.definition}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div
                    className="flex h-7 w-9 items-center justify-center rounded-sm text-xs font-medium"
                    style={{
                      backgroundColor: SCORE_COLORS[d.targetScore],
                      color: d.targetScore >= 4 ? "white" : "#3B6D11",
                    }}
                  >
                    {d.targetScore}
                  </div>
                  <p className="mt-1 text-[9px] text-muted-foreground">
                    Rank {d.rank}/{d.peerCount}
                  </p>
                </div>
              </div>

              {/* Peer distribution bar: each country = a colored cell */}
              <div className="mt-3">
                <p className="mb-1 text-[9px] uppercase tracking-wider text-muted-foreground">
                  Peer distribution
                </p>
                <div className="flex gap-0.5">
                  {peerCountryOrder.map((pc) => {
                    const peer = COUNTRY_ATTRACTIVENESS.find(
                      (a) => a.country === pc
                    );
                    if (!peer) return null;
                    const peerScore = peer.scores[d.key];
                    const isTarget = pc === country;
                    return (
                      <div
                        key={pc}
                        className={
                          "flex h-4 flex-1 items-center justify-center rounded-[2px] text-[8px] font-medium " +
                          (isTarget ? "ring-2 ring-foreground ring-offset-1 ring-offset-background" : "")
                        }
                        style={{
                          backgroundColor: SCORE_COLORS[peerScore],
                          color: peerScore >= 4 ? "white" : "#3B6D11",
                        }}
                        title={pc + ": " + peerScore + "/5"}
                      >
                        {pc}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-[9px] text-muted-foreground">
                <span>Peer avg: {d.avg.toFixed(1)}</span>
                <span>
                  Delta:{" "}
                  <span
                    className={
                      d.targetScore > d.avg
                        ? "text-foreground"
                        : d.targetScore < d.avg
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {d.targetScore > d.avg ? "+" : ""}
                    {(d.targetScore - d.avg).toFixed(1)}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI highlights from country-level attractiveness */}
      {target.aiAnalysis.highlights.length > 0 && (
        <div className="mt-4 rounded-md bg-muted/40 p-3">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Key takeaways
          </p>
          <ul className="mt-1.5 space-y-1">
            {target.aiAnalysis.highlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-1.5 text-[11px] leading-relaxed text-foreground"
              >
                <span className="text-muted-foreground">-</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
