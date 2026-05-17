'use client'

import { useState } from 'react'
import {
  Brain,
  Shield,
  Zap,
  Smartphone,
  Palette,
  ClipboardList,
} from 'lucide-react'
import { motion } from 'motion/react'
import SplitText from '../ui/SplitText/SplitText'

const services = [
  {
    icon: Brain,
    title: 'AI Engineering',
    description: 'ML models & intelligent systems tailored to your business needs.',
    accent: '#ffd60a',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
    border: 'hover:border-yellow-500/40',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    accent: '#00d4ff',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    border: 'hover:border-cyan-500/40',
  },
  {
    icon: Zap,
    title: 'IoT & Robotics',
    description: 'Connected devices & autonomous systems for modern operations.',
    accent: '#22c55e',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    border: 'hover:border-green-500/40',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Deployment',
    description: 'Fast & reliable development and deployment of web and mobile apps.',
    accent: '#f43f5e',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    border: 'hover:border-rose-500/40',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive and aesthetic interface & user experience design.',
    accent: '#a855f7',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    border: 'hover:border-purple-500/40',
  },
  {
    icon: ClipboardList,
    title: 'System Analytics',
    description: 'System requirements analysis & architectural solution design.',
    accent: '#f97316',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    border: 'hover:border-orange-500/40',
  },
]

export function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-foreground">
            <SplitText text="Our Services" delay={0.08} />
          </h2>
          <p className="text-base text-foreground/60 max-w-lg mx-auto">
            Six pillars of technical excellence delivered by our specialist team.
          </p>
        </div>

        {/* Service Cards Grid — compact & clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isHovered = hovered === idx

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative p-6 bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl ${service.border} transition-all duration-400 hover:shadow-xl cursor-default`}
                style={{
                  boxShadow: isHovered ? `0 8px 40px ${service.accent}18` : undefined,
                }}
              >
                {/* Hover gradient tint */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${service.accent}10 0%, transparent 65%)` }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: isHovered ? `0 0 20px ${service.accent}25` : undefined }}
                  >
                    <Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/55 leading-relaxed group-hover:text-foreground/75 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${service.accent}50, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
