import { Compass, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  const links = [
    { to: '/mentors', label: 'Find a Mentor' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/#pricing', label: 'Pricing' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fcfaf6]/92 backdrop-blur-xl shadow-sm' : 'bg-[#fcfaf6]/70 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-950 flex items-center justify-center">
              <Compass className="text-white" size={20} />
            </div>
            <div>
              <span className="text-xl font-semibold text-slate-950">Pathway</span>
              <p className="text-xs text-slate-500 -mt-0.5">Career guidance marketplace</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="text-slate-700 hover:text-slate-950 transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <a
              href="#waitlist"
              className="px-5 py-2.5 bg-slate-950 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all"
            >
              Join Waitlist
            </a>
          </div>

          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#fcfaf6] border-t border-slate-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-slate-700 hover:text-slate-950 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#waitlist"
              className="block w-full px-6 py-2.5 bg-slate-950 text-white rounded-2xl font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
