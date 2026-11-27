import { Database, Server, Sparkles } from "lucide-react";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/shared/section-heading";

function FloatingBadge({
  icon: Icon,
  label,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-medium text-zinc-800 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 ${className}`}
    >
      <Icon className="h-4 w-4 text-emerald-500 dark:text-lime-400" />
      {label}
    </div>
  );
}

function TerminalCard() {
  return (
    <div className="relative mx-auto w-full max-w-lg py-6 sm:px-6">
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
        {/* Title bar */}
        <div className="relative flex items-center border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-zinc-400 dark:text-zinc-500">
            profile.ts
          </span>
          <span className="ml-auto font-mono text-xs text-zinc-400 dark:text-zinc-500">
            ⌘K
          </span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-200 font-mono text-xs dark:border-zinc-800">
          <div className="border-b-2 border-emerald-500 px-5 py-2.5 font-semibold text-zinc-900 dark:border-lime-400 dark:text-zinc-100">
            profile.ts
          </div>
          <div className="px-5 py-2.5 text-zinc-400 dark:text-zinc-500">
            api.ts
          </div>
        </div>

        {/* Code */}
        <pre className="overflow-x-auto px-4 py-5 font-mono text-[13px] leading-6">
          <code>
            {CODE_LINES.map((line, i) => (
              <div key={i} className="flex">
                <span className="w-8 shrink-0 select-none pr-4 text-right text-zinc-300 dark:text-zinc-600">
                  {i + 1}
                </span>
                <span className="whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>

        {/* Shell output */}
        <div className="space-y-1.5 border-t border-zinc-200 px-4 py-4 font-mono text-xs dark:border-zinc-800">
          <p>
            <span className="text-zinc-400 dark:text-zinc-500">$ whoami</span>
            <span className="ml-3 font-semibold text-zinc-900 dark:text-zinc-100">
              {personalData.name ?? "Thanh Nguyen"}
            </span>
          </p>
          <p>
            <span className="text-zinc-400 dark:text-zinc-500">$ focus</span>
            <span className="ml-4 font-semibold text-zinc-900 dark:text-zinc-100">
              Backend Engineering + AI Generator
            </span>
          </p>
          <span className="mt-2 block h-4 w-2 animate-pulse bg-emerald-500 dark:bg-lime-400" />
        </div>
      </div>

      <FloatingBadge
        icon={Server}
        label="Node.js"
        className="right-0 top-14 hidden sm:flex"
      />
      <FloatingBadge
        icon={Database}
        label="PostgreSQL"
        className="bottom-24 left-0 hidden sm:flex"
      />
      <FloatingBadge
        icon={Sparkles}
        label="AI APIs"
        className="bottom-0 right-8 hidden sm:flex"
      />
    </div>
  );
}

const k = "text-purple-600 dark:text-purple-400"; 
const v = "text-sky-600 dark:text-sky-400"; 
const s = "text-emerald-600 dark:text-lime-300"; 
const p = "text-zinc-700 dark:text-zinc-300"; 

const CODE_LINES = [
  <>
    <span className={k}>const</span> <span className={v}>developer</span>{" "}
    <span className={p}>= {"{"}</span>
  </>,
  <>
    {"  "}
    <span className={p}>name:</span> <span className={s}>'Thanh Nguyen Duc'</span>,
  </>,
  <>
    {"  "}
    <span className={p}>role:</span> <span className={s}>'Software Engineer'</span>,
  </>,
  <>
    {"  "}
    <span className={p}>specialty:</span>{" "}
    <span className={s}>'Backend Developer'</span>,
  </>,
  <>
    {"  "}
    <span className={p}>focus: [</span>
  </>,
  <>
    {"    "}
    <span className={s}>'Scalable APIs'</span>,
  </>,
  <>
    {"    "}
    <span className={s}>'AI Integration'</span>
  </>,
  <>
    {"  "}
    <span className={p}>],</span>
  </>,
  <>
    {"  "}
    <span className={p}>available:</span> <span className={k}>true</span>
  </>,
  <>
    <span className={p}>{"}"}</span>
  </>,
];

export function AboutSection() {
  return (
    <section id="about" className="py-12">
      <SectionHeading
        title="Hey, I'm Vicichi"
        subtitle="A brief introduction to my background and engineering focus."
      />

      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Trái: terminal */}
        <TerminalCard />

        {/* Phải: giới thiệu */}
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <p className="leading-relaxed">{personalData.bio}</p>
          <p className="text-sm">Based in {personalData.location}.</p>
        </div>
      </div>
    </section>
  );
}
