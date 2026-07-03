import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'outline' | 'ghost'

type Props = {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
  download?: boolean
  className?: string
  icon?: ReactNode
  iconRight?: ReactNode
  onClick?: () => void
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink'

const variants: Record<Variant, string> = {
  primary:
    'text-ink bg-gradient-to-r from-brand-2 via-cyan to-emerald bg-[length:180%_180%] hover:bg-right hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-14px_rgba(124,92,255,0.7)]',
  outline: 'border border-line-2 text-txt hover:border-brand/60 hover:bg-white/[0.04] hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-txt',
}

export function Button({
  href,
  children,
  variant = 'primary',
  external,
  download,
  className,
  icon,
  iconRight,
  onClick,
}: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...(download ? { download: true } : {})}
    >
      {icon}
      {children}
      {iconRight}
    </a>
  )
}
