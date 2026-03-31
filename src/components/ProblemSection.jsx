import { Compass, FileWarning, Lightbulb, SearchSlash } from 'lucide-react';

const problems = [
  {
    icon: SearchSlash,
    title: 'Interested, but unsure',
    text: 'A role sounds good on paper, but you still do not know what it is really like.',
  },
  {
    icon: Lightbulb,
    title: 'Learning, but guessing',
    text: 'There is plenty of advice online, but not much clarity on what matters first.',
  },
  {
    icon: Compass,
    title: 'Trying, but second-guessing',
    text: 'You want to make the right move without wasting months on the wrong one.',
  },
];

const signals = [
  {
    value: 'Real perspective',
    label: 'Hear what the role is actually like from people doing it now',
  },
  {
    value: 'Clear next steps',
    label: 'Know what to learn, improve, or try next',
  },
  {
    value: 'Less guesswork',
    label: 'Move with more confidence and less confusion',
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-700 mb-5">Why people get stuck</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-6">
            Most people are not lazy.
            <br />
            They are just trying to choose well with limited visibility.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            You can be serious, motivated, and still unsure which move makes sense.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {problems.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={problem.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950 mb-1.5">{problem.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{problem.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-[2rem] bg-slate-950 p-8 md:p-9">
          <h3 className="display-face text-3xl md:text-4xl leading-none text-white text-center mb-8">
            What helps is real context.
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {signals.map((signal) => (
              <div key={signal.value} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <div className="text-lg font-semibold text-cyan-300 mb-2">{signal.value}</div>
                <div className="text-sm leading-6 text-slate-300">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
