import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "./cta-button";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  body: string[];
};

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  image,
  body,
}: ServicePageProps) {
  return (
    <main className="flex flex-1 flex-col bg-paper text-ink">
      <section className="px-4 pb-20 pt-12 md:px-10 md:pt-20">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold underline-offset-4 hover:text-cta hover:underline"
          >
            ← Back
          </Link>

          <div className="mt-12 grid items-center gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {eyebrow}
              </p>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[1.02]">
                {title}
              </h1>
              <p className="mt-8 max-w-[50ch] text-lg leading-relaxed md:text-xl">
                {subtitle}
              </p>
              <div className="mt-10">
                <CtaButton href="/book" />
              </div>
            </div>

            <div className="relative h-80 overflow-hidden md:col-span-6 md:col-start-7 md:h-[32rem]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-32 md:px-10 md:pb-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="space-y-6 border-t border-accent pt-8 text-lg leading-relaxed md:col-span-7 md:col-start-6 md:text-xl">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-6">
              <CtaButton href="/book" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
