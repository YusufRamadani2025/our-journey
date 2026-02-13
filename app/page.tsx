import IntroOverlay from '@/components/IntroOverlay'
import Hero from '@/components/Hero'
import Definition from '@/components/Definition'
import Timeline from '@/components/Timeline'
import Gallery from '@/components/Gallery'
import Closing from '@/components/Closing' // Import Closing

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-neon-pink selection:text-white">
      <IntroOverlay />
      <Hero />
      <div className="relative z-20 bg-neutral-950">
        <Definition />
      </div>
      <Timeline />
      <Gallery />
      
      {/* BAGIAN PENUTUP */}
      <Closing />

      {/* Footer Final */}
      <div className="h-[20vh] bg-black flex flex-col items-center justify-center border-t border-white/10 space-y-4">
        <p className="font-serif text-2xl italic text-neon-pink">Ramadani & Raissa</p>
        <p className="text-gray-600 font-sans text-xs tracking-widest uppercase">
            Built with Love.
        </p>
      </div>
    </main>
  );
}