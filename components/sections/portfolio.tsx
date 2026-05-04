'use client'

import React, { useState } from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import SplitText from '../ui/SplitText/SplitText'

const ogiProjects = [
  {
    title: "Stunting Risk Prediction",
    category: "AI & Health",
    description: "Sistem cerdas berbasis SARIMAX, LSTM, dan GRU untuk memprediksi risiko stunting pada balita dengan akurasi tinggi sebagai proyek tugas akhir di ITH.",
    tech: ["Python", "LSTM", "Hugging Face", "React"],
  },
  {
    title: "ISARA Sign Language",
    category: "Deep Learning",
    description: "Penerjemah bahasa isyarat BISINDO secara real-time menggunakan Computer Vision untuk membantu komunikasi teman tuli di Indonesia.",
    tech: ["YOLOv8", "TensorFlow", "React Native"],
  },
  {
    title: "Magnetic Bird Repeller",
    category: "IoT Engineering",
    description: "Alat pemantik api magnetik otomatis berbasis ESP32 untuk mengusir hama burung pada lahan pertanian secara efisien.",
    tech: ["ESP32", "IoT", "C++", "Sensors"],
  },
  {
    title: "OgiTech Profile",
    category: "Fullstack Web",
    description: "Website company profile premium dengan interaksi tingkat tinggi menggunakan React Bits dan Aceternity UI untuk branding software house.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            <SplitText text="Our Innovation Gallery" delay={0.08} />
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of technical breakthroughs and real-world solutions developed by our specialized team.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <InfiniteMovingCards
            items={ogiProjects}
            direction="left"
            speed="slow"
            onItemClick={(project) => setSelectedProject(project)}
          />
        </div>
      </div>

      {/* MODAL POP-UP */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-primary p-8 sm:p-12 rounded-3xl shadow-[0_0_50px_rgba(255,214,10,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-primary hover:rotate-90 transition-transform p-2 bg-primary/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="relative z-10">
                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                  {selectedProject.description}
                </p>
                
                <div className="space-y-6">
                  <h4 className="text-primary text-xs font-bold uppercase tracking-wider">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((t: string) => (
                      <span 
                        key={t} 
                        className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 text-sm text-white/90 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
