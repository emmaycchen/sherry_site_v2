import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "food-tour",
    href: "/food-tour",
    icon: "🍜",
    index: "01",
    title: "Food Tour",
    body: "Walk Taipei's back lanes with a local guide and discover longstanding shops, the stories behind each dish and the food culture that shapes the city.",
    image: { src: "/img/foodtour.jpeg", alt: "Food Tour in Taipei with Sherry Chang" },
    // 文字左、圖片右
    textCol: "md:row-start-1 md:col-span-5 md:col-start-1",
    imageCol: "md:row-start-1 md:col-span-6 md:col-start-7",
  },
  {
    id: "day-tour",
    href: "/day-tour",
    icon: "🗺️",
    index: "02",
    title: "Day Tour",
    body: "A custom day tour built around your pace and interests, exploring Taiwan's culture, history and natural scenery, with room for every stop to matter.",
    image: { src: "/img/daytour.jpg", alt: "Day Tour scene in Taiwan with Sherry Chang" },
    // 圖片左、文字右
    textCol: "md:row-start-1 md:col-span-5 md:col-start-8",
    imageCol: "md:row-start-1 md:col-span-6 md:col-start-1",
  },
  {
    id: "hakomi",
    href: "/hakomi",
    icon: "🌿",
    index: "03",
    title: "Hakomi Therapy",
    body: "Body-centered mindfulness therapy. Through gentle, curious exploration and awareness, you reconnect with yourself and what your body is telling you.",
    image: { src: "/img/hakomi.jpg", alt: "Hakomi Therapy session with Sherry Chang" },
    // 文字左、圖片右
    textCol: "md:row-start-1 md:col-span-5 md:col-start-1",
    imageCol: "md:row-start-1 md:col-span-6 md:col-start-7",
  },
];

export function Services() {
  return (
    <section className="bg-paper px-4 pb-28 text-ink md:px-10 md:pb-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Services
        </p>

        <div className="mt-16 flex flex-col gap-24 md:gap-40">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-title`}
              className="scroll-mt-24 grid gap-8 md:grid-cols-12 md:items-start md:gap-10"
            >
              {/* 手機版圖片在上（DOM 順序），桌機依 grid 欄位定位 */}
              <div
                className={`relative h-80 overflow-hidden md:h-96 ${service.imageCol}`}
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className={`${service.textCol} border-t border-accent pt-8`}>
                <div className="flex items-center justify-between">
                  <span className="text-4xl" aria-hidden="true">
                    {service.icon}
                  </span>
                  <span className="font-body text-sm font-semibold text-accent">
                    {service.index}
                  </span>
                </div>

                <h2
                  id={`${service.id}-title`}
                  className="mt-8 font-display text-[clamp(2.75rem,6vw,6rem)] leading-[1.05]"
                >
                  {service.title}
                </h2>

                <p className="mt-8 max-w-[60ch] text-base leading-relaxed md:text-lg">
                  {service.body}
                </p>

                <Link
                  href={service.href}
                  className="group mt-8 inline-flex items-center gap-3 font-body text-base font-semibold"
                >
                  <span className="border-b-2 border-accent pb-1 transition-colors group-hover:border-cta group-hover:text-cta">
                    Learn More
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
