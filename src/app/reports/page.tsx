import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Report Builder"
      description="Generate professional reports with charts from your analysis."
      plannedFeatures={[
    "Pre-built report templates",
    "Chart embedding from other tools",
    "Export to PDF and Word",
    "Brand-compliant formatting"
  ]}
    />
  );
}
