import { Menu, X, Target } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">

            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-600 to-teal-600 flex items-center justify-center">
              <Target className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold gradient-text">CareerCoach</span>
              </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Pricing
            </a>
            <button className="px-6 py-2.5 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-all hover:shadow-lg hover:shadow-cyan-600/30">
              Start Free
            </button>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-cyan-600 font-medium">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-cyan-600 font-medium">
              How It Works
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-cyan-600 font-medium">
              Pricing
            </a>
            <button className="w-full px-6 py-2.5 bg-cyan-600 text-white rounded-xl font-semibold">
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;