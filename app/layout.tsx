// app/layout.tsx
import { ReactLenis } from 'lenis/react' // <--- Perhatikan import-nya beda!
import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Ramadani & Raissa - Our Journey', // Judul di Tab Browser
  description: 'A visual diary of our story.', // Deskripsi kalau di-share
  icons: {
    icon: '/favicon.ico', // Pastiin lu punya file icon kecil (bisa foto kalian di-crop bulat)
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased"> {/* antialiased biar font lebih tajam */}
        
        {/* Setup Lenis (Smooth Scroll) */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {children}
        </ReactLenis>
        
      </body>
    </html>
  )
}