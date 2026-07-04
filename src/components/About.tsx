import { Compass, Brain, LineChart } from 'lucide-react'
import { about } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Aurora } from './ui/Aurora'

const pillars = [
  { icon: Compass, title: 'Product', desc: 'Strategy, roadmaps & PRDs — grounded in what’s technically real.' },
  { icon: Brain, title: 'Engineering', desc: 'Architecture to production code — LLMs, APIs, cloud, the lot.' },
  { icon: LineChart, title: 'Data', desc: 'Models, forecasts & dashboards teams actually trust.' },
]

export function About() {
  return (
    <Section id="about">
      <Aurora variant="b" />
      <SectionHeading eyebrow={about.eyebrow} title={about.heading} />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Reveal>
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-muted sm:text-base">
                {p}
              </p>
            ))}

            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {pillars.map((pil) => (
                <div key={pil.title} className="glass glass-hover rounded-2xl p-4">
                  <pil.icon className="h-5 w-5 text-brand" />
                  <p className="mt-3 font-display text-base font-semibold text-heading">{pil.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass rounded-2xl p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">/ quick facts</p>
            <dl className="mt-5 divide-y divide-line">
              {about.facts.map((f) => (
                <div key={f.k} className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="shrink-0 font-mono text-xs uppercase tracking-wide text-faint">{f.k}</dt>
                  <dd className="text-right text-[14px] font-medium text-txt">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
