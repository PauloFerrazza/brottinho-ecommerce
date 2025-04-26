'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

const featuredProducts = [
  {
    id: 1,
    name: 'Urso Aviador',
    price: 370.00,
    image: '/images/produto1.jpg',
    category: 'Ursos',
  },
  {
    id: 2,
    name: 'Coelho Marinheiro',
    price: 299.90,
    image: '/images/produto1.jpg',
    category: 'Coelhos',
  },
  {
    id: 3,
    name: 'Elefante Bailarina',
    price: 329.90,
    image: '/images/produto1.jpg',
    category: 'Elefantes',
  },
  {
    id: 4,
    name: 'Girafa Princesa',
    price: 349.90,
    image: '/images/produto1.jpg',
    category: 'Girafas',
  },
]

export default function FeaturedProducts() {
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
              ✨ Destaques da Semana
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a0a0] to-[#8e7474]">Criações</span> Especiais
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Peças exclusivas feitas com amor e carinho para tornar momentos ainda mais especiais
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
        </div>

        <div className="text-center mt-12">
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#d4a0a0] px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-[#f3e7e7] font-medium"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  )
} 