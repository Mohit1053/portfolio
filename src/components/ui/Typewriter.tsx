import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function Typewriter({ words, className }: { words: readonly string[]; className?: string }) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const current = words[index % words.length] ?? ''

  useEffect(() => {
    if (reduce) return
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), 1500)
      return () => clearTimeout(t)
    }
    if (deleting && sub === 0) {
      setDeleting(false)
      setIndex((v) => (v + 1) % words.length)
      return
    }
    const t = setTimeout(() => setSub((v) => v + (deleting ? -1 : 1)), deleting ? 34 : 66)
    return () => clearTimeout(t)
  }, [sub, deleting, current, words.length, reduce])

  if (reduce) {
    return <span className={className}>{words[0] ?? ''}</span>
  }

  return (
    <span className={className}>
      {current.slice(0, sub)}
      <span className="animate-blink font-normal text-brand">|</span>
    </span>
  )
}
