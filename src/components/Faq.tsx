import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/content'
import { Section } from './ui/Section'
import { SectionHeading } from './ui/SectionHeading'
import { cn } from '../lib/cn'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section>
      <SectionHeading
        eyebrow="Good to know"
        title={
          <>
            Working <span className="text-gradient">together</span>
          </>
        }
      />

      <div className="mx-auto mt-12 max-w-2xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div
              key={f.q}
              className={cn(
                'overflow-hidden rounded-2xl border transition-colors',
                isOpen ? 'border-brand/40 bg-brand/[0.04]' : 'border-line bg-ink-2/50',
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-semibold text-white">{f.q}</span>
                <Plus
                  className={cn('h-5 w-5 shrink-0 text-brand transition-transform duration-300', isOpen && 'rotate-45')}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
