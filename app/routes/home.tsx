import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import HeroSection from "~/pages/home/HeroSection";
import MissionSection from "~/pages/home/MissionSection";
import ServicesOverview from "~/pages/home/ServicesOverview";
import WhyOctave from "~/pages/home/WhyOctave";
import IndustriesSection from "~/pages/home/IndustriesSection";
import CTASection from "~/pages/home/CTASection";

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
