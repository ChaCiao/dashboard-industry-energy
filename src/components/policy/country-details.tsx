"use client";

import { useState } from "react";
import { Sparkles, BookOpen, X, ExternalLink } from "lucide-react";
import {
  POLICIES,
  COUNTRIES,
  COUNTRY_ATTRACTIVENESS,
  NATIONAL_FRAMEWORKS,
} from "@/lib/policy-data";
import type {
  AIAnalysis,
  AttractivenessScore,
  CountryCode,
  NationalFramework,
} from "@/types/policy";
import { DetailCard } from "@/components/policy/detail-card";
import { NewsBox } from "@/components/policy/news-box";

type CountryDetailsProps = {
  selection: string;
  onSelectionChange: (selection: string) => void;
};

const AXES = [
  { key: "incentive", label: "Incentive" },
  { key: "stability", label: "Stability" },
  { key: "scope",     label: "Scope" },
  { key: "access",    label: "Access" },
  { key: "stack",     label: "Stack" },
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
  return points.map((p, i) => (i === 0 ? "M" : "L") + p.x + "," + p.y).join(" ") + " Z";
}

function labelPos(axisIndex: number) {
  const angle = -Math.PI / 2 + (axisIndex * 2 * Math.PI) / 5;
  const r = MAX_RADIUS + 22;
  return {
    x: CENTER_X + r * Math.cos(angle),
    y: CENTER_Y + r * Math.sin(angle),
  };
}

type ResolvedSelection = {
  title: string;
  countryCode: CountryCode;
  modeLabel: string;
  scores: AttractivenessScore;
  aiAnalysis: AIAnalysis;
} | null;

function resolveSelection(selection: string): ResolvedSelection {
  if (selection.startsWith("country:")) {
    const code = selection.slice("country:".length) as CountryCode;
    const country = COUNTRIES.find((c) => c.code === code);
    const data = COUNTRY_ATTRACTIVENESS.find((d) => d.country === code);
    if (!country || !data) return null;
    return {
      title: country.flag + " " + country.name,
      countryCode: code,
      modeLabel: "Country",
      scores: data.scores,
      aiAnalysis: data.aiAnalysis,
    };
  }

  if (selection.startsWith("policy:")) {
    const id = selection.slice("policy:".length);
    const policy = POLICIES.find((p) => p.id === id);
    const country = policy ? COUNTRIES.find((c) => c.code === policy.country) : null;
    const data = country ? COUNTRY_ATTRACTIVENESS.find((d) => d.country === country.code) : null;
    if (!policy || !country || !data) return null;
    return {
      title: country.flag + " " + country.name + " - " + policy.name,
      countryCode: country.code,
      modeLabel: "Country (radar always at country level)",
      scores: data.scores,
      aiAnalysis: data.aiAnalysis,
    };
  }

  return null;
}

export function CountryDetails({
  selection,
  onSelectionChange,
}: CountryDetailsProps) {
  const [frameworkOpen, setFrameworkOpen] = useState(false);
  const resolved = resolveSelection(selection);
  const framework = resolved
    ? NATIONAL_FRAMEWORKS.find((f) => f.country === resolved.countryCode)
    : null;

  const handleSelectPolicy = (policyId: string) => {
    onSelectionChange("policy:" + policyId);
  };

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-4 flex items-center justify-between gap-2 border-b pb-3">
        <div>
          <p className="text-sm font-medium">Country details</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            National framework - Radar - Detail card - News
          </p>
        </div>
        <CountryDropdown
          selection={selection}
          onSelectionChange={onSelectionChange}
        />
      </div>

      {resolved ? (
        <>
          {framework && (
            <FrameworkCard
              framework={framework}
              onOpen={() => setFrameworkOpen(true)}
            />
          )}

          <div className="grid gap-4 lg:grid-cols-2">
            <RadarPanel resolved={resolved} />
            <DetailCard
              selection={selection}
              onSelectPolicy={handleSelectPolicy}
            />
          </div>

          <div className="mt-4">
            <NewsBox selection={selection} />
          </div>

          {frameworkOpen && framework && (
            <FrameworkModal
              framework={framework}
              onClose={() => setFrameworkOpen(false)}
            />
          )}
        </>
      ) : (
        <p className="py-8 text-center text-xs text-muted-foreground">
          Select a country from the dropdown above
        </p>
      )}
    </div>
  );
}

function FrameworkCard({
  framework,
  onOpen,
}: {
  framework: NationalFramework;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="mb-4 grid w-full grid-cols-[40px_1fr_auto] items-center gap-3 rounded-md border-2 px-4 py-3 text-left transition-colors hover:bg-muted/30"
      style={{ borderColor: "#3B6D11", backgroundColor: "rgba(151, 196, 89, 0.08)" }}
    >
      <BookOpen className="h-5 w-5" style={{ color: "#3B6D11" }} />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium" style={{ color: "#3B6D11" }}>
            {framework.category.toUpperCase()}
          </p>
          <span className="text-[10px] text-muted-foreground">
            Enacted {framework.enactedYear}
            {framework.latestUpdateYear ? " - updated " + framework.latestUpdateYear : ""}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium">{framework.name}</p>
        {framework.nameKo && (
          <p className="mt-0.5 text-[10px] text-muted-foreground">{framework.nameKo}</p>
        )}
      </div>
      <span className="text-[10px] text-muted-foreground">Click to view details</span>
    </button>
  );
}

function FrameworkModal({
  framework,
  onClose,
}: {
  framework: NationalFramework;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border bg-card p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-2 border-b pb-3">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" style={{ color: "#3B6D11" }} />
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase"
                style={{ backgroundColor: "rgba(151, 196, 89, 0.2)", color: "#3B6D11" }}
              >
                {framework.category}
              </span>
              <span className="text-[10px] text-muted-foreground">
                Enacted {framework.enactedYear}
                {framework.latestUpdateYear ? " - updated " + framework.latestUpdateYear : ""}
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px]"
                style={{
                  backgroundColor: framework.status === "in-force" ? "#EAF3DE" : "#FAEEDA",
                  color: framework.status === "in-force" ? "#3B6D11" : "#854F0B",
                }}
              >
                {framework.status}
              </span>
            </div>
            <h2 className="mt-2 text-lg font-medium">{framework.name}</h2>
            {framework.nameKo && (
              <p className="mt-0.5 text-xs text-muted-foreground">{framework.nameKo}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          <section>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Summary
            </p>
            <p className="mt-1 text-sm leading-relaxed">{framework.summary}</p>
          </section>

          <section>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Key targets
            </p>
            <ul className="mt-1 space-y-1 text-sm">
              {framework.keyTargets.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: "#3B6D11" }}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Scope
            </p>
            <p className="mt-1 text-sm">{framework.scope}</p>
          </section>

          {framework.notes && (
            <section>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Notes
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{framework.notes}</p>
            </section>
          )}

          {framework.officialSourceUrl && (
            <section className="border-t pt-4">
              <button
                type="button"
                onClick={() =>
                  window.open(framework.officialSourceUrl, "_blank", "noopener,noreferrer")
                }
                className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-xs hover:bg-muted/40"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Open official source</span>
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function RadarPanel({ resolved }: { resolved: NonNullable<ResolvedSelection> }) {
  const dataPoints = AXES.map((axis, i) =>
    getVertex(i, resolved.scores[axis.key] / 5)
  );
  const dataPath =
    dataPoints.map((p, i) => (i === 0 ? "M" : "L") + p.x + "," + p.y).join(" ") + " Z";

  const accentColor = "#378ADD";
  const accentFillOpacity = 0.2;

  return (
    <div className="flex h-full flex-col rounded-lg border bg-background/50 p-3">
      <div className="mb-2 flex items-center gap-2">
        <p className="text-xs font-medium">Radar profile</p>
        <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
          Country
        </span>
      </div>
      <p className="mb-3 text-[10px] text-muted-foreground">{resolved.title}</p>

      <div className="flex justify-center">
        <svg viewBox="0 0 240 240" className="h-auto w-full max-w-[320px]">
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
        <ul className="space-y-1.5 text-[11px] leading-relaxed text-muted-foreground">
          {resolved.aiAnalysis.highlights.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[9px] text-muted-foreground/60">
          Methodology: SCORING_DIMENSIONS in policy-data.ts - hover dimension names in heatmap for details. Phase 2 validation planned.
        </p>
      </div>
    </div>
  );
}

function CountryDropdown({
  selection,
  onSelectionChange,
}: {
  selection: string;
  onSelectionChange: (selection: string) => void;
}) {
  const currentCountryValue = selection.startsWith("country:")
    ? selection
    : selection.startsWith("policy:")
      ? (() => {
          const id = selection.slice("policy:".length);
          const policy = POLICIES.find((p) => p.id === id);
          return policy ? "country:" + policy.country : "";
        })()
      : "";

  return (
    <select
      value={currentCountryValue}
      onChange={(e) => onSelectionChange(e.target.value)}
      className="rounded-md border bg-background px-2 py-1 text-xs text-foreground"
    >
      {COUNTRY_ATTRACTIVENESS.map((c) => {
        const country = COUNTRIES.find((co) => co.code === c.country);
        return (
          <option key={"country:" + c.country} value={"country:" + c.country}>
            {country?.flag} {country?.name}
          </option>
        );
      })}
    </select>
  );
}
