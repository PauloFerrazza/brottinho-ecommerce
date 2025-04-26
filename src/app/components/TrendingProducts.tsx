'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa'

const trendingProducts = [
  {
    id: 1,
    name: 'Urso Aviador',
    price: 370.00,
    image: '/images/produto1.jpg',
    isNew: true
  },
  {
    id: 2,
    name: 'Coelho Marinheiro',
    price: 299.90,
    image: '/images/produto1.jpg',
    isNew: true
  },
  {
    id: 3,
    name: 'Elefante Bailarina',
    price: 329.90,
    image: '/images/produto1.jpg'
  },
  {
    id: 4,
    name: 'Girafa Princesa',
    price: 349.90,
    image: '/images/produto1.jpg'
  }
]

export default function TrendingProducts() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Produtos em <span className="text-[#d4a0a0]">Destaque</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Peças únicas que contam histórias e encantam gerações
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-4 shadow-lg"
            >
              {/* Badge Novo */}
              {product.isNew && (
                <span className="absolute top-6 left-6 z-10 bg-[#d4a0a0] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Novo
                </span>
              )}

              {/* Imagem do Produto */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f3e7e7]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay com botão de compra */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white p-4 rounded-full text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-colors">
                    <FaShoppingCart size={20} />
                  </button>
                </div>
              </div>

              {/* Informações do Produto */}
              <div className="mt-6 px-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#8e7474]">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </p>
                  <Link href={`/produtos/${product.id}`}>
                    <div className="w-10 h-10 bg-[#f3e7e7] rounded-full flex items-center justify-center text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-colors">
                      <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        <div className="text-center mt-16">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-3 bg-[#d4a0a0] text-white font-medium px-8 py-3 rounded-full hover:bg-[#8e7474] transition-colors"
          >
            Ver todos os produtos
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
} 