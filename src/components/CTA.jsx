import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  interest: 'user',
};

const CTASection = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const buttonLabel = useMemo(() => {
    if (status === 'saving') return 'Joining...';
    if (status === 'success') return 'You are on the waitlist';
    return 'Join Waitlist';
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = form.email.trim().toLowerCase();
    const name = form.name.trim();

    if (!name || !email) {
      setStatus('error');
      setMessage('Please add your name and email.');
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('saving');

    try {
      const storageKey = 'pathway_waitlist_entries';
      const existing = JSON.parse(window.localStorage.getItem(storageKey) || '[]');
      const nextEntry = {
        name,
        email,
        interest: form.interest,
        createdAt: new Date().toISOString(),
      };

      const withoutDuplicate = existing.filter((entry) => entry.email !== email);
      window.localStorage.setItem(storageKey, JSON.stringify([nextEntry, ...withoutDuplicate]));

      setStatus('success');
      setMessage('You are in. Your waitlist spot has been saved on this device.');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setMessage('Something went wrong while saving your details. Please try again.');
    }
  };

  return (
    <section id="waitlist" className="py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-[0_30px_110px_rgba(15,23,42,0.18)]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300 mb-5">Join the waitlist</p>
            <h2 className="display-face text-4xl md:text-6xl leading-none text-white mb-6">
              Be first to experience a smarter way to build your career.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Join as a learner looking for clarity or as an expert ready to guide others. Pathway is being built for people who want better decisions, not more guessing.
            </p>

            <div className="space-y-4">
              {[
                'Discover a path worth pursuing',
                'Connect with verified experts',
                'Get practical guidance that moves you forward',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-cyan-300" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f7f2ea] p-8 md:p-12 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-slate-950"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-slate-950"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                  I am joining as
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-slate-950"
                >
                  <option value="user">A learner or career explorer</option>
                  <option value="expert">An expert or mentor</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'saving'}
                className="w-full rounded-2xl bg-slate-950 px-6 py-4 text-white font-semibold transition hover:bg-slate-800 disabled:opacity-70 inline-flex items-center justify-center gap-2"
              >
                {buttonLabel}
                {status !== 'success' && <ArrowRight size={18} />}
              </button>

              {message && (
                <p className={`text-sm ${status === 'error' ? 'text-rose-600' : 'text-emerald-700'}`}>
                  {message}
                </p>
              )}

              <p className="text-sm text-slate-500">
                Join the list to follow the launch and get early access when Pathway opens up.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
