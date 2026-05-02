'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Linkedin } from 'lucide-react'
import SpotlightCard from '../ui/SpotlightCard/SpotlightCard'
import SplitText from '../ui/SplitText/SplitText'

const team = [
  {
    name: 'Rahmat Eka Putra R Palaloi',
    role: 'Product Design',
    expertise: ['Product Design', 'UI/UX Design', 'System Analyst'],
    quote: 'Future loading... Please don&apos;t turn off the enthusiasm',
    initials: 'REP',
    image: '/foto_ogitech/putra.png',
    linkedin: '#',
  },
  {
    name: 'Muhammad Aldi Alfatih',
    role: 'AI & Mobile Engineer',
    expertise: ['AI Engineer', 'Mobile Development', 'Fullstack Developer'],
    quote: 'I learned that if I hesitate, I won&apos;t get anything',
    initials: 'MAA',
    image: '/foto_ogitech/Aldi.png',
    linkedin: 'https://www.linkedin.com/in/aldialfatih/',
  },
  {
    name: 'Lukman Hakim',
    role: 'Data & Backend',
    expertise: ['Data Analytics', 'Backend Engineer', 'Network Security'],
    quote: 'Be part of the future, not just a spectator.',
    initials: 'LH',
    image: '/foto_ogitech/Lukman.png',
    linkedin: '#',
  },
  {
    name: 'Muhammad Anugrah',
    role: 'Security & Infrastructure',
    expertise: ['Cyber Security', 'Database Engineer', 'Cloud Infrastructure'],
    quote: 'Be someone who takes on the future, not a coward who stays safe in their comfort zone',
    initials: 'MA',
    image: '/foto_ogitech/Anugrah.jpeg',
    linkedin: '#',
  },
  {
    name: 'Muhammad Alfian',
    role: 'Quality Assurance',
    expertise: ['Quality Assurance', 'Database Architecture', 'Business Process'],
    quote: 'What is lost today will be replaced by something better in the future',
    initials: 'MAL',
    image: '/foto_ogitech/alfian.png',
    linkedin: '#',
  },
  {
    name: 'Muhammad Rivaldi Jefri',
    role: 'IoT & Frontend',
    expertise: ['IoT Engineer', 'Frontend Developer', 'Robotic Engineering'],
    quote: 'Keep moving forward, you don&apos;t have to be perfect.',
    initials: 'MRJ',
    image: '/foto_ogitech/Rivaldi.png',
    linkedin: '#',
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
            <a
              key={idx}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SpotlightCard
                className="group p-8 bg-card/40 backdrop-blur-md border border-primary/10 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer relative"
                spotlightColor="rgba(255, 214, 10, 0.15)"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                  <Linkedin size={20} />
                </div>
                <div className="relative z-10">
                  {/* Avatar / Photo */}
                  <div className="relative w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl shadow-xl overflow-hidden border border-white/10">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        member.initials
                      )}
                    </div>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
