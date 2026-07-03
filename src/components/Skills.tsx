import { skillGroups } from '../data/content'
import { Icon } from '../lib/icons'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Toolbox"
        title={
          <>
            The <span className="text-gradient">stack</span> I build with
          </>
        }
        subtitle="Deep in AI/ML and data, fluent across the full product and engineering stack."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.07}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.03] text-brand">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">{g.group}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-line bg-white/[0.02] px-2.5 py-1.5 text-[12.5px] font-medium text-txt/90 transition-colors hover:border-brand/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
