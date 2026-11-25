import { createMetadata } from "@/lib/metadata";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata = createMetadata({
  title: "Projects",
  description: "Explore selected engineering projects and case studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="py-6">
      <ProjectsSection />
    </div>
  );
}
