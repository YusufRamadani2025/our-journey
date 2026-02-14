'use client'

import { motion } from 'framer-motion'
import { Disc, Music, Coffee, MapPin, Heart, ArrowUpRight, Film } from 'lucide-react'
import Link from 'next/link'

// --- GANTI DATA KALIAN DISINI ---
const FAVORITES_DATA = {
  ramadani: {
    name: "Rama",
    food: "Nasi Goreng",
    hobby: "Coding & Gaming",
    movie: "Action",
    color: "Black & White"
  },
  partner: {
    name: "Raissa", // Ganti nama pacar lu
    food: "Bebek Bumbu Hitam",
    hobby: "Scroll TikTok / Shopping",
    movie: "K-Drama / Romance",
    color: "Pink"
  }
}

// Playlist Spotify (Ganti Link Playlist Kalian)
const SPOTIFY_LINK = "https://open.spotify.com/playlist/3vIcQSJOuGrCfPGrhoTsLL?si=ba88e490b0074477&pt=119eb130583fc34447ad78831d7a6cd8" 

export default function Favorites() {
  return (
    <section className="min-h-screen bg-neutral-950 py-32 px-4 md:px-12 relative z-20 overflow-hidden">
      
      {/* Background Glow Pink */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* KIRI: THE PLAYLIST (Vinyl Animation) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center space-y-8"
        >
          {/* Cover Album / Vinyl */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
             {/* Piringan Hitam (Muter Terus) */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
               className="absolute inset-0 rounded-full border-4 border-white/10 bg-black flex items-center justify-center shadow-2xl"
             >
                {/* Garis-garis Vinyl */}
                <div className="absolute inset-4 rounded-full border border-white/5"></div>
                <div className="absolute inset-8 rounded-full border border-white/5"></div>
                <div className="absolute inset-12 rounded-full border border-white/5"></div>
                
                {/* Label Tengah (Foto/Icon) */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-neon-pink rounded-full flex items-center justify-center text-black">
                    <Music size={40} />
                </div>
             </motion.div>
             
             {/* Jarum Vinyl (Hiasan) */}
             <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-gray-600 rounded-tr-full origin-top-right rotate-12"></div>
          </div>

          {/* Info Lagu & Tombol */}
          <div className="text-center space-y-4 relative z-10">
             <h3 className="font-serif text-3xl text-white">Our Soundtrack</h3>
             <p className="font-sans text-gray-400 text-sm tracking-widest uppercase">
                Songs that remind me of you
             </p>
             
             <Link 
               href={SPOTIFY_LINK} 
               target="_blank"
               className="inline-flex items-center gap-2 px-6 py-3 mt-4 border border-white/20 rounded-full hover:bg-neon-pink hover:border-neon-pink hover:text-white transition-all duration-300 group"
             >
                <Disc size={18} className="group-hover:animate-spin" />
                <span>Listen on Spotify</span>
                <ArrowUpRight size={14} />
             </Link>
          </div>
        </motion.div>


        {/* KANAN: PERSONALITY (His vs Hers) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center lg:text-left mb-12">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">
              Personality <span className="text-neon-pink">&</span> Vibes
            </h2>
            <p className="text-gray-500">Hal-hal kecil yang bikin kita beda, tapi cocok.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
             {/* KOLOM COWOK (RAMADANI) */}
             <div className="space-y-8 border-r border-white/10 pr-4">
                <h3 className="font-sans text-neon-pink tracking-[0.2em] uppercase text-sm font-bold mb-6">
                    {FAVORITES_DATA.ramadani.name}
                </h3>
                
                <FavoriteItem icon={<Coffee size={18} />} label="Favorite Food" value={FAVORITES_DATA.ramadani.food} />
                <FavoriteItem icon={<Film size={18} />} label="Movie/Series" value={FAVORITES_DATA.ramadani.movie} />
                <FavoriteItem icon={<Heart size={18} />} label="Hobby" value={FAVORITES_DATA.ramadani.hobby} />
             </div>

             {/* KOLOM CEWEK (PARTNER) */}
             <div className="space-y-8 pl-4">
                <h3 className="font-sans text-white tracking-[0.2em] uppercase text-sm font-bold mb-6">
                    {FAVORITES_DATA.partner.name}
                </h3>
                
                <FavoriteItem icon={<Coffee size={18} />} label="Favorite Food" value={FAVORITES_DATA.partner.food} />
                <FavoriteItem icon={<Film size={18} />} label="Movie/Series" value={FAVORITES_DATA.partner.movie} />
                <FavoriteItem icon={<Heart size={18} />} label="Hobby" value={FAVORITES_DATA.partner.hobby} />
             </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

// Komponen Kecil buat Item List
function FavoriteItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="group">
            <div className="flex items-center gap-3 text-gray-500 mb-1 group-hover:text-neon-pink transition-colors">
                {icon}
                <span className="text-xs uppercase tracking-wider">{label}</span>
            </div>
            <p className="font-serif text-xl text-white group-hover:pl-2 transition-all duration-300">
                {value}
            </p>
        </div>
    )
}