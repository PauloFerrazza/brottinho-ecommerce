'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaHeart } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#fff5f5] to-[#f3e7e7]">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a0a0] opacity-5 rounded-full transform translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8e7474] opacity-5 rounded-full transform -translate-x-32 translate-y-32" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#f3e7e7] opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
                ✨ Artesanato Premium
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Peças Únicas Feitas com{' '}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#d4a0a0] to-[#8e7474]">
                  Amor
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <path
                    d="M0 10 Q50 20 100 10"
                    fill="none"
                    stroke="#d4a0a0"
                    strokeWidth="4"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#8e7474] leading-relaxed mb-8"
            >
              Descubra peças únicas feitas à mão com amor e dedicação. 
              Cada item tem sua própria história para contar e um significado especial.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/produtos"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a0a0] to-[#b88d8d] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-[#b88d8d] hover:to-[#d4a0a0]"
              >
                <span className="font-medium">Explorar Coleção</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/nossa-historia"
                className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-[#d4a0a0] px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-[#f3e7e7] border border-[#d4a0a0]/20"
              >
                <span className="font-medium">Nossa História</span>
                <FaHeart className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Estatísticas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { number: '500+', label: 'Peças Vendidas' },
                { number: '100%', label: 'Feito à Mão' },
                { number: '50+', label: 'Clientes Felizes' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.span
                    className="block text-2xl font-bold text-[#d4a0a0]"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Imagem Destaque */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-12"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/produto1.jpg"
                alt="Artesanato em Destaque"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Badge flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">Coleção Premium</h3>
                    <p className="text-sm text-gray-600">
                      Peças exclusivas feitas à mão com materiais selecionados
                    </p>
                  </div>
                  <Link
                    href="/produtos/premium"
                    className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#d4a0a0] text-white hover:bg-[#b88d8d] transition-colors"
                  >
                    <FaArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Elementos decorativos */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-[#f3e7e7] rounded-full"
              style={{ zIndex: -1 }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#d4a0a0] rounded-full opacity-20"
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 