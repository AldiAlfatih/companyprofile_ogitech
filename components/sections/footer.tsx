'use client'

import Image from 'next/image'
import TextPressure from '../ui/TextPressure/TextPressure'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="bg-[#00044a] border-t border-primary/20 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Large Branding Section */}
        <div className="text-center mb-20">
          {/* // Placeholder for "Text Pressure" or "Shiny Text" on the OgiTech footer branding */}
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-primary/10 hover:text-primary transition-all duration-1000 cursor-default select-none tracking-tighter">
            OgiTech
          </h2>
          <TextPressure
            text="OgiTech"
            textColor="var(--primary)"
            minFontSize={72}
            flex={true}
            weight={true}
            width={true}
            italic={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-primary/10 overflow-hidden">
                <Image
                  src="/logo_ogitech_clean.jpg"
                  alt="OgiTech Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="relative w-32 h-10">
                <TextPressure
                  text="OgiTech"
                  textColor="var(--primary)"
                  minFontSize={24}
                  flex={true}
                  weight={true}
                  width={true}
                  italic={true}
                />
              </div>
            </div>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Architecting the future through precision AI and IoT systems. Founded by technical pioneers from Angkatan 1 ITH.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-8">Resources</h4>
            <ul className="grid grid-cols-2 gap-4">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-all duration-300 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-8">Connect</h4>
            <div className="flex gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary transition-all duration-500"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium tracking-wide uppercase text-foreground/40">
          <p>&copy; {currentYear} OgiTech &bull; Engineering Digital Excellence</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
