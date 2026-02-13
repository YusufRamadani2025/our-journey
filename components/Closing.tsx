'use client'

import { motion } from 'framer-motion'

export default function Closing() {
  return (
    <section className="min-h-[80vh] bg-black flex flex-col items-center justify-center py-32 px-4 relative z-20 overflow-hidden">
      
      {/* Background Gradient Halus (Pink Tipis di Bawah) */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/10 via-black to-black z-0"></div>

      {/* Kontainer Utama */}
      <div className="max-w-3xl text-center space-y-16 relative z-10 px-6">
        
        {/* ICON KUTIP (Muncul Duluan) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-neon-pink text-7xl font-serif opacity-80"
        >
            &ldquo;
        </motion.div>

        {/* ISI SURAT (Muncul Pelan-pelan) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }} // Muncul pas 10% elemen masuk layar
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
            <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed drop-shadow-lg">
              Aku nggak tau masa depan bakal kayak gimana.
            </p>
            {/* Teks tengah dibikin abu mudaan dikit biar beda, tapi tetep terang */}
            <p className="font-serif text-2xl md:text-4xl text-gray-300 leading-relaxed drop-shadow-lg">
              Tapi selama ada kamu di sampingku, aku siap menghadapi apa aja.
            </p>
            <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed drop-shadow-lg">
              Terima kasih udah jadi rumah buat aku pulang.
            </p>
        </motion.div>

        {/* GARIS PEMISAH */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-32 h-[2px] bg-neon-pink mx-auto rounded-full"
        ></motion.div>

        {/* TANDA TANGAN */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-4"
        >
            <p className="font-sans text-xs tracking-[0.5em] text-gray-500 uppercase">
                Forever Yours,
            </p>
            {/* Pakai font serif italic biar kayak tanda tangan klasik */}
            <h3 className="text-5xl md:text-6xl text-white font-serif italic tracking-wide">
                Yusuf Ramadani.
            </h3>
        </motion.div>

      </div>
    </section>
  )
}