import { ArrowUpRight } from 'lucide-react'
import { writing } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Writing() {
  if (writing.length === 0) return null
  return (
    <Section id="writing">
      <SectionHeading
        eyebrow="Writing & ideas"
        title={
          <>
            Notes on <span className="text-gradient">shipping AI</span>
          </>
        }
        subtitle="Field notes on voice AI, quant systems, and taking AI from a demo to a product that survives production."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {writing.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06} className="h-full">
            <a
              href={a.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group glass glass-hover flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-cyan">
                  {a.tag}
                </span>
                <span className="font-mono text-[11px] text-faint">{a.date}</span>
              </div>
              <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-heading">{a.title}</h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">{a.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] text-brand transition-colors group-hover:text-cyan">
                Read on LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
