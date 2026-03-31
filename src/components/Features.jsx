import { BadgeCheck, CalendarClock, Map } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'See the path clearly',
    description: 'Understand what a role actually involves, the skills behind it, and what success on that path looks like.',
  },
  {
    icon: BadgeCheck,
    title: 'Find the right expert',
    description: 'Browse vetted professionals with the experience, context, and perspective that match your goals.',
  },
  {
    icon: CalendarClock,
    title: 'Book guidance that moves you forward',
    description: 'Schedule focused sessions that give you direct answers, honest feedback, and a clearer next move.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-700 mb-5">Core experience</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-6">What people can do on Pathway</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every part of the product is designed to help users make better career decisions, faster and with more confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const dark = idx === 1;

            return (
              <div
                key={feature.title}
                className={`rounded-[2rem] p-8 border shadow-[0_22px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 animate-drift-in ${idx === 1 ? 'animation-delay-150' : idx === 2 ? 'animation-delay-300' : ''} ${dark ? 'bg-slate-950 text-white border-slate-950' : 'bg-white/80 border-white/70'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${dark ? 'bg-white/10 text-cyan-300' : 'bg-slate-950 text-white'}`}>
                  <IconComponent size={26} />
                </div>
                <h3 className={`display-face text-3xl leading-tight mb-4 ${dark ? 'text-white' : 'text-slate-950'}`}>{feature.title}</h3>
                <p className={`text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
