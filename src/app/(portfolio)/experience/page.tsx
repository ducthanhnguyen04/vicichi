import { createMetadata } from "@/lib/metadata";
import { ExperienceSection } from "@/components/sections/experience-section";

export const metadata = createMetadata({
  title: "Experience",
  description: "Work experience and education history.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="py-6">
      <ExperienceSection />
    </div>
  );
}
