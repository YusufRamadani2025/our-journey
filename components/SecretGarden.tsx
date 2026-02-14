'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { KeyRound, Lock, Sparkles } from 'lucide-react'
import '../app/flowers.css' // Pastikan path ini benar sesuai tempat lu simpan file css tadi

// --- CONFIG ---
const SECRET_ANSWER = "310507" 
const QUESTION = "Berapa tanggal lahir mas?"

export default function SecretGarden() {
  const [answer, setAnswer] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isError, setIsError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Efek pas bunga muncul biar animasinya jalan
  useEffect(() => {
    if (isUnlocked) {
        setTimeout(() => {
            setLoaded(true)
        }, 500)
    }
  }, [isUnlocked])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (answer.toLowerCase().trim() === SECRET_ANSWER) {
      setIsUnlocked(true)
    } else {
      setIsError(true)
      setTimeout(() => setIsError(false), 500)
    }
  }

  return (
    <section className="min-h-[50vh] bg-black py-20 px-4 relative z-30 overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      
      {/* 1. STATE TERKUNCI */}
      {!isUnlocked ? (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center space-y-8 max-w-md w-full relative z-10"
        >
            <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,45,85,0.1)]">
                    <Lock className="text-gray-400" size={32} />
                </div>
            </div>
            
            <div className="space-y-2">
                <h2 className="font-serif text-3xl text-white">Secret Garden</h2>
                <p className="font-sans text-xs text-gray-500 tracking-widest uppercase">
                    {QUESTION}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="relative mt-8">
                <motion.input
                    animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
                    type="text"
                    placeholder="Enter code..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-gray-800 py-3 text-center text-white focus:outline-none focus:border-neon-pink transition-colors font-serif text-2xl placeholder:text-gray-800"
                />
                <button 
                    type="submit" 
                    className="absolute right-2 top-4 text-gray-500 hover:text-white transition-colors"
                >
                    <KeyRound size={24} />
                </button>
            </form>
        </motion.div>
      ) : (
        
        // 2. STATE TERBUKA (BUNGA CSS)
        <div className={`relative w-full h-[80vh] ${!loaded ? 'not-loaded' : ''}`}>
            
            {/* PESAN CINTA (OVERLAY) */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 2 }} // Muncul setelah 3 detik (nunggu bunga mekar)
                className="absolute top-10 left-0 w-full text-center z-50 pointer-events-none"
            >
                <h1 className="font-serif text-5xl md:text-7xl text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                    Happy Valentine,
                </h1>
                <p className="font-sans text-white/80 mt-4 tracking-widest uppercase text-sm drop-shadow-md">
                    Love You Forever
                </p>
            </motion.div>

            {/* --- HTML BUNGA DARI KAMU (Converted to JSX) --- */}
            <div className="flower-container">
                <div className="night"></div>
                <div className="flowers">
                    <div className="flower flower--1">
                    <div className="flower__leafs flower__leafs--1">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>

                    </div>
                    <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                        <div className="flower__line__leaf flower__line__leaf--5"></div>
                        <div className="flower__line__leaf flower__line__leaf--6"></div>
                    </div>
                    </div>

                    <div className="flower flower--2">
                    <div className="flower__leafs flower__leafs--2">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>

                    </div>
                    <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                    </div>
                    </div>

                    <div className="flower flower--3">
                    <div className="flower__leafs flower__leafs--3">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>

                    </div>
                    <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                    </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "1.2s" } as React.CSSProperties}>
                    <div className="flower__g-long">
                        <div className="flower__g-long__top"></div>
                        <div className="flower__g-long__bottom"></div>
                    </div>
                    </div>

                    <div className="growing-grass">
                    <div className="flower__grass flower__grass--1">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                    </div>
                    </div>

                    <div className="growing-grass">
                    <div className="flower__grass flower__grass--2">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                    </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.4s" } as React.CSSProperties}>
                    <div className="flower__g-right flower__g-right--1">
                        <div className="leaf"></div>
                    </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
                    <div className="flower__g-right flower__g-right--2">
                        <div className="leaf"></div>
                    </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
                    <div className="flower__g-front">
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                        <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__line"></div>
                    </div>
                    </div>

                    <div className="grow-ans" style={{ "--d": "3.2s" } as React.CSSProperties}>
                    <div className="flower__g-fr">
                        <div className="leaf"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--0">
                    <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "2.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.4s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--1">
                    <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.8s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--2">
                    <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.4s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--3">
                    <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--4">
                    <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--5">
                    <div className="grow-ans" style={{ "--d": "4s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--6">
                    <div className="grow-ans" style={{ "--d": "4.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.4s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.8s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>

                    <div className="long-g long-g--7">
                    <div className="grow-ans" style={{ "--d": "3s" } as React.CSSProperties}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.2s" } as React.CSSProperties}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.5s" } as React.CSSProperties}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" } as React.CSSProperties}>
                        <div className="leaf leaf--3"></div>
                    </div>
                    </div>
                </div>
            </div>
            {/* --- END BUNGA HTML --- */}

        </div>
      )}

    </section>
  )
}