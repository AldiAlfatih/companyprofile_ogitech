'use client'

import MagnetLines from '../ui/MagnetLines/MagnetLines'
import TrueFocus from '../ui/TrueFocus/TrueFocus'
import DecryptedText from '../ui/DecryptedText/DecryptedText'
import { motion } from 'motion/react'
import { Rocket, Eye, Heart, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const milestones = [
  {
    icon: Eye,
    year: 'The Beginning',
    title: 'A Vision is Born',
    desc: 'It started with long discussions between six engineering students who believed Indonesian technology could compete on the global stage.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Heart,
    year: 'Foundation',
    title: 'Culture + Technology',
    desc: 'We chose not to sacrifice cultural identity for progress. Both can coexist — and that is the DNA of OgiTech.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Rocket,
    year: 'Today',
    title: 'Flying Higher',
    desc: 'From stunting prediction to sign language AI, we keep proving that true innovation is born from empathy and technical courage.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Globe,
    year: 'The Future',
    title: 'Global Impact',
    desc: 'Our goal is not just to build products — we want to become a catalyst for digital transformation felt across the world.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
]

export function AboutSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 sm:py-32 bg-background px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Intro */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            Who We Are
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            The{' '}
            <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
              OgiTech
            </span>{' '}
            Story
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto"
          >
            <DecryptedText
              text="OgiTech is a visionary technology collective dedicated to driving global digital transformation — blending cultural integrity with cutting-edge innovation."
              animateOn="view"
              revealDirection="center"
              speed={25}
              maxIterations={10}
              sequential={true}
            />
          </motion.div>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

          {/* Left: Timeline Milestones */}
          <div className="space-y-6">
            {milestones.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-5 group"
                >
                  {/* Icon + Connector */}
                  <div className="flex flex-col items-center">
                    <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-px flex-1 mt-3 bg-gradient-to-b from-primary/20 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/40 block mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Vision & Mission Card with MagnetLines visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-2xl blur-3xl" />
            <div className="relative bg-card/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 sm:p-10 overflow-hidden">
              {/* MagnetLines decorative bg */}
              <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
                <MagnetLines
                  rows={10}
                  columns={10}
                  containerSize="100%"
                  lineColor="var(--primary)"
                  lineWidth="1.5px"
                  lineHeight="18px"
                />
              </div>

              <div className="relative z-10 space-y-8">
                {/* Vision */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm font-black">V</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm pl-11 italic border-l-2 border-primary/30">
                    "To be the global catalyst for digital transformation, bridging cultural integrity with cutting-edge intelligence to redefine the boundaries of what’s possible in technology."
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                {/* Mission bullets */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm font-black">M</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Our Mission</h3>
                  </div>
                  <ul className="space-y-3 pl-11">
                    {[
                      'To engineer scalable, high-performance digital ecosystems that empower global organizations to lead with confidence in an ever-evolving technological landscape.',
                      'To uphold the highest standards of digital security and system integrity, protecting the future of data-driven intelligence through relentless innovation and robust infrastructure.',
                      'To harmonize cultural values with human-centric design, delivering intuitive experiences that bridge the gap between complex science and daily life.',
                      'To pioneer transformative solutions in AI, IoT, and beyond, turning ambitious ideas into sustainable realities that drive progress and redefine industry standards.',
                    ].map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/65 leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-14 px-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-card/30 to-transparent relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-primary/10 blur-[60px] rounded-full" />
          </div>
          <div className="relative z-10">
            <p className="text-foreground/50 text-xs font-bold tracking-[0.3em] uppercase mb-3">Ready to Collaborate?</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Let's Build Your Idea{' '}
              <span className="text-primary">Together</span>
            </h3>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Share your idea or technical challenge. Our team is ready to craft the best solution.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 h-12 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              onClick={() => scrollTo('contact')}
            >
              ✉️ Get Started
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
