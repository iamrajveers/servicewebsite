
"use clinet"
import HeroSection from "../components/about/HeroSection";
import StatsSection from "../components/about/StatsSection";
import ValuesSection from "../components/about/ValuesSection";
import OfficeShowcase from "../components/about/OfficeShowcase";
import TimelineSection from "../components/about/TimelineSection";
import TeamSection from "../components/about/TeamSection";
import CTASection from "../components/about/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaRocket, FaUsers, FaHandshake, FaChevronRight, FaLightbulb, FaShieldAlt } from "react-icons/fa";


const stats = [
  { number: "25+", label: "Countries" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "150+", label: "Team Members" },
  { number: "40%", label: "Growth YoY" }
];

const Values = [
  {
    icon: <FaGlobe className="text-purple-600 text-3xl" />,
    title: "Global Mindset",
    description: "Delivering worldwide solutions with local expertise across 25+ countries",
  },
  {
    icon: <FaRocket className="text-orange-500 text-3xl" />,
    title: "Innovation",
    description: "Pioneering technologies that redefine global connectivity standards",
  },
  {
    icon: <FaUsers className="text-blue-500 text-3xl" />,
    title: "Collaboration",
    description: "Building lasting partnerships that drive mutual international success",
  },
  {
    icon: <FaHandshake className="text-green-600 text-3xl" />,
    title: "Trust & Integrity",
    description: "We build trust through transparency and consistent delivery",
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
    title: "Creative Thinking",
    description: "Innovating with purpose and pushing boundaries through ideas",
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-3xl" />,
    title: "Security & Compliance",
    description: "Maintaining global standards to ensure data privacy and safety",
  },
];

// Mile Stone
const milestones = [
  {
    year: "2015",
    title: "Founded",
    description: "Launched with a vision to revolutionize global connectivity from our New York headquarters"
  },
  {
    year: "2018",
    title: "First Expansion",
    description: "Established European presence with London office, serving 15 new markets"
  },
  {
    year: "2021",
    title: "Tech Launch",
    description: "Introduced our AI-powered global platform, increasing efficiency by 40%"
  },
  {
    year: "2023",
    title: "Current",
    description: "Operating in 25+ countries with 98% client satisfaction rate"
  }
];

export default function AboutUs() {

  return (

    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      <HeroSection image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2070&q=80" />

      <StatsSection stats={stats} />

      <ValuesSection values={Values} />;

      <OfficeShowcase />

      <TimelineSection milestones={milestones} />

      <TeamSection />

      <CTASection />

    </div>

  );
}
