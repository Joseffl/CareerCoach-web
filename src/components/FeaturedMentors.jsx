import { useEffect, useRef, useState } from 'react';
import { BadgeCheck, BriefcaseBusiness, CalendarDays, MessageCircleMore, Star } from 'lucide-react';
import MotionReveal from './MotionReveal';

const mentors = [
  {
    name: 'Dami Adebayo',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '58 sessions',
    experience: '8 years',
    availability: 'Weekdays, 9am-6pm',
    price: '$40',
    rating: '4.9',
    topics: ['Career transitions', 'PM roadmap', 'Salary negotiation'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bisola Adesina',
    role: 'UX Research Lead',
    company: 'Meta',
    sessions: '41 sessions',
    experience: '7 years',
    availability: 'Evenings',
    price: '$35',
    rating: '4.8',
    topics: ['Portfolio review', 'UX research', 'Career switch'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tosin Kareem',
    role: 'Data Scientist',
    company: 'Spotify',
    sessions: '36 sessions',
    experience: '6 years',
    availability: 'Weekends',
    price: '$45',
    rating: '4.9',
    topics: ['Data career path', 'Interview prep', 'Analytics projects'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Amina Yusuf',
    role: 'Software Engineer',
    company: 'Microsoft',
    sessions: '64 sessions',
    experience: '9 years',
    availability: 'ASAP',
    price: '$50',
    rating: '5.0',
    topics: ['FAANG prep', 'Career growth', 'Systems thinking'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
];

const details = [
  { key: 'company', icon: BriefcaseBusiness, format: (mentor) => `${mentor.role}. ${mentor.company}` },
  { key: 'sessions', icon: MessageCircleMore, format: (mentor) => mentor.sessions },
  { key: 'experience', icon: Star, format: (mentor) => mentor.experience },
  { key: 'availability', icon: CalendarDays, format: (mentor) => mentor.availability },
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

        <MotionReveal delay={0.12}>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {mentors.map((mentor, index) => (
            <article
              key={`${mentor.name}-${mentor.company}`}
              className="min-w-[320px] max-w-[320px] snap-start overflow-hidden rounded-[2rem] border border-[#EADFD3] bg-white shadow-[0_24px_70px_rgba(22,19,39,0.08)]"
            >
              <div className="relative h-[250px] overflow-hidden bg-white">
                <img src={mentor.image} alt={mentor.name} className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-slate-950/5 to-transparent"></div>
                <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 backdrop-blur-md">
                  <BadgeCheck size={13} className="text-orange-500" />
                  Verified
                </div>
                <div className="absolute right-4 bottom-4 rounded-[1.2rem] bg-slate-950 px-4 py-3 text-white shadow-lg">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-orange-300 mb-1">From</p>
                  <p className="text-2xl font-semibold leading-none">{mentor.price}<span className="text-sm font-medium text-white/70">/session</span></p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-[1.15rem] font-semibold tracking-tight text-slate-950">{mentor.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">Rated {mentor.rating}/5</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-slate-600 mb-4">
                  {details.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={`${mentor.name}-${detail.key}`} className="flex items-start gap-2.5">
                        <Icon size={15} className="mt-1 shrink-0 text-orange-500" />
                        <span className="text-sm leading-6">{detail.format(mentor)}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {mentor.topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700">
                      {topic}
                    </span>
                  ))}
                </div>

                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50"
                >
                  View profile
                </a>
              </div>
            </article>
          ))}
          </div>
        </MotionReveal>

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
