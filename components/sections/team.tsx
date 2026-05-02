'use client'

import { Badge } from '@/components/ui/badge'
import SpotlightCard from '../ui/SpotlightCard/SpotlightCard'
import SplitText from '../ui/SplitText/SplitText'

const team = [
  {
    name: 'Rahmat Eka Putra R Palaloi',
    role: 'Product Design',
    expertise: ['Product Design', 'UI/UX Design', 'System Analyst'],
    quote: 'Future loading... Please don&apos;t turn off the enthusiasm',
    initials: 'REP',
  },
  {
    name: 'Muhammad Aldi Alfatih',
    role: 'AI & Mobile Engineer',
    expertise: ['AI Engineer', 'Mobile Development', 'Fullstack Developer'],
    quote: 'I learned that if I hesitate, I won&apos;t get anything',
    initials: 'MAA',
  },
  {
    name: 'Lukman Hakim',
    role: 'Data & Backend',
    expertise: ['Data Analytics', 'Backend Engineer', 'Network Security'],
    quote: 'Be part of the future, not just a spectator.',
    initials: 'LH',
  },
  {
    name: 'Muhammad Anugrah',
    role: 'Security & Infrastructure',
    expertise: ['Cyber Security', 'Database Engineer', 'Cloud Infrastructure'],
    quote: 'Be someone who takes on the future, not a coward who stays safe in their comfort zone',
    initials: 'MA',
  },
  {
    name: 'Muhammad Alfian',
    role: 'Quality Assurance',
    expertise: ['Quality Assurance', 'Database Architecture', 'Business Process'],
    quote: 'What is lost today will be replaced by something better in the future',
    initials: 'MAL',
  },
  {
    name: 'Muhammad Rivaldi Jefri',
    role: 'IoT & Frontend',
    expertise: ['IoT Engineer', 'Frontend Developer', 'Robotic Engineering'],
    quote: 'Keep moving forward, you don&apos;t have to be perfect.',
    initials: 'MRJ',
  },
]

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <SplitText text="Meet Our Team" delay={0.08} />
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Six experts united by a passion for engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <SpotlightCard
              key={idx}
              className="group p-8 bg-card/40 backdrop-blur-md border border-primary/10 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              spotlightColor="rgba(255, 214, 10, 0.15)"
            >
              <div className="relative z-10">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {member.initials}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary/80 mb-4 tracking-wider uppercase">
                  {member.role}
                </p>

                <p className="italic text-foreground/80 text-base mb-6 border-l-2 border-primary/40 pl-4 leading-relaxed">
                  "{member.quote}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0 rounded-full px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
