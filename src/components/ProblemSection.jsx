import { Compass, Lightbulb, SearchSlash } from 'lucide-react';
import MotionReveal from './MotionReveal';

const problems = [
  {
    icon: SearchSlash,
    title: 'Too much advice, not enough direction',
    text: 'You can read threads, watch videos, and still feel no closer to the right next move.',
  },
  {
    icon: Lightbulb,
    title: 'No access to real-world experience',
    text: 'Most career content sounds smart, but it rarely tells you what the work is actually like.',
  },
  {
    icon: Compass,
    title: 'Expensive trial and error',
    text: 'Wrong roles, wrong courses, and wrong assumptions can cost months of time and momentum.',
  },
];

const solutionSignals = [
  'Verified professionals',
  'Honest perspective from people inside the work',
  'Better decisions with less guesswork',
];

const ProblemSection = () => {
  return (
    <section id="why-people-get-stuck" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <MotionReveal className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500 mb-5">Why people get stuck</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-5">
            Smart people still make slow career decisions
            <br />
            when they cannot see what the path really looks like.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The problem is rarely effort. It is a lack of context, access, and honest perspective.
          </p>
        </MotionReveal>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-6 items-start">
          <div className="grid gap-5">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <MotionReveal
                  key={problem.title}
                  delay={index * 0.12}
                  className="rounded-[1.8rem] border px-6 py-6 shadow-[0_20px_50px_rgba(22,19,39,0.05)] bg-white border-[#EADFD3]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 mb-1.5">{problem.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{problem.text}</p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>

          <MotionReveal delay={0.18} className="rounded-[2rem] bg-slate-950 p-7 sm:p-8 shadow-[0_28px_80px_rgba(22,19,39,0.16)]">
            <p className="text-xs uppercase tracking-[0.22em] text-orange-300 mb-4">What Pathway gives instead</p>
            <h3 className="display-face text-3xl sm:text-4xl text-white leading-none mb-6">
              Insider knowledge that helps you choose well.
            </h3>
            <div className="space-y-4 mb-6">
              {solutionSignals.map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/88">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#mentors"
              className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-orange-50"
            >
              Browse Mentors
            </a>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
