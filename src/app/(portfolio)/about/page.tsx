import { createMetadata } from "@/lib/metadata";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";

export const metadata = createMetadata({
  title: "About",
  description: "Learn more about my background, skills, and engineering focus.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-6">
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
