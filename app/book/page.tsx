import Link from "next/link";

export const metadata = {
  title: "Book a Service | Sherry Chang",
  description:
    "Book a food tour, day tour or Hakomi therapy session with Sherry Chang.",
};

export default function BookPage() {
  return (
    <main className="flex flex-1 flex-col bg-paper px-4 pb-28 pt-20 text-ink md:px-10 md:pt-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold underline-offset-4 hover:text-cta hover:underline"
        >
          ← Back
        </Link>

        <h1 className="mt-12 font-display text-[clamp(3rem,10vw,9rem)] leading-[1.02]">
          Book a Service
        </h1>
        <p className="mt-8 max-w-[50ch] text-lg leading-relaxed md:text-xl">
          Booking details coming soon. In the meantime, reach out via WhatsApp
          or email.
        </p>

        <ul className="mt-16 grid gap-10 border-t border-accent pt-10 md:grid-cols-2">
          <li>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Email
            </p>
            <a
              href="mailto:sherrychang318@gmail.com"
              className="mt-3 inline-block font-display text-2xl hover:text-cta md:text-3xl"
            >
              sherrychang318@gmail.com
            </a>
          </li>
          <li>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              WhatsApp
            </p>
            <a
              href="https://wa.me/886975724127"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-display text-2xl hover:text-cta md:text-3xl"
            >
              +886 975 724 127
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
