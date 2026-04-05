import { Briefcase, Building2, ChartColumn, Code2, PenTool, Repeat2, Sparkles } from 'lucide-react';

const roles = [
  { label: 'Software Engineering', icon: Code2 },
  { label: 'Product Management', icon: Briefcase },
  { label: 'Design', icon: PenTool },
  { label: 'Oil and Gas', icon: Building2 },
  { label: 'Finance', icon: ChartColumn },
  { label: 'Career Switching', icon: Repeat2 },
  { label: 'Early Career Guidance', icon: Sparkles },
  { label: 'Data and AI', icon: ChartColumn },
];

const RolesSection = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-br from-cyan-700 to-emerald-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start with the career paths people ask about most</h2>
        <p className="text-xl text-cyan-50 mb-12 max-w-3xl mx-auto">
          Pathlivo is built for emerging-market realities, but useful across global career tracks where practical guidance matters more than generic content.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {roles.map((role) => {
            const IconComponent = role.icon;

            return (
              <div
                key={role.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <IconComponent className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">{role.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
