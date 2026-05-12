"use client";

import { COUNTRIES } from "@/lib/policy-data";
import type { CountryCode } from "@/types/policy";

type Mode2CountrySelectorProps = {
  selectedCountry: CountryCode;
  onSelectCountry: (code: CountryCode) => void;
};

export function Mode2CountrySelector({
  selectedCountry,
  onSelectCountry,
}: Mode2CountrySelectorProps) {
  return (
    <div className="rounded-lg border bg-card p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-medium text-foreground">Select country</p>
        <p className="text-[10px] text-muted-foreground">
          {COUNTRIES.length} countries available
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {COUNTRIES.map((c) => {
          const isSelected = c.code === selectedCountry;
          return (
            <button
              key={c.code}
              type="button"
              onClick={() => onSelectCountry(c.code)}
              className={
                "rounded-md border px-3 py-1.5 text-xs transition-colors " +
                (isSelected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-muted")
              }
              title={c.name}
            >
              {c.shortName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
