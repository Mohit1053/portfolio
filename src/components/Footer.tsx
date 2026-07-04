import { Mail, Phone, ArrowUp } from 'lucide-react'
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi'
import { navItems, profile } from '../data/content'

export function Footer() {
  const year = 2026
  return (
    <footer className="relative border-t border-line bg-ink-2/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl ring-gradient text-sm font-bold text-heading">M</span>
              <span className="font-display text-lg font-semibold text-heading">
                Mohit<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
              AI Product Manager, engineer & founder. One partner for product, engineering and data — from idea to
              production.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {[
                { icon: Github, href: profile.github, label: 'GitHub' },
                { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
                { icon: Phone, href: profile.phoneHref, label: 'Phone' },
              ].map(({ icon: Ico, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand/50 hover:text-heading"
                >
                  <Ico className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-1">
            <p className="col-span-2 mb-1 font-mono text-[11px] uppercase tracking-wide text-faint sm:col-span-1">
              Navigate
            </p>
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="inline-block py-1.5 text-[13.5px] text-muted transition-colors hover:text-heading"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-[12.5px] text-faint">© {year} Mohit. Built from scratch with React & Tailwind.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[12px] text-muted transition-colors hover:border-brand/50 hover:text-heading"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
