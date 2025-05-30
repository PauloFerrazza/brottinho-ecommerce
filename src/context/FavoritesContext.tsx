'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

interface FavoritesContextType {
  favorites: Product[]
  addToFavorites: (product: Product) => void
  removeFromFavorites: (productId: number) => void
  isFavorite: (productId: number) => boolean
  totalFavorites: number
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([])
  const [totalFavorites, setTotalFavorites] = useState(0)

  useEffect(() => {
    // Carregar favoritos do localStorage apenas no cliente
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favorites')
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites))
      }
    }
  }, [])

  useEffect(() => {
    // Salvar favoritos no localStorage apenas no cliente
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites))
      setTotalFavorites(favorites.length)
    }
  }, [favorites])

  const addToFavorites = (product: Product) => {
    setFavorites(prev => {
      if (!prev.find(item => item.id === product.id)) {
        return [...prev, product]
      }
      return prev
    })
  }

  const removeFromFavorites = (productId: number) => {
    setFavorites(prev => prev.filter(item => item.id !== productId))
  }

  const isFavorite = (productId: number) => {
    return favorites.some(item => item.id === productId)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        totalFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
} 