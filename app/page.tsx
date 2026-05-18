import dynamic from 'next/dynamic'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { Toaster } from 'sonner'

// Lazy load semua section di bawah Hero — tidak perlu dimuat saat halaman pertama dibuka
const PortfolioSection = dynamic(() =>
  import('@/components/sections/portfolio').then(m => ({ default: m.PortfolioSection }))
)
const ServicesSection = dynamic(() =>
  import('@/components/sections/services').then(m => ({ default: m.ServicesSection }))
)
const ProcessSection = dynamic(() =>
  import('@/components/sections/process').then(m => ({ default: m.ProcessSection }))
)
const TeamSection = dynamic(() =>
  import('@/components/sections/team').then(m => ({ default: m.TeamSection }))
)
const TechStackSection = dynamic(() =>
  import('@/components/sections/tech-stack').then(m => ({ default: m.TechStackSection }))
)
const ContactSection = dynamic(() =>
  import('@/components/sections/contact').then(m => ({ default: m.ContactSection }))
)
const AboutSection = dynamic(() =>
  import('@/components/sections/about').then(m => ({ default: m.AboutSection }))
)
const FooterSection = dynamic(() =>
  import('@/components/sections/footer').then(m => ({ default: m.FooterSection }))
)

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
