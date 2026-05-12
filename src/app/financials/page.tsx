import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Financial Snapshot"
      description="Quarterly financial visualization from SEC EDGAR, DART, and other public filings."
      plannedFeatures={[
    "Revenue and EBITDA trend",
    "Segment reporting (hydrogen carve-out)",
    "Cash flow and balance sheet ratios",
    "Peer benchmarking"
  ]}
    />
  );
}
