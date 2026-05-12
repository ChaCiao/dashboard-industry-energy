// Tools grid for the home page.
// Reuses the NAVIGATION data so this stays in sync with the sidebar.

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAVIGATION } from "@/lib/navigation";

// LCOH is the only one implemented in MVP. Others show "Coming soon".
const IMPLEMENTED_HREFS = new Set(["/lcoh"]);

export function ToolsGrid() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-medium tracking-tight">Analysis tools</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          21 tools across 6 categories · click any tool to open
        </p>
      </div>

      <div className="space-y-8">
        {NAVIGATION.map((category) => (
          <div key={category.id}>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {category.label}
            </h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.items.map((item) => {
                const isReady = IMPLEMENTED_HREFS.has(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-foreground/30"
                  >
                    <div className="rounded-md bg-muted p-2 group-hover:bg-muted/80">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium leading-tight">
                          {item.label}
                        </p>
                        <ArrowUpRight className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        {isReady ? "Ready" : "Coming soon"}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
