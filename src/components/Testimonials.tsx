import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Words from others"
        title={
          <>
            What it’s like to <span className="text-gradient">work with me</span>
          </>
        }
        subtitle="A few voices from people I’ve built for and alongside."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name + i} delay={i * 0.06} className="h-full">
            <figure className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
              <Quote aria-hidden className="h-6 w-6 shrink-0 text-brand/70" />
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-txt/90">“{t.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="text-[14px] font-semibold text-heading">{t.name}</p>
                <p className="text-[12px] text-faint">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
