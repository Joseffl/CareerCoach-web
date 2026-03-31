import { useEffect, useRef, useState } from 'react';
import { BriefcaseBusiness, CalendarDays, MessageCircleMore, Star } from 'lucide-react';

const mentors = [
  {
    name: 'Dami Adebayo',
    role: 'Senior Product Manager',
    company: 'Google',
    sessions: '58 total sessions',
    experience: '8 years experience',
    availability: 'Available: Weekdays, 9am-6pm',
    price: '$40.00 /session',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    accent: 'from-sky-100 via-cyan-50 to-white',
  },
  {
    name: 'Bisola Adesina',
    role: 'UX Research Lead',
    company: 'Meta',
    sessions: '41 total sessions',
    experience: '7 years experience',
    availability: 'Available: Evenings',
    price: '$35.00 /session',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    accent: 'from-emerald-100 via-teal-50 to-white',
  },
  {
    name: 'Tosin Kareem',
    role: 'Data Scientist',
    company: 'Spotify',
    sessions: '36 total sessions',
    experience: '6 years experience',
    availability: 'Available: Weekends',
    price: '$45.00 /session',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    accent: 'from-amber-100 via-orange-50 to-white',
  },
  {
    name: 'Adeyemi Favour',
    role: 'Software Engineer',
    company: 'Microsoft',
    sessions: '64 total sessions',
    experience: '9 years experience',
    availability: 'Available: ASAP',
    price: '$50.00 /session',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    accent: 'from-slate-100 via-zinc-50 to-white',
  },
  {
    name: 'Adeyemi Favour',
    role: 'Software Engineer',
    company: 'Microsoft',
    sessions: '64 total sessions',
    experience: '9 years experience',
    availability: 'Available: ASAP',
    price: '$50.00 /session',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    accent: 'from-slate-100 via-zinc-50 to-white',
  },
  {
    name: 'Adeyemi Favour',
    role: 'Software Engineer',
    company: 'Microsoft',
    sessions: '64 total sessions',
    experience: '9 years experience',
    availability: 'Available: ASAP',
    price: '$50.00 /session',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    accent: 'from-slate-100 via-zinc-50 to-white',
  },
];

const details = [
  { key: 'company', icon: BriefcaseBusiness },
  { key: 'sessions', icon: MessageCircleMore },
  { key: 'experience', icon: Star },
  { key: 'availability', icon: CalendarDays },
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
    <section id='mentors' className="py-20 px-5 sm:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-700 mb-5">Explore mentors</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-5">
            Meet people already doing the work you want to understand.
          </h2>
          
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {mentors.map((mentor, index) => (
            <article
              key={`${mentor.name}-${index}`}
              className={`min-w-[305px] max-w-[305px] snap-start overflow-hidden rounded-4xl border border-slate-200/70 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] animate-drift-in ${index === 1 ? 'animation-delay-150' : index === 2 ? 'animation-delay-300' : index === 3 ? 'animation-delay-500' : ''}`}
            >
              <div className={`h-[250px] overflow-hidden bg-linear-to-br ${mentor.accent}`}>
                <img src={mentor.image} alt={mentor.name} className="h-full w-full object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-tight text-slate-950 mb-3">
                  {mentor.name}
                </h3>

                <div className="space-y-2 text-slate-600">
                  {details.map((detail) => {
                    const Icon = detail.icon;
                    const value =
                      detail.key === 'company' ? `${mentor.role}. ${mentor.company}` : mentor[detail.key];

                    return (
                      <div key={`${mentor.name}-${detail.key}`} className="flex items-start gap-2.5">
                        <Icon size={15} className="mt-0.5 shrink-0 text-slate-500" />
                        <span className="text-base leading-6">{value}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4">
                  <span className="inline-flex rounded-2xl bg-sky-100 px-4 py-2 text-base font-medium text-slate-800">
                    {mentor.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative h-3 w-24 overflow-hidden rounded-full bg-slate-200">
            <span
              className="absolute left-0 top-0 h-full w-10 rounded-full bg-slate-900 transition-transform duration-150 ease-out"
              style={{ transform: `translateX(${scrollProgress * 56}px)` }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;
