'use client'

import { useState } from 'react'
import {
  Lightbulb,
  Settings,
  Code2,
  CheckCircle,
  Rocket,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { CanvasRevealEffect } from '../ui/canvas-reveal-effect'
import DecryptedText from '../ui/DecryptedText/DecryptedText'
import Magnet from '../ui/Magnet/Magnet'

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description:
      'We collaborate closely with stakeholders to understand business objectives, technical requirements, and project scope.',
    colors: [[255, 214, 10]], // Gold
  },
  {
    icon: Settings,
    title: 'Architecture Design',
    description:
      'Our experts design scalable, secure architectures that balance performance, maintainability, and cost efficiency.',
    colors: [[0, 4, 74], [255, 214, 10]], // Navy and Gold
  },
  {
    icon: Code2,
    title: 'Development & Implementation',
    description:
      'Using precision engineering practices, we build robust solutions with comprehensive testing and quality assurance.',
    colors: [[0, 255, 255], [0, 4, 74]], // Cyan and Navy
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description:
      'Rigorous testing protocols ensure reliability, security, and adherence to industry best practices throughout.',
    colors: [[255, 214, 10], [255, 255, 255]], // Gold and White
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description:
      'We manage seamless deployments and provide ongoing technical support to ensure long-term success.',
    colors: [[0, 255, 255]], // Cyan
  },
]

function ProcessCard({ step, index }: { step: typeof steps[0], index: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = step.icon

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      <div className="relative h-full overflow-hidden bg-card/40 backdrop-blur-md border border-primary/10 rounded-2xl transition-all duration-500 hover:border-primary/40 p-6 flex flex-col min-h-[320px]">
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0 z-0"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-transparent"
                colors={step.colors}
                dotSize={2}
              />
              <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-6">
            <Magnet padding={50} magnetStrength={3}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </Magnet>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-4">
            <DecryptedText
              text={step.title}
              animateOn="view"
              revealDirection="center"
              speed={50}
              className="inline-block"
            />
          </h3>
          
          <p className="text-sm text-foreground/70 leading-relaxed mb-6 group-hover:text-foreground transition-colors flex-grow">
            {step.description}
          </p>

          <div className="text-[10px] font-black tracking-[0.2em] text-primary/40 uppercase mt-auto">
            Step 0{index + 1}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Development{' '}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            A precision-engineered approach built on academic rigor and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
