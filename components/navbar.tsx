'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import VariableProximity from './ui/VariableProximity/VariableProximity'
import Magnet from './ui/Magnet/Magnet'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navContainerRef = useRef<HTMLDivElement>(null)

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="border-b border-primary/20"
        style={{ 
          backgroundColor: 'rgba(0, 4, 74, 0.85)',
          backdropFilter: 'blur(12px)'
        }} 
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            {/* // Placeholder for React Bits "Magnetic" component */}
            <div className="flex-shrink-0 flex items-center">
              <Magnet padding={50} magnetStrength={30}>
                <div
                  className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-primary/10 p-1.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,214,10,0.4)]"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(255, 214, 10, 0.8)) brightness(1.2) contrast(1.1)'
                  }}
                >
                  <Image
                    src="/logo_ogitech_clean.jpg"
                    alt="OgiTech Logo"
                    fill
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
              </Magnet>
            </div>

            {/* Desktop Navigation */}
            <div ref={navContainerRef} className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                // // Placeholder for "Variable Proximity" on Navbar Links
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 hover:bg-white/5 rounded-lg"
                >
                  <VariableProximity
                    label={item.label}
                    containerRef={navContainerRef}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 800, 'opsz' 40"
                    radius={100}
                    falloff="linear"
                  />
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-primary/10 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            style={{ 
              backgroundColor: 'rgba(0, 4, 74, 0.95)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(255, 214, 10, 0.1)'
            }}
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
