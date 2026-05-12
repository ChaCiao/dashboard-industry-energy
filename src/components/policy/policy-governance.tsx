"use client";

import Link from "next/link";
import { getGovernanceByCountry } from "@/lib/policy-governance-data";
import type { CountryCode, GovernanceAgency } from "@/types/policy";

type PolicyGovernanceProps = {
  country: CountryCode;
};

function AgencyRow({ agency, compact = false }: { agency: GovernanceAgency; compact?: boolean }) {
  return (
    <div className={compact ? "py-1.5" : "py-2"}>
      <div className="flex flex-wrap items-baseline gap-1.5">
        <span className="rounded-sm bg-foreground px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-background">
          {agency.shortName}
        </span>
        <span className="text-[11px] font-medium text-foreground">
          {agency.fullName}
        </span>
      </div>
      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
        {agency.role}
      </p>
      {agency.url && (
        <Link
          href={agency.url}
          target="_blank"
          rel="noreferrer"
          className="mt-0.5 inline-block text-[10px] text-muted-foreground underline hover:text-foreground"
        >
          {agency.url.replace(/^https?:\/\/(www\.)?/, "")} →
        </Link>
      )}
    </div>
  );
}

export function PolicyGovernance({ country }: PolicyGovernanceProps) {
  const governance = getGovernanceByCountry(country);

  if (!governance) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        Governance data not registered for this country
      </div>
    );
  }

  const supportingCount = governance.supportingAgencies.length;
  const implementingCount = governance.implementingBodies.length;
  const totalAgencies = 1 + supportingCount + implementingCount;

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between border-b pb-3">
        <div>
          <p className="text-sm font-medium text-foreground">Policy Governance</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            Government agencies coordinating hydrogen policy - {totalAgencies} bodies across 3 tiers
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <div className="rounded-md border-2 border-foreground bg-background/40 p-3">
            <p className="mb-2 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
              Lead Authority
            </p>
            <AgencyRow agency={governance.leadAgency} />
          </div>

          <div className="rounded-md border bg-background/40 p-3">
            <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
              Supporting Agencies ({supportingCount})
            </p>
            <div className="divide-y divide-border">
              {governance.supportingAgencies.map((agency, i) => (
                <AgencyRow key={i} agency={agency} compact />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-md border bg-background/40 p-3">
            <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
              Implementing Bodies ({implementingCount})
            </p>
            <div className="divide-y divide-border">
              {governance.implementingBodies.map((agency, i) => (
                <AgencyRow key={i} agency={agency} compact />
              ))}
            </div>
          </div>
        </div>
      </div>

      {governance.notes && (
        <div className="mt-3 rounded-md bg-muted/40 p-2.5">
          <p className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
            Notes
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-foreground">
            {governance.notes}
          </p>
        </div>
      )}
    </div>
  );
}
