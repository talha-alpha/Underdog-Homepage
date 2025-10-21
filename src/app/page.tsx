import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventsSection from "@/components/EventsSection";
import TrainersSection from "@/components/TrainersSection";
import WhyUnderdogSection from "@/components/WhyUnderdogSection";
import CaseStudySection from "@/components/CaseStudySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <TrainersSection />
      <WhyUnderdogSection />
      <CaseStudySection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
