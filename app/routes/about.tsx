import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import AboutHero from "~/pages/about/AboutHero";
import MissionVision from "~/pages/about/MissionVision";
import WhyUs from "~/pages/about/WhyUs";
import CTASection from "~/pages/home/CTASection";

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
