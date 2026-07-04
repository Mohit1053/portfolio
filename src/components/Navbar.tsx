import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Download } from 'lucide-react'
import { navItems, profile } from '../data/content'
import { useActiveSection, useScrolled } from '../lib/useScroll'
import { ThemeToggle } from './ui/ThemeToggle'
import { cn } from '../lib/cn'

const sectionIds = navItems.map((n) => n.href.replace('#', ''))

function Monogram() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-display" aria-label="Home">
      <span className="grid h-9 w-9 place-items-center rounded-xl ring-gradient text-sm font-bold text-heading">
        M
      </span>
      <span className="hidden text-[15px] font-semibold tracking-tight text-heading sm:block">
        Mohit<span className="text-brand">.</span>
      </span>
    </a>
  )
}

export function Navbar() {
  const scrolled = useScrolled(20)
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Lock scroll, handle Escape, trap + restore focus while the mobile drawer is open
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
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
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
      hamburgerRef.current?.focus()
    }
  }, [open])

  return (
    <>
      <header
        className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-500', scrolled ? 'py-2.5' : 'py-4')}
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <nav
            aria-label="Primary"
            className={cn(
              'flex items-center justify-between rounded-2xl px-3 py-2 transition-all duration-500 sm:px-4',
              scrolled ? 'glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]' : 'border border-transparent',
            )}
          >
            <Monogram />

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive = active === item.href.replace('#', '')
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-heading' : 'text-muted hover:text-heading',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-line-2 bg-surface-2"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href={profile.resume}
                download
                className="hidden items-center gap-1.5 rounded-full border border-line-2 px-3.5 py-2 text-sm font-medium text-txt transition-colors hover:border-brand/60 hover:bg-surface-2 sm:inline-flex"
              >
                <Download className="h-4 w-4" />
                Résumé
              </a>
              <a
                href="#contact"
                className="hidden items-center gap-1.5 rounded-full cta-grad px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 lg:inline-flex"
              >
                Let’s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                ref={hamburgerRef}
                type="button"
                onClick={() => setOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-line-2 text-heading lg:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col gap-2 border-l border-line bg-ink-2 p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <Monogram />
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line-2 text-heading"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-txt transition-colors hover:bg-surface-2 hover:text-heading"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <a
                  href={profile.resume}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line-2 px-4 py-3 text-sm font-semibold text-txt"
                >
                  <Download className="h-4 w-4" /> Download résumé
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full cta-grad px-4 py-3 text-sm font-semibold"
                >
                  Let’s talk <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
