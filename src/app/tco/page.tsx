import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="TCO Calculator"
      description="Total cost of ownership comparison for FCEV, BEV, and ICE vehicles."
      plannedFeatures={[
    "CAPEX, OPEX, fuel cost integration",
    "Heavy-duty truck and bus scenarios",
    "Charging and refueling infrastructure",
    "Carbon intensity comparison"
  ]}
    />
  );
}
