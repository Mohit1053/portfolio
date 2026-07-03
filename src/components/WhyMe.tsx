import { differentiators } from '../data/content'
import { Icon } from '../lib/icons'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function WhyMe() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why work with me"
        title={
          <>
            Reasons teams <span className="text-gradient">trust me with the build</span>
          </>
        }
        subtitle="Whether you’re hiring or handing off a project — here’s what you can count on."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d, i) => (
          <Reveal key={d.title} delay={(i % 3) * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-6 transition-colors hover:border-brand/40">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-cyan/10 text-brand">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{d.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{d.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
