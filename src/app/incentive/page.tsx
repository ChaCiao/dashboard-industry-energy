import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Incentive Calculator"
      description="Model the impact of subsidies and tax credits on project economics across jurisdictions."
      plannedFeatures={[
    "IRA 45V tier calculation",
    "CHPS premium scenario modeling",
    "EU CfD reverse auction simulation",
    "Stackable incentive analysis"
  ]}
    />
  );
}
