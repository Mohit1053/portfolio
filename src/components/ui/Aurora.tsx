import { cn } from '../../lib/cn'

/**
 * Decorative animated aurora blobs + faint grid. Purely visual; aria-hidden.
 * `variant` shifts the palette / placement so sections don't all look identical.
 */
export function Aurora({
  variant = 'a',
  grid = false,
  className,
}: {
  variant?: 'a' | 'b' | 'c'
  grid?: boolean
  className?: string
}) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {grid && <div className="absolute inset-0 grid-bg opacity-70" />}

      {variant === 'a' && (
        <>
          <div
            className="aurora-blob animate-aurora"
            style={{ width: 520, height: 520, top: -160, left: -120, background: '#7c5cff' }}
          />
          <div
            className="aurora-blob animate-aurora"
            style={{ width: 460, height: 460, top: -80, right: -140, background: '#22d3ee', animationDelay: '-6s' }}
          />
          <div
            className="aurora-blob animate-aurora"
            style={{ width: 420, height: 420, bottom: -220, left: '40%', background: '#34d399', opacity: 0.35, animationDelay: '-11s' }}
          />
        </>
      )}
      {variant === 'b' && (
        <>
          <div
            className="aurora-blob animate-aurora"
            style={{ width: 420, height: 420, top: -140, right: -100, background: '#7c5cff', opacity: 0.35 }}
          />
          <div
            className="aurora-blob animate-aurora"
            style={{ width: 360, height: 360, bottom: -160, left: -120, background: '#22d3ee', opacity: 0.3, animationDelay: '-8s' }}
          />
        </>
      )}
      {variant === 'c' && (
        <div
          className="aurora-blob animate-aurora"
          style={{ width: 560, height: 560, top: '10%', left: '50%', transform: 'translateX(-50%)', background: '#7c5cff', opacity: 0.28 }}
        />
      )}
    </div>
  )
}
