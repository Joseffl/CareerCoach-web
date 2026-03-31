import { Compass } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-2xl bg-white text-slate-950 flex items-center justify-center">
              <Compass size={18} />
            </div>
            <span className="text-lg font-semibold text-white">Pathway</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            A career guidance platform built around clarity, expert access, and better decisions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-cyan-300 transition-colors">What it does</a></li>
            <li><a href="#how-it-works" className="hover:text-cyan-300 transition-colors">How it works</a></li>
            <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Platform scope</a></li>
            <li><a href="#waitlist" className="hover:text-cyan-300 transition-colors">Join waitlist</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Audience</h3>
          <ul className="space-y-2">
            <li><a href="#waitlist" className="hover:text-cyan-300 transition-colors">Learners</a></li>
            <li><a href="#waitlist" className="hover:text-cyan-300 transition-colors">Career switchers</a></li>
            <li><a href="#waitlist" className="hover:text-cyan-300 transition-colors">Junior professionals</a></li>
            <li><a href="#waitlist" className="hover:text-cyan-300 transition-colors">Experts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Next</h3>
          <ul className="space-y-2">
            <li><span className="text-slate-400">Resume tools</span></li>
            <li><span className="text-slate-400">Portfolio generation</span></li>
            <li><span className="text-slate-400">Expert analytics</span></li>
            <li><span className="text-slate-400">B2B partnerships</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">Designed to turn career uncertainty into informed momentum.</p>
        <div className="flex gap-6 text-sm">
          <a href="#waitlist" className="hover:text-cyan-300 transition-colors">Join waitlist</a>
          <a href="#features" className="hover:text-cyan-300 transition-colors">Product</a>
          <a href="#how-it-works" className="hover:text-cyan-300 transition-colors">Flow</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
