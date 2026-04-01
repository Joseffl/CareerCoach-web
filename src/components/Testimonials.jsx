import { Star } from 'lucide-react';
import MotionReveal from './MotionReveal';

const testimonials = [
  {
    quote: 'I stopped spiraling between product, design, and ops after one call. I finally understood what the PM path actually looked like.',
    name: 'Mariam O.',
    role: 'Switched from operations to product',
    outcome: 'Landed her first PM internship in 6 weeks',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80',
  },
  {
    quote: 'The session saved me months. Instead of buying another random course, I got honest advice on what to learn and what to ignore.',
    name: 'David E.',
    role: 'Aspiring data analyst',
    outcome: 'Built the right portfolio and got interviews',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80',
  },
  {
    quote: 'What I needed was context, not motivation. Talking to someone already in the role gave me clarity immediately.',
    name: 'Tolu A.',
    role: 'Career switcher into UX',
    outcome: 'Booked follow-up sessions and changed direction confidently',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <MotionReveal className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500 mb-5">Proof it helps</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-5">
            Conversations like this change what people do next.
          </h2>
          <p className="text-lg text-slate-600">
            For a trust-heavy product, real outcomes matter more than feature lists.
          </p>
        </MotionReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <MotionReveal
              key={testimonial.name}
              delay={index * 0.12}
              className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-[0_20px_55px_rgba(22,19,39,0.06)]"
            >
              <div className="flex items-center gap-1 text-orange-500 mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={`${testimonial.name}-${starIndex}`} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mb-5">
                <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold text-slate-950">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="rounded-[1.2rem] bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700">
                {testimonial.outcome}
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
