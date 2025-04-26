'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaHeart, FaGem } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Mãe e Artesã',
    image: '/images/testimonial1.jpg',
    rating: 5,
    text: 'Os produtos da Brottinho são simplesmente encantadores! A qualidade e o cuidado com cada detalhe são impressionantes. Meu filho adora o urso aviador que compramos.',
    date: 'há 2 semanas'
  },
  {
    id: 2,
    name: 'João Santos',
    role: 'Colecionador',
    image: '/images/testimonial2.jpg',
    rating: 5,
    text: 'Como colecionador de artesanatos, posso dizer que as peças da Brottinho são verdadeiras obras de arte. O acabamento é impecável e cada peça tem sua própria personalidade.',
    date: 'há 1 mês'
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    role: 'Designer de Interiores',
    image: '/images/testimonial3.jpg',
    rating: 5,
    text: 'Recomendo a Brottinho para todos os meus clientes que buscam peças únicas e de alta qualidade. Os produtos trazem um charme especial para qualquer ambiente.',
    date: 'há 3 semanas'
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Fundo com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5f5] via-[#f3e7e7] to-[#fff5f5] animate-gradient">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 animate-pulse" />
      </div>

      {/* Elementos decorativos flutuantes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#d4a0a0] to-[#f3e7e7] rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-[#8e7474] to-[#f3e7e7] rounded-full blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
              ❤️ Histórias de Amor
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a0a0] to-[#8e7474]">clientes</span> dizem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Histórias reais de pessoas que se encantaram com nossos produtos
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl relative overflow-hidden"
            >
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#f3e7e7] to-[#fff5f5] rounded-full transform translate-x-20 -translate-y-20 opacity-50" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-[#f3e7e7] to-[#fff5f5] rounded-full transform -translate-x-20 translate-y-20 opacity-50" />

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Imagem do Cliente */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-40 rounded-full overflow-hidden ring-8 ring-[#f3e7e7] relative z-10 shadow-xl"
                  >
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <FaHeart size={20} />
                  </motion.div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaStar className="w-6 h-6 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <FaQuoteLeft className="text-[#d4a0a0] text-4xl mb-6" />

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-xl text-gray-600 mb-8 italic leading-relaxed"
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <h4 className="font-bold text-gray-900 text-xl mb-2">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <div className="flex items-center gap-2 text-[#d4a0a0]">
                      <FaGem size={16} />
                      <p className="font-medium">
                        {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#d4a0a0] hover:bg-gradient-to-r hover:from-[#d4a0a0] hover:to-[#8e7474] hover:text-white transition-all shadow-lg group"
            >
              <FaChevronLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#d4a0a0] hover:bg-gradient-to-r hover:from-[#d4a0a0] hover:to-[#8e7474] hover:text-white transition-all shadow-lg group"
            >
              <FaChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'w-12 bg-gradient-to-r from-[#d4a0a0] to-[#8e7474]' 
                    : 'w-3 bg-[#f3e7e7] hover:bg-[#d4a0a0]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 