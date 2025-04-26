'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart } from 'react-icons/fa'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

interface ProductCarouselProps {
  title: string
  subtitle: string
  products: Product[]
}

export default function ProductCarousel({ title, subtitle, products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(products.length / itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(products.length / itemsPerPage)) % Math.ceil(products.length / itemsPerPage))
  }

  const visibleProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  return (
    <section className="py-20 bg-[#fff9f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
              ✨ {title}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {subtitle}
          </motion.h2>
        </div>

        <div className="relative">
          {/* Controles */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-all z-10"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-all z-10"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {visibleProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4">
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-all duration-300">
                          <FaHeart size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-all duration-300">
                          <FaShoppingCart size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-sm text-[#8e7474]">{product.category}</span>
                      <h3 className="font-medium text-gray-900 group-hover:text-[#d4a0a0] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-[#d4a0a0]">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </p>
                        <Link
                          href={`/produto/${product.id}`}
                          className="text-sm font-medium text-[#8e7474] hover:text-[#d4a0a0] transition-colors"
                        >
                          Ver detalhes
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-gradient-to-r from-[#d4a0a0] to-[#8e7474]'
                    : 'bg-[#f3e7e7] hover:bg-[#d4a0a0]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 