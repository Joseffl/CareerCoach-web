import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/Solution';
import FeaturesSection from './components/Features';
import HowItWorksSection from './components/HowItWorks';
import RolesSection from './components/Roles';
import TestimonialsSection from './components/Testimonials';
import ComparisonSection from './components/Comparison';
import PricingSection from './components/Pricing';
import CTASection from './components/CTA';
import Footer from './components/Footer';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace('/', '');
    if (!section) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location]);

  return null;
}

function AppContent() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection id="features" />
      <HowItWorksSection id="how-it-works" />
      <RolesSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection id="pricing" />
      <CTASection />
      <Footer />
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .gradient-text {
            background: linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .gradient-border { position: relative; }
          .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 1rem;
            padding: 2px;
            background: linear-gradient(135deg, #06b6d4, #14b8a6);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
        `}</style>

        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
        <ScrollToSection />

        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/features" element={<AppContent />} />
          <Route path="/how-it-works" element={<AppContent />} />
          <Route path="/pricing" element={<AppContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
