'use client'

import { useState } from 'react'
import {
  Brain,
  Shield,
  Zap,
  BarChart3,
  Palette,
  CheckCircle2,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import ShinyText from '../ui/ShinyText/ShinyText'
import SpotlightCard from '../ui/SpotlightCard/SpotlightCard'
import SplitText from '../ui/SplitText/SplitText'
import { CanvasRevealEffect } from '../ui/canvas-reveal-effect'

const services = [
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'Machine learning models and intelligent systems tailored to your business needs.',
    colors: [[255, 214, 10], [0, 4, 74]], // Gold and Navy
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    colors: [[0, 255, 255], [0, 4, 74]], // Cyan and Navy
  },
  {
    icon: Zap,
    title: 'IoT & Robotics',
    description: 'Connected devices and autonomous systems for modern operations.',
    colors: [[255, 214, 10]], // Gold
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for strategic decisions.',
    colors: [[0, 255, 255]], // Cyan
  },
  {
    icon: Palette,
    title: 'Product Design',
    description: 'User-centric design and development of digital products.',
    colors: [[255, 214, 10], [255, 255, 255]], // Gold and White
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality protocols for reliable software.',
    colors: [[0, 255, 255], [255, 255, 255]], // Cyan and White
  },
]

function ServiceCard({ service, span }: { service: typeof services[0], span: string }) {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative ${span} group`}
    >
      <SpotlightCard
        className="h-full group relative p-8 bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden"
        spotlightColor="rgba(255, 214, 10, 0.15)"
      >
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
                colors={service.colors}
                dotSize={2}
              />
              {/* Radial mask for a cleaner fade */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10">
          <div className="mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            <ShinyText text={service.title} color="var(--foreground)" shineColor="var(--primary)" speed={3} />
          </h3>
          <p className="text-foreground/70 leading-relaxed text-lg group-hover:text-foreground transition-colors">
            {service.description}
          </p>
        </div>
      </SpotlightCard>
    </div>
  )
}

export function ServicesSection() {
  const spans = [
    "md:col-span-4 md:row-span-2", // AI Engineering
    "md:col-span-2 md:row-span-2", // Cyber Security
    "md:col-span-3 md:row-span-1", // IoT & Robotics
    "md:col-span-3 md:row-span-1", // Data Analytics
    "md:col-span-2 md:row-span-1", // Product Design
    "md:col-span-4 md:row-span-1", // Quality Assurance
  ]

  return (
    <section
      id="services"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <SplitText text="Our Expertise" delay={0.08} />
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Six pillars of technical excellence delivered by our specialized team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} span={spans[idx]} />
          ))}
        </div>
      </div>
    </section>
  )
}
