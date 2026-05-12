"use client";

import { COUNTRIES } from "@/lib/policy-data";
import type { CountryCode } from "@/types/policy";

type CountrySelectorProps = {
  selected: CountryCode[];
  onChange: (selected: CountryCode[]) => void;
};

export function CountrySelector({ selected, onChange }: CountrySelectorProps) {
  const toggleCountry = (code: CountryCode) => {
    if (selected.includes(code)) {
      onChange(selected.filter((c) => c !== code));
    } else {
      onChange([...selected, code]);
    }
  };

  const selectAll = () => onChange(COUNTRIES.map((c) => c.code));
  const clearAll = () => onChange([]);

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Countries</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            {selected.length} of {COUNTRIES.length} selected
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={selectAll}
            className="rounded-md border bg-background px-2 py-1 text-[10px] hover:bg-muted/40"
          >
            Select all
          </button>
          <button
            type="button"
            onClick={clearAll}
            className="rounded-md border bg-background px-2 py-1 text-[10px] hover:bg-muted/40"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {COUNTRIES.map((country) => {
          const isSelected = selected.includes(country.code);
          return (
            <button
              key={country.code}
              type="button"
              onClick={() => toggleCountry(country.code)}
              className={
                "rounded-full border px-3 py-1 text-xs transition-colors " +
                (isSelected
                  ? "border-foreground bg-foreground text-background"
                  : "border-muted-foreground/30 bg-background text-foreground hover:bg-muted/40")
              }
            >
              {country.code} {country.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
