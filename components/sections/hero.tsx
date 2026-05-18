'use client'

import { Button } from '@/components/ui/button'
import TextPressure from '../ui/TextPressure/TextPressure'
import BlurText from '../ui/BlurText/BlurText'
import { AuroraBackground } from '../ui/aurora-background'
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen bg-background">
      <AuroraBackground className="flex-col pt-24 pb-0 sm:pt-32">


        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          {/* Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block"
          >
            <p className="text-primary text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-2 opacity-80">
              Welcome to
            </p>
            <div className="relative h-10 sm:h-12 mb-2 w-full max-w-[250px] sm:max-w-[350px] mx-auto">
              <TextPressure
                text="OgiTech"
                textColor="var(--primary)"
                minFontSize={28}
                flex={true}
                weight={true}
                width={true}
                italic={false}
                scale={false}
              />
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary/60 to-accent/60 mx-auto rounded-full"></div>
          </motion.div>

          {/* Headline */}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance leading-[1.1] mb-6 flex flex-wrap justify-center text-white tracking-tight">
            <BlurText
              text="Engineering Digital Excellence with Precision AI &"
              delay={100}
              animateBy="words"
              direction="top"
              className="inline-flex flex-wrap justify-center"
            />
            <span className="text-primary ml-2 sm:ml-3">
              <BlurText
                text="IoT Architecture"
                delay={100}
                animateBy="words"
                direction="bottom"
                className="inline-flex"
              />
            </span>
          </div>

          <p className="text-lg sm:text-xl text-primary font-semibold mb-2 tracking-tight">
            Smart Tech for Everyone
          </p>
          <p className="text-sm sm:text-base text-white/80 text-balance mb-10 leading-relaxed max-w-2xl mx-auto">
            A technical collective of computer science and systems information experts based in Indonesia.
          </p>

          {/* CTA Buttons — 3 tombol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Primary: View Projects */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-12 text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              onClick={() => scrollTo('portfolio')}
            >
              View Projects
            </Button>

            {/* Secondary: Get Started */}
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 h-12 text-base backdrop-blur-sm border border-white/20 hover:border-primary/60 hover:scale-105 transition-all duration-300"
              onClick={() => scrollTo('contact')}
            >
              Get Started
            </Button>

            {/* Tertiary: Our Story */}
            <Button
              size="lg"
              variant="ghost"
              className="text-primary/80 hover:text-primary font-semibold px-6 h-12 text-sm hover:bg-primary/10 transition-all duration-300 underline underline-offset-4"
              onClick={() => scrollTo('about')}
            >
              Our Story →
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 mt-12 pb-8 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('portfolio')}
        >
          <p className="text-white/30 text-xs tracking-widest uppercase">Scroll</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-primary/40" />
          </motion.div>
        </motion.div>
      </AuroraBackground>
    </section>
  )
}
