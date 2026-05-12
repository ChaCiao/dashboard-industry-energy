// Collapsible sidebar with grouped navigation.
// Categories expand/collapse on click. The category containing the active page
// is auto-expanded on mount.

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Flame } from "lucide-react";
import { NAVIGATION } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();

  // Find which category contains the current page
  const activeCategoryId = NAVIGATION.find((cat) =>
    cat.items.some(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/"),
    ),
  )?.id;

  // Track which categories are open. By default only the active one is open.
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  // Initialize: open the active category on mount or when pathname changes
  useEffect(() => {
    if (activeCategoryId) {
      setOpenCategories((prev) => new Set(prev).add(activeCategoryId));
    }
  }, [activeCategoryId]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  return (
    <aside className="sticky top-0 flex h-screen w-60 shrink-0 flex-col border-r bg-card">
      {/* Logo / brand */}
      <Link
        href="/"
        className="flex items-center gap-2 border-b px-4 py-4 hover:bg-muted/30 transition-colors"
      >
        <Flame className="h-5 w-5 text-primary" />
        <span className="font-medium text-sm">Energy Intelligence</span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {NAVIGATION.map((category) => {
          const isOpen = openCategories.has(category.id);
          return (
            <div key={category.id} className="mb-1">
              <button
                onClick={() => toggleCategory(category.id)}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:bg-muted/50 transition-colors"
              >
                <span>{category.label}</span>
                <ChevronRight
                  className={`h-3 w-3 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <ul className="mt-0.5 space-y-0.5">
                  {category.items.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/");
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition-colors ${
                            isActive
                              ? "bg-muted font-medium text-foreground"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t px-4 py-3 text-xs text-muted-foreground">
        <p>v0.1.0 · MVP</p>
      </div>
    </aside>
  );
}
