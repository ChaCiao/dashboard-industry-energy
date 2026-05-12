import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="LCOE Calculator"
      description="Levelized cost of electricity for solar, wind, and other renewable energy sources."
      plannedFeatures={[
    "Solar PV, onshore wind, offshore wind",
    "PPA price modeling",
    "Country-specific assumptions",
    "Side-by-side technology comparison"
  ]}
    />
  );
}
