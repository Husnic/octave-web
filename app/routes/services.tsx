import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import ServicesHero from "~/pages/services/ServicesHero";
import ServiceDetail from "~/pages/services/ServiceDetail";
import CTASection from "~/pages/home/CTASection";
import { useSEO } from "~/hooks/useSEO";

const services = [
  {
    id: "healthtech",
    number: "01",
    title: "HealthTech Software Development",
    intro:
      "We build and deploy healthcare software for organisations that need reliable, practical digital systems.",
    description:
      "Our solutions help providers run smoother operations, better serve patients, and make decisions based on real data  without the complexity that often comes with enterprise healthcare software.",
    solutionsLabel: "Our Solutions Include",
    solutions: [
      "Telehealth & Virtual Care Platforms",
      "EMR / EHR Systems",
      "Hospital Management Systems",
      "Patient Portals & Mobile Health Apps",
      "Appointment & Queue Management",
      "Healthcare Analytics Dashboards",
      "AI-Enabled Workflow Solutions",
      "Cloud-Based Healthcare Infrastructure",
      "Interoperability & Systems Integration",
    ],
    taglineLabel: "Why It Matters",
    tagline:
      "Good digital infrastructure makes clinical work easier and administrative work lighter. We build systems designed to last  not just to launch.",

    image: "/images/software-development.jpeg",
    imageAlt: "Healthcare technology and software",
    reversed: false,
  },
  {
    id: "concierge",
    number: "02",
    title: "Medical Concierge Services",
    intro:
      "We provide premium, personalised healthcare coordination services for individuals, families, executives, diplomats, corporate organisations, and international patients.",
    description:
      "Our concierge services simplify healthcare access while ensuring discretion, efficiency, and continuity of care.",
    solutionsLabel: "Our Concierge Support Includes",
    solutions: [
      "Specialist Appointment Coordination",
      "International Medical Referrals",
      "Executive Health Screening",
      "Medical Travel Coordination",
      "Hospital Admission Support",
      "Second Opinion Coordination",
      "Home Healthcare Arrangements",
      "Corporate Healthcare Support",
      "Priority Healthcare Access",
    ],
    taglineLabel: "How We Work",
    tagline:
      "We handle the coordination so clients can focus on getting the right care, not on figuring out the system.",
    image: "/images/concierge.jpeg",
    imageAlt: "Medical concierge and healthcare coordination",
    reversed: true,
  },
  {
    id: "hospital-management",
    number: "03",
    title: "Hospital Management Services",
    intro:
      "We help hospitals and health institutions run better  from day-to-day operations through to strategic planning and governance.",
    description:
      "We've worked across public and private healthcare systems, including transformation projects and operational turnarounds.",
    solutionsLabel: "Our Services Include",
    solutions: [
      "Hospital Operations Management",
      "Healthcare Strategy & Transformation",
      "Clinical Governance Support",
      "Operational Performance Improvement",
      "Digital Transformation Advisory",
      "Revenue Cycle Optimisation",
      "Healthcare Project Management",
      "Quality Assurance & Compliance",
      "Healthcare PPP & Infrastructure Advisory",
    ],
    taglineLabel: "What Good Looks Like",
    tagline:
      "Better-run hospitals deliver better care. We work on the operational side so clinical teams can focus on what they do best.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Hospital management and operations",
    reversed: false,
  },
  {
    id: "equipment",
    number: "04",
    title: "Medical Equipment Supply & Technical Support",
    intro:
      "We source and supply medical and diagnostic equipment from established manufacturers, and we handle everything from procurement through to installation.",
    description:
      "We manage the full process  finding the right equipment, getting it delivered, installed, and maintained. Your team gets the tools they need, without the procurement headache.",
    solutionsLabel: "Equipment Categories",
    solutions: [
      "Radiology & Imaging Equipment",
      "Ultrasound Systems",
      "CT & MRI Solutions",
      "X-Ray Systems",
      "Laboratory Equipment",
      "Theatre & ICU Equipment",
      "Patient Monitoring Systems",
      "Telemedicine Hardware",
      "Healthcare IT Infrastructure",
    ],
    taglineLabel: "From Order to In Use",
    tagline:
      "We handle sourcing, delivery, installation, and maintenance  so equipment gets into use quickly and stays working.",
    image: "/images/equipments.jpeg",
    imageAlt: "Medical equipment and diagnostic technology",
    reversed: true,
  },
  {
    id: "training",
    number: "05",
    title: "Training and Capacity Development",
    intro:
      "We run training programmes for clinical staff, administrators, and operational teams across healthcare organisations.",
    description:
      "Good systems only work when the people using them are confident. Our training covers both clinical and non-clinical roles  practical, structured, and designed for the healthcare environment.",
    solutionsLabel: "Training Areas",
    solutions: [
      "Clinical Skills Development",
      "Digital Health & EMR Training",
      "Healthcare Leadership Programmes",
      "Customer Service in Healthcare",
      "Hospital Operations Training",
      "Healthcare Compliance & Governance",
      "Technology Adoption Training",
      "Project & Change Management",
      "Non-Clinical Workforce Development",
    ],
    taglineLabel: "Why Training Matters",
    tagline:
      "The best infrastructure means little if teams aren't equipped to use it. We make sure the people side keeps up with the systems side.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Healthcare training and professional development",
    reversed: false,
  },
];

export default function Services() {
  useSEO({
    title: "Our Services",
    description:
      "From HealthTech software and hospital management to medical concierge, equipment supply, and clinical training — Octave Smartcare covers the full spectrum of healthcare infrastructure.",
    canonical: "/services",
  });
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <div className="divide-y divide-gray-soft/40">
          {services.map((service, i) => (
            <ServiceDetail
              key={service.id}
              {...service}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
