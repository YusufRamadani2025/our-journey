'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

// --- DATA FOTO (GANTI DENGAN NAMA FILE MU) ---
const GALLERY_IMAGES = [
  { src: '/galery1.jpg', caption: 'Pulau Merah Date' },
  { src: '/galery2.png', caption: 'Nemenin Adek Oprasi' },
  { src: '/galery3.jpg', caption: 'Nganterin ibuk' },
  { src: '/galery4.jpg', caption: 'Selfie with juara' },
  { src: '/galery5.jpg', caption: 'Nemenin Tanding Basket' },
  { src: '/galery6.jpg', caption: 'Kalipait Date' },
  // Tambahin foto sebanyak yang lu mau
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Fungsi Buka Lightbox (Zoom Foto)
  const openLightbox = (src: string) => {
    setSelectedImage(src)
    document.body.style.overflow = 'hidden' // Kunci scroll biar fokus ke foto
  }

  // Fungsi Tutup Lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto' // Buka scroll lagi
  }

  return (
    <section className="min-h-screen bg-black py-32 px-4 md:px-12 relative z-20">
      
      {/* JUDUL SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 space-y-4"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-white">
          Captured Moments
        </h2>
        <p className="font-sans text-gray-500 tracking-widest text-xs uppercase">
          Click to expand
        </p>
      </motion.div>

      {/* MASONRY LAYOUT (Pake CSS Columns - Simpel & Rapi) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
        
        {GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(img.src)}
          >
            {/* EFEK BW -> COLOR & GLOW BORDER PINK */}
            <div className="relative w-full border-2 border-transparent group-hover:border-neon-pink/50 transition-all duration-500 rounded-lg">
                <Image
                src={img.src}
                alt={img.caption}
                width={800} // Ukuran render
                height={600}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Caption Overlay (Muncul pas hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="font-serif text-white text-lg italic">{img.caption}</p>
                </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* LIGHTBOX OVERLAY (Pop-up Zoom) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            {/* Tombol Close */}
            <button className="absolute top-8 right-8 text-white hover:text-neon-pink transition-colors z-50">
                <X size={40} />
            </button>

            {/* Foto Zoom */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt="Zoomed"
                fill
                className="object-contain" // Biar foto gak kepotong (fit to screen)
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}