import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'

export function Experience() {
  return (
    <Section id="experience" className="bg-ink-2/40">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I’ve <span className="text-gradient">built & led</span>
          </>
        }
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-brand/60 via-line-2 to-transparent sm:left-[23px]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.org}-${exp.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14 sm:pl-16"
              >
                {/* dot */}
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-line-2 bg-ink sm:h-12 sm:w-12">
                  <Briefcase className="h-4 w-4 text-brand sm:h-5 sm:w-5" />
                </span>

                <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-semibold text-heading">{exp.role}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Current
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[15px] font-medium text-brand-2">{exp.org}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-faint sm:text-right">{exp.period}</span>
                  </div>

                  {exp.location && <p className="mt-1 font-mono text-[11px] text-faint">{exp.location}</p>}
                  <p className="mt-3 text-[14px] font-medium text-txt">{exp.summary}</p>

                  <ul className="mt-3 space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="rounded-md bg-surface px-2 py-1 font-mono text-[10px] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
