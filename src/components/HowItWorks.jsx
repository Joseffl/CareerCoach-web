const steps = [
  {
    number: '01',
    title: 'Choose a path',
    description: 'Start with the career you want to explore.',
  },
  {
    number: '02',
    title: 'Meet the right expert',
    description: 'Browse people with relevant experience and context.',
  },
  {
    number: '03',
    title: 'Book a session',
    description: 'Schedule a simple 1-on-1 conversation.',
  },
  {
    number: '04',
    title: 'Move with clarity',
    description: 'Leave with sharper decisions and next steps.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-700 mb-5">How it works</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-6">A simple flow from interest to action</h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`rounded-[2rem] p-8 border shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 animate-drift-in ${idx === 1 ? 'animation-delay-150' : idx === 2 ? 'animation-delay-300' : idx === 3 ? 'animation-delay-500' : ''} ${idx === 2 ? 'bg-cyan-700 text-white border-cyan-700' : 'bg-white/80 border-white/70'}`}
            >
              <div className={`text-sm uppercase tracking-[0.25em] mb-5 ${idx === 2 ? 'text-cyan-100' : 'text-slate-400'}`}>Step {step.number}</div>
              <h3 className={`display-face text-3xl leading-tight mb-3 ${idx === 2 ? 'text-white' : 'text-slate-950'}`}>{step.title}</h3>
              <p className={`${idx === 2 ? 'text-cyan-50' : 'text-slate-600'}`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
