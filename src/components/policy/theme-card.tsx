import { Sparkles } from "lucide-react";
import { findThemeForSelection } from "@/lib/policy-data";
import type { CountryCode } from "@/types/policy";

type ThemeCardProps = {
  selected: CountryCode[];
};

export function ThemeCard({ selected }: ThemeCardProps) {
  if (selected.length === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          Select countries above to see an AI-generated policy theme
        </div>
      </div>
    );
  }

  const theme = findThemeForSelection(selected);

  if (!theme) {
    return (
      <div className="rounded-lg border bg-card p-4">
        <div className="mb-2 flex items-center gap-2 text-xs">
          <Sparkles className="h-3 w-3 text-muted-foreground" />
          <span className="font-medium text-foreground">Custom mix</span>
          <span className="text-muted-foreground">
            · {selected.length} countries selected
          </span>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          사용자 선택 조합. 일반 비교 모드로 진행 — 자주 쓰이는 조합은 별도 정책
          테마가 자동 표시됩니다.
        </p>
        <p className="mt-2 text-[10px] text-muted-foreground/60">
          Static analysis · live AI insight planned for Phase 2
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-2 flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5 text-foreground" />
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Policy theme
        </span>
        <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
          AI insight
        </span>
      </div>
      <h3 className="text-base font-medium tracking-tight text-foreground">
        {theme.labelEn}
        <span className="ml-2 text-sm text-muted-foreground">
          · {theme.labelKo}
        </span>
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {theme.analysisKo}
      </p>
      <p className="mt-3 text-[10px] text-muted-foreground/60">
        Static analysis · live Anthropic-API summary planned for Phase 2
      </p>
    </div>
  );
}
