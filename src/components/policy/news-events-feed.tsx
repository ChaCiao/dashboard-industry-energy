"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  getNewsByCountryFiltered,
  NEWS_CATEGORIES,
  type NewsCategory,
} from "@/lib/news-events-data";
import type { CountryCode } from "@/types/policy";

type NewsEventsFeedProps = {
  country: CountryCode;
};

function formatDate(iso: string): string {
  // Convert "2025-09-04" to "Sep 04, 2025" for readability
  const [year, month, day] = iso.split("-");
  const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const monthIdx = parseInt(month, 10) - 1;
  if (monthIdx < 0 || monthIdx > 11) return iso;
  return MONTHS[monthIdx] + " " + day + ", " + year;
}

function getRelativeDays(iso: string): string {
  const eventDate = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - eventDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return "upcoming";
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return diffDays + " days ago";
  if (diffDays < 30) return Math.floor(diffDays / 7) + "w ago";
  if (diffDays < 365) return Math.floor(diffDays / 30) + "mo ago";
  return Math.floor(diffDays / 365) + "y ago";
}

export function NewsEventsFeed({ country }: NewsEventsFeedProps) {
  const [activeFilters, setActiveFilters] = useState<NewsCategory[]>([]);

  const filteredNews = useMemo(
    () => getNewsByCountryFiltered(country, activeFilters),
    [country, activeFilters]
  );

  const totalForCountry = useMemo(
    () => getNewsByCountryFiltered(country, []).length,
    [country]
  );

  const toggleFilter = (cat: NewsCategory) => {
    setActiveFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  if (totalForCountry === 0) {
    return (
      <div className="rounded-lg border border-dashed bg-card/50 p-6 text-center text-xs text-muted-foreground">
        No news events curated for this country
      </div>
    );
  }

  const categoryMeta = (cat: NewsCategory) =>
    NEWS_CATEGORIES.find((c) => c.key === cat);

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between border-b pb-3">
        <div>
          <p className="text-sm font-medium text-foreground">News &amp; Events</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            Curated industry developments — {filteredNews.length} of {totalForCountry} shown - sorted by most recent
          </p>
        </div>
      </div>

      {/* Category filter chips */}
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-muted-foreground">Filter:</span>
        {NEWS_CATEGORIES.map((c) => {
          const isActive = activeFilters.includes(c.key);
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => toggleFilter(c.key)}
              className={
                "rounded-md border px-2 py-0.5 text-[10px] transition-colors " +
                (isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-muted")
              }
              style={
                isActive ? { backgroundColor: c.color, borderColor: c.color, color: "white" } : undefined
              }
            >
              {c.label}
            </button>
          );
        })}
        {activeFilters.length > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-[10px] text-muted-foreground underline hover:text-foreground"
          >
            Clear ({activeFilters.length})
          </button>
        )}
      </div>

      {/* News cards */}
      {filteredNews.length === 0 ? (
        <div className="rounded-md border border-dashed bg-card/30 p-6 text-center text-[11px] text-muted-foreground">
          No events match the selected filters
        </div>
      ) : (
        <div className="space-y-2">
          {filteredNews.map((n, i) => {
            const catMeta = categoryMeta(n.category);
            return (
              <div
                key={n.country + "-" + n.date + "-" + i}
                className="rounded-md border bg-background/40 p-3"
              >
                <div className="flex flex-wrap items-center gap-1.5">
                  <span
                    className="rounded-sm px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider"
                    style={{
                      backgroundColor: catMeta?.color ?? "#6B7280",
                      color: "white",
                    }}
                  >
                    {catMeta?.label ?? n.category}
                  </span>
                  <span className="text-[9px] text-muted-foreground">
                    {formatDate(n.date)}
                  </span>
                  <span className="text-[9px] text-muted-foreground">
                    ·
                  </span>
                  <span className="text-[9px] text-muted-foreground">
                    {getRelativeDays(n.date)}
                  </span>
                </div>

                <p className="mt-1.5 text-xs font-medium text-foreground">
                  {n.title}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  {n.summary}
                </p>

                <div className="mt-2 flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span>Source:</span>
                  <Link
                    href={n.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-foreground"
                  >
                    {n.sourceName} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
