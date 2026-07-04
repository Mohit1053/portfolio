import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { services } from '../data/content'
import { Icon } from '../lib/icons'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Aurora } from './ui/Aurora'

export function Services() {
  return (
    <Section id="services" className="bg-ink-2/40">
      <Aurora variant="c" />
      <SectionHeading
        eyebrow="What I do"
        title={
          <>
            One partner for the <span className="text-gradient">whole build</span>
          </>
        }
        subtitle="Product thinking, AI engineering and data science — under one roof. Hire me for a slice, or hand over the entire thing end to end."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              className="group glass glass-hover flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface text-brand transition-colors group-hover:border-brand/40 group-hover:text-cyan">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-heading">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{s.blurb}</p>

              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] text-txt/90">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2 py-1 font-mono text-[10px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-gradient-to-r from-brand/[0.08] to-cyan/[0.05] p-6 text-center sm:flex-row sm:text-left">
          <p className="text-[15px] text-txt">
            <span className="font-semibold text-heading">Not sure what you need?</span> Tell me the goal — I’ll scope the
            fastest path to it.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-heading px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
