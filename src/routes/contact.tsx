import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { submitContact } from "@/lib/forms.functions";
import { Mail, MapPin, Briefcase, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EYMA AI" },
      { name: "description", content: "Talk to EYMA AI about a partnership, pilot project, or question. Based in Delhi, India." },
      { property: "og:title", content: "Contact — EYMA AI" },
      { property: "og:description", content: "We respond within one business day." },
    ],
  }),
  component: Contact,
});

const inquiryTypes = ["Partnership / pilot", "Pricing", "Careers question", "Press", "Other"];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", inquiry_type: "", message: "" });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(submitContact);
  const valid = form.name && form.email && form.message;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true); setError(null);
    try {
      const res = await submit({ data: form });
      if (res.success) setDone(true);
      else setError(res.error || "Could not send");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally { setSubmitting(false); }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh"><div className="blob" /></div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8 pt-20 lg:pt-24 pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
            <Link to="/" className="hover:text-amber">Home</Link> / Contact
          </p>
          <h1 className="mt-5 font-display text-5xl lg:text-7xl leading-[1.05]">
            Let's <span className="italic text-amber">talk</span>.
          </h1>
          <p className="mt-5 max-w-xl text-ink-soft text-lg">Pilots, partnerships, careers, press — we read every message.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2 space-y-5">
            {[
              { icon: <Mail className="w-5 h-5" />, label: "Partnerships", value: "contactus@eymaai.com", href: "mailto:contactus@eymaai.com" },
              { icon: <Briefcase className="w-5 h-5" />, label: "Careers", value: "careers@eymaai.com", href: "mailto:careers@eymaai.com" },
              { icon: <MapPin className="w-5 h-5" />, label: "Studio", value: "Delhi, India 110025" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="card-hover block bg-cream rounded-2xl p-6 border border-border/60">
                <div className="flex items-start gap-4">
                  <span className="text-amber">{c.icon}</span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">{c.label}</p>
                    <p className="mt-1 font-display text-lg text-ink">{c.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            {done ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-10 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 grid place-items-center">
                  <Check className="w-7 h-7 text-emerald-700" />
                </div>
                <h2 className="mt-5 font-display text-3xl">Message received.</h2>
                <p className="mt-3 text-ink-soft">We'll be back to you within one business day at <span className="text-ink">{form.email}</span>.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="glass rounded-2xl p-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <FormInput label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <FormInput label="Company (optional)" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">Inquiry type</label>
                  <select value={form.inquiry_type} onChange={(e) => setForm({ ...form, inquiry_type: e.target.value })}
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-amber transition-colors">
                    <option value="">Select…</option>
                    {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">Message</label>
                  <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-amber transition-colors resize-none" />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <MagneticButton type="submit" variant="primary" size="lg" disabled={submitting || !valid} className="w-full">
                  {submitting ? "Sending…" : "Send message"}
                </MagneticButton>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-cream py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber-light/80">Partner with EYMA AI</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Bring us your hardest data problem.</h2>
            <p className="mt-5 text-cream/70 max-w-xl mx-auto">From pilots to multi-million-task pipelines — we scale quietly, accurately, and on schedule.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FormInput({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-amber transition-colors" />
    </div>
  );
}
