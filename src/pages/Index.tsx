
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ProblemSolution from "@/components/ProblemSolution";
import PlatformOverview from "@/components/PlatformOverview";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FounderNote from "@/components/FounderNote";
import MiniDemo from "@/components/MiniDemo";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <ProblemSolution />
      <PlatformOverview />
      <ROICalculator />
      <MiniDemo />
      <Pricing />
      <section id="founder">
        <FounderNote />
      </section>
      <section id="early-access">
        <EarlyAccess />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
