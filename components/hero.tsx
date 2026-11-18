import { CtaButton } from "./cta-button";
import { HeroCarousel } from "./hero-carousel";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-paper px-4 py-16 text-ink md:px-10 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 md:grid-cols-[55fr_45fr] md:gap-16">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-accent md:tracking-[0.25em]">
            Food Tours · Day Tours · Hakomi Therapy
          </p>

          <h1 className="mt-8 w-full max-w-full font-display text-[clamp(2rem,5.5vw,5.5rem)] leading-[1.05] text-ink">
            Taste, Wander, Heal:
            <span className="block text-cta">Mindful Experiences with Sherry</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink md:text-xl">
            Food tours and Hakomi therapy in Taipei, with a day tour on the way.
          </p>

          <div className="mt-10">
            <CtaButton />
          </div>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
}
