import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import AboutHero from "~/pages/about/AboutHero";
import MissionVision from "~/pages/about/MissionVision";
import WhyUs from "~/pages/about/WhyUs";
import CTASection from "~/pages/home/CTASection";
import { useSEO } from "~/hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Us",
    description:
      "Octave Smartcare is a healthcare infrastructure company working across technology, management, and operations to improve how healthcare is delivered in Africa and beyond.",
    canonical: "/about",
  });
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <MissionVision />
        <WhyUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
