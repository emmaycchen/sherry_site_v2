const socials = [
  { label: "Instagram", handle: "@sherrychang318", href: "https://instagram.com/sherrychang318" },
];

const whatsappNumber = "+886 975 724 127";
const whatsappHref = "https://wa.me/886975724127";
const email = "sherrychang318@gmail.com";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-paper px-4 pb-10 pt-20 text-ink md:px-10"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 border-t border-accent pt-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl">Sherry Chang</p>
          <p className="mt-4 max-w-[36ch] text-base leading-relaxed">
            Food tours, day tours and Hakomi therapy in Taipei.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <a href={`mailto:${email}`} className="hover:text-cta">
                {email}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta"
              >
                WhatsApp: {whatsappNumber}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Follow
          </p>
          <ul className="mt-4 space-y-2 text-base">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cta"
                >
                  {s.label}: {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-[1440px] border-t border-accent pt-6 text-sm">
        © 2026 Sherry Chang. All rights reserved.
      </p>
    </footer>
  );
}
