import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Company Watchlist"
      description="Track key hydrogen and energy companies with financial and news monitoring."
      plannedFeatures={[
    "Custom watchlist creation",
    "Stock price and financial KPI cards",
    "Earnings calendar integration",
    "News and event alerts"
  ]}
    />
  );
}
