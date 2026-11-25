import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 space-y-12">
      <div>
        <SectionHeading
          title="Experience"
          subtitle="Roles and teams I have contributed to."
        />
        <div className="space-y-4">
          {experienceData.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle>
                    {item.role} · {item.company}
                  </CardTitle>
                  <span className="text-xs text-zinc-500">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
                <CardDescription>{item.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SectionHeading title="Education" />
        <div className="space-y-4">
          {educationData.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle>{edu.degree}</CardTitle>
                  <span className="text-xs text-zinc-500">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>
                <CardDescription>
                  {edu.institution} · {edu.location}
                </CardDescription>
              </CardHeader>
              {edu.description ? (
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {edu.description}
                  </p>
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
