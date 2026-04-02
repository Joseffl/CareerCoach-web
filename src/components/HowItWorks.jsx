import MotionReveal, { MotionItem, MotionStagger } from './MotionReveal';

const steps = [
  {
    number: '01',
    title: 'Tell us what you need help with',
    description: 'Start with the role, decision, or transition you are trying to figure out.',
  },
  {
    number: '02',
    title: 'See professionals with relevant experience',
    description: 'Browse people who have actually worked in the path you want to understand.',
  },
  {
    number: '03',
    title: 'Book a focused conversation',
    description: 'Choose a mentor and schedule a session around the questions that matter most.',
  },
  {
    number: '04',
    title: 'Leave with better next steps',
    description: 'Walk away with clearer decisions, tradeoffs, and a more confident next move.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <MotionReveal className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500 mb-5">How it works</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-5">
            A clearer route from uncertainty to action
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No endless searching. Just the shortest path to a conversation that actually helps.
          </p>
        </MotionReveal>

        <MotionStagger className="grid lg:grid-cols-4 gap-6" staggerChildren={0.12}>
          {steps.map((step, idx) => (
            <MotionItem
              key={step.number}
              className={`rounded-4xl p-8 border shadow-[0_20px_50px_rgba(22,19,39,0.05)] transition-transform duration-300 hover:-translate-y-1 ${idx === 2 ? 'bg-orange-500 text-white border-orange-500' : 'bg-white border-orange-100'}`}
            >
              <div className={`text-sm uppercase tracking-[0.25em] mb-5 ${idx === 2 ? 'text-orange-50' : 'text-slate-400'}`}>Step {step.number}</div>
              <h3 className={`display-face text-3xl leading-tight mb-3 ${idx === 2 ? 'text-white' : 'text-slate-950'}`}>{step.title}</h3>
              <p className={`${idx === 2 ? 'text-orange-50' : 'text-slate-600'}`}>{step.description}</p>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default HowItWorksSection;
