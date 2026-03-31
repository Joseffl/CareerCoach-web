import { ArrowRight, Check, Compass } from 'lucide-react';

const pathItems = ['Discover the right path', 'Speak to verified experts', 'Move forward with clarity'];

const HeroSection = () => {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-[8%] h-44 w-44 sm:h-56 sm:w-56 rounded-full bg-cyan-200/35 blur-3xl"></div>
        <div className="absolute top-6 right-[10%] h-52 w-52 sm:h-64 sm:w-64 rounded-full bg-emerald-200/22 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 h-64 w-64 sm:h-72 sm:w-72 -translate-x-1/2 rounded-full bg-amber-100/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-10 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/75 border border-white/80 text-slate-700 text-sm font-medium mb-7 shadow-sm">
              <Compass size={16} />
              Career clarity meets expert access
            </div>

            <h1 className="display-face text-[3.15rem] sm:text-6xl md:text-7xl leading-[0.94] text-slate-950 mb-6 max-w-4xl">
              Stop guessing your future.
              <br />
              Talk to people already living it.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              Pathway helps students, career switchers, and early professionals understand a path, meet trusted experts, and book focused 1-on-1 guidance that turns confusion into direction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#waitlist"
                className="w-full sm:w-auto px-7 py-4 bg-slate-950 text-white rounded-2xl font-semibold text-lg hover:bg-slate-800 transition-all inline-flex items-center justify-center gap-2 group"
              >
                Find a Mentor
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-7 py-4 border border-slate-300 text-slate-700 rounded-2xl font-semibold text-lg hover:bg-white/80 transition-all text-center"
              >
                Become a Mentor
              </a>
            </div>

            
          </div>

          <div className="relative animate-drift-in animation-delay-150">
            <div className="">
              <div className="relative overflow-hidden rounded-[1.85rem] bg-slate-950">
                <img
                  src="https://ik.imagekit.io/mags/CareerOS/Hero"
                  alt="Professionals discussing career direction"
                  className="h-[420px] sm:h-[520px] lg:h-[620px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                {/* <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7">
                  <div className="max-w-md rounded-[1.6rem] bg-white/92 backdrop-blur-md p-5 shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-2">Why Pathway works</p>
                    <h2 className="display-face text-3xl text-slate-950 mb-3">Real conversations create real momentum</h2>
                    <p className="text-slate-600 leading-relaxed">
                      People make better career decisions when they can ask honest questions, hear real experiences, and learn from someone already ahead of them.
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 top-4 sm:left-6 sm:top-6 animate-float-slow">
                  <div className="rounded-full bg-white/16 border border-white/20 px-4 py-2 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/80">Verified experts</p>
                  </div>
                </div>

                <div className="absolute right-4 top-4 sm:right-6 sm:top-6 hidden sm:block animate-float-slow animation-delay-300">
                  <div className="rounded-[1.2rem] bg-slate-950/70 border border-white/12 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200 mb-1">Outcome</p>
                    <p className="text-sm text-white">Clarity, confidence, and a next step you can act on.</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
