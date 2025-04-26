'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaTrash, FaShoppingCart } from 'react-icons/fa'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Product[]>([])

  useEffect(() => {
    // Carregar favoritos do localStorage
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const removeFromFavorites = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(item => item.id !== productId)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const addToCart = (product: Product) => {
    // Implementar lógica de adicionar ao carrinho
    console.log('Adicionar ao carrinho:', product)
  }

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Seus Favoritos</h1>

          {favorites.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[#f3e7e7] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-[#d4a0a0] text-3xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Nenhum favorito ainda
              </h2>
              <p className="text-gray-600 mb-8">
                Adicione produtos aos seus favoritos para encontrá-los facilmente depois.
              </p>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a0a0] to-[#b88d8d] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-[#b88d8d] hover:to-[#d4a0a0]"
              >
                <span className="font-medium">Ver Produtos</span>
                <FaHeart className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {favorites.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex gap-6">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-1">
                              {product.name}
                            </h3>
                            <p className="text-sm text-[#8e7474]">
                              {product.category}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromFavorites(product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <FaTrash size={18} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-lg font-semibold text-[#d4a0a0]">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                          </p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => addToCart(product)}
                              className="w-10 h-10 rounded-full bg-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-colors"
                            >
                              <FaShoppingCart size={18} />
                            </button>
                            <Link
                              href={`/produto/${product.id}`}
                              className="w-10 h-10 rounded-full bg-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-colors"
                            >
                              <FaHeart size={18} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 