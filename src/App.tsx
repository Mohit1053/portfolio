import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Credibility } from './components/Credibility'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyMe } from './components/WhyMe'
import { Impact } from './components/Impact'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { Skills } from './components/Skills'
import { Background } from './components/Background'
import { Writing } from './components/Writing'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { ScrollToTop } from './components/ui/ScrollToTop'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-ink text-txt antialiased">
        <a
          href="#main"
          className="sr-only rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">
        <Hero />
        <Marquee />
        <Credibility />
        <About />
        <Services />
        <WhyMe />
        <Impact />
        <Process />
        <Projects />
        <Experience />
        <Testimonials />
        <Skills />
        <Background />
        <Writing />
        <Faq />
        <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </div>
    </MotionConfig>
  )
}
