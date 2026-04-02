import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Search } from 'lucide-react';
import MotionReveal, { MotionItem, MotionStagger } from './MotionReveal';

const chips = ['Product', 'Engineering', 'Design', 'Finance', 'Data', 'Marketing'];

const mentors = [
  {
    initials: 'AA',
    name: 'Ada Alex',
    role: 'Senior Designer',
    company: 'Google',
    price: '$85/session',
    rating: '4.9',
    available: 'today',
    color: '#1D4F91',
    delay: 0.15,
    top: 16,
    left: 20,
  },
  {
    initials: 'JA',
    name: 'Joseph A.',
    role: 'Senior Developer',
    company: 'Stripe',
    price: '$50/session',
    rating: '4.9',
    available: 'tomorrow',
    color: '#C6511E',
    delay: 0.3,
    top: 152,
    left: 56,
  },
  {
    initials: 'FA',
    name: 'Freya Alex',
    role: 'Finance Professional',
    company: 'Meta',
    price: '$35/session',
    rating: '5.0',
    available: 'today',
    color: '#173B34',
    delay: 0.45,
    top: 288,
    left: 20,
  },
];

const socialProof = [
  '127 sessions booked this month',
  '4.9 average rating',
  'Mentors from Google, Meta, Spotify',
];

const MentorCard = ({ mentor, prefersReducedMotion, style, className }) => (
  <motion.div
    className={className}
    style={style}
    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, delay: mentor.delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="bg-white border border-[#EAE3D9] rounded-2xl px-4 py-4 flex items-center gap-3 shadow-[0_8px_32px_rgba(22,19,39,0.08)]">
      {/* Avatar */}
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ backgroundColor: mentor.color }}
      >
        {mentor.initials}
      </div>

      {/* Name + role */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[0.9rem] text-[#18181B]">{mentor.name}</p>
        <p className="text-[0.78rem] text-[#6B7280] mt-0.5">
          {mentor.role}{' '}
          <span className="text-[#9CA3AF]">at</span>{' '}
          {mentor.company}
        </p>
      </div>

      {/* Price + rating + availability */}
      <div className="text-right flex-shrink-0">
        <p className="font-semibold text-[0.9rem] text-[#18181B]">{mentor.price}</p>
        <p className="text-[0.72rem] text-[#E86A33] mt-0.5">{'★'.repeat(5)} {mentor.rating}</p>
        <span
          className={[
            'inline-flex items-center gap-1 mt-1 text-[0.68rem] font-medium px-2 py-0.5 rounded-full border',
            mentor.available === 'today'
              ? 'bg-[#F0FDF4] border-[#BBF7D0] text-[#16A34A]'
              : 'bg-[#FFF7ED] border-[#FDE68A] text-[#B45309]',
          ].join(' ')}
        >
          <span
            className={[
              'w-1.5 h-1.5 rounded-full',
              mentor.available === 'today' ? 'bg-[#22C55E]' : 'bg-[#F59E0B]',
            ].join(' ')}
          />
          Available {mentor.available}
        </span>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeChip, setActiveChip] = useState(null);

  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 relative overflow-hidden bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.96fr_1.04fr] gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <MotionReveal>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EADFD3] text-[#1F2937] text-sm font-medium mb-7 shadow-[0_12px_30px_rgba(22,19,39,0.06)]">
              <Compass size={16} className="text-[#E86A33]" />
              Real professionals. Real career decisions.
            </div>

            {/* Headline */}
            <h1 className="display-face text-[2.6rem] sm:text-6xl md:text-7xl leading-[0.93] text-[#18181B] mb-6 max-w-4xl">
              Talk to people who are already
              <br />
              <span className="text-[#C6511E]">where you want to be</span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-xl text-[#667085] leading-relaxed max-w-2xl mb-8">
              Book one-on-one sessions with real professionals for honest career advice, practical guidance, and clarity on your next step.
            </p>

            {/* Search bar */}
            <div className="flex items-center bg-white border border-[#EADFD3] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(22,19,39,0.07)] max-w-[480px] mb-4">
              <Search size={17} className="ml-4 text-[#A8A29E] flex-shrink-0" />
              <input
                type="text"
                placeholder="What's your role?"
                className="flex-1 px-3 py-3.5 text-base text-[#18181B] bg-transparent outline-none placeholder:text-[#A8A29E]"
              />
              <button className="bg-[#18181B] hover:bg-[#E86A33] transition-colors text-white text-sm font-semibold px-4 sm:px-5 py-3.5 whitespace-nowrap">
                Find mentor
              </button>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2 mb-8 max-w-[480px]">
              {chips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setActiveChip(activeChip === chip ? null : chip)}
                  className={[
                    'px-3 py-1.5 rounded-full border text-sm transition-all',
                    activeChip === chip
                      ? 'bg-[#FFF4EC] border-[#E86A33] text-[#C6511E]'
                      : 'bg-white border-[#EADFD3] text-[#57534E] hover:bg-[#FFF4EC] hover:border-[#E86A33] hover:text-[#C6511E]',
                  ].join(' ')}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Social proof */}
            <MotionStagger
              className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center text-sm text-[#667085]"
              staggerChildren={0.12}
            >
              {socialProof.map((item) => (
                <MotionItem key={item} className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#E86A33] flex-shrink-0" />
                  <span>{item}</span>
                </MotionItem>
              ))}
            </MotionStagger>
          </MotionReveal>

          {/* RIGHT — desktop: staggered absolute cards | mobile: stacked list */}

          {/* MOBILE: simple stacked cards shown below left content */}
          <div className="flex flex-col gap-3 lg:hidden mt-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
              Featured mentors available now
            </p>
            {mentors.map((mentor) => (
              <MentorCard
                key={mentor.name}
                mentor={mentor}
                prefersReducedMotion={prefersReducedMotion}
                className="w-full"
              />
            ))}
            {/* Mobile "mentors from" tag */}
            <motion.div
              className="inline-flex items-center gap-2 mt-1"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white border border-[#EAE3D9] rounded-xl px-4 py-2.5 shadow-[0_4px_18px_rgba(22,19,39,0.07)] inline-flex items-center gap-2">
                <Compass size={13} className="text-[#E86A33]" />
                <span className="text-[0.72rem] text-[#6B7280]">Mentors from</span>
                <span className="text-[0.72rem] font-semibold text-[#18181B]">Google · Meta · Stripe</span>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP: staggered absolute positioning */}
          <div className="relative hidden lg:block">
            <div className="relative h-[460px]">
              {mentors.map((mentor) => (
                <MentorCard
                  key={mentor.name}
                  mentor={mentor}
                  prefersReducedMotion={prefersReducedMotion}
                  className="absolute w-[340px]"
                  style={{ top: mentor.top, left: mentor.left }}
                />
              ))}

              {/* Floating "mentors from" tag */}
              {/* <motion.div
                className="absolute right-2 bottom-10"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-white border border-[#EAE3D9] rounded-xl px-4 py-3 shadow-[0_4px_18px_rgba(22,19,39,0.07)] inline-flex items-center gap-2">
                  <Compass size={14} className="text-[#E86A33]" />
                  <span className="text-[0.75rem] text-[#6B7280]">Mentors from</span>
                  <span className="text-[0.75rem] font-semibold text-[#18181B]">Google · Meta · Stripe</span>
                </div>
              </motion.div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;