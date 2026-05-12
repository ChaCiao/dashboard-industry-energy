"use client";

import { useMemo } from "react";
import { POLICIES, COUNTRIES } from "@/lib/policy-data";
import type { CountryCode, PolicyStatus } from "@/types/policy";

type ComparisonMatrixProps = {
  selectedCountries: CountryCode[];
  selectedPolicyId: string | null;
  onSelectPolicy: (policyId: string) => void;
};

const STATUS_STYLES: Record<PolicyStatus, { bg: string; color: string; label: string }> = {
  active:   { bg: "#EAF3DE", color: "#3B6D11", label: "Active" },
  partial:  { bg: "#FAEEDA", color: "#854F0B", label: "Partial" },
  pending:  { bg: "#FAEEDA", color: "#854F0B", label: "Pending" },
  proposed: { bg: "#E5E7EB", color: "#374151", label: "Proposed" },
  expired:  { bg: "#FEE2E2", color: "#991B1B", label: "Expired" },
};

export function ComparisonMatrix({
  selectedCountries,
  selectedPolicyId,
  onSelectPolicy,
}: ComparisonMatrixProps) {
  const visiblePolicies = useMemo(() => {
    const order = COUNTRIES.map((c) => c.code);
    return POLICIES
      .filter((p) => selectedCountries.includes(p.country))
      .sort((a, b) => order.indexOf(a.country) - order.indexOf(b.country));
  }, [selectedCountries]);

  if (visiblePolicies.length === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-8 text-center text-xs text-muted-foreground">
        Select at least one country to see policy comparison
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Comparison matrix</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            {visiblePolicies.length} policies - click row for detail
          </p>
        </div>
        <p className="text-[10px] text-muted-foreground">5 of 11 dimensions shown</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="border-b">
              <th className="px-3 py-2 text-left font-medium text-muted-foreground">Country</th>
              <th className="px-3 py-2 text-left font-medium text-muted-foreground">Policy</th>
              <th className="px-3 py-2 text-left font-medium text-muted-foreground">Type</th>
              <th className="px-3 py-2 text-right font-medium text-muted-foreground">Incentive</th>
              <th className="px-3 py-2 text-center font-medium text-muted-foreground">Status</th>
              <th className="px-3 py-2 text-left font-medium text-muted-foreground">Period</th>
            </tr>
          </thead>
          <tbody>
            {visiblePolicies.map((policy) => {
              const countryInfo = COUNTRIES.find((c) => c.code === policy.country);
              const isSelected = selectedPolicyId === policy.id;
              const statusStyle = STATUS_STYLES[policy.status];

              return (
                <tr
                  key={policy.id}
                  onClick={() => onSelectPolicy(policy.id)}
                  className={"cursor-pointer border-b transition-colors " + (isSelected ? "bg-muted" : "hover:bg-muted/40")}
                >
                  <td className="px-3 py-2.5 font-medium">
                    <span className="mr-1.5">{countryInfo?.flag}</span>
                    {countryInfo?.name}
                  </td>
                  <td className="px-3 py-2.5">{policy.name}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{policy.type}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">
                    {policy.incentiveSize}
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.color,
                      }}
                    >
                      {statusStyle.label}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-muted-foreground">
                    {policy.startYear}-{policy.endYear}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[10px] text-muted-foreground/70">
        Sources: IEA Global Hydrogen Review 2024, BNEF Hydrogen Policy Tracker, official government publications.
      </p>
    </div>
  );
}
