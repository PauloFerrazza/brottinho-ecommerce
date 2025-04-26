'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaHandHolding, FaGem, FaAward } from 'react-icons/fa'

const features = [
  {
    icon: FaHeart,
    title: 'Feito com Amor',
    description: 'Cada peça é confeccionada manualmente com dedicação e carinho'
  },
  {
    icon: FaHandHolding,
    title: 'Artesanal',
    description: 'Produtos únicos e exclusivos, cada um com sua própria história'
  },
  {
    icon: FaGem,
    title: 'Alta Qualidade',
    description: 'Materiais selecionados e acabamento impecável em cada detalhe'
  },
  {
    icon: FaAward,
    title: 'Garantia',
    description: 'Satisfação garantida com nossos produtos artesanais'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20">
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
              🎨 Nossos Diferenciais
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a0a0] to-[#8e7474]">Brottinho</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Descubra o que torna nossos produtos tão especiais
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] rounded-2xl transform rotate-6 opacity-20" />
                <div className="relative h-full bg-white rounded-2xl shadow-md flex items-center justify-center text-[#d4a0a0]">
                  <feature.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 