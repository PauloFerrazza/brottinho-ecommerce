'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '@/context/CartContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import Header from '@/app/components/Header';
import Footer from '@/components/Footer';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        <FavoritesProvider>
          <Header />
          <main className="flex-1 w-full max-w-[2000px] mx-auto">
            {children}
          </main>
          <Footer />
        </FavoritesProvider>
      </CartProvider>
    </SessionProvider>
  );
} 