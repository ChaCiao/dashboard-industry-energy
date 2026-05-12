import { ComingSoon } from "@/components/layout/coming-soon";

export default function Page() {
  return (
    <ComingSoon
      title="Meeting Notes"
      description="AI-assisted meeting note creation and structured action item tracking."
      plannedFeatures={[
    "Audio transcription import",
    "Auto-summarization and key takeaways",
    "Action item extraction and tracking",
    "Searchable note archive"
  ]}
    />
  );
}
