import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Plus, Star } from 'lucide-react'
import { FiGithub as Github } from 'react-icons/fi'
import { projectCategories, projects } from '../data/content'
import type { Project, ProjectCategory } from '../data/content'
import { categoryIcon } from '../lib/icons'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { cn } from '../lib/cn'
import { ProjectModal } from './ProjectModal'
import { asset } from '../lib/asset'

function Card({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const Cat = categoryIcon[project.category]
  const gh = project.links?.find((l) => l.label === 'GitHub')
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 text-left transition-colors',
        project.featured
          ? 'border-brand/30 bg-gradient-to-b from-brand/[0.07] to-transparent'
          : 'border-line bg-ink-2/50 hover:border-brand/40',
      )}
    >
      {project.image && (
        <div className="-mx-5 -mt-5 mb-4 border-b border-line">
          <img
            src={asset(project.image)}
            alt=""
            loading="lazy"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-brand transition-colors group-hover:text-cyan">
          {Cat && <Cat className="h-5 w-5" />}
        </span>
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 text-[10px] font-semibold text-amber">
              <Star className="h-3 w-3 fill-amber" /> Featured
            </span>
          )}
          <span className="font-mono text-[11px] text-faint">{project.year}</span>
        </div>
      </div>

      <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-heading">{project.title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{project.tagline}</p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span key={m.label} className="rounded-lg border border-line bg-surface px-2 py-1">
              <span className="text-gradient text-xs font-bold">{m.value}</span>
              <span className="ml-1 text-[10px] text-faint">{m.label}</span>
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-md bg-surface px-2 py-0.5 font-mono text-[10px] text-muted">
              {t}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2 text-muted">
          {gh && <Github className="h-4 w-4" />}
          <span className="whitespace-nowrap font-mono text-[11px] text-brand transition-colors group-hover:text-cyan">
            details →
          </span>
        </div>
      </div>
    </motion.button>
  )
}

/** How many cards the unfiltered grid shows before "Show all". */
const INITIAL_COUNT = 9

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>('All')
  const [active, setActive] = useState<Project | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(
    () => (category === 'All' ? projects : projects.filter((p) => p.category === category)),
    [category],
  )
  const canCollapse = category === 'All' && filtered.length > INITIAL_COUNT
  const visible = canCollapse && !showAll ? filtered.slice(0, INITIAL_COUNT) : filtered

  function toggleShowAll() {
    if (showAll) document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setShowAll((v) => !v)
  }

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Products & projects, <span className="text-gradient">shipped</span>
          </>
        }
        subtitle="A cross-section of what I’ve built — from national-scale personalisation to voice AI, quant systems and automation. Click any card for the detail."
      />

      {/* filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((c) => {
          const isActive = category === c
          const count = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length
          if (count === 0) return null
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={isActive}
              className={cn(
                'rounded-full border px-3.5 py-2.5 text-[13px] font-medium transition-all',
                isActive
                  ? 'border-brand/60 bg-brand/15 text-heading'
                  : 'border-line text-muted hover:border-line-2 hover:text-heading',
              )}
            >
              {c}
              <span className={cn('ml-1.5 font-mono text-[10px]', isActive ? 'text-cyan' : 'text-faint')}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* grid */}
      <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <Card key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      {canCollapse && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={toggleShowAll}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-2.5 text-sm font-semibold text-txt transition-colors hover:border-brand/60 hover:bg-surface-2"
          >
            {showAll ? 'Show fewer' : `Show all ${filtered.length} projects`}
            <ChevronDown
              aria-hidden
              className={cn('h-4 w-4 transition-transform duration-300', showAll && 'rotate-180')}
            />
          </button>
        </div>
      )}

      {/* more-to-come note */}
      <div className="mt-8 flex items-center justify-center gap-3 text-muted">
        <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line-2 px-4 py-2 font-mono text-[12px]">
          <Plus className="h-3.5 w-3.5 text-brand" /> more projects added regularly — {' '}
          <a href="https://github.com/Mohit1053" target="_blank" rel="noreferrer noopener" className="text-brand hover:text-cyan">
            see all on GitHub
          </a>
        </span>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  )
}
