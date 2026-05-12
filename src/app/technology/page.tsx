import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Technology Tracker"
      description="Technology maturity, KPIs, and roadmaps across hydrogen value chain and clean energy."
      plannedFeatures={[
    "TRL tracking by technology category",
    "Efficiency and cost benchmarks",
    "Manufacturer roadmaps",
    "Next-generation R&D pipeline"
  ]}
    />
  );
}
