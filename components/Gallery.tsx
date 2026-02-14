'use client'

import { useState, useEffect } from 'react' // Tambah useEffect
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, LayoutGrid, Rows } from 'lucide-react'

const GALLERY_IMAGES = [
  { src: '/galery1.jpg', caption: 'Pulau Merah Date' },
  { src: '/galery2.png', caption: 'Jenguk Adek' },
  { src: '/galery3.jpg', caption: 'Nganterin ibuk date' },
  { src: '/galery4.jpg', caption: 'Selfie with Juara' },
  { src: '/galery5.jpg', caption: 'Basketball date' },
  { src: '/galery6.jpg', caption: 'Kalipait Date' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [mobileLayout, setMobileLayout] = useState<'single' | 'grid'>('single')
  
  // State buat nyimpen foto mana yang lagi "Disorot" otomatis
  const [highlightIndex, setHighlightIndex] = useState(0)

  // --- LOGIC AUTO HOVER (Jantung Animasinya) ---
  useEffect(() => {
    // Fungsi timer: jalan setiap 2.5 detik
    const interval = setInterval(() => {
      setHighlightIndex((current) => (current + 1) % GALLERY_IMAGES.length)
    }, 2500)

    // Bersihin timer pas pindah halaman biar gak memory leak
    return () => clearInterval(interval)
  }, [])

  const openLightbox = (src: string) => {
    setSelectedImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section className="min-h-screen bg-black py-32 px-4 md:px-12 relative z-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 space-y-4"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-white">
          Captured Moments
        </h2>
        <p className="font-sans text-gray-500 tracking-widest text-xs uppercase">
          Click to expand
        </p>
      </motion.div>

      {/* --- TOMBOL GANTI LAYOUT (MOBILE) --- */}
      <div className="flex justify-center gap-6 mb-8 md:hidden">
        <button 
            onClick={() => setMobileLayout('single')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border ${
                mobileLayout === 'single' 
                ? 'bg-white/10 border-neon-pink text-neon-pink' 
                : 'border-transparent text-gray-600'
            }`}
        >
            <Rows size={18} />
            <span className="text-xs uppercase tracking-widest">Feed</span>
        </button>

        <button 
            onClick={() => setMobileLayout('grid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border ${
                mobileLayout === 'grid' 
                ? 'bg-white/10 border-neon-pink text-neon-pink' 
                : 'border-transparent text-gray-600'
            }`}
        >
            <LayoutGrid size={18} />
            <span className="text-xs uppercase tracking-widest">Grid</span>
        </button>
      </div>

      {/* --- GRID UTAMA --- */}
      <div className={`
        max-w-7xl mx-auto gap-4 space-y-4
        ${mobileLayout === 'grid' ? 'columns-2' : 'columns-1'} 
        md:columns-3 md:gap-8 md:space-y-8
      `}>
        
        {GALLERY_IMAGES.map((img, idx) => {
            // Cek apakah foto ini lagi giliran disorot?
            const isHighlighted = idx === highlightIndex

            return (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg mb-4 md:mb-8"
                onClick={() => openLightbox(img.src)}
              >
                <div className={`
                    relative w-full border rounded-lg overflow-hidden transition-colors duration-500
                    ${isHighlighted ? 'border-neon-pink/50' : 'border-white/10'}
                `}>
                    <Image
                        src={img.src}
                        alt={img.caption}
                        width={800}
                        height={600}
                        className={`
                            w-full h-auto object-cover transition-all duration-1000 ease-in-out transform
                            /* LOGIC WARNA: 
                               Kalau Desktop: Pake group-hover (mouse)
                               Kalau Mobile: Pake isHighlighted (otomatis)
                            */
                            ${isHighlighted ? 'grayscale-0 scale-105' : 'grayscale scale-100'}
                            md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105
                        `}
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    
                    {/* CAPTION OVERLAY */}
                    <div className={`
                        absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                        flex items-end p-4 transition-opacity duration-1000
                        /* LOGIC CAPTION:
                           Muncul kalau lagi Highlighted (Mobile) ATAU di-Hover (Desktop)
                        */
                        ${isHighlighted ? 'opacity-100' : 'opacity-0'}
                        md:opacity-0 md:group-hover:opacity-100
                    `}>
                        <p className="font-serif text-white text-sm md:text-lg italic">
                            {img.caption}
                        </p>
                    </div>
                </div>
              </motion.div>
            )
        })}

      </div>

      {/* LIGHTBOX (Zoom) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button className="absolute top-8 right-8 text-white hover:text-neon-pink transition-colors z-50">
                <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <Image src={selectedImage} alt="Zoomed" fill className="object-contain" quality={100} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}