import { ArrowRight, Zap, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-50 via-white to-teal-50"></div>
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', 
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 font-semibold text-sm mb-6">
            <Zap size={16} />
            Stop wasting months learning the wrong things
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn smarter, get hired <span className="gradient-text">faster</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            AI-powered learning roadmaps that adapt to your skills, goals, and the real job market. From confused beginner to employed developer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold text-lg hover:bg-cyan-700 transition-all hover:shadow-xl hover:shadow-cyan-600/30 inline-flex items-center gap-2 group">
              Get Your Free Roadmap
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-cyan-600 hover:text-cyan-600 transition-all">
              See Example Paths
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} />
              <span>1,200+ learners hired</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} />
              <span>Platform-agnostic resources</span>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="gradient-border rounded-2xl p-8 bg-white shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-teal-500 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">1,200+ learners got hired</div>
                  <div className="text-sm text-gray-500">Average time: 4.2 months</div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=700&fit=crop" 
                alt="Roadmap visualization" 
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;