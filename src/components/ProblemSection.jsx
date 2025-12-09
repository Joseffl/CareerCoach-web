import React from 'react';
import { Target, Clock, TrendingUp, DollarSign } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    { 
      icon: Target, 
      text: "Paralyzed by thousands of courses and tutorials" 
    },
    { 
      icon: Clock, 
      text: "Following outdated roadmaps that don't match real jobs" 
    },
    { 
      icon: TrendingUp, 
      text: "Learning things in the wrong order or skipping prerequisites" 
    },
    { 
      icon: DollarSign, 
      text: "Can't tell if a $2000 course beats free YouTube" 
    }
  ];

  const stats = [
    { value: "50M+", label: "People learning to switch careers" },
    { value: "6 months", label: "Wasted on wrong learning paths" },
    { value: "$2,000+", label: "Spent on courses they don't finish" },
    { value: "85%", label: "Give up due to overwhelm" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sound familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most people waste 6+ months stuck in tutorial hell, not knowing what to learn next or if they're making real progress.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, idx) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-red-500 shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <p className="text-lg text-gray-700">{problem.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            The real cost of learning wrong
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;