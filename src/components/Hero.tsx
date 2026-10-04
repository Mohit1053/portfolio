import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Mail, Phone, Sparkles } from 'lucide-react'
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi'
import { currentlyShipping, heroStats, profile } from '../data/content'
import { Aurora } from './ui/Aurora'
import { Typewriter } from './ui/Typewriter'
import { asset } from '../lib/asset'

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Aurora variant="a" grid />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div>
            <motion.div custom={0} variants={fade} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/[0.08] px-3.5 py-1.5 text-[12px] font-medium text-emerald">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                </span>
                {profile.availability}
              </span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-6 flex items-center gap-3.5"
            >
              <span className="relative inline-grid shrink-0">
                <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl ring-gradient">
                  {profile.photo ? (
                    <img src={asset(profile.photo)} alt="Mohit" className="h-full w-full rounded-2xl object-cover" />
                  ) : (
                    <span className="font-display text-xl font-bold text-heading">M</span>
                  )}
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ink bg-emerald" />
              </span>
              <div>
                <p className="font-mono text-sm text-muted">Hi, I’m Mohit 👋</p>
                <p className="text-[13px] font-medium text-faint">{profile.role}</p>
              </div>
            </motion.div>

            <motion.h1
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-3 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl"
            >
              I build & ship
              <br />
              <span className="text-gradient animate-gradient-pan">AI products</span> that work.
            </motion.h1>

            <motion.p
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-4 font-mono text-[15px] text-muted"
            >
              <span className="text-faint">$</span> I help teams &amp; founders{' '}
              <Typewriter words={profile.rotatingWords} className="text-txt" />
            </motion.p>

            <motion.p
              custom={4}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              custom={5}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full cta-grad bg-[length:180%_180%] px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-right hover:shadow-[0_16px_44px_-14px_rgba(124,92,255,0.7)]"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={asset(profile.resume)}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-3 text-sm font-semibold text-txt transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-surface-2"
              >
                <Download className="h-4 w-4" /> Résumé
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors hover:text-heading"
              >
                Hire me / work together
              </a>
            </motion.div>

            <motion.div
              custom={6}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-7 flex items-center gap-3"
            >
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
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-heading"
                >
                  <Ico className="h-[18px] w-[18px]" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: live "what I ship" console */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-cyan/10 to-emerald/10 blur-2xl" />
            <div className="glass animate-float rounded-2xl p-1.5 shadow-2xl">
              {/* Fixed-dark "terminal" so the coloured status badges read in both themes */}
              <div className="rounded-[0.85rem] bg-[#0a0c18] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#7d8699]">
                    <Sparkles className="h-3 w-3 text-[#9d7bff]" /> currently shipping
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentlyShipping.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                      className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                          <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                            style={{ background: s.color }}
                          />
                          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: s.color }} />
                        </span>
                        <div>
                          <p className="text-[13px] font-semibold text-[#e8eaf4]">{s.name}</p>
                          <p className="font-mono text-[11px] text-[#7d8699]">{s.meta}</p>
                        </div>
                      </div>
                      <span
                        className="rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide"
                        style={{ color: s.color, background: `${s.color}18` }}
                      >
                        {s.state}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['LLMs', 'RAG', 'Voice AI', 'Quant', 'Full-stack', 'Product'].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-[#9aa1b8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="bg-ink-2 p-5 text-center sm:p-6">
              <div className="text-gradient text-3xl font-extrabold sm:text-4xl">{s.value}</div>
              <p className="mt-1.5 text-xs leading-snug text-muted sm:text-[13px]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
