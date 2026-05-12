// Daily energy news brief - 5 sample cards (MVP).
// Phase 2: replace SAMPLE_NEWS with real RSS/API data.

import { ExternalLink, Calendar } from "lucide-react";

type NewsItem = {
  id: string;
  source:
    | "IEA"
    | "S&P Global"
    | "Reuters"
    | "BloombergNEF"
    | "Hydrogen Insight";
  category: "Policy" | "Project" | "Market" | "Technology";
  title: string;
  summary: string;
  date: string;
  url: string;
};

const SAMPLE_NEWS: NewsItem[] = [
  {
    id: "1",
    source: "IEA",
    category: "Policy",
    title: "Korea announces 2030 CHPS targets with revised RFS quota",
    summary:
      "The Ministry of Trade outlines an updated CHPS structure aimed at scaling clean hydrogen supply to 2.5 Mtpa by 2030, with revised auction premiums.",
    date: "2026-05-11",
    url: "https://www.iea.org/news",
  },
  {
    id: "2",
    source: "S&P Global",
    category: "Project",
    title: "NEOM Green Hydrogen secures additional offtake contracts",
    summary:
      "Air Products signs new long-term offtake covering 50% of NEOM's planned 600 ktpa output, supporting European industrial decarbonization buyers.",
    date: "2026-05-10",
    url: "https://www.spglobal.com",
  },
  {
    id: "3",
    source: "BloombergNEF",
    category: "Market",
    title: "Global electrolyzer manufacturing capacity hits 25 GW threshold",
    summary:
      "BNEF tracks 178 announced gigafactories with Chinese OEMs holding 60 percent of nameplate capacity, pressuring Western players on cost.",
    date: "2026-05-10",
    url: "https://about.bnef.com",
  },
  {
    id: "4",
    source: "Reuters",
    category: "Project",
    title: "Equinor and RWE expand blue hydrogen partnership in Norway",
    summary:
      "Joint development of ATR-based blue hydrogen with 92 percent CCS capture, targeting EU import via pipeline corridor by 2030.",
    date: "2026-05-09",
    url: "https://www.reuters.com",
  },
  {
    id: "5",
    source: "Hydrogen Insight",
    category: "Technology",
    title: "Topsoe achieves 85 percent efficiency milestone with SOEC pilot",
    summary:
      "Demonstration plant validates high-temperature electrolysis performance using waste heat integration, signaling commercial readiness by 2027.",
    date: "2026-05-08",
    url: "https://www.hydrogeninsight.com",
  },
];

const CATEGORY_COLORS: Record<NewsItem["category"], string> = {
  Policy: "#0C447C",
  Project: "#3B6D11",
  Market: "#BA7517",
  Technology: "#534AB7",
};

export function DailyNews() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl font-medium tracking-tight">
            Daily News Brief
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Curated from IEA, S&P Global, BloombergNEF, Reuters and Hydrogen
            Insight
          </p>
        </div>
        <a
          href="/news"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          View all
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_NEWS.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground/60">
        Sample stories representing topics the MI team typically tracks. Live
        news feed integration planned for Phase 2, subject to source licensing
        review.
      </p>
    </section>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  const accentColor = CATEGORY_COLORS[item.category];

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-lg border bg-card p-4 transition-colors hover:border-foreground/30"
    >
      <div className="flex items-center justify-between">
        <span
          className="rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
          style={{ backgroundColor: accentColor + "15", color: accentColor }}
        >
          {item.category}
        </span>
        <span className="text-[10px] text-muted-foreground">{item.source}</span>
      </div>
      <h3 className="text-sm font-medium leading-snug text-foreground group-hover:underline">
        {item.title}
      </h3>
      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
        {item.summary}
      </p>
      <div className="mt-auto flex items-center gap-1 pt-2 text-[10px] text-muted-foreground">
        <Calendar className="h-2.5 w-2.5" />
        {item.date}
      </div>
    </a>
  );
}
