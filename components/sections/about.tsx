'use client'

import MagnetLines from '../ui/MagnetLines/MagnetLines'
import TrueFocus from '../ui/TrueFocus/TrueFocus'
import DecryptedText from '../ui/DecryptedText/DecryptedText'
import { TracingBeam } from '../ui/tracing-beam'

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Narrative */}
          <TracingBeam className="pl-4 sm:pl-12">
            <div className="space-y-12 pb-12">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                  The{' '}
                  <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    OgiTech
                  </span>{' '}
                  Story
                </h2>
                <div className="text-xl text-foreground/80 leading-relaxed mb-6">
                  <DecryptedText
                    text="Ogi Tech is a visionary technology collective dedicated to driving global digital transformation by harmonizing cultural integrity with cutting-edge innovation. Our core purpose is to engineer secure, scalable, and human-centric ecosystems that transform complex challenges into sustainable progress."
                    animateOn="view"
                    revealDirection="center"
                    speed={30}
                    maxIterations={10}
                    sequential={true}
                  />
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                  "By blending a resilient heritage with advanced intelligence, we strive to redefine the boundaries of what is possible in the digital landscape."
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed text-lg font-medium">
                  “To be the global catalyst for digital transformation, bridging cultural integrity with cutting-edge intelligence to redefine the boundaries of what’s possible in technology”
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground/70 leading-relaxed">
                      To engineer scalable, high-performance digital ecosystems that empower global organizations to lead with confidence in an ever-evolving technological landscape.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground/70 leading-relaxed">
                      To uphold the highest standards of digital security and system integrity, protecting the future of data-driven intelligence through relentless innovation and robust infrastructure.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground/70 leading-relaxed">
                      To harmonize cultural values with human-centric design, delivering intuitive experiences that bridge the gap between complex science and daily life.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground/70 leading-relaxed">
                      To pioneer transformative solutions in AI, IoT, and beyond, turning ambitious ideas into sustainable realities that drive progress and redefine industry standards.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </TracingBeam>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-card/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <MagnetLines 
                  rows={12} 
                  columns={12} 
                  containerSize="100%" 
                  lineColor="var(--primary)" 
                  lineWidth="2px" 
                  lineHeight="20px" 
                />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Founded by Technical Pioneers
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      Core team of specialized engineers with deep technical credentials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Dual Discipline Approach
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      Synergy between Computer Science and Information Systems expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Precision Engineering
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      Technical rigor combined with innovative solutions for enterprise challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
