import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Project Tracker"
      description="Global green and blue hydrogen project database with capacity, status, and offtake details."
      plannedFeatures={[
    "IEA Hydrogen Project Database integration",
    "Filter by country, technology, FID stage",
    "Interactive map view",
    "Capacity timeline aggregation"
  ]}
    />
  );
}
