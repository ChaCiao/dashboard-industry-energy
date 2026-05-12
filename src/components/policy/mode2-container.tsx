"use client";

import { useState } from "react";
import { Mode2CountrySelector } from "@/components/policy/mode2-country-selector";
import { Mode2Header } from "@/components/policy/mode2-header";
import { FrameworkDetail } from "@/components/policy/framework-detail";
import { DimensionBreakdown } from "@/components/policy/dimension-breakdown";
import type { CountryCode } from "@/types/policy";

type Mode2ContainerProps = {
  initialCountry?: CountryCode;
};

export function Mode2Container({ initialCountry = "KR" }: Mode2ContainerProps) {
  const [country, setCountry] = useState<CountryCode>(initialCountry);

  return (
    <div className="space-y-4">
      <Mode2CountrySelector
        selectedCountry={country}
        onSelectCountry={setCountry}
      />

      <Mode2Header country={country} />

      <FrameworkDetail country={country} />

      <DimensionBreakdown country={country} />

      {/* Placeholders for S-P7.2 / S-P7.3 */}
      <div className="rounded-lg border border-dashed bg-card/30 p-6 text-center text-xs text-muted-foreground">
        Policy history - coming in S-P7.2
      </div>
      <div className="rounded-lg border border-dashed bg-card/30 p-6 text-center text-xs text-muted-foreground">
        News &amp; events feed - coming in S-P7.3
      </div>
      <div className="rounded-lg border border-dashed bg-card/30 p-6 text-center text-xs text-muted-foreground">
        Key players &amp; projects - coming in S-P7.3
      </div>
    </div>
  );
}
