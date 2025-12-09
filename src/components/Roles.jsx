import React from 'react';
import { BookOpen } from 'lucide-react';

const RolesSection = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer", 
    "Full Stack Developer",
    "ML Engineer",
    "Data Scientist",
    "Product Designer",
    "DevOps Engineer",
    "Mobile Developer"
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-br from-cyan-600 to-teal-600">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pick your path
        </h2>
        <p className="text-xl text-cyan-50 mb-12 max-w-3xl mx-auto">
          We have proven roadmaps for the most in-demand tech roles
        </p>
        
        {/* Roles Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
            >
              <BookOpen className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-white font-semibold">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;