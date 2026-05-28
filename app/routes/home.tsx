import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import HeroSection from "~/pages/home/HeroSection";
import MissionSection from "~/pages/home/MissionSection";
import ServicesOverview from "~/pages/home/ServicesOverview";
import WhyOctave from "~/pages/home/WhyOctave";
import IndustriesSection from "~/pages/home/IndustriesSection";
import CTASection from "~/pages/home/CTASection";
import { useSEO } from "~/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Octave Smartcare — Intelligent Healthcare Infrastructure",
    description:
      "We work with hospitals, clinics, governments, and investors to make healthcare more effective — through technology, better operations, and the right infrastructure.",
    canonical: "/",
  });
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
