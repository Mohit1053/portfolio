import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight, Send, MessageCircle, Download, Loader2 } from 'lucide-react'
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi'
import { profile } from '../data/content'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import { Aurora } from './ui/Aurora'
import { asset } from '../lib/asset'

const engagements = ['Hire me (full-time)', 'Freelance / project work', 'Advisory / fractional AI-PM', 'Just saying hi']

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Message me', href: profile.whatsapp, external: true },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [type, setType] = useState(engagements[1])
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    // No backend configured → open the visitor's email app, pre-filled.
    if (!profile.formEndpoint) {
      const subject = `Portfolio enquiry — ${type}`
      const body = `Name: ${name}\nEmail: ${email}\nType: ${type}\n\n${message}`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    try {
      setStatus('submitting')
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          enquiryType: type,
          _subject: `Portfolio enquiry — ${type}`,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <Aurora variant="a" />
      <div className="relative overflow-hidden rounded-3xl border border-line-2 bg-ink-2/70 p-6 sm:p-10">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          {/* left: pitch + channels */}
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/[0.08] px-3.5 py-1.5 text-[12px] font-medium text-emerald">
                <span className="h-2 w-2 rounded-full bg-emerald" />
                {profile.availability}
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-heading sm:text-4xl">
                Let’s build something <span className="text-gradient">worth shipping.</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                Hiring for a role, scoping a product, or need an AI partner who can own the whole thing? Tell me what
                you’re after — I usually reply within a day.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {channels.map((c) => {
                  const content = (
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-brand/40">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-2 text-brand">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-wide text-faint">{c.label}</p>
                        <p className="break-words text-[13px] font-medium leading-tight text-txt">{c.value}</p>
                      </div>
                    </div>
                  )
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noreferrer noopener' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  )
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-heading"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-heading"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={asset(profile.resume)}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-medium text-txt transition-all hover:-translate-y-0.5 hover:border-brand/50"
                >
                  <Download className="h-4 w-4" /> Résumé
                </a>
              </div>
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" placeholder="Jane Doe" required />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              </div>

              <div className="mt-4">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-faint">I’m reaching out to…</p>
                <div className="flex flex-wrap gap-2">
                  {engagements.map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setType(e)}
                      aria-pressed={type === e}
                      className={
                        'rounded-full border px-3.5 py-2.5 text-[12.5px] font-medium transition-all ' +
                        (type === e
                          ? 'border-brand/60 bg-brand/15 text-heading'
                          : 'border-line text-muted hover:text-heading')
                      }
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-faint" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="A line or two about what you have in mind…"
                  className="w-full resize-none rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-txt placeholder:text-faint focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full cta-grad bg-[length:180%_180%] px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-right hover:shadow-[0_16px_44px_-14px_rgba(124,92,255,0.7)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              {status === 'success' ? (
                <p role="status" className="mt-3 text-center text-[12px] font-medium text-emerald">
                  Thanks — your message is on its way. I’ll get back to you within a day.
                </p>
              ) : status === 'error' ? (
                <p role="alert" className="mt-3 break-words text-center text-[12px] font-medium text-pink">
                  Something went wrong. Please email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </p>
              ) : (
                <p className="mt-3 break-words text-center text-[11px] text-faint">
                  {profile.formEndpoint ? 'I usually reply within a day.' : 'Opens your email app, pre-filled.'} Prefer
                  direct?{' '}
                  <a href={`mailto:${profile.email}`} className="text-brand hover:text-cyan">
                    {profile.email}
                  </a>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-faint" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-txt placeholder:text-faint focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
      />
    </div>
  )
}
