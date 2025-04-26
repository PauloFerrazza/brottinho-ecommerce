'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaCheck } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Aqui você implementaria a lógica de envio para sua API
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulação de API
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Erro ao se inscrever:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff5f5] to-[#f3e7e7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
              ✨ Fique por dentro
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Receba Novidades e Ofertas Especiais
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Inscreva-se em nossa newsletter para receber novidades, promoções e dicas exclusivas.
          </motion.p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center justify-center gap-4 text-[#d4a0a0] mb-4">
                <FaCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Inscrição Realizada!
              </h3>
              <p className="text-gray-600">
                Obrigado por se inscrever. Você receberá nossas novidades em breve.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-[#d4a0a0]" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="w-full h-[50px] pl-12 pr-4 rounded-xl border border-[#f3e7e7] focus:border-[#d4a0a0] focus:outline-none text-gray-900 placeholder-gray-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="h-[50px] px-8 bg-gradient-to-r from-[#d4a0a0] to-[#b88d8d] text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-[#b88d8d] hover:to-[#d4a0a0] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Inscrever-se'}
              </button>
            </motion.form>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mt-4"
          >
            Ao se inscrever, você concorda com nossa{' '}
            <a href="/politica-de-privacidade" className="text-[#d4a0a0] hover:underline">
              Política de Privacidade
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  )
} 