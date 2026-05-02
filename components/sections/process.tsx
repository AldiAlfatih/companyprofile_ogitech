'use client'

import {
  Lightbulb,
  Settings,
  Code2,
  CheckCircle,
  Rocket,
} from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description:
      'We collaborate closely with stakeholders to understand business objectives, technical requirements, and project scope.',
  },
  {
    icon: Settings,
    title: 'Architecture Design',
    description:
      'Our experts design scalable, secure architectures that balance performance, maintainability, and cost efficiency.',
  },
  {
    icon: Code2,
    title: 'Development & Implementation',
    description:
      'Using precision engineering practices, we build robust solutions with comprehensive testing and quality assurance.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description:
      'Rigorous testing protocols ensure reliability, security, and adherence to industry best practices throughout.',
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description:
      'We manage seamless deployments and provide ongoing technical support to ensure long-term success.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Development{' '}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            A structured, iterative approach ensuring quality at every stage of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative h-full bg-card border border-primary/10 group-hover:border-primary/30 rounded-xl p-6 transition-all duration-300 flex flex-col">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-foreground/70 leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Step number */}
                  <div className="mt-6 text-xs font-bold text-primary/50">
                    STEP {index + 1}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
