export const services = [
  {
    icon: "🧠",
    title: "RLHF Data Collection",
    desc: "Reinforcement Learning from Human Feedback at scale. Expert rankings, preference pairs, and reward modeling data that pushes frontier models forward.",
    tag: "Frontier",
    tagColor: "forest",
  },
  {
    icon: "✍️",
    title: "Prompt Engineering",
    desc: "Adversarial and reasoning prompts that probe the edges of model capability. Crafted by domain experts, calibrated for difficulty.",
    tag: "Adversarial",
    tagColor: "amber",
  },
  {
    icon: "🔍",
    title: "Hallucination Detection",
    desc: "Fact-grounded review pipelines that catch model fabrications before they ship. Cited, sourced, and reproducible.",
    tag: "Safety",
    tagColor: "forest",
  },
  {
    icon: "🛡️",
    title: "Red Teaming",
    desc: "Structured adversarial probes for safety, bias, and misuse. We document failure modes the way researchers actually need.",
    tag: "Security",
    tagColor: "amber",
  },
  {
    icon: "🪔",
    title: "Indic Language Data",
    desc: "Native fluency in Hindi, Tamil, Bengali, Telugu, Marathi and more. AI that finally speaks India properly.",
    tag: "Multilingual",
    tagColor: "forest",
  },
  {
    icon: "⚖️",
    title: "Expert Evaluation",
    desc: "Doctors, lawyers, mathematicians, and engineers grading AI outputs in their own field. The hardest, highest-signal judgments.",
    tag: "Expert",
    tagColor: "amber",
  },
];

export const values = [
  { icon: "◐", title: "Rigor over volume", desc: "We'd rather deliver a thousand expert evaluations than a million careless ones." },
  { icon: "✦", title: "Truth-first feedback", desc: "Honest critique beats flattering scores. AI improves only when humans push back." },
  { icon: "❖", title: "Craft as discipline", desc: "Annotation is a craft. We treat every label as a permanent contribution to the model." },
  { icon: "✕", title: "No hidden labor", desc: "Trainers are paid weekly, named, and credited internally. Dignity is non-negotiable." },
  { icon: "△", title: "Frontier or nothing", desc: "We work on problems that matter — reasoning, safety, multilinguality — not click-farm tasks." },
  { icon: "○", title: "Quiet excellence", desc: "We don't shout. The work compounds, the partnerships deepen, the models get smarter." },
];

export const trust = [
  { icon: "◇", label: "NDA-protected" },
  { icon: "₹", label: "Weekly payments" },
  { icon: "✓", label: "3-tier QC" },
  { icon: "✦", label: "Expert-vetted" },
  { icon: "◐", label: "Confidential & secure" },
];

export const testimonials = [
  { name: "Priya Sharma", role: "Research Lead, frontier AI lab", quote: "EYMA's evaluation quality is the highest we've seen from any vendor in India. Their STEM trainers actually understand the math." },
  { name: "Marcus Chen", role: "ML Engineer, US-based foundation model team", quote: "Three QC tiers and it shows. Their rejection rate on our weekly batches is consistently under 2%." },
  { name: "Dr. Anjali Verma", role: "AI Safety Researcher", quote: "Their red-teaming write-ups read like proper safety papers. Reproducible, well-structured, useful." },
  { name: "Rohan Kapoor", role: "Founder, Indic LLM startup", quote: "Finally a partner who treats Hindi and Tamil with the same seriousness as English. Game-changing for us." },
  { name: "Sara Ali", role: "Head of Data, AI startup", quote: "Weekly delivery, sharp communication, and the trainers actually care. That's a rare combination." },
  { name: "Vikram Iyer", role: "Director of Research", quote: "We've doubled our throughput with EYMA without losing a percentage point of accuracy. They scale with us." },
];

export const tickerItems = [
  "RLHF Data Collection", "Prompt Engineering", "Hallucination Detection", "Red Teaming",
  "Indic Language Data", "AI Safety", "Data Annotation", "Expert Evaluation",
];

export const heroPhrases = [
  "RLHF Training Data",
  "Prompt Engineering",
  "Indic Language AI",
  "Expert Evaluation",
  "AI Safety Testing",
];

export const stats = [
  { value: 500, suffix: "+", label: "Expert AI Trainers" },
  { value: 98, suffix: "%", label: "Accuracy SLA" },
  { value: 10, suffix: "+", label: "Domains Covered" },
  { value: 24, suffix: "hr", label: "Avg Turnaround" },
];

export const howSteps = [
  { n: "01", title: "Brief & calibrate", desc: "We co-design rubrics with your research team and run a paid pilot batch to align." },
  { n: "02", title: "Match expert trainers", desc: "From our 500+ vetted pool, we route tasks to people with proven domain expertise." },
  { n: "03", title: "3-tier quality control", desc: "Trainer → senior reviewer → QC lead. Disagreements adjudicated, not averaged away." },
  { n: "04", title: "Weekly delivery", desc: "Clean JSONL, full audit trail, calibration scores. Iterate on rubric or scale up." },
];

export const faqs = [
  { q: "What's your typical turnaround?", a: "Most projects deliver within 24–72 hours of brief sign-off. Pilot batches in 24 hours." },
  { q: "How do you ensure quality?", a: "Three independent review layers, rubric calibration sessions, and per-trainer accuracy tracking with continuous recalibration." },
  { q: "Can you handle confidential / NDA work?", a: "Yes. Every trainer signs a per-project NDA. Air-gapped review environments are available for sensitive workloads." },
  { q: "Which domains do you cover?", a: "STEM, code, legal, medical, finance, creative writing, and 12+ Indian languages. We vet new domain experts continuously." },
  { q: "How is pricing structured?", a: "Per-task with transparent rubric-tier pricing. Volume discounts kick in beyond 10K tasks/month. Custom enterprise terms available." },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "From ₹40k",
    period: "/ pilot",
    desc: "For teams validating a use case or rubric.",
    features: ["1–2 domains", "Up to 1,000 tasks", "2-tier QC", "Weekly batch delivery", "Email support"],
    cta: "Start a pilot",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "Custom",
    period: "/ month",
    desc: "Most teams shipping production models.",
    features: ["Up to 6 domains", "10K+ tasks / month", "3-tier QC + adjudication", "Daily delivery cadence", "Dedicated PM", "Slack channel"],
    cta: "Talk to us",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Bespoke",
    period: "",
    desc: "For frontier labs and regulated industries.",
    features: ["Unlimited domains", "Air-gapped environment", "Custom SLAs & DPA", "Onsite trainers available", "Quarterly research sync", "24/7 priority support"],
    cta: "Contact sales",
    highlighted: false,
  },
];
