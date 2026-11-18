const testimonials = [
  {
    quote:
      "Sherry's food tours are an absolute blast, and full of surprises. As someone who has lived in Taiwan for over 16 years, I thought I'd seen it all, but Sherry is a pro at uncovering Taipei's hidden gems. Her infectious energy and deep expertise elevate the experience far beyond a typical food tour; it truly feels like a food experience. I loved getting to meet fellow travelers and share in the fun together as a group. Sherry has a real gift for bringing people and flavors together in the best way. If you're visiting Taiwan, her tours are one of Taipei's best-kept secrets and an absolute must.",
    author: "Chris Hubbard",
    location: "New York, USA",
    offset: "md:col-span-6 md:col-start-1",
  },
  {
    quote:
      "Sherry was incredibly knowledgeable and passionate, leading us to hidden gems with the most delicious local bites! The portions were generous, the history fascinating and the group vibe so fun! Left stuffed and smiling — highly recommend, a perfect highlight of our trip to Taiwan.",
    author: "Kelley Lee",
    location: "Madrid, Spain",
    offset: "md:col-span-5 md:col-start-8 md:mt-24",
  },
  {
    quote:
      "Sherry's tour was a uniquely crafted experience that nails all Taiwanese classic must eats from my childhood, as well as the best kept secrets that even Taipei locals don't know. Her knowledge of Taipei goes beyond food, and into the history of the city that makes it a delicious and educational experience for all. If you're thinking about the best food tour in Taipei don't hesitate and come hungry!",
    author: "J.W. Cheng",
    location: "San Francisco, USA",
    offset: "md:col-span-6 md:col-start-4 md:mt-12",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-primary px-4 py-28 text-paper md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Testimonials
        </p>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[1.05]">
          What guests <span className="text-accent">say</span>
        </h2>

        <div className="mt-20 grid gap-16 md:grid-cols-12 md:gap-y-20">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className={`${t.offset} border-l-2 border-accent pl-6 md:pl-8`}
            >
              <span
                aria-hidden="true"
                className="block font-display text-7xl leading-none text-accent"
              >
                “
              </span>
              <blockquote className="mt-4 text-lg leading-relaxed md:text-xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 font-body text-sm font-semibold tracking-wide text-accent">
                {t.author} · {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
