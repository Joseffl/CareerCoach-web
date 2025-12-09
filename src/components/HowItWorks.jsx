import React from 'react';

const HowItWorksSection = () => {
  const steps = [
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
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your path to employment in 4 steps
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image */}
              <div className="flex-1">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="text-6xl font-bold gradient-text mb-4">
                  {step.number}
                </div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;