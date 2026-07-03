import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '../../lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted',
              align === 'center' && 'mx-auto',
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.7rem]">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
