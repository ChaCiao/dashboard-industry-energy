"use client";

import { POLICIES, COUNTRIES, COUNTRY_ATTRACTIVENESS } from "@/lib/policy-data";
import type { PolicyStatus, StabilityLevel } from "@/types/policy";

type DetailCardProps = {
  selection: string;
  onSelectPolicy: (policyId: string) => void;
};

const STATUS_LABEL: Record<
  PolicyStatus,
  { label: string; bg: string; color: string }
> = {
  active: { label: "Active", bg: "#EAF3DE", color: "#3B6D11" },
  partial: { label: "Partial", bg: "#FAEEDA", color: "#854F0B" },
  pending: { label: "Pending", bg: "#FAEEDA", color: "#854F0B" },
  proposed: { label: "Proposed", bg: "#E5E7EB", color: "#374151" },
  expired: { label: "Expired", bg: "#FEE2E2", color: "#991B1B" },
};

const STABILITY_LABEL: Record<StabilityLevel, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

function openExternalLink(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function DetailCard({ selection, onSelectPolicy }: DetailCardProps) {
  if (selection.startsWith("country:")) {
    const code = selection.slice("country:".length);
    const country = COUNTRIES.find((c) => c.code === code);
    const policies = POLICIES.filter((p) => p.country === code);
    const attractiveness = COUNTRY_ATTRACTIVENESS.find(
      (d) => d.country === code,
    );

    if (!country) return null;

    return (
      <div className="rounded-lg border bg-card p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">
                {country.flag} {country.name}
              </p>
              <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                Country detail
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {policies.length} hydrogen{" "}
              {policies.length === 1 ? "policy" : "policies"} tracked
            </p>
          </div>
        </div>

        {policies.length === 0 ? (
          <p className="py-6 text-center text-xs text-muted-foreground">
            No policies tracked for this country yet
          </p>
        ) : (
          <div className="space-y-2">
            {policies.map((p) => {
              const status = STATUS_LABEL[p.status];
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectPolicy(p.id)}
                  className="grid w-full grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md border bg-background px-3 py-2 text-left transition-colors hover:border-foreground/30 hover:bg-muted/40"
                >
                  <div>
                    <p className="text-xs font-medium">{p.name}</p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {p.fullName}
                    </p>
                  </div>
                  <span className="text-[10px] tabular-nums text-muted-foreground">
                    {p.incentiveSize}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{ backgroundColor: status.bg, color: status.color }}
                  >
                    {status.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {attractiveness && (
          <p className="mt-3 border-t pt-3 text-[10px] text-muted-foreground/70">
            Click any policy to switch to policy-level detail view
          </p>
        )}
      </div>
    );
  }

  if (selection.startsWith("policy:")) {
    const id = selection.slice("policy:".length);
    const policy = POLICIES.find((p) => p.id === id);
    const country = policy
      ? COUNTRIES.find((c) => c.code === policy.country)
      : null;

    if (!policy || !country) return null;

    const status = STATUS_LABEL[policy.status];
    const tiers = policy.tierStructure ?? [];
    const sourceUrl = policy.officialSourceUrl;

    return (
      <div className="rounded-lg border bg-card p-4">
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">
                {country.flag} {country.name} · {policy.name}
              </p>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                style={{ backgroundColor: status.bg, color: status.color }}
              >
                {status.label}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {policy.fullName}
            </p>
          </div>
          {sourceUrl && (
            <button
              type="button"
              onClick={() => openExternalLink(sourceUrl)}
              className="shrink-0 cursor-pointer text-[10px] text-muted-foreground hover:text-foreground"
            >
              Official source
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <Dimension label="Type" value={policy.type} />
          <Dimension
            label="Incentive size"
            value={policy.incentiveSize}
            highlight
          />
          <Dimension label="Sectors" value={policy.sectors.join(", ")} />
          <Dimension
            label="Period"
            value={policy.startYear + " - " + policy.endYear}
          />
          <Dimension label="Budget" value={policy.budget} />
          <Dimension
            label="Stackable"
            value={policy.stackable ? "Yes" : "No"}
            note={policy.stackableNote}
          />
          <Dimension
            label="Stability"
            value={STABILITY_LABEL[policy.stability]}
            note={policy.stabilityNote}
          />
          <Dimension
            label="Review cycle"
            value={policy.reviewCycle ?? "Not specified"}
          />
          <Dimension label="Eligibility" value={policy.eligibility} />
        </div>

        {tiers.length > 0 && (
          <div className="mt-5 border-t pt-4">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Tier structure
            </p>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
              {tiers.map((tier, i) => {
                const isHighest = i === tiers.length - 1;
                return (
                  <div
                    key={tier.tierName}
                    className="rounded-md p-3"
                    style={
                      isHighest
                        ? {
                            border: "1px solid #97C459",
                            backgroundColor: "transparent",
                          }
                        : { backgroundColor: "rgb(245 245 245 / 0.5)" }
                    }
                  >
                    <p
                      className="text-[10px]"
                      style={isHighest ? { color: "#3B6D11" } : undefined}
                    >
                      {tier.tierName}
                      {isHighest ? " (highest)" : ""}
                    </p>
                    <p className="mt-1 text-xs font-medium">
                      {tier.incentiveValue}
                    </p>
                    <p
                      className="mt-1 text-[10px]"
                      style={isHighest ? { color: "#3B6D11" } : undefined}
                    >
                      {tier.condition}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}

function Dimension({
  label,
  value,
  note,
  highlight,
}: {
  label: string;
  value: string;
  note?: string;
  highlight?: boolean;
}) {
  const valueClass = highlight
    ? "mt-1 text-xs font-medium text-foreground"
    : "mt-1 text-xs text-foreground";

  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className={valueClass}>{value}</p>
      {note && (
        <p className="mt-0.5 text-[10px] text-muted-foreground/70">{note}</p>
      )}
    </div>
  );
}
