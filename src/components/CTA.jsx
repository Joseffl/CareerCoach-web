import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import MotionReveal from './MotionReveal';

const initialForm = {
  name: '',
  email: '',
};

const CTASection = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const buttonLabel = useMemo(() => {
    if (status === 'saving') return 'Saving Your Spot...';
    if (status === 'success') return 'You are on the waitlist';
    return 'Get Early Access';
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
      <MotionReveal className="max-w-6xl mx-auto rounded-[2.7rem] overflow-hidden bg-[#1f1733] shadow-[0_30px_110px_rgba(22,19,39,0.18)]">
        <div className="grid lg:grid-cols-[0.98fr_1.02fr]">
          <div className="p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
            <p className="text-sm uppercase tracking-[0.28em] text-orange-300 mb-5">Join the waitlist</p>
            <h2 className="display-face text-4xl md:text-6xl leading-none text-white mb-6">
              Join 840 people already on the list for early access.
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              Early access closes when we hit the next batch. Join now if you want first access to verified professionals and focused career conversations.
            </p>

            <div className="space-y-4">
              {[
                'Browse real mentor profiles',
                'Talk to verified professionals',
                'Get sharper next steps, faster',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/88">
                  <CheckCircle2 className="text-orange-300" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 lg:p-14">
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
                  className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-orange-400"
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
                  className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-orange-400"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'saving'}
                className="w-full rounded-2xl bg-slate-950 px-6 py-4 text-white font-semibold transition hover:bg-slate-800 disabled:opacity-70 inline-flex items-center justify-center gap-2"
              >
                {buttonLabel}
                {status !== 'success' && <ArrowRight size={18} />}
              </button>

              {message && <p className={`text-sm ${status === 'error' ? 'text-rose-600' : 'text-[#C6511E]'}`}>{message}</p>}

              <p className="text-sm text-slate-500">
                Early access is limited to the next cohort. You will get updates as spots open.
              </p>
            </form>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
};

export default CTASection;
