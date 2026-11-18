import { ServicePage } from "@/components/service-page";

export const metadata = {
  title: "Hakomi Therapy | Sherry Chang",
  description:
    "Body-centered mindfulness therapy with Sherry Chang. Gentle, curious exploration that helps you reconnect with yourself.",
};

export default function HakomiPage() {
  return (
    <ServicePage
      eyebrow="Service 03"
      title="Hakomi Therapy"
      subtitle="Body-centered mindfulness therapy. Through gentle, curious exploration, you reconnect with yourself and what your body is telling you."
      image={{
        src: "/img/hakomi.jpg",
        alt: "A quiet moment for Hakomi Therapy with Sherry Chang",
      }}
      body={[
        "Hakomi is a mindfulness-based approach that works with the body as well as the mind. Rather than analyzing, the session invites you to notice small sensations, movements and habits as they happen.",
        "Sherry guides each session at your pace, with care and curiosity. You stay in control of what you explore, and nothing is forced.",
        "Many people come to Hakomi to ease stress, understand patterns they have carried for years, or simply make room to slow down and listen to themselves.",
      ]}
    />
  );
}
