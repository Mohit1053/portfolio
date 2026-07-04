import { affiliations } from '../data/content'

export function Credibility() {
  return (
    <div className="border-b border-line bg-ink/40">
      <div className="mx-auto max-w-6xl px-5 py-9 sm:px-8">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
          Built &amp; shipped across
        </p>
        <div className="mt-6 flex flex-wrap items-start justify-center gap-x-8 gap-y-5 sm:gap-x-14">
          {affiliations.map((a) => (
            <div key={a.name} className="group text-center">
              <p className="font-display text-[15px] font-semibold text-muted transition-colors group-hover:text-heading sm:text-base">
                {a.name}
              </p>
              <p className="mt-0.5 text-[11px] text-faint">{a.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
