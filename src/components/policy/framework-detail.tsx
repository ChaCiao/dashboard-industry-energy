"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  NATIONAL_FRAMEWORKS,
  POLICIES,
} from "@/lib/policy-data";
import type { CountryCode, MilestoneType } from "@/types/policy";

type FrameworkDetailProps = {
  country: CountryCode;
};

const CATEGORY_BADGE: Record<string, { label: string; bg: string; color: string }> = {
  law: { label: "Law", bg: "#0E4F4F", color: "white" },
  strategy: { label: "Strategy", bg: "#155E63", color: "white" },
  roadmap: { label: "Roadmap", bg: "#3B82F6", color: "white" },
  "sub-strategy": { label: "Sub-strategy", bg: "#6B7280", color: "white" },
};

const STATUS_BADGE: Record<string, { label: string; bg: string; color: string }> = {
  "in-force": { label: "In-force", bg: "#16A34A", color: "white" },
  "under-revision": { label: "Under revision", bg: "#F59E0B", color: "white" },
  draft: { label: "Draft", bg: "#6B7280", color: "white" },
};

const MILESTONE_COLOR: Record<MilestoneType, string> = {
  announced: "#9CA3AF",
  effective: "#16A34A",
  review: "#F59E0B",
  end: "#DC2626",
};

const MILESTONE_LABEL: Record<MilestoneType, string> = {
  announced: "Announced",
  effective: "Effective",
  review: "Review",
  end: "End",
};

export function FrameworkDetail({ country }: FrameworkDetailProps) {
  const framework = NATIONAL_FRAMEWORKS.find((f) => f.country === country);
  const countryPolicies = POLICIES.filter((p) => p.country === country);

  // Build a combined timeline of framework anchor years + policy milestones,
  // sorted chronologically.
  const timelineItems = useMemo(() => {
    type Item = {
      year: number;
      kind: "framework" | "milestone";
      label: string;
      sublabel?: string;
      milestoneType?: MilestoneType;
      policyName?: string;
    };
    const items: Item[] = [];

    if (framework) {
      items.push({
        year: framework.enactedYear,
        kind: "framework",
        label: framework.category.toUpperCase() + " enacted",
        sublabel: framework.name,
      });
      if (
        framework.latestUpdateYear &&
        framework.latestUpdateYear !== framework.enactedYear
      ) {
        items.push({
          year: framework.latestUpdateYear,
          kind: "framework",
          label: "Latest update",
          sublabel: framework.name,
        });
      }
    }

    countryPolicies.forEach((p) => {
      p.milestones.forEach((m) => {
        items.push({
          year: m.year,
          kind: "milestone",
          label: MILESTONE_LABEL[m.type] + (m.label ? " - " + m.label : ""),
          sublabel: p.name,
          milestoneType: m.type,
          policyName: p.name,
        });
      });
    });

    return items.sort((a, b) => a.year - b.year);
  }, [framework, countryPolicies]);

  if (!framework) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        No national framework registered for this country
      </div>
    );
  }

  const catBadge = CATEGORY_BADGE[framework.category];
  const statBadge = STATUS_BADGE[framework.status];

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between border-b pb-3">
        <div>
          <p className="text-sm font-medium text-foreground">National Framework</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            Top-level law / strategy / roadmap and combined policy timeline
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="rounded-sm px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider"
            style={{ backgroundColor: catBadge.bg, color: catBadge.color }}
          >
            {catBadge.label}
          </span>
          <span
            className="rounded-sm px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider"
            style={{ backgroundColor: statBadge.bg, color: statBadge.color }}
          >
            {statBadge.label}
          </span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
        {/* Left: framework detail */}
        <div className="space-y-3">
          <div>
            <p className="text-base font-medium text-foreground">{framework.name}</p>
            {framework.nameKo && (
              <p className="mt-0.5 text-xs text-muted-foreground">{framework.nameKo}</p>
            )}
            <p className="mt-1 text-[10px] text-muted-foreground">
              Enacted {framework.enactedYear}
              {framework.latestUpdateYear &&
                framework.latestUpdateYear !== framework.enactedYear &&
                " - latest update " + framework.latestUpdateYear}
            </p>
          </div>

          <p className="text-xs leading-relaxed text-foreground">
            {framework.summary}
          </p>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Key targets
            </p>
            <ul className="mt-1.5 space-y-1">
              {framework.keyTargets.map((t, i) => (
                <li
                  key={i}
                  className="flex gap-1.5 text-xs leading-relaxed text-foreground"
                >
                  <span className="text-muted-foreground">-</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Scope
            </p>
            <p className="mt-1 text-xs text-foreground">{framework.scope}</p>
          </div>

          {framework.notes && (
            <div className="rounded-md bg-muted/40 p-2.5">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Notes
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-foreground">
                {framework.notes}
              </p>
            </div>
          )}

          {framework.officialSourceUrl && (
            <Link
              href={framework.officialSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[10px] text-muted-foreground underline hover:text-foreground"
            >
              Official source →
            </Link>
          )}
        </div>

        {/* Right: combined timeline */}
        <div className="rounded-md border bg-background/40 p-3">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Policy timeline
          </p>
          {timelineItems.length === 0 ? (
            <p className="text-[10px] text-muted-foreground">No events recorded</p>
          ) : (
            <ol className="relative space-y-2.5 border-l border-border pl-3">
              {timelineItems.map((item, i) => {
                const dotColor =
                  item.kind === "milestone" && item.milestoneType
                    ? MILESTONE_COLOR[item.milestoneType]
                    : "#0E4F4F";
                return (
                  <li key={i} className="relative">
                    <span
                      className="absolute -left-[15px] top-1 h-2 w-2 rounded-full border-2 border-background"
                      style={{ backgroundColor: dotColor }}
                    />
                    <p className="text-[11px] font-medium tabular-nums text-foreground">
                      {item.year}
                    </p>
                    <p className="text-[10px] leading-snug text-foreground">
                      {item.label}
                    </p>
                    {item.sublabel && (
                      <p className="text-[9px] text-muted-foreground">
                        {item.sublabel}
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
