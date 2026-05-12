import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Policy Tracker"
      description="Cross-country comparison of clean hydrogen policies, incentives, and regulations."
      plannedFeatures={[
    "CHPS, IRA 45V, RED III, CfD comparison",
    "Subsidy and tax credit details",
    "Policy update timeline",
    "Compliance and certification requirements"
  ]}
    />
  );
}
