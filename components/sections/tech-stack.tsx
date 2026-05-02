'use client'

import LogoLoop from '../ui/LogoLoop/LogoLoop'

export function TechStackSection() {
  const technologies = [
    'Next.js',
    'React',
    'TypeScript',
    'TensorFlow',
    'Python',
    'Docker',
    'AWS',
    'PostgreSQL',
    'Laravel',
    'Node.js',
    'Kubernetes',
    'GraphQL',
  ]

  return (
    <section
      id="tech-stack"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Our Technology Stack
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Modern tools and frameworks that power our solutions.
          </p>
        </div>

        <div className="space-y-8">
          <LogoLoop
            speed={40}
            direction="left"
            items={technologies.map((tech, idx) => (
              <div
                key={idx}
                className="group px-8 py-6 bg-secondary/10 border border-primary/10 rounded-xl hover:border-primary/40 transition-all duration-300 flex items-center justify-center min-w-[200px] backdrop-blur-sm"
              >
                <span className="font-semibold text-foreground/80 group-hover:text-primary transition-colors text-lg">
                  {tech}
                </span>
              </div>
            ))}
          />
          <LogoLoop
            speed={50}
            direction="right"
            items={[...technologies].reverse().map((tech, idx) => (
              <div
                key={idx}
                className="group px-8 py-6 bg-secondary/10 border border-primary/10 rounded-xl hover:border-primary/40 transition-all duration-300 flex items-center justify-center min-w-[200px] backdrop-blur-sm"
              >
                <span className="font-semibold text-foreground/80 group-hover:text-primary transition-colors text-lg">
                  {tech}
                </span>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  )
}
