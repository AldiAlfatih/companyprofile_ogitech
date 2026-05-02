'use client'

import {
  Brain,
  Shield,
  Zap,
  BarChart3,
  Palette,
  CheckCircle2,
} from 'lucide-react'
import ShinyText from '../ui/ShinyText/ShinyText'
import SpotlightCard from '../ui/SpotlightCard/SpotlightCard'
import SplitText from '../ui/SplitText/SplitText'

const services = [
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'Machine learning models and intelligent systems tailored to your business needs.',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
  },
  {
    icon: Zap,
    title: 'IoT & Robotics',
    description: 'Connected devices and autonomous systems for modern operations.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for strategic decisions.',
  },
  {
    icon: Palette,
    title: 'Product Design',
    description: 'User-centric design and development of digital products.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality protocols for reliable software.',
  },
]

export function ServicesSection() {
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
          {services.map((service, idx) => {
            const Icon = service.icon
            // Define Bento Grid spans
            const spans = [
              "md:col-span-4 md:row-span-2", // AI Engineering
              "md:col-span-2 md:row-span-2", // Cyber Security
              "md:col-span-3 md:row-span-1", // IoT & Robotics
              "md:col-span-3 md:row-span-1", // Data Analytics
              "md:col-span-2 md:row-span-1", // Product Design
              "md:col-span-4 md:row-span-1", // Quality Assurance
            ]
            
            return (
              // // Placeholder for "Spotlight Card" for each service
              <SpotlightCard
                key={idx}
                className={`group relative p-8 bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl hover:border-primary/40 transition-all duration-500 ${spans[idx]}`}
                spotlightColor="rgba(255, 214, 10, 0.15)"
              >
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                  <ShinyText text={service.title} color="var(--foreground)" shineColor="var(--primary)" speed={3} />
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg relative z-10">
                  {service.description}
                </p>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
