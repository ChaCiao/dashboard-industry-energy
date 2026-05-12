import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Market Prices"
      description="Real-time and historical pricing for gas, power, carbon, and hydrogen-related commodities."
      plannedFeatures={[
    "TTF, HH, JKM natural gas prices",
    "EU ETS and K-ETS carbon prices",
    "FX rates with KRW conversion",
    "Historical trend charts and alerts"
  ]}
    />
  );
}
