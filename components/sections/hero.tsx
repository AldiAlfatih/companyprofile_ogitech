'use client'

import { Button } from '@/components/ui/button'
import PixelTrail from '../ui/PixelTrail/PixelTrail'
import TextPressure from '../ui/TextPressure/TextPressure'
import BlurText from '../ui/BlurText/BlurText'
import { AuroraBackground } from '../ui/aurora-background'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-background">
      <AuroraBackground className="flex-col pt-24 pb-12 sm:pt-32 sm:pb-20">
        {/* Background Effect Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <PixelTrail
            gridSize={60}
            trailSize={0.15}
            maxAge={400}
            interpolate={10}
            color="rgba(255, 214, 10, 0.4)"
            gooeyFilter={{ id: "hero-pixel-trail", strength: 3 }}
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          {/* Brand Identity */}
          <div className="mb-4 inline-block">
            <p className="text-primary text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-2 opacity-80">
              Welcome to
            </p>
            {/* // Placeholder for "Text Pressure" for the word "OgiTech" */}
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
          </div>

          {/* // Placeholder for "Blur Text" for the phrase "Engineering Digital Excellence" */}
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
          <p className="text-sm sm:text-base text-white/80 text-balance mb-8 leading-relaxed max-w-2xl mx-auto">
            A technical collective of computer science and systems information experts based in Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-12 text-base shadow-lg shadow-primary/20"
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
              className="border-primary/30 hover:border-primary/60 text-white font-bold px-8 h-12 text-base backdrop-blur-sm"
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-1 h-10 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
        </div>
      </AuroraBackground>
    </section>
  )
}
