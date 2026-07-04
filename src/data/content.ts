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
  { label: 'Skills', href: '#skills' },
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
      'Architected and shipped a microservices voice-AI calling platform (streaming ASR + LLM + TTS) to production: 36K+ live calls at <700ms latency, tripling outbound volume.',
      'Built an agentic-RAG market-intelligence platform fusing fundamental, technical and NLP-sentiment signals over a 131K-record backtest — adopted daily by the internal trading desk.',
      'Established the AI evaluation, monitoring and governance framework (latency, accuracy, cost) across all shipped features.',
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
      'Founded R2C (Research-to-Commercialisation): a full-stack AI platform matching academic research to industry needs via LLM semantic matching, with role-based access and meeting workflows.',
      'Ship GenAI products for clients — document-extraction pipelines, branded PDF automation, RAG assistants and AI video generation — deployed on GCP / Cloud Run.',
      'Bring in a trusted cross-functional team to scale delivery when a project demands more than one builder.',
    ],
    tags: ['Founder', 'GenAI', 'Full-Stack', 'Client Delivery', 'GCP'],
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
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/ai-caller' }],
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
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/quant-lab' }],
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
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/market-intelligence-platform' }],
  },
  {
    id: 'ai-video',
    title: 'AI Video Generation — Masterclass Clipper',
    category: 'AI Products',
    year: '2026',
    featured: true,
    tagline: 'Turns 7–8h recordings into share-ready 30–90s clips, automatically.',
    description:
      'A transcript-first pipeline that transcribes long masterclasses, uses multiple LLMs to find the best pedagogical moments, reframes with face-tracking and composes motion-graphics clips.',
    highlights: [
      'Transcription → multi-LLM arc analysis → face-tracking reframe → motion-graphics composition.',
      '~$4–6 to process an 8-hour source video.',
      '3K–9K clips generated per 100 source videos.',
    ],
    metrics: [
      { value: '$4–6', label: 'Per 8h video' },
      { value: '30–90s', label: 'Clip length' },
    ],
    tags: ['Deepgram', 'Faster-Whisper', 'Claude', 'Gemini', 'MediaPipe', 'Remotion'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/AI-Video-generation' }],
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
    id: 'r2c',
    title: 'R2C — Research-to-Commercialisation',
    category: 'AI Products',
    year: '2024–26',
    tagline: 'Full-stack AI platform matching academic research to industry.',
    description:
      'A platform I founded that maps research abstracts to industry problem statements using LLM semantic matching, wrapped in a modern web app with role-based access, study exploration and meeting-request workflows.',
    highlights: [
      'LLM semantic-matching backend (Llama / Mistral).',
      'React 19 + TypeScript + Firebase frontend with role-based access.',
      'End-to-end delivery with E2E test coverage.',
    ],
    tags: ['React 19', 'TypeScript', 'Firebase', 'Llama', 'Mistral'],
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
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/multi-llm-content-pipeline' }],
  },
  {
    id: 'fundamental-indicators',
    title: 'Fundamental Indicators Toolkit',
    category: 'Quant & Finance',
    year: '2025',
    tagline: 'Open-source scoring & analysis toolkit for Indian equities.',
    description:
      'A professional-grade toolkit computing a 14-metric fundamental score, 26+ technical indicators and 35+ cyclical pattern detectors, with bulk NIFTY50/500 analysis and Excel report generation.',
    highlights: [
      '14-metric weighted scoring + 26+ technical indicators.',
      'Bulk NIFTY50/500 analysis with automated Excel reports.',
    ],
    tags: ['Python', 'pandas', 'Technical Analysis', 'Open Source'],
    links: [{ label: 'GitHub', href: 'https://github.com/Mohit1053/Fundamental_Indicators' }],
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
    url: 'https://github.com/Mohit1053/GPU-Programming-Specialization',
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
