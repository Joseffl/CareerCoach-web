import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Target, TrendingUp, Users, Zap, CheckCircle, Clock, DollarSign, Star, BookOpen, BarChart3, Award } from 'lucide-react';
import DATA from '../data/content';


const ComparisonSection = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">CareerCoach vs Traditional Learning</h2>
      <p className="text-center text-gray-600 mb-12 text-lg">See why 1,200+ learners chose us over $15,000 bootcamps</p>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 font-semibold border-b">
          <div></div>
          <div className="text-center text-cyan-600">CareerCoach</div>
          <div className="text-center text-gray-500">Traditional</div>
        </div>
        {DATA.comparison.map((row, idx) => (
          <div key={idx} className={`grid grid-cols-3 gap-4 p-6 ${idx !== DATA.comparison.length - 1 ? 'border-b' : ''}`}>
            <div className="font-semibold text-gray-900">{row.feature}</div>
            <div className="text-center">
              <CheckCircle className="inline mb-1 text-cyan-600" size={18} />
              <div className="text-sm text-gray-700">{row.us}</div>
            </div>
            <div className="text-center text-sm text-gray-500">{row.them}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonSection;