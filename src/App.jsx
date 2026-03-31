import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/Solution';
import FeaturesSection from './components/Features';
import HowItWorksSection from './components/HowItWorks';
import FeaturedMentors from './components/FeaturedMentors';
import RolesSection from './components/Roles';
import TestimonialsSection from './components/Testimonials';
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
      {/* <SolutionSection /> */}
      {/* <FeaturesSection /> */}
      {/* <RolesSection /> */}
      <HowItWorksSection />
      <FeaturedMentors />
      <TestimonialsSection />
      {/* <PricingSection /> */}
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
      <div className="min-h-screen text-slate-900">
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes floatSlow {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -10px, 0); }
          }
          @keyframes driftIn {
            from { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.98); }
            to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 18px 60px rgba(8, 145, 178, 0.14); }
            50% { box-shadow: 0 28px 80px rgba(8, 145, 178, 0.22); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
          .animate-drift-in { animation: driftIn 0.9s ease-out both; }
          .animate-glow-pulse { animation: pulseGlow 4.5s ease-in-out infinite; }
          .animation-delay-150 { animation-delay: 0.15s; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .display-face {
            font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
            letter-spacing: -0.04em;
          }
          .gradient-text {
            background: linear-gradient(135deg, #0f766e 0%, #0891b2 55%, #0f172a 100%);
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
          .soft-panel {
            background: rgba(255, 255, 255, 0.72);
            backdrop-filter: blur(18px);
          }
          .ambient-ring {
            box-shadow: 0 30px 120px rgba(15, 23, 42, 0.08);
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-fadeInUp,
            .animate-float,
            .animate-float-slow,
            .animate-drift-in,
            .animate-glow-pulse {
              animation: none !important;
            }
          }
        `}</style>

        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
        <ScrollToSection />

        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/features" element={<AppContent />} />
          <Route path="/how-it-works" element={<AppContent />} />
          <Route path="/pricing" element={<AppContent />} />
          <Route path="/mentors" element={<AppContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
