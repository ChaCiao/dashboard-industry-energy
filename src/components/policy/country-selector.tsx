"use client";

import { Check } from "lucide-react";
import { COUNTRIES } from "@/lib/policy-data";
import type { CountryCode } from "@/types/policy";

type CountrySelectorProps = {
  selected: CountryCode[];
  onChange: (countries: CountryCode[]) => void;
};

export function CountrySelector({ selected, onChange }: CountrySelectorProps) {
  const toggle = (code: CountryCode) => {
    if (selected.includes(code)) {
      onChange(selected.filter((c) => c !== code));
    } else {
      onChange([...selected, code]);
    }
  };

  const topLevel = COUNTRIES.filter((c) => !c.isSubRegion);

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Countries
          </p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            {selected.length} of {COUNTRIES.length} selected · click to toggle
          </p>
        </div>
        <div className="flex gap-2 text-[10px]">
          <button
            onClick={() => onChange(COUNTRIES.map((c) => c.code))}
            className="text-muted-foreground hover:text-foreground"
          >
            Select all
          </button>
          <span className="text-muted-foreground">·</span>
          <button
            onClick={() => onChange([])}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {topLevel.map((country) => {
          const isSelected = selected.includes(country.code);
          const subRegions = COUNTRIES.filter(
            (c) => c.parentCode === country.code,
          );

          return (
            <div key={country.code} className="flex items-center gap-1">
              <button
                onClick={() => toggle(country.code)}
                className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-colors ${
                  isSelected
                    ? "border-foreground/30 bg-muted text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {isSelected && <Check className="h-2.5 w-2.5" />}
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </button>

              {isSelected &&
                subRegions.map((sub) => {
                  const subSelected = selected.includes(sub.code);
                  return (
                    <button
                      key={sub.code}
                      onClick={() => toggle(sub.code)}
                      className={`flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] transition-colors ${
                        subSelected
                          ? "border-foreground/30 bg-muted text-foreground"
                          : "border-dashed border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="text-muted-foreground/60">↳</span>
                      {subSelected && <Check className="h-2 w-2" />}
                      <span>{sub.flag}</span>
                      <span>{sub.name}</span>
                    </button>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
