import { Target,  } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="font-bold text-white mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Roadmaps</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Resources</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Licenses</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-600 to-teal-600 flex items-center justify-center">
            <Target className="text-white" size={16} />
          </div>
          <span className="font-bold text-white">CareerCoach</span>
        </div>
        <p className="text-gray-500 text-sm">© 2024 CareerCoach. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;