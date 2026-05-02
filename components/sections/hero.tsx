'use client'

import { Button } from '@/components/ui/button'
import PixelTrail from '../ui/PixelTrail/PixelTrail'
import TextPressure from '../ui/TextPressure/TextPressure'
import BlurText from '../ui/BlurText/BlurText'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-6 lg:px-8">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <PixelTrail
          gridSize={60}
          trailSize={0.15}
          maxAge={400}
          interpolate={10}
          color="rgba(0, 100, 255, 0.4)"
          gooeyFilter={{ id: "hero-pixel-trail", strength: 3 }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center pb-32">
        {/* Brand Identity */}
        <div className="mb-6 inline-block">
          <p className="text-primary text-lg sm:text-xl font-semibold tracking-wide mb-1">
            Welcome to
          </p>
          {/* // Placeholder for "Text Pressure" for the word "OgiTech" */}
          <div className="relative h-16 sm:h-20 mb-0">
            <TextPressure
              text="OgiTech"
              textColor="var(--primary)"
              minFontSize={48}
              flex={true}
              weight={true}
              width={true}
              italic={true}
            />
          </div>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* // Placeholder for "Blur Text" for the phrase "Engineering Digital Excellence" */}
        <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6 flex flex-wrap justify-center">
          <BlurText
            text="Engineering Digital Excellence with Precision AI &"
            delay={100}
            animateBy="words"
            direction="top"
            className="inline-flex flex-wrap justify-center"
          />
          <span className="text-primary ml-3">
            <BlurText
              text="IoT Architecture"
              delay={100}
              animateBy="words"
              direction="bottom"
              className="inline-flex"
            />
          </span>
        </div>

        <p className="text-lg sm:text-xl text-foreground/80 text-balance mb-12 leading-relaxed max-w-2xl mx-auto">
          A technical collective of computer science and systems information experts based in Indonesia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Start Your Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary/60 text-foreground font-semibold px-8"
            onClick={() =>
              document
                .getElementById('services')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Explore Services
          </Button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
  )
}
