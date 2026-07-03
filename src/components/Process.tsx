import { process } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Process() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How I work"
        title={
          <>
            A simple, <span className="text-gradient">outcome-driven</span> process
          </>
        }
        subtitle="No mystery, no bloat. We agree on the metric, then move fast toward it."
      />

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line-2 to-transparent lg:block" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="relative">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-line-2 bg-ink font-mono text-sm font-bold text-brand">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
