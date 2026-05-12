import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Patent Tracker"
      description="Patent filing trends and competitive intelligence across key hydrogen technologies."
      plannedFeatures={[
    "Filing trends by company and technology",
    "Patent family size and citations",
    "Google Patents and USPTO integration",
    "Competitive whitespace analysis"
  ]}
    />
  );
}
