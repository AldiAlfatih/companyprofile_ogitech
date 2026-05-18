'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Leaf, Landmark, HandMetal, TrafficCone, Building2, MapPin, ExternalLink } from 'lucide-react'
import SplitText from '../ui/SplitText/SplitText'
import SpotlightCard from '../ui/SpotlightCard/SpotlightCard'

const ogiProjects = [
  {
    icon: Leaf,
    title: 'Hijau Hub',
    category: 'Environmental App',
    shortDesc: 'A smart green platform connecting eco-conscious communities and sustainability initiatives.',
    description: 'Hijau Hub is a digital platform designed to bridge environmental communities, track sustainability progress, and promote green living initiatives across Indonesia.',
    tech: ['CI3', 'MySQL', 'Bootstrap'],
    gradient: 'from-yellow-500/20 via-amber-400/10 to-transparent',
    accent: '#ffd60a',
    border: 'border-yellow-500/30',
    glow: 'hover:shadow-yellow-500/20',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    badge: 'Green E-Commerce',
    image: '/projek/hijauhub.png',
    link: 'https://drive.google.com/file/d/1HuGOIuJRfdPVt7YfRFAVECqCexrJSArJ/view?usp=sharing',
  },
  {
    icon: Landmark,
    title: 'Sistem Keuangan KI',
    category: 'Finance System',
    shortDesc: 'A comprehensive financial management system built for KI organization operations.',
    description: 'An integrated financial management system for the KI organization, covering budgeting, transaction tracking, reporting, and financial oversight in a streamlined dashboard.',
    tech: ['Laravel', 'MySQL', 'Vue.js', 'Chart.js'],
    gradient: 'from-amber-500/20 via-yellow-400/10 to-transparent',
    accent: '#f59e0b',
    border: 'border-amber-500/30',
    glow: 'hover:shadow-amber-500/20',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    badge: 'Fintech',
    image: '/projek/kalla.png',
    link: 'https://drive.google.com/file/d/10HGSje36wUB61xMnVNkdzSmijtosfkga/view?usp=sharing',
  },
  {
    icon: HandMetal,
    title: 'ISARA',
    category: 'Deep Learning',
    shortDesc: 'Real-time BISINDO sign language translator powered by Computer Vision.',
    description: 'A real-time BISINDO sign language translator using Computer Vision and YOLOv8 to bridge communication for the deaf community in Indonesia.',
    tech: ['Flutter', 'Python', 'Mediapipes', 'Tensorflow', 'Computer Vision', 'NLP', 'Supabase'],
    gradient: 'from-yellow-400/20 via-amber-500/10 to-transparent',
    accent: '#ffd60a',
    border: 'border-yellow-400/30',
    glow: 'hover:shadow-yellow-400/20',
    iconColor: 'text-yellow-300',
    iconBg: 'bg-yellow-400/10',
    badge: 'AI & Mobile',
    image: '/projek/isara.jpg',
    link: 'https://drive.google.com/file/d/1svYq39wC3I9DJXqBuyI_xWUNENqY0-Uv/view?usp=sharing',
  },
  {
    icon: TrafficCone,
    title: 'Lampu Lalu Lintas',
    category: 'IoT Engineering',
    shortDesc: 'Intelligent adaptive traffic light system using IoT sensors and real-time control.',
    description: 'An IoT-based adaptive traffic light management system that uses real-time sensor data to dynamically optimize traffic flow and reduce congestion at intersections.',
    tech: ['ESP32', 'IoT', 'C++', 'MQTT', 'Dashboard'],
    gradient: 'from-amber-400/20 via-yellow-500/10 to-transparent',
    accent: '#f59e0b',
    border: 'border-amber-400/30',
    glow: 'hover:shadow-amber-400/20',
    iconColor: 'text-amber-300',
    iconBg: 'bg-amber-400/10',
    badge: 'IoT & AI',
    image: '/projek/traffic.png',
    link: 'https://drive.google.com/file/d/1b8lyPh32ngNo0QFFwF5r777SffK97y_f/view?usp=sharing',
  },
  {
    icon: Building2,
    title: 'BAPPEDA',
    category: 'Government System',
    shortDesc: 'Regional development planning information system for local government.',
    description: 'A digital information system for BAPPEDA (Regional Development Planning Agency) to manage, monitor, and report development programs across government sectors efficiently.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Inertia.js'],
    gradient: 'from-yellow-500/25 via-amber-400/10 to-transparent',
    accent: '#ffd60a',
    border: 'border-yellow-500/30',
    glow: 'hover:shadow-yellow-500/20',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    badge: 'GovTech',
    image: '/projek/bappeda.png',
    link: 'https://drive.google.com/file/d/1u8bygkt65VSuo-n6w4GH8XTgbL_AjNCk/view?usp=sharing',
  },
  {
    icon: MapPin,
    title: 'LAGOTA',
    category: 'Local App',
    shortDesc: 'A community-driven local services and discovery platform.',
    description: 'LAGOTA is a local community platform designed to connect residents with nearby services, events, and information, empowering local neighborhoods through digital access.',
    tech: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL'],
    gradient: 'from-amber-500/25 via-yellow-500/10 to-transparent',
    accent: '#f59e0b',
    border: 'border-amber-500/30',
    glow: 'hover:shadow-amber-500/20',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    badge: 'F&B E-commerce',
    image: '/projek/lagota.png',
    link: 'https://drive.google.com/file/d/1ta-oW511dLGjrGzgd4UKkkE03TBR00pH/view?usp=sharing',
  },
]


export function PortfolioSection() {

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            Our Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            <SplitText text="Featured Projects" delay={0.08} />
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Real solutions we've built — from AI to IoT, from web to mobile.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ogiProjects.map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                <SpotlightCard
                  className={`cursor-pointer h-full p-7 bg-card/40 backdrop-blur-sm border ${project.border} rounded-2xl hover:border-opacity-60 transition-all duration-500 hover:shadow-2xl ${project.glow} relative overflow-hidden`}
                  spotlightColor={`${project.accent}22`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Image Header */}
                    <div className="relative w-[calc(100%+3.5rem)] h-48 sm:h-52 -mx-7 -mt-7 mb-6 overflow-hidden rounded-t-2xl border-b border-primary/10">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                      />
                      {/* Overlays for depth and text readability */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-xl">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow px-1">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                    {/* Short description */}
                    <p className="text-sm text-foreground/60 leading-relaxed mb-5 flex-grow group-hover:text-foreground/80 transition-colors">
                      {project.shortDesc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-foreground/60 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-foreground/40">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <span className="text-xs text-foreground/40 font-medium">{project.category}</span>
                      <span
                        className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-300"
                        style={{ color: project.accent }}
                      >
                        View PDF <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                    </div>
                  </div>
                </SpotlightCard>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
