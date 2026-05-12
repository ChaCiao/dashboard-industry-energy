import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Tech Spec Comparison"
      description="Side-by-side technical specification comparison for electrolyzers, fuel cells, and other clean energy equipment."
      plannedFeatures={[
    "PEM, Alkaline, SOEC, AEM electrolyzer comparison",
    "PEMFC, SOFC fuel cell specs",
    "Radar chart visualization",
    "Source citation with measurement conditions"
  ]}
    />
  );
}
