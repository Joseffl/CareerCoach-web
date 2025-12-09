import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Target, TrendingUp, Users, Zap, CheckCircle, Clock, DollarSign, Star, BookOpen, BarChart3, Award } from 'lucide-react';


const CTASection = () => (
  <section className="py-20 px-6 bg-linear-to-br from-cyan-600 to-teal-600">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to land your dream job?</h2>
      <p className="text-xl text-cyan-50 mb-8">
        Join 1,200+ developers who used CareerCoach to get hired. Start learning the smart way today.
      </p>
      <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:shadow-xl inline-flex items-center gap-2 group">
        Get Your Free Roadmap
        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
      </button>
    </div>
  </section>
);

export default CTASection;