'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// --- DATA TIMELINE (GANTI DISINI) ---
const TIMELINE_DATA = [
  {
    year: "Agust 2025",
    title: "The First Encounter",
    description: "Awalnya cuma chat 'misi', siapa sangka bakal jadi sejauh ini. Momen dimana kita baru ketemu udah petenteng - petenteng.",
    image: "/galery3.jpg" 
  },
  {
    year: "2025",
    title: "First Trip Together",
    description: "Jalan-jalan pertama kita. Nyasar bareng, ketawa bareng, dan makan pinggir jalan yang ternyata enak banget.",
    image: "/galery1.jpg" 
  },
  {
    year: "Late 2025",
    title: "Through The Storms",
    description: "Gak selamanya mulus, tapi kita belajar buat nurunin ego dan saling ngerti. We grow stronger here.",
    image: "/galery6.jpg"
  },
  {
    year: "Now",
    title: "Still Counting",
    description: "Setiap hari adalah halaman baru. Can't wait for what's next with you.",
    image: "/galery4.jpg" // Pake foto hero lagi atau foto terbaru
  }
]

// Komponen Satuan (Item Timeline)
function TimelineItem({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0 // Cek urutan ganjil/genap buat zig-zag

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex items-center justify-between w-full mb-24 relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* 1. BAGIAN KONTEN (Teks) */}
      <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <h3 className="text-neon-pink font-serif text-4xl mb-2">{item.year}</h3>
        <h4 className="text-white font-sans text-xl font-bold uppercase tracking-widest mb-4">
          {item.title}
        </h4>
        <p className="text-gray-400 font-sans text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* 2. TITIK TENGAH (GLOWING PINK DOT) */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        {/* Lingkaran Luar (Pulse) */}
        <div className="w-8 h-8 bg-neon-pink/20 rounded-full animate-ping absolute"></div>
        {/* Lingkaran Dalam (Solid) */}
        <div className="w-4 h-4 bg-neon-pink rounded-full z-10 shadow-[0_0_15px_rgba(255,45,85,0.8)]"></div>
      </div>

      {/* 3. BAGIAN FOTO */}
      <div className={`w-5/12 ${isEven ? 'pl-8' : 'pr-8'}`}>
        <div className="relative h-64 w-full overflow-hidden rounded-lg border border-white/10 group">
            {/* Overlay Pink pas hover */}
            <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
            
            <Image 
              src={item.image} 
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section className="min-h-screen bg-black py-32 px-4 md:px-12 relative overflow-hidden">
      
      {/* GARIS TENGAH (Vertical Line) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* JUDUL SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-24 bg-black inline-block relative left-1/2 -translate-x-1/2 z-20 px-4"
        >
           <h2 className="font-serif text-3xl md:text-5xl text-white">
             Our Timeline
           </h2>
        </motion.div>

        {/* LOOPING ITEM TIMELINE */}
        {TIMELINE_DATA.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}

        {/* PENUTUP TIMELINE */}
        <div className="text-center mt-32">
           <p className="font-serif text-gray-500 italic">To be continued...</p>
        </div>

      </div>
    </section>
  )
}