// Peer country LCOH comparison
// Uses inline styles for bar colors to bypass Tailwind dynamic class issue.

import { Leaf, Droplet, Flag, Plus } from "lucide-react";

type CountryLCOH = { code: string; lcoh: number };
type PathwayPeerData = {
  pathway: string;
  category: "Green H2" | "Blue H2";
  analysisCountry: CountryLCOH;
  peers: CountryLCOH[];
};

// Color palette (hex values from globals.css color tokens)
const COLORS = {
  greenDark: "#3B6D11",
  greenLight: "#97C459",
  green: "#639922",
  blueDark: "#0C447C",
  blueLight: "#B5D4F4",
  blue: "#378ADD",
};

const PEER_DATA: PathwayPeerData[] = [
  {
    pathway: "PEM",
    category: "Green H2",
    analysisCountry: { code: "KR", lcoh: 4.82 },
    peers: [
      { code: "SA", lcoh: 2.85 },
      { code: "AU", lcoh: 3.2 },
      { code: "US", lcoh: 3.95 },
      { code: "NO", lcoh: 5.4 },
    ],
  },
  {
    pathway: "Alkaline",
    category: "Green H2",
    analysisCountry: { code: "KR", lcoh: 4.21 },
    peers: [
      { code: "SA", lcoh: 2.42 },
      { code: "AU", lcoh: 2.78 },
      { code: "US", lcoh: 3.45 },
      { code: "NO", lcoh: 4.75 },
    ],
  },
  {
    pathway: "SMR+CCS",
    category: "Blue H2",
    analysisCountry: { code: "KR", lcoh: 2.15 },
    peers: [
      { code: "UAE", lcoh: 1.32 },
      { code: "US", lcoh: 1.45 },
      { code: "CA", lcoh: 1.95 },
      { code: "NO", lcoh: 2.05 },
    ],
  },
  {
    pathway: "ATR+CCS",
    category: "Blue H2",
    analysisCountry: { code: "KR", lcoh: 2.34 },
    peers: [
      { code: "UAE", lcoh: 1.48 },
      { code: "US", lcoh: 1.62 },
      { code: "CA", lcoh: 2.1 },
      { code: "NO", lcoh: 2.18 },
    ],
  },
];

export function PeerCountryComparison() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Peer country comparison</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Analysis country (Korea) first · peers sorted by LCOH ascending
          </p>
        </div>
        <button className="flex items-center gap-1 rounded-md border bg-background px-2 py-1 text-xs hover:bg-muted">
          <Plus className="h-3 w-3" />
          Add country
        </button>
      </div>

      <div className="mb-4 rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground">
        <strong className="text-foreground">KR (analysis)</strong> · then
        cheapest → most expensive
      </div>

      <div className="grid grid-cols-2 gap-4">
        {PEER_DATA.map((item) => (
          <PeerPathwayCard key={item.pathway} data={item} />
        ))}
      </div>

      <p className="mt-3 border-t pt-2 text-[10px] text-muted-foreground/70">
        Sources: User input (Korea) + IEA Global Hydrogen Review 2024 + BNEF 1H
        2025 LCOH Update. Dark bars = analysis country · light bars = peer
        benchmarks.
      </p>
    </div>
  );
}

function PeerPathwayCard({ data }: { data: PathwayPeerData }) {
  const isGreen = data.category === "Green H2";
  const accentColor = isGreen ? COLORS.greenDark : COLORS.blueDark;
  const darkBarColor = isGreen ? COLORS.greenDark : COLORS.blueDark;
  const lightBarColor = isGreen ? COLORS.greenLight : COLORS.blue;
  const flagColor = isGreen ? COLORS.green : COLORS.blue;

  const sortedPeers = [...data.peers].sort((a, b) => a.lcoh - b.lcoh);

  const allCountries = [
    { ...data.analysisCountry, isAnalysis: true },
    ...sortedPeers.map((p) => ({ ...p, isAnalysis: false })),
  ];

  const maxLcoh = Math.max(...allCountries.map((c) => c.lcoh));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span
          className="flex items-center gap-1 font-medium"
          style={{ color: accentColor }}
        >
          {isGreen ? (
            <Leaf className="h-3 w-3" />
          ) : (
            <Droplet className="h-3 w-3" />
          )}
          {data.pathway}
        </span>
        <span className="text-muted-foreground">$/kg</span>
      </div>

      <div className="grid h-24 grid-cols-5 items-end gap-1.5">
        {allCountries.map((country) => {
          const heightPct = (country.lcoh / maxLcoh) * 100;
          return (
            <div
              key={country.code}
              className="flex flex-col items-center w-full h-full justify-end"
            >
              <span
                className={`mb-1 text-[10px] ${
                  country.isAnalysis
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {country.lcoh.toFixed(2)}
              </span>

              <div
                className="rounded-t-sm"
                style={{
                  width: "80%",
                  height: `${heightPct}%`,
                  backgroundColor: country.isAnalysis
                    ? darkBarColor
                    : lightBarColor,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-1 grid grid-cols-5 gap-1.5 text-center text-[10px] text-muted-foreground">
        {allCountries.map((country) => (
          <span
            key={country.code}
            className={
              country.isAnalysis
                ? "flex items-center justify-center gap-0.5 font-medium text-foreground"
                : ""
            }
          >
            {country.code}
            {country.isAnalysis && (
              <Flag className="h-2.5 w-2.5" style={{ color: flagColor }} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
