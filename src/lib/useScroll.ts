import { useEffect, useState } from 'react'

export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function useActiveSection(ids: string[]): string {
  // start with nothing highlighted (user is at the hero, which isn't observed)
  const [active, setActive] = useState('')
  const key = ids.join(',')
  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // pick the first observed id (document order) that is currently visible; else clear
        const next = ids.find((id) => visible.has(id)) ?? ''
        setActive(next)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return active
}
