import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Section({
  id,
  className,
  children,
  container = true,
}: {
  id?: string
  className?: string
  children: ReactNode
  container?: boolean
}) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 py-20 sm:py-28', className)}>
      {container ? <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div> : children}
    </section>
  )
}
