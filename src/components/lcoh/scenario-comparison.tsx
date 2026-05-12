// Base / Low / High scenario comparison for 4 pathways

const SCENARIOS = [
  { name: "PEM", low: 4.1, base: 4.82, high: 5.4, color: "green" },
  { name: "Alkaline", low: 3.5, base: 4.21, high: 4.95, color: "green" },
  { name: "SMR+CCS", low: 1.72, base: 2.15, high: 2.95, color: "blue" },
  { name: "ATR+CCS", low: 1.88, base: 2.34, high: 3.1, color: "blue" },
];

const MAX = Math.max(...SCENARIOS.map((s) => s.high));

export function ScenarioComparison() {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium">Scenario comparison</p>
        <p className="text-xs text-muted-foreground">Base / Low / High</p>
      </div>

      <div className="grid grid-cols-4 gap-3 px-1 h-28 items-end">
        {SCENARIOS.map((s) => {
          const colors =
            s.color === "green"
              ? ["#C0DD97", "#639922", "#3B6D11"]
              : ["#B5D4F4", "#378ADD", "#185FA5"];
          const values = [s.low, s.base, s.high];
          return (
            <div key={s.name} className="flex h-full items-end gap-[3px]">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    backgroundColor: colors[i],
                    height: `${(v / MAX) * 100}%`,
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-2 grid grid-cols-4 gap-3 text-center text-xs text-muted-foreground">
        {SCENARIOS.map((s) => (
          <div key={s.name}>{s.name}</div>
        ))}
      </div>
    </div>
  );
}
