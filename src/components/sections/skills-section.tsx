import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with regularly."
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {skillsData.map((group) => (
          <Card key={group.category}>
            <CardHeader>
              <CardTitle>{group.category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
