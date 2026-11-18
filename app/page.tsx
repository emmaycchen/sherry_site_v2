import { About } from "@/components/about";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
