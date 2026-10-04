import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { r2cCaseStudy as cs } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function CaseStudy() {
  return (
    <Section id="case-study" className="bg-ink-2/40">
      <SectionHeading
        eyebrow="Founder case study"
        title={
          <>
            {cs.title} <span className="text-gradient">{cs.titleAccent}</span>
          </>
        }
        subtitle={cs.lead}
      />

      {/* headline numbers */}
      <Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {cs.stats.map((s) => (
            <div key={s.label} className="bg-ink-2 p-5 text-center">
              <div className="text-gradient text-2xl font-extrabold sm:text-3xl">{s.value}</div>
              <p className="mt-1 text-xs text-muted sm:text-[13px]">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* the pipeline, paper -> opportunity */}
      <ol className="mt-12 grid gap-3 lg:grid-cols-5">
        {cs.stages.map((st, i) => (
          <motion.li
            key={st.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative flex h-full flex-col rounded-2xl p-5"
          >
              <span className="font-mono text-[11px] text-cyan">{st.step}</span>
              <h3 className="mt-1 font-display text-lg font-semibold text-heading">{st.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{st.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {st.parts.map((p) => (
                  <span
                    key={p}
                    className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {p}
                  </span>
                ))}
              </div>
              {i < cs.stages.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-[18px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-line-2 bg-ink-2 text-brand lg:grid"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
          </motion.li>
        ))}
      </ol>

      {/* what I personally own vs. the stack */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="h-full">
          <div className="glass h-full rounded-2xl p-6">
            <p className="font-mono text-[11px] uppercase tracking-wide text-faint">My role</p>
            <ul className="mt-3 space-y-2.5">
              {cs.role.map((r) => (
                <li key={r} className="flex gap-2.5 text-[14px] leading-relaxed text-txt">
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-emerald" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="h-full">
          <div className="glass h-full rounded-2xl p-6">
            <p className="font-mono text-[11px] uppercase tracking-wide text-faint">Stack</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {cs.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
