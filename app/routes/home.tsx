import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import HeroSection from "~/pages/home/HeroSection";
import MissionSection from "~/pages/home/MissionSection";
import ServicesOverview from "~/pages/home/ServicesOverview";
import WhyOctave from "~/pages/home/WhyOctave";
import IndustriesSection from "~/pages/home/IndustriesSection";
import CTASection from "~/pages/home/CTASection";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Octave Smartcare  Intelligent Healthcare Infrastructure" },
    {
      name: "description",
      content:
        "Octave Smartcare combines healthcare expertise, digital innovation, and operational excellence to help organisations deliver safer, faster, and more connected care.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesOverview />
        <WhyOctave />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
