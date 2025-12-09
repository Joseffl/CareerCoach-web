import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Target, TrendingUp, Users, Zap, CheckCircle, Clock, DollarSign, Star, BookOpen, BarChart3, Award } from 'lucide-react';


const PricingSection = () => (
  <section id="pricing" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Simple, transparent pricing</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <h3 className="text-2xl font-bold mb-2">Free</h3>
          <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500">/forever</span></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
              <span>1 personalized roadmap</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
              <span>Community resource ratings</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
              <span>Basic progress tracking</span>
            </li>
          </ul>
          <button className="w-full py-3 border-2 border-cyan-600 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-50 transition-all">
            Start Free
          </button>
        </div>

        <div className="bg-linear-to-br from-cyan-600 to-teal-600 rounded-2xl p-8 shadow-2xl border-4 border-cyan-400 relative transform md:scale-105">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
          <div className="text-4xl font-bold mb-6 text-white">$15<span className="text-lg text-cyan-100">/month</span></div>
          <ul className="space-y-3 mb-8 text-white">
            <li className="flex items-start gap-2">
              <CheckCircle className="shrink-0 mt-1" size={18} />
              <span>Unlimited roadmaps</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="shrink-0 mt-1" size={18} />
              <span>Live job market insights</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="shrink-0 mt-1" size={18} />
              <span>Priority mentor matching</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="shrink-0 mt-1" size={18} />
              <span>Interview prep tools</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="shrink-0 mt-1" size={18} />
              <span>AI project generator</span>
            </li>
          </ul>
          <button className="w-full py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-50 transition-all">
            Start 7-Day Trial
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <div className="text-4xl font-bold mb-6">Custom</div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
              <span>For bootcamps & companies</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
              <span>White-label solution</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
              <span>Analytics dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
              <span>Custom company paths</span>
            </li>
          </ul>
          <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-cyan-600 hover:text-cyan-600 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;