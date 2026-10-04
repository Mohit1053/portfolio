import type { LucideIcon } from 'lucide-react'
import {
  Compass,
  Brain,
  Mic,
  TrendingUp,
  Workflow,
  Server,
  Target,
  Rocket,
  Layers,
  Gauge,
  Users,
  ShieldCheck,
  Code,
  Wrench,
  Sparkles,
  Bot,
  LineChart,
  MessagesSquare,
  Eye,
  FlaskConical,
  Boxes,
  Clapperboard,
} from 'lucide-react'

/** string key (used in content.ts) -> lucide icon component */
export const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  brain: Brain,
  mic: Mic,
  trending: TrendingUp,
  workflow: Workflow,
  server: Server,
  target: Target,
  rocket: Rocket,
  layers: Layers,
  gauge: Gauge,
  users: Users,
  shield: ShieldCheck,
  code: Code,
  wrench: Wrench,
}

/** Icons used for the project category chips / cards */
export const categoryIcon: Record<string, LucideIcon> = {
  'AI Products': Boxes,
  'Voice AI': MessagesSquare,
  'Generative Media': Clapperboard,
  'Quant & Finance': LineChart,
  'NLP & RAG': Bot,
  'Computer Vision': Eye,
  Automation: Workflow,
  Research: FlaskConical,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Sparkles
  return <Cmp className={className} aria-hidden />
}
