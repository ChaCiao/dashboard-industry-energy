// Home page - main dashboard for the Energy Intelligence platform.

import { WelcomeHeader } from "@/components/home/welcome-header";
import { DailyNews } from "@/components/home/daily-news";
import { ToolsGrid } from "@/components/home/tools-grid";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-8 py-10">
      <WelcomeHeader />
      <DailyNews />
      <ToolsGrid />
    </div>
  );
}
