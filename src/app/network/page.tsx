import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Network Tracker"
      description="Manage industry contacts and conference networking notes."
      plannedFeatures={[
    "Contact database with company and role",
    "Conference and event log",
    "Follow-up reminders",
    "Tag-based search"
  ]}
    />
  );
}
