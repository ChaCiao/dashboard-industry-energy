"use client";

import { useMemo } from "react";
import {
  COUNTRY_ATTRACTIVENESS,
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

  // For each dimension, compute peer ranking (score desc, ties alphabetical by code),
  // plus rank, average, tied-peer detection.
  const dimensionAnalysis = useMemo(() => {
    if (!target) return [];

    return SCORING_DIMENSIONS.map((d) => {
      const key = d.key as keyof AttractivenessScore;
      const peers = COUNTRY_ATTRACTIVENESS.map((a) => ({
        code: a.country,
        score: a.scores[key],
      }));

      // Sort: score descending, then country code ascending (alphabetical tiebreaker)
      const sortedPeers = [...peers].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.code.localeCompare(b.code);
      });

      const targetScore = target.scores[key];

      // Rank (1-based; ties share the same rank)
      const higherCount = peers.filter((p) => p.score > targetScore).length;
      const rank = higherCount + 1;
      const peerCount = peers.length;
      const avg = peers.reduce((acc, p) => acc + p.score, 0) / peers.length;

      // Countries tied at the same score as the target (excluding the target itself)
      const tiedPeers = peers
        .filter((p) => p.score === targetScore && p.code !== country)
        .map((p) => p.code)
        .sort();

      // Per-dimension narrative (may be undefined for backward compatibility)
      const narrative = target.dimensionAnalysis?.[key] ?? [];

      return {
        key,
        shortLabel: d.shortLabel,
        fullLabel: d.fullLabel,
        definition: d.definition,
        targetScore,
        rank,
        peerCount,
        avg,
        sortedPeers,
        tiedPeers,
        narrative,
      };
    });
  }, [target, country]);

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
          Each dimension scored 1 (low) to 5 (high) - ranked against {COUNTRY_ATTRACTIVENESS.length} countries - sorted by score descending
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {dimensionAnalysis.map((d) => {
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

              {/* Peer distribution bar — now sorted by score desc, tied by alpha */}
              <div className="mt-3">
                <p className="mb-1 text-[9px] uppercase tracking-wider text-muted-foreground">
                  Peer distribution (sorted)
                </p>
                <div className="flex gap-0.5">
                  {d.sortedPeers.map((peer) => {
                    const isTarget = peer.code === country;
                    return (
                      <div
                        key={peer.code}
                        className={
                          "flex h-4 flex-1 items-center justify-center rounded-[2px] text-[8px] " +
                          (isTarget
                            ? "font-bold ring-2 ring-foreground ring-offset-1 ring-offset-background"
                            : "font-medium")
                        }
                        style={{
                          backgroundColor: SCORE_COLORS[peer.score],
                          color: peer.score >= 4 ? "white" : "#3B6D11",
                        }}
                        title={peer.code + ": " + peer.score + "/5"}
                      >
                        {peer.code}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[9px] text-muted-foreground">
                <span>Peer avg: {d.avg.toFixed(1)}</span>
                {d.tiedPeers.length > 0 && (
                  <span>
                    Tied at this score:{" "}
                    <span className="font-medium text-foreground">
                      {d.tiedPeers.join(", ")}
                    </span>
                  </span>
                )}
                <span>
                  Delta:{" "}
                  <span
                    className={
                      d.targetScore !== d.avg
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {d.targetScore > d.avg ? "+" : ""}
                    {(d.targetScore - d.avg).toFixed(1)}
                  </span>
                </span>
              </div>

              {/* AI narrative for this dimension */}
              {d.narrative.length > 0 && (
                <div className="mt-3 rounded-md bg-muted/40 p-2.5">
                  <p className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                    Why this score
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {d.narrative.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-1.5 text-[10px] leading-relaxed text-foreground"
                      >
                        <span className="text-muted-foreground">-</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Country-level AI highlights (kept unchanged - operates at country level) */}
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
