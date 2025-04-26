'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({ ...product, quantity: 1 })
  }

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  return (
    <Link href={`/produtos/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              onClick={toggleFavorite}
              className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                isFavorite(product.id) ? 'text-red-500' : 'text-[#d4a0a0] hover:text-red-500'
              }`}
            >
              <FaHeart size={20} />
            </button>
            <button
              onClick={handleAddToCart}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#d4a0a0] hover:text-[#8e7474] transition-colors"
            >
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <span className="text-sm text-[#8e7474]">{product.category}</span>
          <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
            {product.name}
          </h3>
          <p className="text-[#d4a0a0] font-semibold">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
        </div>
      </motion.div>
    </Link>
  )
} 