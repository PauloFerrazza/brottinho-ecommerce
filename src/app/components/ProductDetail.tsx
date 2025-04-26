'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaShoppingCart, FaShare, FaStar, FaTruck, FaCreditCard, FaShieldAlt, FaWhatsapp, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
  features?: string[]
  specifications?: {
    [key: string]: string
  }
  images?: string[]
  reviews?: {
    id: number
    user: string
    rating: number
    comment: string
    date: string
  }[]
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showShareModal, setShowShareModal] = useState(false)
  const { addToCart } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
  }

  const toggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Confira este produto incrível: ${product.name}`
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`)
        break
      case 'pinterest':
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(product.image)}&description=${encodeURIComponent(text)}`)
        break
    }
    
    setShowShareModal(false)
  }

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Imagens do Produto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={product.images?.[selectedImage] || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Miniaturas */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-4 mt-4 overflow-x-auto pb-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                        selectedImage === index ? 'ring-2 ring-[#d4a0a0]' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={toggleFavorite}
                  className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                    isFavorite(product.id) ? 'text-red-500' : 'text-[#d4a0a0] hover:text-red-500'
                  }`}
                >
                  <FaHeart size={24} />
                </button>
                <button 
                  onClick={() => setShowShareModal(true)}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#d4a0a0] hover:text-[#8e7474] transition-colors"
                >
                  <FaShare size={24} />
                </button>
              </div>
            </motion.div>

            {/* Detalhes do Produto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="mb-6">
                  <span className="text-sm text-[#8e7474]">{product.category}</span>
                  <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className="text-yellow-400"
                        size={20}
                      />
                    ))}
                    <span className="text-sm text-gray-600">(4.9)</span>
                  </div>
                  <p className="text-xl text-[#d4a0a0] font-semibold">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>

                  {product.features && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Características
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-[#d4a0a0]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-full border border-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-full border border-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-gradient-to-r from-[#d4a0a0] to-[#b88d8d] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-[#b88d8d] hover:to-[#d4a0a0] flex items-center justify-center gap-2"
                    >
                      <FaShoppingCart size={20} />
                      <span className="font-medium">Adicionar ao Carrinho</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#f3e7e7]">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaTruck className="text-[#d4a0a0]" />
                      <span>Entrega em todo Brasil</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCreditCard className="text-[#d4a0a0]" />
                      <span>Em até 12x</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaShieldAlt className="text-[#d4a0a0]" />
                      <span>Garantia de 30 dias</span>
                    </div>
                  </div>
                </div>
              </div>

              {product.specifications && (
                <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Especificações
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-[#f3e7e7]">
                        <span className="text-gray-600">{key}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.reviews && (
                <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Avaliações
                  </h3>
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-[#f3e7e7] pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-[#f3e7e7] flex items-center justify-center">
                              <span className="text-[#d4a0a0] font-medium">
                                {review.user[0].toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{review.user}</p>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                                size={16}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal de Compartilhamento */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Compartilhar Produto
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                >
                  <FaWhatsapp size={24} />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2 p-4 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  <FaFacebook size={24} />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 p-4 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors"
                >
                  <FaTwitter size={24} />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('pinterest')}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                >
                  <FaPinterest size={24} />
                  <span>Pinterest</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 