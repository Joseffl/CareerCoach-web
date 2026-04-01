import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CalendarClock, Compass } from 'lucide-react';
import MotionReveal from './MotionReveal';

const socialProof = [
  '127 sessions booked this month',
  '4.9 average rating',
  'Mentors from Google, Meta, Spotify',
];

const trustItems = [
  { icon: BadgeCheck, label: 'Verified professionals' },
  { icon: BriefcaseBusiness, label: 'Real-world experience' },
  { icon: CalendarClock, label: 'Focused 1-on-1 sessions' },
];

const floatingNotes = [
  {
    title: 'Verified mentor',
    text: 'Senior Product Manager at Google',
    position: 'left-[-0.6rem] top-[1.5rem] sm:left-[-1.5rem] sm:top-[2.5rem]',
    icon: BadgeCheck,
    delay: 0.2,
  },
  {
    title: 'Popular topics',
    text: 'Career transitions • PM roadmap',
    position: 'right-[-0.2rem] top-[3.5rem] sm:right-[-1.2rem] sm:top-[4.2rem]',
    icon: Compass,
    delay: 0.45,
  },
  {
    title: 'Average rating',
    text: '4.9 from early sessions',
    position: 'left-[0.5rem] bottom-[1.25rem] sm:left-[-0.75rem] sm:bottom-[1.5rem]',
    icon: CalendarClock,
    delay: 0.7,
  },
];

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-28 sm:pt-32 pb-18 sm:pb-24 px-5 sm:px-6 relative overflow-hidden bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-10 lg:gap-12 items-center">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EADFD3] text-[#1F2937] text-sm font-medium mb-7 shadow-[0_12px_30px_rgba(22,19,39,0.06)]">
              <Compass size={16} className="text-[#E86A33]" />
              Real professionals. Real career decisions.
            </div>

            <h1 className="display-face text-[3.1rem] sm:text-6xl md:text-7xl leading-[0.93] text-[#18181B] mb-6 max-w-4xl">
              Stop guessing your career path.
              <br />
              <span className="text-[#C6511E]">Talk to people already in it.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#667085] leading-relaxed max-w-2xl mb-8">
              Get direct guidance from experienced professionals so you can make smarter career decisions faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#mentors"
                className="w-full sm:w-auto px-7 py-4 bg-[#E86A33] text-white rounded-2xl font-semibold text-lg hover:bg-[#C6511E] transition-all inline-flex items-center justify-center gap-2 group shadow-[0_18px_50px_rgba(22,19,39,0.14)]"
              >
                Find a Mentor
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center text-sm text-[#667085] mb-8">
              {socialProof.map((item) => (
                <div key={item} className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E86A33]"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3 max-w-3xl">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[#EADFD3] bg-white px-4 py-4 shadow-[0_16px_40px_rgba(22,19,39,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#E86A33]">
                        <Icon size={18} />
                      </div>
                      <p className="text-sm font-medium text-[#1F2937]">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} className="relative">
            <div className="relative mx-auto max-w-[32rem]">
              <motion.div
                className="relative overflow-hidden rounded-[2rem] border border-[#EADFD3] bg-white p-3 sm:p-4 shadow-[0_28px_80px_rgba(22,19,39,0.10)]"
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden rounded-[1.6rem] bg-[#1F2937]">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional mentor portrait"
                    className="h-[470px] sm:h-[560px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/26 via-transparent to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 text-sm text-[#1F2937] shadow-[0_16px_40px_rgba(22,19,39,0.16)] backdrop-blur-md">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF4EC] text-[#E86A33]">
                        <BadgeCheck size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {floatingNotes.map((note, index) => {
                const Icon = note.icon;

                return (
                  <motion.div
                    key={note.title}
                    className={`absolute hidden sm:block ${note.position}`}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: note.delay, ease: [0.22, 1, 0.36, 1] }}
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {
                            y: [0, index % 2 === 0 ? -12 : -9, 0],
                          }
                    }
                    style={{ willChange: 'transform' }}
                  >
                    <div className="min-w-[188px] rounded-[1.4rem] border border-[#EADFD3] bg-white/96 px-4 py-3.5 shadow-[0_18px_45px_rgba(22,19,39,0.10)] backdrop-blur-md">
                      <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#E86A33]">
                        <Icon size={14} />
                        <span>{note.title}</span>
                      </div>
                      <p className="text-sm font-medium text-[#1F2937] leading-6">{note.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
