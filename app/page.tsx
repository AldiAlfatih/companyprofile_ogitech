import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ServicesSection } from '@/components/sections/services'
import { PortfolioSection } from '@/components/sections/portfolio'
import { ProcessSection } from '@/components/sections/process'
import { TeamSection } from '@/components/sections/team'
import { TechStackSection } from '@/components/sections/tech-stack'
import { ContactSection } from '@/components/sections/contact'
import { FooterSection } from '@/components/sections/footer'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TeamSection />
        <TechStackSection />
        <ContactSection />
        <FooterSection />
        <Toaster position="top-center" />
      </main>
    </>
  )
}
