import { ServicePage } from "@/components/service-page";

export const metadata = {
  title: "Day Tour | Sherry Chang",
  description:
    "A custom day tour with Sherry Chang, built around your pace and interests across Taiwan's culture, history and nature.",
};

export default function DayTourPage() {
  return (
    <ServicePage
      eyebrow="Service 02"
      title="Day Tour"
      subtitle="A custom day tour shaped around your pace and interests, exploring Taiwan's culture, history and natural scenery."
      image={{
        src: "/img/daytour.jpg",
        alt: "A Day Tour scene in Taiwan with Sherry Chang",
      }}
      body={[
        "Tell Sherry what you love, how fast you like to move and how much you want to eat along the way. The day is then shaped around you, not around a fixed itinerary.",
        "Days can lean toward history and architecture, local craft and markets, or quiet hikes and coastline. Every stop is chosen to give you room to look, listen and enjoy the moment.",
        "Whether you are visiting for the first time or returning for a deeper look, a Day Tour gives you a thoughtful way to see Taiwan.",
      ]}
    />
  );
}
