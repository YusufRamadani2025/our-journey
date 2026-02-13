'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
        src="/hero.jpeg" 
        alt="Us"
        fill
        className="object-cover opacity-60" // opacity sesuaikan selera
        priority
        
        // --- TAMBAHAN PENTING BIAR HD ---
        quality={100} 
        sizes="100vw" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* CONTENT (Ubah items-center jadi items-end biar turun) */}
      <motion.div 
        style={{ opacity }} 
        // Ganti 'justify-center' jadi 'justify-end' atau atur padding bottom (pb)
        className="relative z-10 h-full flex flex-col items-center justify-end pb-32 px-4 text-center"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          // Tambahin drop-shadow biar kebaca jelas
          className="font-sans text-xs md:text-sm tracking-[0.5em] text-gray-200 uppercase mb-4 drop-shadow-md"
        >
          Since 2025 &mdash; Forever
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            // Tambahin 'drop-shadow-2xl' biar teksnya misah dari baju/background
            className="font-serif text-6xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neon-pink drop-shadow-2xl"
          >
            The Journey
          </motion.h1>
        </div>
        
        {/* Tambahan dikit: Kasih deskripsi kecil di bawahnya kalau mau lebih manis */}
         <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="font-serif text-sm md:text-lg italic text-white/80 mt-4 max-w-md drop-shadow-md"
         >
            "Every sunset brings the promise of a new dawn with you."
         </motion.p>

      </motion.div>
    </section>
  )
}