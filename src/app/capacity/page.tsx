import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Capacity Tracker"
      description="Installed and planned capacity for electrolyzers, renewables, and downstream hydrogen infrastructure."
      plannedFeatures={[
    "Electrolyzer manufacturing capacity by OEM",
    "Renewable energy capacity by country",
    "HRS station deployment tracking",
    "CAGR and forecast projections"
  ]}
    />
  );
}
