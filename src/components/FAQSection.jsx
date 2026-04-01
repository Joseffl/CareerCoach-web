import MotionReveal from './MotionReveal';

const faqs = [
  {
    question: 'How long is a session?',
    answer: 'Most sessions are 30 to 45 minutes. Long enough to get honest answers, clear context, and actionable next steps without wasting time.',
  },
  {
    question: 'Are mentors vetted?',
    answer: 'Yes. We are building Pathway around verified professionals with real work experience, not generic internet advice.',
  },
  {
    question: 'What do I actually ask in a session?',
    answer: 'Ask about the day-to-day reality of a role, how to break in, what skills matter, what to ignore, interview prep, or whether a path is even right for you.',
  },
  {
    question: 'What if I am not satisfied?',
    answer: 'If a session is not helpful, we will help you find a better expert match. The goal is clarity, not just another call.',
  },
  {
    question: 'How soon can I book?',
    answer: 'Once access opens, you will be able to browse mentors and book based on their availability. Many profiles will have evening and weekend slots.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <MotionReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-500 mb-5">FAQ</p>
          <h2 className="display-face text-4xl md:text-6xl leading-none text-slate-950 mb-5">
            The last questions people ask before they book
          </h2>
          <p className="text-lg text-slate-600">
            For a $35-$50 human product, objection handling matters. This section is here to reduce hesitation.
          </p>
        </MotionReveal>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <MotionReveal
              key={faq.question}
              delay={index * 0.1}
              className="rounded-[1.8rem] border border-orange-100 bg-white px-6 py-6 shadow-[0_20px_50px_rgba(22,19,39,0.05)]"
            >
              <h3 className="text-xl font-semibold text-slate-950 mb-2">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
