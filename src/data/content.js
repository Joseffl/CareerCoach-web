import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Target, TrendingUp, Users, Zap, CheckCircle, Clock, DollarSign, Star, BookOpen, BarChart3, Award } from 'lucide-react';

const DATA = {
  problems: [
    { icon: 'Target', text: "Paralyzed by thousands of courses and tutorials" },
    { icon: 'Clock', text: "Following outdated roadmaps that don't match real jobs" },
    { icon: 'TrendingUp', text: "Learning things in the wrong order or skipping prerequisites" },
    { icon: 'DollarSign', text: "Can't tell if a $2000 course beats free YouTube" }
  ],
  features: [
    {
      icon: 'Target',
      title: "Smart Skills Assessment",
      description: "No more guessing. Take real challenges to map exactly where you are and what you need to learn."
    },
    {
      icon: 'BarChart3',
      title: "AI-Powered Roadmap",
      description: "Get a visual timeline from Foundations → Job-Ready, with specific resources and time estimates."
    },
    {
      icon: 'Star',
      title: "Resource Rankings",
      description: "See effectiveness scores, completion rates, and price-to-value ratios from real learners."
    },
    {
      icon: 'TrendingUp',
      title: "Live Job Market Data",
      description: "Your roadmap adapts based on what companies are hiring for RIGHT NOW, not 2019."
    },
    {
      icon: 'Users',
      title: "Community Validated",
      description: "See what % of learners got jobs, time-to-hire metrics, and real salary outcomes."
    },
    {
      icon: 'Award',
      title: "Portfolio Projects",
      description: "Every module suggests a project. Build your portfolio while you learn."
    }
  ],
  steps: [
    {
      number: "01",
      title: "Tell us your goal",
      description: "Frontend Dev? ML Engineer? Product Designer? We'll assess your current skills with real challenges.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    },
    {
      number: "02",
      title: "Get your personalized roadmap",
      description: "Visual timeline showing exactly what to learn, in what order, with time estimates and prerequisites mapped.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      number: "03",
      title: "Follow curated resources",
      description: "We rank courses, tutorials, and projects by effectiveness, freshness, and value—not by who pays us.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      number: "04",
      title: "Track & validate progress",
      description: "Check off modules, validate skills with projects, get weekly progress reports, and adjust as you go.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ],
  stats: [
    { value: "50M+", label: "People learning to switch careers" },
    { value: "6 months", label: "Wasted on wrong learning paths" },
    { value: "$2,000+", label: "Spent on courses they don't finish" },
    { value: "85%", label: "Give up due to overwhelm" }
  ],
  solutions: [
    { value: "3-6 months", label: "Average time to job-ready" },
    { value: "90%", label: "Complete their personalized paths" },
    { value: "70%", label: "Get hired within 6 months" },
    { value: "$15/mo", label: "vs $15,000 bootcamp" }
  ],
  testimonials: [
    { quote: "I was drowning in Udemy courses. CareerCoach showed me exactly what to learn and in what order. Landed a frontend job in 4 months.", name: "Sarah M.", role: "Frontend Developer" },
    { quote: "The resource rankings saved me thousands. I learned React from free YouTube videos that were better than the $200 course I almost bought.", name: "Marcus J.", role: "React Developer" },
    { quote: "Finally, a roadmap based on real job postings, not someone's opinion from 2019. The job market insights are gold.", name: "Priya K.", role: "Full Stack Developer" },
    { quote: "I love seeing my progress visually. The portfolio projects got me interviews. Best $15/month I've ever spent.", name: "Alex R.", role: "Software Engineer" },
    { quote: "Went from zero coding to job offer in 5 months. The community validation gave me confidence I was on the right path.", name: "Jordan L.", role: "Junior Developer" },
    { quote: "The skills assessment was humbling but accurate. No more learning things I already knew or skipping prerequisites.", name: "Taylor B.", role: "Backend Developer" }
  ],
  comparison: [
    { feature: "Personalization", us: "Skills assessment + custom roadmap", them: "Generic, one-size-fits-all" },
    { feature: "Resource curation", us: "Platform-agnostic, best quality", them: "Only their own courses" },
    { feature: "Job market data", us: "Real-time scraping & analysis", them: "Static, outdated advice" },
    { feature: "Community validation", us: "Real outcomes, time-to-job data", them: "Marketing testimonials" },
    { feature: "Cost", us: "$15/month or free tier", them: "$5,000-$15,000 bootcamp" },
    { feature: "Progress tracking", us: "Visual roadmap + portfolio", them: "Certificate at the end" }
  ],
  roles: [
    "Frontend Developer", "Backend Developer", "Full Stack Developer", "ML Engineer",
    "Data Scientist", "Product Designer", "DevOps Engineer", "Mobile Developer"
  ]
};

export default DATA;