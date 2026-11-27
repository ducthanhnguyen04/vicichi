import type { ReactNode } from "react";
import {
  SiReact,
  SiRedux,
  SiMui,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
const skillIcons: Record<string, ReactNode> = {
  "React Js": <SiReact className="text-[#61DAFB]" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  "Material UI": <SiMui className="text-[#007FFF]" />,
  HTML5: <FaHtml5 className="text-[#E34F26]" />,
  CSS3: <FaCss3Alt className="text-[#1572B6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Node Js": <SiNodedotjs className="text-[#5FA04E]" />,
  "Express Js": <SiExpress className="text-zinc-300" />,
  Python: <SiPython className="text-[#3776AB]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  Git: <SiGit className="text-[#F05032]" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with regularly."
      />
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-violet-500/50 bg-[#16151f] px-6 py-6"
          >
            <h3 className="mb-5 text-center text-2xl font-semibold text-zinc-300">
              {group.category}
            </h3>

            <ul className="flex flex-wrap justify-center gap-3">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-lg border border-zinc-600/70 px-3.5 py-2 text-sm text-zinc-400"
                >
                  {skillIcons[skill] && (
                    <span className="text-lg" aria-hidden="true">
                      {skillIcons[skill]}
                    </span>
                  )}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
