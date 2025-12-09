import { Target, BarChart3, Star, TrendingUp, Users, Award } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Skills Assessment",
      description: "No more guessing. Take real challenges to map exactly where you are and what you need to learn."
    },
    {
      icon: BarChart3,
      title: "AI-Powered Roadmap",
      description: "Get a visual timeline from Foundations → Job-Ready, with specific resources and time estimates."
    },
    {
      icon: Star,
      title: "Resource Rankings",
      description: "See effectiveness scores, completion rates, and price-to-value ratios from real learners."
    },
    {
      icon: TrendingUp,
      title: "Live Job Market Data",
      description: "Your roadmap adapts based on what companies are hiring for RIGHT NOW, not 2019."
    },
    {
      icon: Users,
      title: "Community Validated",
      description: "See what % of learners got jobs, time-to-hire metrics, and real salary outcomes."
    },
    {
      icon: Award,
      title: "Portfolio Projects",
      description: "Every module suggests a project. Build your portfolio while you learn."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to go from zero to hired
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-linear-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-6 text-white">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;