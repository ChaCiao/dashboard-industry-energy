"use client";

import { Columns3, Search } from "lucide-react";

export type PolicyMode = "comparison" | "deep-dive";

type ModeToggleProps = {
  mode: PolicyMode;
  onModeChange: (mode: PolicyMode) => void;
};

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-md border bg-background p-1">
      <button
        onClick={() => onModeChange("comparison")}
        className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs transition-colors ${
          mode === "comparison"
            ? "bg-muted font-medium text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Columns3 className="h-3 w-3" />
        Cross-country comparison
      </button>
      <button
        onClick={() => onModeChange("deep-dive")}
        className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs transition-colors ${
          mode === "deep-dive"
            ? "bg-muted font-medium text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Search className="h-3 w-3" />
        Single-country deep dive
      </button>
    </div>
  );
}
