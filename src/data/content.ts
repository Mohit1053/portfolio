/* ============================================================================
   PORTFOLIO CONTENT — single source of truth.
   Edit this file to update copy, add projects, tweak metrics, etc.
   Everything on the site is driven from the exports below.
   ============================================================================ */

export const profile = {
  name: 'Mohit',
  /** Short role line under the name */
  role: 'AI Product Manager · AI Engineer · Founder',
  /** Words that rotate in the animated hero headline */
  rotatingWords: [
    'ship production AI.',
    'move markets with data.',
    'turn ideas into products.',
    'lead teams that deliver.',
    'automate the impossible.',
  ],
  tagline:
    'I design, build and ship AI products end-to-end — and lead a team that can take on the parts I don’t. One partner for Product, Engineering and Data.',
  location: 'New Delhi / Gurgaon, India',
  email: '98765mohitkumar@gmail.com',
  phone: '+91 8851228350',
  phoneHref: 'tel:+918851228350',
  whatsapp: 'https://wa.me/918851228350',
  linkedin: 'https://www.linkedin.com/in/mohit1005',
  github: 'https://github.com/Mohit1053',
  resume: '/Mohit_Resume.pdf',
  availability: 'Open to freelance / agency work & senior roles',
  /** Optional headshot. Drop a square photo in public/ (e.g. '/me.jpg') and set the path here.
   *  Leave '' to show the gradient monogram fallback. */
  photo: '',
  /** Contact-form backend. Create a free form at https://formspree.io, paste its endpoint
   *  (e.g. 'https://formspree.io/f/xxxxxxxx') here, and submissions arrive in your inbox with
   *  no page reload. Leave '' to fall back to opening the visitor's email app (mailto). */
  formEndpoint: '',
} as const

export type NavItem = { label: string; href: string }
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

/* ----------------------------------------------------------------------------
   HERO STAT STRIP — 4 punchy proof points
   ---------------------------------------------------------------------------- */
export type Stat = { value: string; label: string }
export const heroStats: Stat[] = [
  { value: '20+', label: 'Products & projects led end-to-end' },
  { value: '36K+', label: 'Live AI voice calls shipped' },
  { value: '500K+', label: 'Automated actions run in production' },
  { value: '80%', label: 'Cost cut on flagship AI product' },
]

/* ----------------------------------------------------------------------------
   HERO "CURRENTLY SHIPPING" CONSOLE — keep this list current
   (state is the badge text; color is the dot/badge colour on the dark console)
   ---------------------------------------------------------------------------- */
export type ShipStatus = { name: string; state: string; meta: string; color: string }
export const currentlyShipping: ShipStatus[] = [
  { name: 'Campaign Voice Agents', state: 'live', meta: 'real subscriber calls', color: '#34d399' },
  { name: 'Newsroom AI-Copy Gate', state: 'shadow', meta: '≤1% false flags per scorer', color: '#22d3ee' },
  { name: 'R2C Research Platform', state: 'building', meta: '18 repos · 20+ contributors', color: '#7c5cff' },
  { name: 'Subscription Lead Engine', state: 'daily', meta: 'calibrated ranked lead list', color: '#fbbf24' },
]

/* ----------------------------------------------------------------------------
   CREDIBILITY BAND — places I've genuinely built & shipped (honest social proof)
   ---------------------------------------------------------------------------- */
export type Affiliation = { name: string; note: string }
export const affiliations: Affiliation[] = [
  { name: 'The Economic Times', note: 'Home-feed personalisation' },
  { name: 'Times Internet', note: 'Technical Product Manager' },
  { name: 'IIIT-Delhi', note: 'B.Tech CS + AI' },
  { name: 'Scrap Uncle', note: 'AI product' },
  { name: 'SBI Labs', note: 'Applied ML research' },
]

/* Moving tech marquee under the hero */
export const marqueeItems: string[] = [
  'LLMs',
  'RAG',
  'Agents',
  'Voice AI',
  'PyTorch',
  'LangChain',
  'FastAPI',
  'Computer Vision',
  'Quant ML',
  'GCP / Cloud Run',
  'Docker',
  'React',
  'Azure OpenAI',
  'Whisper',
  'MLflow',
  'BigQuery',
  'Product Strategy',
  'A/B Testing',
]

/* ----------------------------------------------------------------------------
   ABOUT
   ---------------------------------------------------------------------------- */
export const about = {
  eyebrow: 'Who I am',
  heading: 'A one-stop AI partner — product, engineering and data under one roof.',
  paragraphs: [
    'I’m Mohit — a Technical Product Manager at Times Internet (Economic Times), a builder, and a founder. I lead a cross-functional team of ~10 across AI, product and data, driving 20+ initiatives from first idea to production.',
    'On the side I run an independent AI studio: I take products end-to-end for founders and companies — scoping the problem, architecting the system, writing the code, shipping it to production, and measuring whether it actually moved the number. When a project needs more hands, my team plugs in.',
    'My edge is range. Most people are strong in one lane — product, or engineering, or data. I operate across all three, so nothing falls between the cracks. You get a strategist who can also read the model’s loss curve, and an engineer who cares about the business metric.',
  ],
  facts: [
    { k: 'Now', v: 'Technical PM @ Times Internet' },
    { k: 'Also', v: 'Founder — R2C & independent AI studio' },
    { k: 'Team', v: '~10 across AI · Product · Data' },
    { k: 'Education', v: 'B.Tech CS + AI, IIIT-Delhi' },
    { k: 'Based in', v: 'Delhi NCR (remote-friendly)' },
    { k: 'Domains', v: 'Fintech · Media · Voice · Automation' },
  ],
}

/* ----------------------------------------------------------------------------
   SERVICES / CAPABILITIES — the "one-stop" grid (client-facing)
   ---------------------------------------------------------------------------- */
export type Service = {
  id: string
  icon: string // maps to an icon in Services.tsx
  title: string
  blurb: string
  points: string[]
  tags: string[]
}
export const services: Service[] = [
  {
    id: 'ai-product',
    icon: 'compass',
    title: 'AI Product Management',
    blurb: 'From “what should we build?” to a shipped product with metrics that prove it worked.',
    points: [
      'Product strategy, roadmaps & PRDs',
      '0→1 discovery and scoping',
      'A/B testing, KPIs & AI governance',
      'Stakeholder & cross-functional delivery',
    ],
    tags: ['Strategy', 'Roadmaps', 'PRDs', 'A/B Testing', 'Analytics'],
  },
  {
    id: 'ai-engineering',
    icon: 'brain',
    title: 'AI / ML Engineering',
    blurb: 'LLM apps, RAG, agents and custom models — designed to run reliably in production, not just in a demo.',
    points: [
      'LLM apps, RAG & agentic systems',
      'Model training, fine-tuning & evaluation',
      'Prompt & retrieval pipelines',
      'Latency & cost optimisation',
    ],
    tags: ['LLMs', 'RAG', 'PyTorch', 'LangChain', 'Transformers'],
  },
  {
    id: 'voice-ai',
    icon: 'mic',
    title: 'Voice AI & Conversational',
    blurb: 'Real-time voice agents and calling platforms with sub-second, human-like response.',
    points: [
      'Streaming ASR + LLM + TTS pipelines',
      'Sub-second voice-to-voice latency',
      'Sales / support calling bots',
      'Multi-mode deployment',
    ],
    tags: ['Whisper', 'ASR', 'TTS', 'Realtime', 'Telephony'],
  },
  {
    id: 'data-quant',
    icon: 'trending',
    title: 'Data Science & Quant',
    blurb: 'Turning messy data into models, forecasts and dashboards teams actually trust and use.',
    points: [
      'Predictive modelling & forecasting',
      'Backtesting & walk-forward validation',
      'Feature engineering & analytics',
      'Decision dashboards',
    ],
    tags: ['Quant ML', 'Time-series', 'Backtesting', 'pandas', 'Tableau'],
  },
  {
    id: 'automation',
    icon: 'workflow',
    title: 'AI Automation & Agents',
    blurb: 'Automating the manual, repetitive and “impossible” with LLM-driven workflows and integrations.',
    points: [
      'Workflow & process automation',
      'Web automation at scale',
      'Document & data extraction',
      'Tool & API integrations',
    ],
    tags: ['Agents', 'Playwright', 'Selenium', 'GenAI', 'Integrations'],
  },
  {
    id: 'fullstack',
    icon: 'server',
    title: 'Full-Stack & Deployment',
    blurb: 'Everything around the model — the API, the UI, the cloud, the CI, the monitoring.',
    points: [
      'FastAPI backends & React frontends',
      'Docker, GCP / Cloud Run, BigQuery',
      'CI, testing & reproducibility',
      'Production monitoring',
    ],
    tags: ['FastAPI', 'React', 'Docker', 'GCP', 'CI/CD'],
  },
]

/* ----------------------------------------------------------------------------
   WHY WORK WITH ME — differentiators (trust)
   ---------------------------------------------------------------------------- */
export type Diff = { icon: string; title: string; desc: string }
export const differentiators: Diff[] = [
  {
    icon: 'target',
    title: 'End-to-end ownership',
    desc: 'One point of contact from idea to production. No hand-offs lost in translation between product, eng and data.',
  },
  {
    icon: 'rocket',
    title: 'Production, not demos',
    desc: 'My work runs live — 36K+ real calls, 500K+ automated actions, daily-used trading signals. I ship things that hold up.',
  },
  {
    icon: 'layers',
    title: 'Product + Engineering + Data',
    desc: 'A rare full-stack profile: strategy that’s technically grounded, and engineering that respects the business metric.',
  },
  {
    icon: 'gauge',
    title: 'Cost & latency obsessed',
    desc: 'I optimise for the numbers that matter — 80% cost cut and 74% latency cut on my flagship AI product.',
  },
  {
    icon: 'users',
    title: 'A team behind me',
    desc: 'Solo when it’s tight, a cross-functional team of ~10 when it needs to scale. I can staff the whole thing.',
  },
  {
    icon: 'shield',
    title: 'Reliable & responsible',
    desc: 'Evaluation frameworks, monitoring and AI governance baked in — so you can trust what goes live.',
  },
]

/* ----------------------------------------------------------------------------
   PROCESS — how engagements run (client trust)
   ---------------------------------------------------------------------------- */
export type Step = { n: string; title: string; desc: string }
export const process: Step[] = [
  { n: '01', title: 'Discover', desc: 'Understand the goal, users and constraints. Define what success actually looks like in numbers.' },
  { n: '02', title: 'Design', desc: 'Architect the solution and scope the smallest version that proves value. Agree on a plan.' },
  { n: '03', title: 'Build', desc: 'Ship fast in tight loops — working software, not slideware — with quality and cost in mind.' },
  { n: '04', title: 'Launch', desc: 'Deploy to production with monitoring, docs and hand-over. Make it live and stable.' },
  { n: '05', title: 'Measure & iterate', desc: 'Track the metric, learn, and improve. Keep optimising until the number moves.' },
]

/* ----------------------------------------------------------------------------
   IMPACT / PROOF METRICS
   ---------------------------------------------------------------------------- */
export type Metric = { value: string; label: string; sub: string }
export const impactMetrics: Metric[] = [
  { value: '36K+', label: 'Live AI calls', sub: 'handled by a voice platform I shipped' },
  { value: '<700ms', label: 'Voice latency', sub: 'human-like, voice-to-voice response' },
  { value: '3×', label: 'Outbound volume', sub: 'lift from AI calling automation' },
  { value: '500K+', label: 'Automations run', sub: 'in production across products' },
  { value: '80%', label: 'Cost reduced', sub: 'on flagship personalisation AI' },
  { value: '74%', label: 'Latency reduced', sub: 'on the same product' },
  { value: '1.03', label: 'Sharpe ratio', sub: '68% win-rate, 22-fold backtest' },
  { value: '40%', label: 'Manual effort cut', sub: 'via AI automation modules' },
]

/* ----------------------------------------------------------------------------
   EXPERIENCE — timeline
   ---------------------------------------------------------------------------- */
export type Experience = {
  role: string
  org: string
  period: string
  location?: string
  current?: boolean
  summary: string
  points: string[]
  tags: string[]
}
export const experiences: Experience[] = [
  {
    role: 'Technical Product Manager',
    org: 'Times Internet (Economic Times)',
    period: 'Jul 2025 — Present',
    location: 'India · India-scale platform',
    current: true,
    summary:
      'Lead a cross-functional team of ~10 (AI, product & data) across 20+ initiatives, owning AI products from strategy to production.',
    points: [
      'Own the AI-powered home-feed personalisation product — LLM content enrichment, scoring and user-affinity ranking — delivering an 80% per-article cost cut and 74% latency reduction across user cohorts.',
      'Architected and shipped a microservices voice-AI calling platform (streaming ASR + LLM + TTS) to production: 36K+ live calls at <700ms latency, tripling outbound volume. Now lead the live campaign voice agents and their rebuild into one shared runtime.',
      'Built a newsroom AI-copy detection gate (two calibrated detectors at ≤1% false flags each, released in shadow mode) and the subscription-propensity model behind the daily marketing lead list.',
      'Lead the team shipping AI video (micro-dramas, masterclass clips, ad kits), a conversational ad-creative studio, a local-LLM event chatbot and creator-video verification.',
      'Built an agentic-RAG market-intelligence platform over a 131K-record backtest, adopted daily by the internal trading desk, and set up AI evaluation, monitoring and governance across shipped features.',
    ],
    tags: ['Product Strategy', 'LLMs', 'Voice AI', 'Agentic RAG', 'Team Leadership'],
  },
  {
    role: 'Founder & AI Product Builder',
    org: 'Independent AI Studio — R2C & client work',
    period: '2024 — Present',
    location: 'Remote',
    current: true,
    summary:
      'Run an independent AI studio delivering production AI products for clients — freelance and agency engagements, end-to-end.',
    points: [
      'Founded R2C (Research-to-Commercialisation) and lead a 20+ contributor team building a multi-service platform that turns research papers into commercial opportunities — ingestion, patent and industry-fit agents, readiness scoring, due diligence and investor pitches. Built its social distribution engine myself.',
      'Deliver AI engagements for clients — from a 159-opportunity AI assessment and leadership training to RFQ automation, a legal case-file pipeline and a live travel website (anonymised under Client work).',
      'Ship GenAI products such as document-extraction pipelines, branded PDF automation and RAG assistants on GCP / Cloud Run, and bring in a trusted cross-functional team when a project needs more than one builder.',
    ],
    tags: ['Founder', 'GenAI', 'Full-Stack', 'Client Delivery', 'AI Strategy', 'GCP'],
  },
  {
    role: 'ML Engineering Intern',
    org: 'Scrap Uncle',
    period: 'May 2025 — Jul 2025',
    summary: 'Built multimodal AI for a circular-economy startup, replacing manual inspection.',
    points: [
      'Engineered a multimodal damage-assessment pipeline (video frames + text descriptions) to classify product condition at scale.',
      'Shipped a real-time AI voice chatbot (streaming ASR + LLM + TTS) that cut support response time.',
    ],
    tags: ['Multimodal', 'Computer Vision', 'Voice AI'],
  },
  {
    role: 'Research Intern',
    org: 'SBI Labs, IIIT-Delhi',
    period: 'May 2023 — May 2024',
    location: 'Guide: Dr. Anubha Gupta',
    summary: 'Clinical ML research on survival analysis.',
    points: [
      'Developed and benchmarked 6+ ML/DL models for survival analysis on the Framingham Heart Study dataset (Cox PH, Random Survival Forest, DeepSurv, Graph CNNs, DeepHit, ADA Boost).',
    ],
    tags: ['Survival Analysis', 'Deep Learning', 'Research'],
  },
  {
    role: 'Research Intern',
    org: 'ECE Labs, IIIT-Delhi',
    period: 'May 2023 — Jul 2023',
    location: 'Guide: Dr. Rahul Gupta',
    summary: 'NLP / LLM research.',
    points: [
      'Built an NLP-powered Greeting Bot using LLM-based intent classification, reaching 85% intent-recognition accuracy through iterative testing.',
    ],
    tags: ['NLP', 'LLMs'],
  },
]

/* ----------------------------------------------------------------------------
   PROJECTS
   category values also drive the filter chips (order preserved)
   ---------------------------------------------------------------------------- */
export const projectCategories = [
  'All',
  'AI Products',
  'Voice AI',
  'Generative Media',
  'Quant & Finance',
  'NLP & RAG',
  'Computer Vision',
  'Automation',
  'Research',
] as const
export type ProjectCategory = (typeof projectCategories)[number]

export type ProjectLink = { label: string; href: string }
export type Project = {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'All'>
  year: string
  tagline: string
  description: string
  highlights: string[]
  metrics?: Stat[]
  tags: string[]
  links?: ProjectLink[]
  featured?: boolean
  /** Optional screenshot/thumbnail. Drop an image in public/ (e.g. '/shots/quant-lab.png',
   *  16:9 works best) and set the path here to show it on the card + in the detail modal.
   *  Omit to keep the clean icon-only card. */
  image?: string
}

export const projects: Project[] = [
  {
    id: 'et-personalisation',
    title: 'ET Home-Page Personalisation',
    category: 'AI Products',
    year: '2026',
    featured: true,
    tagline: 'AI feed that personalises a national news home page in real time.',
    description:
      'Owned the AI personalisation product for Economic Times: a pipeline that enriches every article with LLMs, scores it, models per-user affinity and assembles a personalised home feed — replacing an editorial-only front page.',
    highlights: [
      'LLM content enrichment → multi-component scoring → user-affinity ranking → templated delivery.',
      '80% reduction in per-article processing cost.',
      '74% cut in LLM card latency.',
      'Rolling out across multiple user cohorts.',
    ],
    metrics: [
      { value: '80%', label: 'Cost cut' },
      { value: '74%', label: 'Latency cut' },
    ],
    tags: ['Azure OpenAI', 'LLMs', 'Personalisation', 'Spark', 'Ranking'],
  },
  {
    id: 'ai-caller',
    title: 'Voice AI Calling Platform',
    category: 'Voice AI',
    year: '2026',
    featured: true,
    tagline: 'Enterprise voice agent that makes and handles sales calls, live.',
    description:
      'A microservices voice-AI platform combining streaming speech recognition, an LLM dialogue engine and text-to-speech, orchestrated for natural, sub-second conversation — deployed across multiple environments.',
    highlights: [
      'Streaming ASR + LLM dialogue + TTS on GPU inference.',
      '36K+ real sales calls handled in production.',
      '<700ms voice-to-voice latency for natural conversation.',
      '3× lift in outbound call volume.',
    ],
    metrics: [
      { value: '36K+', label: 'Live calls' },
      { value: '<700ms', label: 'Latency' },
      { value: '3×', label: 'Volume' },
    ],
    tags: ['Whisper', 'TTS', 'LLM', 'Realtime', 'Microservices'],
  },
  {
    id: 'r2c',
    title: 'R2C — Research-to-Commercialisation',
    category: 'AI Products',
    year: '2024–26',
    featured: true,
    tagline: 'A multi-service AI platform that turns research papers into commercial opportunities.',
    description:
      'A platform I founded and lead. Papers are ingested into structured data, enriched by specialist agents — patent awareness, industry fit, gap analysis, commercial-readiness scoring — and turned into investor pitches, licensee due diligence and recommendations. Built by a team of 20+ contributors.',
    highlights: [
      '18 active repos spanning ingestion, enrichment agents, scoring, outputs and the web app.',
      'I set the product direction and built the social distribution engine myself.',
      'Investor pitches pass a 3-tier quality gate: schema validation, factual-grounding checks and an LLM judge.',
    ],
    metrics: [
      { value: '18', label: 'Active repos' },
      { value: '20+', label: 'Contributors' },
    ],
    tags: ['LLM Agents', 'LangGraph', 'PostgreSQL', 'React 19', 'Recommender Systems'],
    links: [{ label: 'Read the case study', href: '#case-study' }],
  },
  {
    id: 'editorial-gate',
    title: 'Newsroom AI-Copy Detection Gate',
    category: 'NLP & RAG',
    year: '2026',
    featured: true,
    tagline: 'Flags undeclared AI-written copy before it is published.',
    description:
      'A pre-publication gate for a national newsroom. It reads only the final submitted text — no keystroke or activity tracking — and routes undeclared AI-written copy, chatbot leftovers and hidden-character evasion to an editor with evidence. Writers see reasons, never scores.',
    highlights: [
      'Two zero-shot detectors in union, each calibrated to ≤1% false flags on pre-ChatGPT staff copy (≤2% combined).',
      'Character-forensics rules catch look-alike and hidden-character evasion.',
      'Thresholds are pinned to the exact scorer and text-prep version, so calibration cannot silently drift.',
      'Fail-closed data egress: unpublished copy never leaves without a zero-retention contract.',
      'Released in shadow mode before any enforcement.',
    ],
    metrics: [
      { value: '≤1%', label: 'False flags / scorer' },
      { value: '≤2%', label: 'Combined' },
    ],
    tags: ['NLP', 'AI Detection', 'Calibration', 'FastAPI', 'Responsible AI'],
  },
  {
    id: 'voice-runtime',
    title: 'Campaign Voice Agents & Shared Runtime',
    category: 'Voice AI',
    year: '2026',
    tagline: 'Live outbound voice agents — being rebuilt so a new campaign is data, not code.',
    description:
      'I lead the team running live voice agents for subscription win-back, wellness and event campaigns, and their rebuild (now in staging) into one shared runtime: a new campaign is a versioned script plus a knowledge snapshot, published as an immutable agent version — no new codebase.',
    highlights: [
      'Live agents handle real subscriber calls, answering objections from a curated knowledge base.',
      'Speech runs CPU-only, in memory; voices are pre-rendered offline, so live calls make no TTS API calls.',
      'Shared-runtime catalogue: 3 products × 8 campaign agents, 5 written from scratch for new use-cases.',
      '136 automated tests, a control API, a real-time call bridge and CRM sync.',
    ],
    metrics: [
      { value: '3', label: 'Live campaign bots' },
      { value: '8', label: 'Agents in new runtime' },
    ],
    tags: ['Voice AI', 'Speech-to-Text', 'TTS', 'PostgreSQL', 'Platform'],
  },
  {
    id: 'propensity',
    title: 'Subscription Propensity & Lead Engine',
    category: 'AI Products',
    year: '2026',
    tagline: 'Ranks engaged readers by likelihood to subscribe — one daily lead list for marketing.',
    description:
      'A production ML package for a premium news subscription. It scores identified, engaged users and emits one daily ranked lead list across acquisition and win-back. It drives real marketing spend, so correctness is enforced by code rather than assumed.',
    highlights: [
      'Two calibrated LightGBM engines — never-subscribed and lapsed — interleaved into one ranked list.',
      'Leakage-as-code and a train/serve parity hash, both asserted at serve time.',
      'Promotion gate: only a PASS on an AUC confidence floor, calibration and leakage checks can go live.',
      'Versioned model registry with atomic promote and rollback.',
    ],
    tags: ['LightGBM', 'scikit-learn', 'Calibration', 'MLOps', 'Python'],
  },
  {
    id: 'cohortx',
    title: 'CohortX Challenge — 3rd Place',
    category: 'NLP & RAG',
    year: '2026',
    featured: true,
    tagline: 'Clinical-trial eligibility criteria → structured semantic triples with an LLM.',
    description:
      'Turn the free-text eligibility criteria of a clinical trial into Subject–relation–Object triples. Retrieval-augmented few-shot prompting, no fine-tuning: each criterion gets four worked examples chosen by Maximal Marginal Relevance over TF-IDF, plus a fixed schema and a relation vocabulary distilled from the training data. Runs entirely on CPU.',
    highlights: [
      '3rd of 9 validated teams — 0.82 public / 0.75 private leaderboard.',
      'Rule-based baseline 0.64 → fixed 2-shot 0.76 → retrieval 0.81 → MMR 0.82.',
      '~160 scored submissions across 45 configurations, with every ablation recorded.',
      'MMR beat plain top-k by trading a little similarity for diverse annotation styles.',
    ],
    metrics: [
      { value: '3rd', label: 'of 9 teams' },
      { value: '0.82', label: 'Public LB' },
    ],
    tags: ['LLMs', 'Few-shot', 'Retrieval', 'Information Extraction', 'Healthcare NLP'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/cohortx-task-2' }],
  },
  {
    id: 'quant-lab',
    title: 'Quant Research Lab',
    category: 'Quant & Finance',
    year: '2025–26',
    featured: true,
    tagline: 'End-to-end deep-learning research stack for 1,500+ Indian equities.',
    description:
      'A reproducible quant-research platform benchmarking Transformer, Temporal Fusion Transformer and Ridge models with multi-task learning, walk-forward validation and a full experiment-tracking + CI setup.',
    highlights: [
      'Transformer + TFT + Ridge baselines with a multi-task loss.',
      '22-fold walk-forward backtest → 1.03 Sharpe, 68% win-rate.',
      'Hydra configs + MLflow registry + 496-test CI for one-click retraining.',
    ],
    metrics: [
      { value: '1.03', label: 'Sharpe' },
      { value: '68%', label: 'Win-rate' },
      { value: '1.5K+', label: 'Equities' },
    ],
    tags: ['PyTorch', 'Transformers', 'TFT', 'MLflow', 'Backtesting'],
  },
  {
    id: 'ai-video',
    title: 'AI Video Studio',
    category: 'Generative Media',
    year: '2026',
    featured: true,
    tagline: 'AI micro-dramas, masterclass clips and ad creatives — on one shared engine.',
    description:
      'I lead the AI video team behind Hinglish micro-dramas, a health-event video line, short product marketing videos, masterclass clips and ad creative kits — all built on one layered engine where models are swappable through config and a new project is just a folder. I built the masterclass clipper.',
    highlights: [
      'Masterclass clipper (my build): 7–8h recordings → share-ready 30–90s clips at ~$4–6 per source video.',
      'Transcription → multi-LLM arc analysis → face-tracking reframe → motion-graphics composition.',
      'Engine registry: no stage names a vendor, so swapping a model is a one-line config change.',
      'GPU-heavy stages are offloaded to cloud GPUs; everything else runs from a laptop.',
    ],
    metrics: [
      { value: '$4–6', label: 'Per 8h video' },
      { value: '30–90s', label: 'Clip length' },
    ],
    tags: ['Video Generation', 'Speech-to-Text', 'MediaPipe', 'LLMs', 'Python'],
  },
  {
    id: 'creative-studio',
    title: 'AI Ad-Creative Studio',
    category: 'Generative Media',
    year: '2026',
    tagline: 'A conversational studio over an automated ad-creative pipeline.',
    description:
      'The campaign studio that makes an automated creative pipeline usable by marketers. Two reference images, an optional logo and a brief go in; a reviewed 1:1 poster plus 9:16, 4:5 and 1.91:1 variants come out — through a conversation, not a form.',
    highlights: [
      'Each creative is a thread: prompt, plain-language progress, results and follow-up edits in one place.',
      'An edit loop refines approved posters without starting over.',
      'Spend guardrails: uploads are checked by a vision pass before any paid generation.',
      'The pipeline underneath runs an AI quality gate at every step — no model grades its own work — with one human approval.',
    ],
    tags: ['React', 'Express', 'PostgreSQL', 'Socket.IO', 'GenAI'],
  },
  {
    id: 'market-intel',
    title: 'Market Intelligence Platform',
    category: 'Quant & Finance',
    year: '2026',
    featured: true,
    tagline: 'Agentic-RAG market analysis for daily trading-desk decisions.',
    description:
      'An enterprise Indian-market intelligence system fusing 14-metric fundamental scoring, 26+ technical indicators and NLP sentiment behind an agentic-RAG layer, served as a daily-signal API and adopted by an internal desk.',
    highlights: [
      'Agentic RAG over fundamentals, technicals and sentiment.',
      '131K-record NIFTY backtest with smart rebalancing.',
      'Containerised FastAPI daily-signal service.',
    ],
    metrics: [
      { value: '131K', label: 'Backtest records' },
      { value: '14+', label: 'Fundamental metrics' },
    ],
    tags: ['Agentic RAG', 'LangChain', 'FastAPI', 'Finance', 'NLP'],
  },
  {
    id: 'finance-rag',
    title: 'Finance Agentic RAG',
    category: 'NLP & RAG',
    year: '2026',
    tagline: 'Multi-agent RAG for financial documents, designed to verify every number.',
    description:
      'A finance-focused retrieval-augmented system designed around accuracy and traceability: a five-agent chain plans, retrieves, reasons, verifies and reports, cross-checking every numerical value against its source document and keeping a full audit trail.',
    highlights: [
      'Planner → Retriever → Reasoning → Verifier → Reporter agent chain.',
      'Multi-modal ingestion: text, tables, charts and scanned images.',
      'A knowledge graph of financial entities and their relationships.',
      'Indian-market context built in: SEBI, RBI, NSE/BSE and Ind-AS.',
    ],
    tags: ['Agentic RAG', 'Multi-Agent', 'Knowledge Graph', 'Finance', 'Python'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/finance-rag-system' }],
  },
  {
    id: 'numerai',
    title: 'Numerai Tournament Pipeline',
    category: 'Quant & Finance',
    year: '2026',
    tagline: 'A fully automated pipeline competing in the Numerai stock-market tournament.',
    description:
      'An end-to-end pipeline for the Numerai hedge-fund tournament: ensembles trained on cloud GPUs and synced to an always-on server that submits predictions automatically each round and retrains weekly, with a fallback model that runs on Numerai’s own infrastructure.',
    highlights: [
      '4-target ensemble (30K trees on the full dataset) trained on cloud GPUs.',
      'Feature neutralisation to reduce exposure to any single feature.',
      'Automated submissions every round, weekly retraining and health monitoring.',
      'A model-upload failsafe that runs on Numerai’s infrastructure.',
    ],
    tags: ['Gradient Boosting', 'Ensembles', 'Feature Neutralisation', 'MLOps', 'Quant'],
  },
  {
    id: 'social-engine',
    title: 'R2C Social Distribution Engine',
    category: 'Automation',
    year: '2026',
    tagline: 'Trend signals in, cited content out — published, measured and re-weighted automatically.',
    description:
      'An end-to-end research-to-content loop I built for R2C: it ingests signals, ranks topics by momentum, writes persona-matched content along a marketing funnel with cited sources, publishes across platforms and feeds engagement back into what it writes next.',
    highlights: [
      'Signals from Reddit, arXiv, YouTube and Google Trends, clustered and ranked by momentum.',
      'Funnel-stage (AIDA) content with persona matching and source-cited evidence.',
      'Publishes to Reddit, LinkedIn and X with per-platform hashtags, pre-flight checks and staggered posting.',
      'Engagement tracking and UTM attribution feed back into the strategy.',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'Gemini', 'React', 'Docker'],
  },
  {
    id: 'marathon-chatbot',
    title: 'Event Pre-Sale Chatbot on a Local LLM',
    category: 'NLP & RAG',
    year: '2026',
    tagline: 'A grounded event chatbot with no cloud LLM — and a deterministic fallback.',
    description:
      'I led the team behind a pre-sale chatbot for a city-marathon event. It answers from a living knowledge doc that is re-indexed on every change, generates on a small model running on the host itself, verifies every answer against its source passage and captures leads.',
    highlights: [
      'Embedding retrieval with a measured similarity floor as the scope gate.',
      'Generation on a ~1B-parameter local model — no cloud LLM.',
      'Every generated answer is verified against the passage it came from.',
      'A deterministic BM25 + intent fallback whenever the model is busy, slow or down.',
    ],
    tags: ['RAG', 'pgvector', 'Local LLM', 'BM25', 'FastAPI'],
  },
  {
    id: 'creator-verification',
    title: 'Creator Video Verification',
    category: 'Computer Vision',
    year: '2026',
    tagline: 'Approves or rejects creator videos against a fixed rulebook — fail-closed.',
    description:
      'I led the team behind an automated check for a creators programme: it extracts everything said and everything shown in a video, tests both against a fixed rule set and returns approved or rejected — nothing in between.',
    highlights: [
      'Speech-to-text and one-frame-per-second OCR extracted concurrently, then analysed in parallel.',
      'First rejection wins — the other analysis is cancelled, but both contents are still recorded.',
      'Unable to check is not a verdict: any extraction failure raises, so nothing unreviewed is approved.',
    ],
    tags: ['Speech-to-Text', 'OCR', 'ffmpeg', 'Content Moderation', 'Python'],
  },
  {
    id: 'hodophile',
    title: 'Hodophile Voucher Pipeline',
    category: 'Automation',
    year: '2026',
    featured: true,
    tagline: 'GenAI pipeline that turns messy travel docs into branded vouchers.',
    description:
      'A production GenAI service that extracts structured hotel/flight data from mixed PDF/Excel/Word inputs, enriches it, and renders branded PDF vouchers — deployed on GCP with a data warehouse and tiered auth.',
    highlights: [
      'Structured extraction from multi-format documents via Gemini.',
      'Branded PDF rendering with headless Chromium.',
      'Deployed on Cloud Run with a BigQuery warehouse.',
    ],
    tags: ['Gemini', 'FastAPI', 'Playwright', 'Cloud Run', 'BigQuery'],
  },
  {
    id: 'cement-rag',
    title: 'Cement-Concall RAG',
    category: 'NLP & RAG',
    year: '2026',
    tagline: 'RAG assistant over cement-sector earnings calls for analysts.',
    description:
      'A retrieval-augmented system over earnings-call transcripts that retrieves and structures financial guidance signals — capex, margins, outlook — for equity-research workflows.',
    highlights: [
      'Vector retrieval with ChromaDB + LangChain orchestration.',
      'Structured extraction of guidance signals from calls.',
    ],
    tags: ['LangChain', 'ChromaDB', 'RAG', 'Finance'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/Cement-Concall-RAG' }],
  },
  {
    id: 'classify-image',
    title: 'Image Classification API',
    category: 'Computer Vision',
    year: '2026',
    tagline: 'FastAPI service for image classification & object detection.',
    description:
      'A deployable REST API that runs an ensemble of CLIP, BLIP and DETR for image classification, tagging and object detection — packaged for one-click client deployment.',
    highlights: [
      'CLIP + BLIP + DETR ensemble behind one API.',
      'Dockerised for portable deployment.',
    ],
    tags: ['FastAPI', 'CLIP', 'BLIP', 'DETR', 'PyTorch'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/classify-image-objects' }],
  },
  {
    id: 'web-automation',
    title: 'Web Automation Framework',
    category: 'Automation',
    year: '2026',
    tagline: 'Stealth browser automation that ran 500K+ live submissions.',
    description:
      'A production automation framework combining stealth browser control, fingerprint handling, LLM-generated content and IP rotation to run large-scale form and workflow automation reliably.',
    highlights: [
      'Stealth browser control with anti-detection handling.',
      'LLM-generated content + IP rotation at scale.',
      '500K+ live submissions executed.',
    ],
    metrics: [{ value: '500K+', label: 'Submissions' }],
    tags: ['Selenium', 'Playwright', 'LLM', 'Automation'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/web-automation-framework' }],
  },
  {
    id: 'multi-llm',
    title: 'Multi-LLM Content Pipeline',
    category: 'Automation',
    year: '2026',
    tagline: 'Orchestrates many LLMs for bulk, high-quality generation.',
    description:
      'A multi-platform LLM orchestration system for bulk text generation, combining local GPU inference with distributed cloud compute to generate content at volume and low cost.',
    highlights: [
      'Local GPU + distributed cloud orchestration.',
      'Bulk generation with quality controls.',
    ],
    tags: ['LLM Orchestration', 'Qwen', 'Content'],
  },
  {
    id: 'fundamental-indicators',
    title: 'Fundamental Indicators Toolkit',
    category: 'Quant & Finance',
    year: '2025',
    tagline: 'Scoring & analysis toolkit for Indian equities.',
    description:
      'A professional-grade toolkit computing a 14-metric fundamental score, 26+ technical indicators and 35+ cyclical pattern detectors, with bulk NIFTY50/500 analysis and Excel report generation.',
    highlights: [
      '14-metric weighted scoring + 26+ technical indicators.',
      'Bulk NIFTY50/500 analysis with automated Excel reports.',
    ],
    tags: ['Python', 'pandas', 'Technical Analysis', 'Equity Research'],
  },
  {
    id: 'space-debris',
    title: 'Mass Estimation of Space Debris',
    category: 'Research',
    year: '2025',
    tagline: 'Vision-plus-physics model estimating the mass of orbital debris.',
    description:
      'A hybrid vision + physics model predicting the mass of sub-50cm space debris from imagery, to improve orbital-debris tracking — trained on a 15k-image dataset.',
    highlights: [
      '±12% MAE on a 15k-image dataset.',
      'ONNX + CUDA-optimised inference.',
    ],
    metrics: [{ value: '±12%', label: 'MAE' }],
    tags: ['PyTorch', 'ResNet-50', 'ONNX', 'CUDA'],
  },
  {
    id: 'numeral-lm',
    title: 'Numeral-Aware Language Model',
    category: 'Research',
    year: '2023',
    tagline: 'A BERT variant that actually understands numbers.',
    description:
      'A BERT variant improving numeral understanding in text, with quantisation applied to keep inference fast enough for deployment.',
    highlights: [
      '+9 F1 on the NumGLUE benchmark.',
      '22% inference-time reduction via quantisation.',
    ],
    metrics: [{ value: '+9 F1', label: 'NumGLUE' }],
    tags: ['BERT', 'NLP', 'ONNX', 'Quantisation'],
  },
]

/* ----------------------------------------------------------------------------
   R2C FOUNDER CASE STUDY — the flagship section under the project grid
   ---------------------------------------------------------------------------- */
export type CaseStage = { step: string; title: string; desc: string; parts: string[] }
export const r2cCaseStudy = {
  title: 'R2C — from research paper to',
  titleAccent: 'commercial opportunity',
  lead: 'Most research never leaves the paper it is published in. R2C reads a paper the way a technology-transfer office would — what is it, who could use it, how ready is it, what is missing — and turns the answer into something an industry partner or investor can act on.',
  stats: [
    { value: '18', label: 'Active repos' },
    { value: '20+', label: 'Contributors' },
    { value: '0–100', label: 'Readiness score' },
    { value: '2024', label: 'Founded' },
  ] as Stat[],
  stages: [
    {
      step: '01',
      title: 'Ingest',
      desc: 'PDF papers become structured metadata, a hierarchical section index and pre-generated Q&A.',
      parts: ['Ingestion pipeline', 'A/B-tested extraction'],
    },
    {
      step: '02',
      title: 'Enrich',
      desc: 'Specialist agents read the stored paper: patent and IP awareness, industry fit and concrete use-cases, weakest-link gaps.',
      parts: ['IP / patent agent', 'Industry fit', 'Gap analysis', 'Knowledge graph'],
    },
    {
      step: '03',
      title: 'Score',
      desc: 'A 0–100 Commercial Readiness Score fusing technology, manufacturing, market and commercial readiness pillars.',
      parts: ['TRL', 'MRL', 'Market', 'Commercial'],
    },
    {
      step: '04',
      title: 'Act',
      desc: 'Investor-ready pitches behind a 3-tier quality gate, automated due diligence on prospective licensees, and recommendations.',
      parts: ['Pitch generation', 'Due diligence', 'Two-tower recommender'],
    },
    {
      step: '05',
      title: 'Reach',
      desc: 'A web app and backend-for-frontend for researchers and partners, plus a social engine that publishes findings.',
      parts: ['Web app + BFF', 'Social engine'],
    },
  ] as CaseStage[],
  role: [
    'Founded R2C and own its product direction and roadmap.',
    'Lead a team of 20+ contributors across 18 active repos.',
    'Built the social distribution engine end to end, and contribute to the web app and core platform.',
  ],
  tech: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'MongoDB', 'FAISS', 'React 19', 'TypeScript', 'Tailwind v4'],
}

/* ----------------------------------------------------------------------------
   CLIENT WORK — anonymised engagements delivered through the independent AI studio.
   Keep client names out unless a client has agreed to be named.
   ---------------------------------------------------------------------------- */
export type ClientEngagement = { sector: string; title: string; summary: string; tags: string[] }
export const clientEngagements: ClientEngagement[] = [
  {
    sector: 'Industrial B2B',
    title: 'AI-assisted RFQ processing',
    summary:
      'Built AI-assisted request-for-quote processing, run through daily stand-ups toward a phased go-live, and supported deployment of the client’s sales tooling.',
    tags: ['Document AI', 'Automation', 'Delivery'],
  },
  {
    sector: 'Legal services',
    title: 'Case-file intelligence pipeline',
    summary:
      'An ingestion and case-analysis pipeline over a 41,806-file legal archive (38 GB) — SFTP extraction, a documented data model and runbooks.',
    tags: ['Data Engineering', 'Document AI', 'Legal'],
  },
  {
    sector: 'Multi-business group',
    title: 'AI & automation opportunity assessment',
    summary:
      '159 AI opportunities mapped across 11 functions, a top 10 with business cases and a roadmap covering training and governance — plus an “AI Demystified” session for leadership.',
    tags: ['AI Strategy', 'Consulting', 'Training'],
  },
  {
    sector: 'Travel-led startup',
    title: 'Website launch & technical roadmap',
    summary:
      'Built and launched the public travel website, and wrote the staged technical proposals from MVP through Phase 2.',
    tags: ['Web', 'Product Roadmap', 'Launch'],
  },
  {
    sector: 'MEP engineering firm',
    title: 'Engineering data & dashboards',
    summary:
      'Normalised scattered engineering and project trackers into clean data and a single dashboard, and restructured the project document server.',
    tags: ['Data', 'Dashboards', 'Operations'],
  },
]

/* ----------------------------------------------------------------------------
   SKILLS
   ---------------------------------------------------------------------------- */
export type SkillGroup = { group: string; icon: string; items: string[] }
export const skillGroups: SkillGroup[] = [
  {
    group: 'Languages',
    icon: 'code',
    items: ['Python', 'TypeScript', 'SQL', 'Java', 'C++', 'C'],
  },
  {
    group: 'AI / ML',
    icon: 'brain',
    items: [
      'Deep Learning',
      'NLP',
      'Large Language Models',
      'RAG',
      'Agentic Systems',
      'Computer Vision',
      'Voice AI',
      'Reinforcement Learning',
      'Multi-task Learning',
      'Statistical ML',
    ],
  },
  {
    group: 'Frameworks & Tools',
    icon: 'wrench',
    items: [
      'PyTorch',
      'LangChain',
      'Transformers',
      'FastAPI',
      'Whisper',
      'ChromaDB',
      'MLflow',
      'Optuna',
      'ONNX',
      'CUDA',
      'XGBoost',
      'React',
    ],
  },
  {
    group: 'Data & Quant',
    icon: 'trending',
    items: ['pandas', 'NumPy', 'Backtesting', 'Feature Engineering', 'Time-series', 'Tableau', 'QuickSight'],
  },
  {
    group: 'Product',
    icon: 'compass',
    items: ['Product Strategy', 'Roadmapping', 'PRDs', 'A/B Testing', 'Agile / Scrum', 'Stakeholder Mgmt', 'KPI Tracking', 'AI Governance'],
  },
  {
    group: 'Cloud & Infra',
    icon: 'server',
    items: ['Docker', 'GCP', 'Cloud Run', 'BigQuery', 'Firebase', 'REST APIs', 'CI/CD', 'Git'],
  },
]

/* ----------------------------------------------------------------------------
   EDUCATION / CERTS / LEADERSHIP
   ---------------------------------------------------------------------------- */
export type Education = { school: string; degree: string; period: string; detail?: string }
export const education: Education[] = [
  {
    school: 'IIIT-Delhi',
    degree: 'B.Tech, Computer Science & Artificial Intelligence',
    period: '2021 — 2025',
    detail: 'Minor in Entrepreneurship',
  },
  {
    school: 'Modern Child Public School',
    degree: 'CBSE Senior Secondary (Class XII)',
    period: '2021',
  },
]

export type Certification = { name: string; issuer: string; year: string; url?: string }
export const certifications: Certification[] = [
  {
    name: 'GPU Programming Specialization',
    issuer: 'Coursera',
    year: '2024',
  },
]

export const leadership: string[] = [
  'Technical Secretary — Student Council, IIIT-Delhi',
  'Founder — CyFuse (Tech Club)',
  'Organiser — AI Summer School',
  'Organiser — E-Summit x RIISE (Research & Entrepreneurship Fest)',
  'Mentor & Coordinator — Teach Like Friend',
  'Organiser — MTech/PhD & B.Tech Induction',
  'Coordinator — Summer Camp for underprivileged students',
  'Organiser — Odyssey (Cultural Fest) & Esya (Technical Fest)',
]

/* ----------------------------------------------------------------------------
   FAQ — engagement / trust
   ---------------------------------------------------------------------------- */
export type Faq = { q: string; a: string }
export const faqs: Faq[] = [
  {
    q: 'Do you work solo or with a team?',
    a: 'Both. For focused work I build directly. For bigger scope I bring in a trusted cross-functional team of ~10 across AI, product and data — so I can own the whole delivery, not just a slice.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'Project-based builds, monthly retainers, fractional AI-PM / advisory, or full-time roles. Whatever fits — we agree on scope and success metrics upfront.',
  },
  {
    q: 'Can you take something from idea to production?',
    a: 'Yes — that’s the whole point. Strategy, architecture, code, deployment, monitoring and iteration. You don’t need to assemble a separate team for each stage.',
  },
  {
    q: 'Which domains do you know best?',
    a: 'Fintech & markets, media & personalisation, voice AI, and AI automation. But the underlying AI/product skills transfer across industries.',
  },
]

/* ----------------------------------------------------------------------------
   TESTIMONIALS  ⚠️  PLACEHOLDERS — replace with REAL LinkedIn recommendations /
   client quotes before sharing widely. Delete an entry to remove it; empty the
   whole array and the section hides itself automatically. Do not attribute a
   quote to a real person unless they actually said it.
   ---------------------------------------------------------------------------- */
export type Testimonial = { quote: string; name: string; role: string; link?: string }
export const testimonials: Testimonial[] = [
  {
    quote:
      'Add a real recommendation here — e.g. how you scoped, built and shipped something, and the impact it had. Two or three sentences works best.',
    name: 'A manager or client',
    role: 'Their role · Company',
  },
  {
    quote:
      'Paste a LinkedIn recommendation or a client quote. Specific, outcome-focused lines (“cut cost by X”, “shipped in N weeks”) land far harder than generic praise.',
    name: 'A teammate or founder',
    role: 'Their role · Company',
  },
  {
    quote:
      'A third short quote rounds out the section. Aim for a mix of perspectives — a manager, a peer engineer, and a client you delivered for.',
    name: 'A peer or collaborator',
    role: 'Their role · Company',
  },
]

/* ----------------------------------------------------------------------------
   WRITING — link to published articles / talks. Update `url` to the real post
   when live; until then they point to your LinkedIn. Empty the array to hide.
   ---------------------------------------------------------------------------- */
export type Article = { title: string; blurb: string; tag: string; date: string; url: string }
export const writing: Article[] = [
  {
    title: 'Building Voice AI for Indian languages',
    blurb: 'Latency, code-switching and the gap between a slick demo and a calling bot that survives 36K+ real conversations.',
    tag: 'Voice AI',
    date: 'Coming soon',
    url: 'https://www.linkedin.com/in/mohit1005',
  },
  {
    title: 'Agentic RAG for market intelligence',
    blurb: 'How fundamental scoring, technical signals and NLP sentiment combine into a daily signal the trading desk actually trusts.',
    tag: 'Quant · RAG',
    date: 'Coming soon',
    url: 'https://www.linkedin.com/in/mohit1005',
  },
  {
    title: 'From AI demo to AI product',
    blurb: 'The unglamorous work — evaluation, monitoring, cost control — that decides whether an AI feature ever ships.',
    tag: 'AI Product',
    date: 'Coming soon',
    url: 'https://www.linkedin.com/in/mohit1005',
  },
]
