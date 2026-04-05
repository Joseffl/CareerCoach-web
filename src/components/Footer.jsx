import { Compass } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-2xl bg-white text-slate-950 flex items-center justify-center">
              <Compass size={18} />
            </div>
            <span className="text-lg font-semibold text-white">Pathlivo</span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-sm">
            A career platform built around expert access, real-world perspective, and better decisions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#why-people-get-stuck" className="hover:text-orange-300 transition-colors">Why people get stuck</a></li>
            <li><a href="#mentors" className="hover:text-orange-300 transition-colors">Browse mentors</a></li>
            <li><a href="#how-it-works" className="hover:text-orange-300 transition-colors">How it works</a></li>
            <li><a href="#waitlist" className="hover:text-orange-300 transition-colors">Get early access</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Audience</h3>
          <ul className="space-y-2">
            <li><span className="text-slate-400">Students and fresh graduates</span></li>
            <li><span className="text-slate-400">Career switchers</span></li>
            <li><span className="text-slate-400">Junior professionals</span></li>
            <li><span className="text-slate-400">Anyone exploring a new path</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">Designed to turn career uncertainty into informed momentum.</p>
        <div className="flex gap-6 text-sm">
          <a href="#mentors" className="hover:text-orange-300 transition-colors">Mentors</a>
          <a href="#how-it-works" className="hover:text-orange-300 transition-colors">How it works</a>
          <a href="#waitlist" className="hover:text-orange-300 transition-colors">Early access</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
