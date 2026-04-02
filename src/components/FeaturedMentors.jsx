import { useEffect, useRef, useState } from 'react';
import { BriefcaseBusiness, Phone } from 'lucide-react';
import MotionReveal, { MotionItem, MotionStagger } from './MotionReveal';

const mentors = [
  {
    name: 'Dami Phebian',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '50 total sessions',
    experience: '7 years experience',
    availability: 'Always Available',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bisola Adesina',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '50 total sessions',
    experience: '7 years experience',
    availability: '9am-6pm, Weekdays',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Elon Musk',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '50 total sessions',
    experience: '7 years experience',
    availability: 'Weekends',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Adeyemi Favour',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '50 total sessions',
    experience: '7 years experience',
    availability: 'ASAP',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bisola Adesina',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '50 total sessions',
    experience: '7 years experience',
    availability: '9am-6pm, Weekdays',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Elon Musk',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '50 total sessions',
    experience: '7 years experience',
    availability: 'Weekends',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
];

const details = [
  { key: 'company', icon: BriefcaseBusiness, format: (mentor) => `${mentor.role}. ${mentor.company}` },
  { key: 'sessions', icon: Phone, format: (mentor) => mentor.sessions },
  { key: 'experience', icon: Phone, format: (mentor) => mentor.experience },
  { key: 'availability', icon: Phone, format: (mentor) => `Available: ${mentor.availability}` },
];

const FeaturedMentors = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return undefined;

    const updateScrollProgress = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      setScrollProgress(maxScroll > 0 ? container.scrollLeft / maxScroll : 0);
    };

    updateScrollProgress();
    container.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      container.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <section id="mentors" className="py-20 px-5 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <MotionReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-orange-500 mb-5">Featured Mentors</p>
            <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-4">
              Real professionals. Clear pricing. Specific expertise.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Sample profiles for now, but built to feel like a real marketplace people can trust.
            </p>
          </div>

          <a
            href="#waitlist"
            className="inline-flex items-center rounded-2xl bg-[#E86A33] px-5 py-3 text-white font-semibold transition hover:bg-[#C6511E] "
          >
            See all mentors
          </a>
        </MotionReveal>

        <MotionStagger delayChildren={0.08} staggerChildren={0.1}>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {mentors.map((mentor, index) => (
            <MotionItem
              key={`${mentor.name}-${mentor.company}`}
              className="min-w-[305px] max-w-[305px] snap-start overflow-hidden rounded-[1.35rem] border border-[#EAEAEA] bg-white shadow-[0_14px_36px_rgba(22,19,39,0.08)]"
            >
              <div className="h-[316px] overflow-hidden bg-[#FFF2E0]">
                <img src={mentor.image} alt={mentor.name} className="h-full w-full object-cover object-center" />
              </div>

              <div className="px-5 pt-4 pb-5">
                <h3 className="text-[1.05rem] sm:text-[1.1rem] font-semibold tracking-tight text-slate-950 mb-3">
                  {mentor.name}
                </h3>

                <div className="space-y-2 text-slate-600 mb-5">
                  {details.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={`${mentor.name}-${detail.key}`} className="flex items-start gap-2.5">
                        <Icon size={14} className="mt-[3px] shrink-0 text-slate-700" />
                        <span className="text-[0.94rem] leading-[1.45] text-slate-700">{detail.format(mentor)}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="inline-flex rounded-[0.9rem] bg-orange-100 px-4 py-2.5 text-[0.92rem] font-medium text-slate-800">
                  {mentor.price} /session
                </div>
              </div>
            </MotionItem>
          ))}
          </div>
        </MotionStagger>

        <MotionReveal delay={0.18} className="mt-7 flex items-center justify-between gap-4">
          <div className="relative h-2.5 w-28 overflow-hidden rounded-full bg-orange-100">
            <span
              className="absolute left-0 top-0 h-full w-12 rounded-full bg-orange-500 transition-transform duration-150 ease-out"
              style={{ transform: `translateX(${scrollProgress * 64}px)` }}
            ></span>
          </div>
          {/* <a href="#waitlist" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
            See all 47 mentors
          </a> */}
        </MotionReveal>
      </div>
    </section>
  );
};

export default FeaturedMentors;
