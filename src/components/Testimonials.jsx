import { ArrowUpRight, GraduationCap, RefreshCcw, UserRoundSearch } from 'lucide-react';

const scenarios = [
  {
    icon: GraduationCap,
    title: 'For students and fresh graduates',
    description: 'Get clarity on the right career path before committing your time and resources.',
  },
  {
    icon: RefreshCcw,
    title: 'For career switchers',
    description: 'Understand what it takes to transition and how to do it the right way.',
  },
  {
    icon: UserRoundSearch,
    title: 'For junior professionals',
    description: 'Identify the next step that will actually move your career forward.',
  },
  {
    icon: UserRoundSearch,
    title: 'Anyone Seeking Clarity and Direction',
    description: 'Get clear, practical guidance to help you move forward with confidence.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-950">Built for people trying to make the right move</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Different people arrive with different goals, but the need is the same: clear direction from someone with real experience.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {scenarios.map((scenario) => {
            const IconComponent = scenario.icon;

            return (
              <div key={scenario.title} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-200">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-6">
                  <IconComponent size={26} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-950">{scenario.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{scenario.description}</p>
                {/* <div className="inline-flex items-center gap-2 text-cyan-700 font-semibold">
                  Get clarity faster
                  <ArrowUpRight size={18} />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
