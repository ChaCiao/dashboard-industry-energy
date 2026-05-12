// Reusable "Coming soon" placeholder for tabs not yet implemented.

import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

type ComingSoonProps = {
  title: string;
  description?: string;
  plannedFeatures?: string[];
};

export function ComingSoon({
  title,
  description,
  plannedFeatures,
}: ComingSoonProps) {
  return (
    <div className="mx-auto max-w-3xl px-8 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" />
        Back to dashboard
      </Link>

      <div className="rounded-lg border bg-card p-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          <Construction className="h-3 w-3" />
          Coming soon
        </div>

        <h1 className="text-3xl font-medium tracking-tight">{title}</h1>

        {description && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {plannedFeatures && plannedFeatures.length > 0 && (
          <div className="mt-8 border-t pt-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Planned features
            </p>
            <ul className="space-y-2">
              {plannedFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
