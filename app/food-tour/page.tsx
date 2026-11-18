import { ServicePage } from "@/components/service-page";

export const metadata = {
  title: "Food Tour | Sherry Chang",
  description:
    "A Taipei food tour with Sherry Chang: walk the back lanes, meet longstanding shops and taste the stories behind each dish.",
};

export default function FoodTourPage() {
  return (
    <ServicePage
      eyebrow="Service 01"
      title="Food Tour"
      subtitle="Taste your way through Taipei's back lanes with a local guide, from longstanding shops to the dishes locals grew up on."
      image={{
        src: "/img/foodtour.jpeg",
        alt: "A Food Tour stop in Taipei with Sherry Chang",
      }}
      body={[
        "Walk Taipei's back lanes with a local guide and discover the longstanding shops, family kitchens and street stalls that define the city's food culture.",
        "Each stop comes with the story behind the dish: where it started, how it changed over the years, and why locals still line up for it. You will taste classic must-eats alongside the small, quiet places that even many Taipei residents never find on their own.",
        "The tour is social by design. Travelers share the table, the laughter and the tastes, so you leave with new flavors and a few new friends.",
      ]}
    />
  );
}
