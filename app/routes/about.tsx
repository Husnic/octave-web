import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import AboutHero from "~/pages/about/AboutHero";
import MissionVision from "~/pages/about/MissionVision";
import WhyUs from "~/pages/about/WhyUs";
import CTASection from "~/pages/home/CTASection";

export function meta() {
  return [
    { title: "About — Octave Smartcare" },
    {
      name: "description",
      content:
        "Learn about Octave Smartcare's mission, approach, and why we are the trusted healthcare transformation partner for organisations worldwide.",
    },
  ];
}

export default function About() {
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
