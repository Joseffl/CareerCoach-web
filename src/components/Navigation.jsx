import { Compass, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  const links = [
    { href: '#why-people-get-stuck', label: 'Why Pathlivo' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#mentors', label: 'Mentors' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FFFCF8]/92 backdrop-blur-xl shadow-sm' : 'bg-[#FFFCF8]/70 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E86A33] flex items-center justify-center">
              <Compass className="text-white" size={20} />
            </div>
            <div>
              <span className="text-xl font-semibold text-[#E86A33]">Pathlivo</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-[#1F2937] hover:text-[#18181B] transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <a
              href="#mentors"
              className="px-5 py-2.5 bg-[#E86A33] text-white rounded-2xl font-semibold hover:bg-[#C6511E] transition-all"
            >
              Find a Mentor
            </a>
          </div>

          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFCF8] border-t border-[#EADFD3] shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[#1F2937] hover:text-[#18181B] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#mentors"
              className="block w-full px-6 py-2.5 bg-[#E86A33] text-white rounded-2xl font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Find a Mentor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
