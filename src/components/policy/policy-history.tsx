"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  getHistoryByCountryGroupedByYear,
  getHistoryByCountry,
} from "@/lib/policy-history-data";
import type {
  CountryCode,
  PolicyHistoryEventType,
} from "@/types/policy";

type PolicyHistoryProps = {
  country: CountryCode;
};

const EVENT_TYPE_BADGE: Record<PolicyHistoryEventType, { label: string; bg: string; color: string }> = {
  law: { label: "Law", bg: "#0E4F4F", color: "white" },
  strategy: { label: "Strategy", bg: "#155E63", color: "white" },
  roadmap: { label: "Roadmap", bg: "#3B82F6", color: "white" },
  amendment: { label: "Amendment", bg: "#9333EA", color: "white" },
  auction: { label: "Auction", bg: "#16A34A", color: "white" },
  "target-revision": { label: "Target", bg: "#F59E0B", color: "white" },
  "international-agreement": { label: "Int'l", bg: "#0891B2", color: "white" },
  regulatory: { label: "Regulatory", bg: "#6B7280", color: "white" },
};

const IMPACT_LABEL: Record<string, { label: string; bg: string; color: string }> = {
  high: { label: "High", bg: "#DC2626", color: "white" },
  medium: { label: "Med", bg: "#F59E0B", color: "white" },
  low: { label: "Low", bg: "#9CA3AF", color: "white" },
};

const MONTH_LABEL: Record<number, string> = {
  1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun",
  7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec",
};

export function PolicyHistory({ country }: PolicyHistoryProps) {
  const groupedByYear = useMemo(
    () => getHistoryByCountryGroupedByYear(country),
    [country]
  );

  const totalEvents = useMemo(
    () => getHistoryByCountry(country).length,
    [country]
  );

  const years = useMemo(
    () => Array.from(groupedByYear.keys()).sort((a, b) => a - b),
    [groupedByYear]
  );

  if (totalEvents === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        No policy history events recorded for this country
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between border-b pb-3">
        <div>
          <p className="text-sm font-medium text-foreground">Policy History</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            Country-level policy evolution — {totalEvents} events across {years.length} years
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
          <span>Sort:</span>
          <span className="text-foreground">Chronological</span>
        </div>
      </div>

      <div className="space-y-4">
        {years.map((year) => {
          const events = groupedByYear.get(year) ?? [];
          return (
            <div key={year} className="grid grid-cols-[60px_1fr] gap-3">
              {/* Year label column */}
              <div className="pt-1">
                <p className="text-lg font-semibold tabular-nums text-foreground">
                  {year}
                </p>
                <p className="text-[9px] text-muted-foreground">
                  {events.length} {events.length === 1 ? "event" : "events"}
                </p>
              </div>

              {/* Events column */}
              <div className="space-y-2">
                {events.map((e, i) => {
                  const typeBadge = EVENT_TYPE_BADGE[e.type];
                  const impactBadge = e.impact ? IMPACT_LABEL[e.impact] : null;
                  return (
                    <div
                      key={year + "-" + i}
                      className="rounded-md border bg-background/40 p-3"
                    >
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className="rounded-sm px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider"
                          style={{
                            backgroundColor: typeBadge.bg,
                            color: typeBadge.color,
                          }}
                        >
                          {typeBadge.label}
                        </span>
                        {impactBadge && (
                          <span
                            className="rounded-sm px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider"
                            style={{
                              backgroundColor: impactBadge.bg,
                              color: impactBadge.color,
                            }}
                          >
                            Impact {impactBadge.label}
                          </span>
                        )}
                        {e.month && (
                          <span className="text-[9px] text-muted-foreground">
                            {MONTH_LABEL[e.month]} {year}
                          </span>
                        )}
                      </div>

                      <p className="mt-1.5 text-xs font-medium text-foreground">
                        {e.title}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                        {e.description}
                      </p>

                      {e.sourceUrl && (
                        <Link
                          href={e.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-[10px] text-muted-foreground underline hover:text-foreground"
                        >
                          Source →
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
