import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorks";
import FeaturedMentors from "./components/FeaturedMentors";
import TestimonialsSection from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTA";
import Footer from "./components/Footer";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace("/", "");
    if (!section) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <main key={location.pathname}>
      <HeroSection />
      <HowItWorksSection />
      <FeaturedMentors />
      <ProblemSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen text-slate-900">
        <style>{`
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 18px 60px rgba(232, 106, 51, 0.10); }
            50% { box-shadow: 0 28px 80px rgba(232, 106, 51, 0.18); }
          }
          .animate-glow-pulse { animation: pulseGlow 4.5s ease-in-out infinite; }
          .display-face {
            font-family: "DM Serif Display", Georgia, serif;
            letter-spacing: -0.03em;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-glow-pulse {
              animation: none !important;
            }
          }
        `}</style>

        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrolled={scrolled}
        />
        <ScrollToSection />

        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/how-it-works" element={<AppContent />} />
          <Route path="/mentors" element={<AppContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
