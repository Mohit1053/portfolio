import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowUpRight, Sparkles } from 'lucide-react'
import { FiGithub as Github } from 'react-icons/fi'
import type { Project } from '../data/content'
import { categoryIcon } from '../lib/icons'
import { asset } from '../lib/asset'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const prevOverflow = document.body.style.overflow
    const prevFocused = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 40)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      window.clearTimeout(t)
      prevFocused?.focus?.()
    }
  }, [project, onClose])

  const Cat = project ? categoryIcon[project.category] : null

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-line-2 bg-ink-2 sm:rounded-3xl"
          >
            {/* header */}
            <div className="relative shrink-0 overflow-hidden border-b border-line p-6 sm:p-7">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-cyan">
                    {Cat && <Cat className="h-4 w-4" />}
                    {project.category} · {project.year}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-heading">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{project.tagline}</p>
                </div>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line-2 text-muted transition-colors hover:text-heading"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* body */}
            <div className="overflow-y-auto p-6 sm:p-7">
              {project.image && (
                <img
                  src={asset(project.image)}
                  alt={`${project.title} screenshot`}
                  className="mb-6 aspect-video w-full rounded-xl border border-line object-cover"
                />
              )}

              {project.metrics && project.metrics.length > 0 && (
                <div
                  className="mb-6 grid gap-3"
                  style={{ gridTemplateColumns: `repeat(${Math.min(project.metrics.length, 3)}, minmax(0,1fr))` }}
                >
                  {project.metrics.map((m) => (
                    <div key={m.label} className="min-w-0 rounded-xl border border-line bg-surface p-3 text-center">
                      <div className="text-gradient text-lg font-extrabold">{m.value}</div>
                      <p className="mt-0.5 text-[11px] text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-[14.5px] leading-relaxed text-txt/90">{project.description}</p>

              <p className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-faint">
                <Sparkles className="h-3.5 w-3.5 text-brand" /> Highlights
              </p>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand to-cyan" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* footer */}
            {project.links && project.links.length > 0 && (
              <div className="flex shrink-0 flex-wrap gap-3 border-t border-line p-6 sm:p-7">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2.5 text-sm font-semibold text-txt transition-colors hover:border-brand/60 hover:bg-surface-2"
                  >
                    {l.label === 'GitHub' ? <Github className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
