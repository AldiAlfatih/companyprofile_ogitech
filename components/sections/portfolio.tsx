'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import TiltedCard from '../ui/TiltedCard/TiltedCard'
import ShinyText from '../ui/ShinyText/ShinyText'
import SplitText from '../ui/SplitText/SplitText'

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    stack: ['Next.js', 'AI Integration', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Project Beta',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    stack: ['IoT Architecture', 'Python', 'Real-time Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
    stack: ['Cybersecurity', 'Blockchain', 'Smart Contracts'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Project Delta',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam.',
    stack: ['Machine Learning', 'Data Pipeline', 'Cloud Infrastructure'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            <SplitText text="Our Portfolio" delay={0.08} />
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            A selection of projects showcasing our expertise across AI, IoT, cybersecurity, and enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <TiltedCard
              key={project.id}
              imageSrc={project.image}
              altText={project.title}
              captionText={project.title}
              containerHeight="500px"
              containerWidth="100%"
              imageHeight="500px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.02}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="p-8 h-full flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent rounded-[15px] border border-primary/10">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>

                  <p className="text-foreground/80 text-base leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-4 py-1.5 rounded-full bg-primary/10 border-primary/30 text-sm font-medium"
                      >
                        <ShinyText text={tech} color="var(--primary)" shineColor="#FFFFFF" speed={3} />
                      </Badge>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
