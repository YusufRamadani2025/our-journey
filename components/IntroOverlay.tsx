'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Volume2, VolumeX } from 'lucide-react' // Import Icon Volume
import { useLenis } from 'lenis/react'

export default function IntroOverlay() {
  const [isEntered, setIsEntered] = useState(false)
  const [isMuted, setIsMuted] = useState(false) // State buat nyimpen status Mute
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
        lenis.stop()
        window.scrollTo(0, 0) 
    }
    document.body.style.overflow = 'hidden'
  }, [lenis])

  const handleEnter = () => {
    if (lenis) lenis.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)

    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play().catch((err) => console.log('Audio error:', err))
    }

    setIsEntered(true)
    
    setTimeout(() => {
        document.body.style.overflow = 'auto'
        if (lenis) lenis.start()
    }, 1000) 
  }

  // Fungsi Toggle Mute
  const toggleAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* --- TOMBOL MUTE FLOATING (Hanya muncul setelah Masuk) --- */}
      <AnimatePresence>
        {isEntered && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 1, duration: 0.5 }} // Muncul telat dikit biar elegan
            onClick={toggleAudio}
            className="fixed bottom-8 right-8 z-[999] p-4 rounded-full 
                       bg-white/10 backdrop-blur-md border border-white/20 
                       text-white hover:bg-neon-pink hover:border-neon-pink 
                       transition-all duration-300 shadow-lg cursor-pointer group"
          >
            {isMuted ? (
              <VolumeX size={20} className="fill-current" />
            ) : (
              // Icon Volume2 ada animasi 'pulse' dikit pas nyala
              <Volume2 size={20} className="fill-current group-hover:animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- INTRO SCREEN (Logic Lama) --- */}
      <AnimatePresence>
        {!isEntered && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
            exit={{ 
              y: '-100%', 
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center space-y-8 p-4 relative z-10"
            >
              <div className="space-y-4">
                <p className="font-sans text-xs tracking-[0.5em] text-gray-400 uppercase">
                  A Visual Memory
                </p>
                <h1 className="font-serif text-5xl md:text-8xl tracking-tighter">
                  Rama & Raissa
                </h1>
              </div>

              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05, borderColor: 'var(--color-neon-pink)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 mt-8 
                           border border-white/20 rounded-full 
                           hover:bg-neon-pink/10 hover:text-neon-pink 
                           transition-all duration-500 cursor-pointer"
              >
                <Play size={12} className="fill-white group-hover:fill-neon-pink transition-colors" /> 
                <span className="font-sans text-xs tracking-widest uppercase">
                  Start Experience
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}