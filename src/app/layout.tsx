import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from './components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '../context/CartContext'
import { FavoritesProvider } from '../context/FavoritesContext'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Brottinho Artesanatos',
  description: 'Artesanato em madeira feito com amor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-background">
        <CartProvider>
          <FavoritesProvider>
            <Header />
            <main className="flex-1 w-full max-w-[2000px] mx-auto">
              {children}
            </main>
            <Footer />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  )
}