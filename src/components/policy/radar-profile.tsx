// Radar profile with two selection modes:
// - "country:KR" → country-level aggregated assessment
// - "policy:us-ira45v" → individual policy assessment
// Dropdown groups countries and policies separately for clarity.

"use client";

import { Sparkles } from "lucide-react";
import { POLICIES, COUNTRIES, COUNTRY_ATTRACTIVENESS } from "@/lib/policy-data";
import type {
  AIAnalysis,
  AttractivenessScore,
  CountryCode,
} from "@/types/policy";

// Selection can be either a country code (aggregated) or a policy id.
// We use a prefix to distinguish: "country:KR" vs "policy:us-ira45v".
type RadarProfileProps = {
  selection: string;
  onSelectionChange: (selection: string) => void;
};

const AXES = [
  { key: "incentive", label: "Incentive" },
  { key: "stability", label: "Stability" },
  { key: "scope", label: "Scope" },
  { key: "access", label: "Access" },
  { key: "stack", label: "Stack" },
] as const;

const CENTER_X = 120;
const CENTER_Y = 120;
const MAX_RADIUS = 90;

function getVertex(axisIndex: number, scoreRatio: number) {
  const angle = -Math.PI / 2 + (axisIndex * 2 * Math.PI) / 5;
  const r = scoreRatio * MAX_RADIUS;
  return {
    x: CENTER_X + r * Math.cos(angle),
    y: CENTER_Y + r * Math.sin(angle),
  };
}

function pentagonPath(scoreLevel: number): string {
  const ratio = scoreLevel / 5;
  const points = AXES.map((_, i) => getVertex(i, ratio));
  return (
    points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z"
  );
}

function labelPos(axisIndex: number) {
  const angle = -Math.PI / 2 + (axisIndex * 2 * Math.PI) / 5;
  const r = MAX_RADIUS + 22;
  return {
    x: CENTER_X + r * Math.cos(angle),
    y: CENTER_Y + r * Math.sin(angle),
  };
}

// Parse selection into actual data to display
type ResolvedSelection = {
  title: string;
  subtitle: string;
  scores: AttractivenessScore;
  aiAnalysis: AIAnalysis;
  modeLabel: string;
} | null;

function resolveSelection(selection: string): ResolvedSelection {
  if (selection.startsWith("country:")) {
    const code = selection.slice("country:".length) as CountryCode;
    const country = COUNTRIES.find((c) => c.code === code);
    const data = COUNTRY_ATTRACTIVENESS.find((d) => d.country === code);
    if (!country || !data) return null;
    return {
      title: `${country.flag} ${country.name}`,
      subtitle: "Aggregated country assessment",
      scores: data.scores,
      aiAnalysis: data.aiAnalysis,
      modeLabel: "Country",
    };
  }

  if (selection.startsWith("policy:")) {
    const id = selection.slice("policy:".length);
    const policy = POLICIES.find((p) => p.id === id);
    const country = policy
      ? COUNTRIES.find((c) => c.code === policy.country)
      : null;
    if (!policy || !country) return null;
    return {
      title: `${country.flag} ${country.name} · ${policy.name}`,
      subtitle: "Individual policy",
      scores: policy.scores,
      aiAnalysis: policy.aiAnalysis,
      modeLabel: "Policy",
    };
  }

  return null;
}

export function RadarProfile({
  selection,
  onSelectionChange,
}: RadarProfileProps) {
  const resolved = resolveSelection(selection);

  if (!resolved) {
    return (
      <div className="flex h-full flex-col rounded-lg border bg-card p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-sm font-medium">Radar profile</p>
          <SelectionDropdown
            selection={selection}
            onSelectionChange={onSelectionChange}
          />
        </div>
        <div className="flex flex-1 items-center justify-center text-center text-xs text-muted-foreground">
          Select a country or policy to see radar profile
        </div>
      </div>
    );
  }

  const dataPoints = AXES.map((axis, i) =>
    getVertex(i, resolved.scores[axis.key] / 5),
  );
  const dataPath =
    dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") +
    " Z";

  const accentColor = "#378ADD";
  const accentFillOpacity = 0.2;

  return (
    <div className="flex h-full flex-col rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Radar profile</p>
            <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
              {resolved.modeLabel}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {resolved.title}
          </p>
        </div>
        <SelectionDropdown
          selection={selection}
          onSelectionChange={onSelectionChange}
        />
      </div>

      <div className="flex justify-center">
        <svg viewBox="0 0 240 240" className="h-auto w-full max-w-[360px]">
          {[1, 2, 3, 4, 5].map((level) => (
            <path
              key={level}
              d={pentagonPath(level)}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground/20"
            />
          ))}

          {AXES.map((_, i) => {
            const end = getVertex(i, 1);
            return (
              <line
                key={i}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={end.x}
                y2={end.y}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-muted-foreground/20"
              />
            );
          })}

          <path
            d={dataPath}
            fill={accentColor}
            fillOpacity={accentFillOpacity}
            stroke={accentColor}
            strokeWidth="1.5"
          />

          {dataPoints.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3" fill={accentColor} />
          ))}

          {AXES.map((axis, i) => {
            const pos = labelPos(i);
            return (
              <text
                key={axis.key}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-muted-foreground text-[10px]"
              >
                {axis.label}
              </text>
            );
          })}
        </svg>
      </div>

      <div className="mt-auto border-t pt-3">
        <div className="mb-2 flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-foreground" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            AI analysis
          </span>
        </div>
        <ul className="space-y-2 text-[12px] leading-relaxed text-muted-foreground">
          {resolved.aiAnalysis.highlights.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[10px] text-muted-foreground/60">
          Static analysis · live Anthropic-API summary planned for Phase 2
        </p>
      </div>
    </div>
  );
}

// Grouped dropdown — countries first, then policies
function SelectionDropdown({
  selection,
  onSelectionChange,
}: {
  selection: string;
  onSelectionChange: (selection: string) => void;
}) {
  return (
    <select
      value={selection}
      onChange={(e) => onSelectionChange(e.target.value)}
      className="rounded-md border bg-background px-2 py-1 text-xs text-foreground"
    >
      <optgroup label="Country (aggregated)">
        {COUNTRY_ATTRACTIVENESS.map((c) => {
          const country = COUNTRIES.find((co) => co.code === c.country);
          return (
            <option key={`country:${c.country}`} value={`country:${c.country}`}>
              {country?.flag} {country?.name}
            </option>
          );
        })}
      </optgroup>
      <optgroup label="Individual policies">
        {POLICIES.map((p) => {
          const country = COUNTRIES.find((c) => c.code === p.country);
          return (
            <option key={`policy:${p.id}`} value={`policy:${p.id}`}>
              {country?.flag} {country?.code} · {p.name}
            </option>
          );
        })}
      </optgroup>
    </select>
  );
}
