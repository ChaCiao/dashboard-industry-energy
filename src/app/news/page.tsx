import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="News Brief"
      description="Curated daily energy and hydrogen news from IEA, S&P Global, BloombergNEF, Reuters, and industry sources."
      plannedFeatures={[
    "Live RSS feed integration",
    "Filter by source, region, and topic",
    "Save articles for later reference",
    "Daily digest email summary"
  ]}
    />
  );
}
