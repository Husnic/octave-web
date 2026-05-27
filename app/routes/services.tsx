import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import ServicesHero from "~/pages/services/ServicesHero";
import ServiceDetail from "~/pages/services/ServiceDetail";
import CTASection from "~/pages/home/CTASection";

const services = [
  {
    id: "healthtech",
    number: "01",
    title: "HealthTech Software Development",
    intro:
      "We design and deploy scalable healthcare technology solutions tailored for modern healthcare systems.",
    description:
      "Our digital health solutions help healthcare providers streamline operations, improve patient engagement, strengthen clinical workflows, and support data-driven decision making.",
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
      "Healthcare providers require secure, efficient, and patient-centred digital systems that support both clinical excellence and operational sustainability.",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80&auto=format&fit=crop",
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
    taglineLabel: "Patient-Centred Coordination",
    tagline:
      "We act as a trusted healthcare partner, helping clients navigate complex healthcare systems with confidence and ease.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Medical concierge and healthcare coordination",
    reversed: true,
  },
  {
    id: "hospital-management",
    number: "03",
    title: "Hospital Management Services",
    intro:
      "We support healthcare institutions with operational, strategic, and administrative management solutions that improve service delivery, efficiency, governance, and sustainability.",
    description:
      "Our experience spans public and private healthcare systems, healthcare transformation projects, and operational restructuring initiatives.",
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
    taglineLabel: "Building Sustainable Healthcare Systems",
    tagline:
      "We help healthcare organisations strengthen operational performance while improving patient experience, workforce efficiency, and long-term growth.",
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
      "We supply high-quality medical and diagnostic equipment from globally recognised manufacturers, supported by technical expertise and after-sales support services.",
    description:
      "We support healthcare facilities with end-to-end medical equipment procurement, deployment, installation, and maintenance solutions.",
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
    taglineLabel: "End-to-End Delivery",
    tagline:
      "From procurement to deployment and ongoing technical support, we help healthcare providers build reliable and future-ready diagnostic ecosystems.",
    image:
      "https://images.unsplash.com/photo-1516549655669-df083f9d4e6b?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Medical equipment and diagnostic technology",
    reversed: true,
  },
  {
    id: "training",
    number: "05",
    title: "Clinical & Non-Clinical Training",
    intro:
      "We provide workforce development programmes designed to strengthen healthcare capacity, improve operational standards, and support continuous professional development.",
    description:
      "Our training solutions are tailored for healthcare professionals, administrators, operational teams, and healthcare organisations.",
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
    taglineLabel: "Empowering Healthcare Teams",
    tagline:
      "Strong healthcare systems depend on capable people. Our training programmes build confident, competent, and future-ready healthcare professionals.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Healthcare training and professional development",
    reversed: false,
  },
];

export function meta() {
  return [
    { title: "Services — Octave Smartcare" },
    {
      name: "description",
      content:
        "Explore Octave Smartcare's five integrated service lines: HealthTech software, medical concierge, hospital management, medical equipment, and clinical training.",
    },
  ];
}

export default function Services() {
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
