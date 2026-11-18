import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 mb-24 bg-[#C4A69D] px-4 py-28 text-ink md:mb-32 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            About
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05]">
            Meet Sherry
          </h2>
          <div className="mt-12 max-w-[60ch] space-y-5 text-base leading-relaxed md:text-lg">
            <p>
              Sherry Chang is a Taipei-based guide and therapist. She believes
              that the way we eat, walk and pay attention to the world can ease
              us too.
            </p>
            <p>
              Her work brings together local food culture, unhurried exploration
              and a gentle, mindful approach to healing. Whether you join a tour
              or sit down for a session, you can expect care, curiosity and room
              to slow down.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[50px] bg-white/30">
            <Image
              src="/img/sherry-2.jpg"
              alt="Sherry Chang"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
