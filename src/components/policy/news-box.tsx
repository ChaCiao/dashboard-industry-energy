"use client";

import { Search, ExternalLink, Newspaper, FileText } from "lucide-react";
import { POLICIES, COUNTRIES } from "@/lib/policy-data";

type NewsBoxProps = {
  selection: string;
};

function buildGoogleNewsUrl(query: string): string {
  return "https://www.google.com/search?q=" + encodeURIComponent(query) + "&tbm=nws";
}

function buildReutersUrl(query: string): string {
  return "https://www.reuters.com/site-search/?query=" + encodeURIComponent(query);
}

function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function NewsBox({ selection }: NewsBoxProps) {
  let title = "";
  let subtitle = "";
  let googleQuery = "";
  let reutersQuery = "";
  let officialUrl: string | undefined;

  if (selection.startsWith("policy:")) {
    const id = selection.slice("policy:".length);
    const policy = POLICIES.find((p) => p.id === id);
    const country = policy ? COUNTRIES.find((c) => c.code === policy.country) : null;
    if (!policy || !country) return null;

    title = country.flag + " " + policy.name;
    subtitle = "External news search for this policy";
    googleQuery = policy.googleNewsQuery ?? (policy.name + " " + country.name + " hydrogen");
    reutersQuery = policy.reutersQuery ?? (policy.name + " hydrogen");
    officialUrl = policy.officialSourceUrl;
  } else if (selection.startsWith("country:")) {
    const code = selection.slice("country:".length);
    const country = COUNTRIES.find((c) => c.code === code);
    if (!country) return null;

    title = country.flag + " " + country.name;
    subtitle = "External news search for hydrogen policy in this country";
    googleQuery = country.name + " hydrogen policy";
    reutersQuery = country.name + " hydrogen policy";
    officialUrl = undefined;
  } else {
    return null;
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center gap-2">
        <Search className="h-4 w-4 text-foreground" />
        <div>
          <p className="text-sm font-medium">News & sources - {title}</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        <button
          type="button"
          onClick={() => openInNewTab(buildGoogleNewsUrl(googleQuery))}
          className="flex items-center justify-between rounded-md border bg-background px-3 py-2.5 text-left text-xs transition-colors hover:border-foreground/30 hover:bg-muted/40"
        >
          <span className="flex items-center gap-2">
            <Newspaper className="h-3.5 w-3.5 text-muted-foreground" />
            <span>Google News</span>
          </span>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </button>

        <button
          type="button"
          onClick={() => openInNewTab(buildReutersUrl(reutersQuery))}
          className="flex items-center justify-between rounded-md border bg-background px-3 py-2.5 text-left text-xs transition-colors hover:border-foreground/30 hover:bg-muted/40"
        >
          <span className="flex items-center gap-2">
            <Newspaper className="h-3.5 w-3.5 text-muted-foreground" />
            <span>Reuters</span>
          </span>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </button>

        {officialUrl ? (
          <button
            type="button"
            onClick={() => openInNewTab(officialUrl)}
            className="flex items-center justify-between rounded-md border bg-background px-3 py-2.5 text-left text-xs transition-colors hover:border-foreground/30 hover:bg-muted/40"
          >
            <span className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Official source</span>
            </span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </button>
        ) : (
          <div className="flex items-center justify-between rounded-md border border-dashed bg-background/50 px-3 py-2.5 text-left text-xs text-muted-foreground/50">
            <span className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5" />
              <span>Official source - n/a</span>
            </span>
          </div>
        )}
      </div>

      <p className="mt-3 text-[10px] text-muted-foreground/70">
        Live Anthropic-API news summary planned for Phase 2
      </p>
    </div>
  );
}
