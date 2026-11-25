import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/shared/social-links";
import Avatar from "@/assets/thah.webp";
import Spiderman from "@/assets/spiderman.png";

export function HeroSection() {
  return (
    <section id="hero" className="py-12 sm:py-16 lg:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
        {/* Ảnh: mobile hiện lên trên, desktop nằm bên phải */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative aspect-square w-56 sm:w-72 md:w-full md:max-w-md">
            {/* Ảnh light mode */}
            <Image
              src={Avatar} // TODO: đổi link ảnh light
              alt={personalData.name}
              fill
              priority
              sizes="(min-width: 768px) 448px, (min-width: 640px) 288px, 224px"
              className="object-contain object-bottom dark:hidden"
            />
            {/* Ảnh dark mode (Spiderman) */}
            <Image
              src={Spiderman} // TODO: đổi link ảnh spiderman
              alt={`${personalData.name} - Spiderman`}
              fill
              priority
              sizes="(min-width: 768px) 448px, (min-width: 640px) 288px, 224px"
              className="hidden object-contain object-bottom dark:block"
            />
          </div>
        </div>

        {/* Nội dung: mobile hiện dưới ảnh, desktop nằm bên trái */}
        <div className="order-2 space-y-6 text-center md:order-1 md:text-left">
          <Badge variant="outline">{personalData.availability}</Badge>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {personalData.name}
            </h1>
            <p className="text-lg font-medium text-zinc-700 sm:text-xl dark:text-zinc-300">
              {personalData.role}
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-600 md:mx-0 dark:text-zinc-400">
              {personalData.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link href="/projects" className={buttonVariants({ variant: "primary" })}>
              View Projects
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
              Get in Touch
            </Link>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "ghost" })}
            >
              Resume
            </a>
          </div>

          <SocialLinks className="justify-center pt-2 md:justify-start" />
        </div>
      </div>
    </section>
  );
}