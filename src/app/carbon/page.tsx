import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Carbon Market"
      description="Carbon pricing trends and policy developments across compliance and voluntary markets."
      plannedFeatures={[
    "EU ETS, K-ETS, UK ETS price tracking",
    "CBAM exposure analysis",
    "Voluntary carbon market trends",
    "Policy event timeline"
  ]}
    />
  );
}
