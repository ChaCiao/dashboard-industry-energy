// AppShell wraps all pages with the sidebar + main content area.

import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background">{children}</main>
    </div>
  );
}
