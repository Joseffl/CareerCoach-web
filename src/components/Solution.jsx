import React from 'react';

const SolutionSection = () => {
  const solutions = [
    { value: "3-6 months", label: "Average time to job-ready" },
    { value: "90%", label: "Complete their personalized paths" },
    { value: "70%", label: "Get hired within 6 months" },
    { value: "$15/mo", label: "vs $15,000 bootcamp" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The smarter way to learn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CareerCoach maps your personalized learning path based on your skills, goals, and real job market data.
          </p>
        </div>

        <div className="bg-linear-to-br from-cyan-600 to-teal-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            What you get with CareerCoach
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {solutions.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-cyan-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;