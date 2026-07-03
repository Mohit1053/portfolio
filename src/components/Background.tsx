import { GraduationCap, Award, Users, ExternalLink } from 'lucide-react'
import { certifications, education, leadership } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Background() {
  return (
    <Section className="bg-ink-2/40">
      <SectionHeading
        eyebrow="Background"
        title={
          <>
            Education, credentials & <span className="text-gradient">community</span>
          </>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* left: education + certs */}
        <Reveal>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-brand">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">Education</h3>
              </div>
              <div className="mt-5 space-y-5">
                {education.map((e) => (
                  <div key={e.school} className="border-l-2 border-line pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-semibold text-white">{e.school}</p>
                      <span className="font-mono text-[11px] text-faint">{e.period}</span>
                    </div>
                    <p className="mt-0.5 text-[13.5px] text-muted">{e.degree}</p>
                    {e.detail && <p className="text-[12.5px] text-brand-2">{e.detail}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-brand">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">Certifications</h3>
              </div>
              <div className="mt-4 space-y-2.5">
                {certifications.map((c) => {
                  const cls =
                    'group flex items-center justify-between rounded-xl border border-line bg-white/[0.02] px-4 py-3 transition-colors'
                  const inner = (
                    <>
                      <div>
                        <p className="text-[14px] font-medium text-txt">{c.name}</p>
                        <p className="text-[12px] text-faint">
                          {c.issuer} · {c.year}
                        </p>
                      </div>
                      {c.url && <ExternalLink className="h-4 w-4 text-muted transition-colors group-hover:text-brand" />}
                    </>
                  )
                  return c.url ? (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cls + ' hover:border-brand/40'}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.name} className={cls}>
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* right: leadership */}
        <Reveal delay={0.1}>
          <div className="glass h-full rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-brand">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-white">Leadership & Community</h3>
            </div>
            <p className="mt-3 text-[13px] text-muted">
              Beyond building — founding clubs, organising fests and mentoring, from my time at IIIT-Delhi.
            </p>
            <ul className="mt-4 space-y-2.5">
              {leadership.map((l) => (
                <li key={l} className="flex gap-3 text-[13.5px] text-txt/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand to-cyan" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
