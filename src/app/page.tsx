import { Hero } from "@/sections/home/Hero";
import { About } from "@/sections/home/About";
import { Services } from "@/sections/home/Services";
import { FeaturedProjects } from "@/sections/home/FeaturedProjects";
import { Differentiators } from "@/sections/home/Differentiators";
import { Marquee } from "@/components/ui/Marquee";
import { homeContent } from "@/content/home";
import { Process } from "@/sections/home/Process";
import { CallToAction } from "@/sections/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={homeContent.capabilities} />
      <About />
      <Services />
      <FeaturedProjects />
      <Differentiators />
      <Process />
      <CallToAction />
    </>
  );
}
