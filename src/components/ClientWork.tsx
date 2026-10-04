import { Briefcase } from 'lucide-react'
import { clientEngagements } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function ClientWork() {
  if (clientEngagements.length === 0) return null
  return (
    <Section id="clients">
      <SectionHeading
        eyebrow="Client work"
        title={
          <>
            Selected <span className="text-gradient">client engagements</span>
          </>
        }
        subtitle="Delivered through my independent AI studio. Clients are kept anonymous — happy to go into detail in a conversation."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clientEngagements.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} className="h-full">
            <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
              <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-cyan">
                <Briefcase aria-hidden className="h-3 w-3" />
                {c.sector}
              </span>
              <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-heading">{c.title}</h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">{c.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2 py-0.5 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
