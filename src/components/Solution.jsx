const layers = [
  {
    eyebrow: 'Career intelligence',
    title: 'Give people clarity before commitment',
    description: 'Show what a path looks like, what skills it requires, and what the journey realistically demands.',
    tone: 'light',
  },
  {
    eyebrow: 'Expert marketplace',
    title: 'Turn uncertainty into a real conversation',
    description: 'The core product connects users to credible experts for focused sessions that answer the questions content never can.',
    tone: 'dark',
  },
  {
    eyebrow: 'Execution tools',
    title: 'Add execution tools when the timing is right',
    description: 'Resume support, portfolio generation, and readiness tools can deepen the platform after the core marketplace proves itself.',
    tone: 'light',
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-700 mb-5">Product architecture</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-6">
            A complete product story, built around one powerful core.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Pathlivo starts by helping people understand their options. The heart of the product is expert access. Over time, that foundation grows into deeper career tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.15fr_0.95fr] gap-6 items-stretch">
          {layers.map((layer) => {
            const isDark = layer.tone === 'dark';

            return (
              <div
                key={layer.title}
                className={`rounded-4xl p-8 border ${isDark ? 'bg-slate-950 text-white border-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.18)]' : 'bg-white/80 backdrop-blur-sm text-slate-900 border-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.06)]'}`}
              >
                <p className={`text-sm uppercase tracking-[0.25em] mb-6 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>{layer.eyebrow}</p>
                <h3 className={`display-face text-3xl leading-tight mb-5 ${isDark ? 'text-white' : 'text-slate-950'}`}>{layer.title}</h3>
                <p className={`leading-relaxed text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{layer.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
