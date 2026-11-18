import { CtaButton } from "./cta-button";

export function FinalCta() {
  return (
    <section
      id="booking"
      className="scroll-mt-20 bg-primary px-4 pb-28 pt-8 text-paper md:px-10 md:pb-40"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 border-t border-accent pt-20 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-[14ch] font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[1.05]">
          Your next journey starts here.
        </h2>
        <CtaButton className="shrink-0" />
      </div>
    </section>
  );
}
