"use client";

import { useState } from "react";
import { Mode2CountrySelector } from "@/components/policy/mode2-country-selector";
import { Mode2Header } from "@/components/policy/mode2-header";
import { FrameworkDetail } from "@/components/policy/framework-detail";
import { DimensionBreakdown } from "@/components/policy/dimension-breakdown";
import { PolicyHistory } from "@/components/policy/policy-history";
import { NewsEventsFeed } from "@/components/policy/news-events-feed";
import { PolicyGovernance } from "@/components/policy/policy-governance";
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

      <PolicyHistory country={country} />

      <NewsEventsFeed country={country} />

      <PolicyGovernance country={country} />
    </div>
  );
}
