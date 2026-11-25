import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/shared/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-12">
      <SectionHeading
        title="Hey, I'm Vicichi"
        subtitle="A brief introduction to my background and engineering focus."
      />
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p className="leading-relaxed">{personalData.bio}</p>
        <p className="text-sm">Based in {personalData.location}.</p>
      </div>
    </section>
  );
}
