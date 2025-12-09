import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { 
      quote: "I was drowning in Udemy courses. CareerCoach showed me exactly what to learn and in what order. Landed a frontend job in 4 months.", 
      name: "Sarah M.", 
      role: "Frontend Developer" 
    },
    { 
      quote: "The resource rankings saved me thousands. I learned React from free YouTube videos that were better than the $200 course I almost bought.", 
      name: "Marcus J.", 
      role: "React Developer" 
    },
    { 
      quote: "Finally, a roadmap based on real job postings, not someone's opinion from 2019. The job market insights are gold.", 
      name: "Priya K.", 
      role: "Full Stack Developer" 
    },
    { 
      quote: "I love seeing my progress visually. The portfolio projects got me interviews. Best $15/month I've ever spent.", 
      name: "Alex R.", 
      role: "Software Engineer" 
    },
    { 
      quote: "Went from zero coding to job offer in 5 months. The community validation gave me confidence I was on the right path.", 
      name: "Jordan L.", 
      role: "Junior Developer" 
    },
    { 
      quote: "The skills assessment was humbling but accurate. No more learning things I already knew or skipping prerequisites.", 
      name: "Taylor B.", 
      role: "Backend Developer" 
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Success stories
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className="fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;