import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Slide Generator"
      description="Auto-generate executive presentations with domain charts and data."
      plannedFeatures={[
    "Pre-built slide templates",
    "Chart-to-slide automation",
    "Hyundai brand guideline compliance",
    "Export to PowerPoint"
  ]}
    />
  );
}
