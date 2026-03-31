const cards = [
  {
    title: 'What launches now',
    description: 'Career path discovery, expert profiles, booking, payment, and session delivery in one focused experience.',
    tone: 'dark',
  },
  {
    title: 'What makes it different',
    description: 'The product does not sell more noise. It gives people access to real experience, practical insight, and faster decisions.',
    tone: 'light',
  },
  {
    title: 'What expands later',
    description: 'Resume help, portfolio generation, subscriptions, expert tools, and deeper career infrastructure can grow from this foundation.',
    tone: 'light',
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start mb-14">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-700 mb-5">Platform scope</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950">A focused launch with room to become much bigger.</h2>
        </div>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl lg:pt-8">
          The first version is intentionally focused, but the long-term vision is much larger: a platform that helps people move from uncertainty to opportunity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const dark = card.tone === 'dark';

          return (
            <div
              key={card.title}
              className={`rounded-[2rem] p-8 border shadow-[0_18px_50px_rgba(15,23,42,0.05)] ${dark ? 'bg-slate-950 text-white border-slate-950' : 'bg-white/80 text-slate-900 border-white/70'}`}
            >
              <h3 className={`text-2xl font-semibold mb-4 ${dark ? 'text-white' : 'text-slate-950'}`}>{card.title}</h3>
              <p className={`text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PricingSection;
