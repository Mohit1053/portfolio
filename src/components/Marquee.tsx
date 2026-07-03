import { marqueeItems } from '../data/content'

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="relative border-y border-line bg-ink-2/50 py-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-mono text-sm font-medium text-muted transition-colors hover:text-white">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-brand/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
