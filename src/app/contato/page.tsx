'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h1>
            <p className="text-gray-600 text-lg">
              Estamos aqui para ajudar! Envie sua mensagem ou use nossos canais de contato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d4a0a0] text-white py-3 rounded-lg hover:bg-[#c08f8f] transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-[#d4a0a0] text-xl mt-1 mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">E-mail</h3>
                      <p className="text-gray-600">contato@brottinho.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#d4a0a0] text-xl mt-1 mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#d4a0a0] text-xl mt-1 mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Endereço</h3>
                      <p className="text-gray-600">
                        Rua dos Artesãos, 123<br />
                        São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#d4a0a0] text-xl mt-1 mr-4">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Horário de Atendimento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 13h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nossa Localização
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197584455098!2d-46.6521529!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMDcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 