import { Hero } from "@/sections/home/Hero";
import { About } from "@/sections/home/About";
import { Services } from "@/sections/home/Services";
import { FeaturedProjects } from "@/sections/home/FeaturedProjects";
import { Differentiators } from "@/sections/home/Differentiators";
import { Capabilities } from "@/sections/home/Capabilities";
import { Process } from "@/sections/home/Process";
import { CallToAction } from "@/sections/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Differentiators />
      <Capabilities />
      <Process />
      <CallToAction />
    </>
  );
}
