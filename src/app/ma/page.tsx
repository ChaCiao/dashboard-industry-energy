import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="M&A Tracker"
      description="Major deals, joint ventures, and strategic partnerships in the energy transition."
      plannedFeatures={[
    "Deal database with size and structure",
    "JV and MOU tracking",
    "Strategic rationale analysis",
    "Acquirer and target heatmap"
  ]}
    />
  );
}
