import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Project Economics"
      description="Comprehensive project financial modeling with NPV, IRR, and payback analysis."
      plannedFeatures={[
    "Full DCF model with sensitivity",
    "NPV, IRR, payback period",
    "Monte Carlo risk simulation",
    "Scenario comparison and stress testing"
  ]}
    />
  );
}
