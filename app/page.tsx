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
      <main className="min-h-screen">
        {/* 1. Hero — Kesan pertama */}
        <div id="home">
          <HeroSection />
        </div>
        {/* 2. Portfolio — Tunjukkan karya nyata */}
        <PortfolioSection />
        {/* 3. Services — Layanan singkat & padat */}
        <ServicesSection />
        {/* 4. Process — Alur kerja */}
        <ProcessSection />
        {/* 5. Team — Tim kami */}
        <TeamSection />
        {/* 6. Tech Stack — Teknologi */}
        <TechStackSection />
        {/* 7. Contact — Mulai proyek */}
        <ContactSection />
        {/* 8. OGITECH Story — Penutup perjalanan */}
        <AboutSection />
        {/* 9. Footer */}
        <FooterSection />
        <Toaster position="top-center" />
      </main>
    </>
  )
}
