import { impactMetrics } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Aurora } from './ui/Aurora'

export function Impact() {
  return (
    <Section className="bg-ink-2/40">
      <Aurora variant="c" />
      <SectionHeading
        eyebrow="Proof, not promises"
        title={
          <>
            Numbers from <span className="text-gradient">real, shipped work</span>
          </>
        }
        subtitle="Every figure below comes from a product that ran in production — not a prototype."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {impactMetrics.map((m, i) => (
          <Reveal key={m.label} delay={(i % 4) * 0.07}>
            <div className="glass glass-hover h-full rounded-2xl p-5 text-center sm:p-6">
              <div className="text-gradient text-2xl font-extrabold sm:text-[2.5rem] sm:leading-none">{m.value}</div>
              <p className="mt-2 text-sm font-semibold text-white">{m.label}</p>
              <p className="mt-1 text-[12px] leading-snug text-muted">{m.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
