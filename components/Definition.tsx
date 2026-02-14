'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion'
import { Heart } from 'lucide-react' // JANGAN LUPA IMPORT INI

const START_DATE = '2025-08-30' 

function Counter({ value, label }: { value: number, label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString()
      }
    })
  }, [springValue])

  return (
    <div className="flex flex-col items-center md:items-start z-10 relative">
      <span ref={ref} className="font-serif text-5xl md:text-7xl text-white tracking-tight">
        0
      </span>
      <span className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
        {label}
      </span>
    </div>
  )
}

export default function Definition() {
  const [daysTogether, setDaysTogether] = useState(0)

  useEffect(() => {
    const start = new Date(START_DATE)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) 
    setDaysTogether(diffDays)
  }, [])

  return (
    <section className="min-h-screen bg-neutral-950 flex items-center justify-center py-24 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center relative">
        
        {/* Definisi Kiri */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6 z-10"
        >
          <div className="space-y-2">
            <h2 className="font-serif text-6xl md:text-8xl text-white">
              Us <span className="text-2xl text-gray-500 font-sans font-light align-top">/ʌs/</span>
            </h2>
            <p className="font-serif italic text-neon-pink text-xl">noun.</p>
          </div>
          
          <div className="space-y-4 border-l-2 border-white/20 pl-6">
            <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base">
              1. Tidak ada yang lebih indah ketika bersama-mu.
            </p>
            <p className="font-sans text-gray-300 leading-relaxed text-sm md:text-base">
              2. Aku, Kamu, dan Kita.
            </p>
          </div>
        </motion.div>

        {/* Statistik Kanan */}
        <div className="grid grid-cols-2 gap-12 relative">
            
            {/* BACKGROUND BLOB PINK (Glowing Effect) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/20 blur-[100px] rounded-full pointer-events-none"></div>

            <Counter value={daysTogether} label="Days Together" />
            
            {/* ICON LOVE PINK */}
            <div className="flex flex-col items-center md:items-start z-10 relative">
                <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-neon-pink mb-2"
                >
                    <Heart size={64} fill="currentColor" />
                </motion.div>
                <span className="font-sans text-xs tracking-[0.2em] text-gray-500 uppercase mt-2">
                    Endless Love
                </span>
            </div>

            <Counter value={124} label="Go for a walk" />
            <Counter value={110} label="Eat Together" />
        </div>

      </div>
    </section>
  )
}