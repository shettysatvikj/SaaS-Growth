import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import Benefits from "../components/sections/Benefits.jsx";
import SocialProof from "../components/sections/SocialProof.jsx";
import CaseStudies from "../components/sections/CaseStudies.jsx";
import Pricing from "../components/sections/Pricing.jsx";
import FAQ from "../components/sections/FAQ.jsx";
import AnimatedCounters from "../components/sections/AnimatedCounters.jsx";
import ExitIntentModal from "../components/ExitIntentModal.jsx";
import { useExitIntent } from "../hooks/useExitIntent.js";

const LandingPage = () => {
  const { visible, close } = useExitIntent();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedCounters />
        <Benefits />
        <SocialProof />
        <CaseStudies />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ExitIntentModal open={visible} onClose={close} />
    </div>
  );
};

export default LandingPage;