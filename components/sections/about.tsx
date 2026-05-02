'use client'

import MagnetLines from '../ui/MagnetLines/MagnetLines'
import TrueFocus from '../ui/TrueFocus/TrueFocus'
import DecryptedText from '../ui/DecryptedText/DecryptedText'

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Narrative */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                The{' '}
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  OgiTech
                </span>{' '}
                Story
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                OgiTech was founded by a collective of technical experts from 
                {/* // Placeholder for "True Focus" on the following text */}
                <TrueFocus 
                  sentence="Angkatan 1 (First Batch) of Institut Teknologi Bacharuddin Jusuf Habibie (ITH)"
                  manualMode={false}
                  blurAmount={2}
                  borderColor="var(--primary)"
                  glowColor="rgba(255, 214, 10, 0.4)"
                  animationDuration={0.8}
                  pauseBetweenAnimations={1.5}
                  className="inline font-bold text-primary"
                />.
              </p>
              {/* // Placeholder for "Decrypted Text" for the company history paragraph */}
              <div className="text-lg text-foreground/70 leading-relaxed">
                <DecryptedText
                  text="Our core team represents a unique synergy between Computer Science and Information Systems disciplines, bringing together complementary expertise to solve complex technical challenges with academic rigor and industry-leading innovation."
                  animateOn="view"
                  revealDirection="center"
                  speed={40}
                  maxIterations={15}
                  sequential={true}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                We believe in engineering digital excellence through precision architecture. Our collective expertise spans AI engineering, IoT systems, cybersecurity, and advanced software engineering practices. Every project we undertake reflects our commitment to technical rigor and innovation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Expertise Foundation</h3>
              <p className="text-foreground/70 leading-relaxed">
                Drawing from both Computer Science and Information Systems backgrounds, we architect solutions that balance theoretical rigor with practical implementation. This dual perspective allows us to design systems that are not only technically sound but also operationally efficient and scalable.
              </p>
            </div>
          </div>

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
                      Founded by Angkatan 1 Experts
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      Core team from the first batch of ITH with deep technical credentials.
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
