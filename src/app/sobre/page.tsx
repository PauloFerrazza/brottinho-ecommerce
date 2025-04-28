'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaHandSparkles, FaAward, FaUsers } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa História
            </h1>
            <p className="text-gray-600 text-lg">
              Conheça um pouco mais sobre a Brottinho Artesanatos e nossa missão
            </p>
          </div>

          {/* História */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Como Tudo Começou
            </h2>
            <p className="text-gray-600 mb-4">
              A Brottinho Artesanatos nasceu do amor por criar peças únicas e especiais. 
              Tudo começou como um hobby, fazendo presentes para amigos e familiares, 
              até que o feedback positivo nos inspirou a compartilhar nossas criações 
              com mais pessoas.
            </p>
            <p className="text-gray-600">
              Hoje, cada peça que criamos carrega consigo uma história de dedicação, 
              carinho e atenção aos detalhes. Nosso objetivo é trazer alegria e 
              encantamento para a vida das pessoas através do nosso artesanato.
            </p>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-[#d4a0a0] text-3xl mb-4">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Amor pelo Artesanato
              </h3>
              <p className="text-gray-600">
                Cada peça é feita com muito carinho e dedicação, 
                transformando materiais em arte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-[#d4a0a0] text-3xl mb-4">
                <FaHandSparkles />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Qualidade e Detalhes
              </h3>
              <p className="text-gray-600">
                Utilizamos materiais selecionados e nos dedicamos 
                aos mínimos detalhes em cada criação.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-[#d4a0a0] text-3xl mb-4">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Satisfação Garantida
              </h3>
              <p className="text-gray-600">
                Nosso compromisso é com a satisfação total dos nossos 
                clientes em cada compra.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-[#d4a0a0] text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Comunidade
              </h3>
              <p className="text-gray-600">
                Construímos uma comunidade de amantes do artesanato, 
                compartilhando experiências e histórias.
              </p>
            </motion.div>
          </div>

          {/* Missão e Visão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nossa Missão e Visão
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Missão
                </h3>
                <p className="text-gray-600">
                  Criar e compartilhar peças artesanais únicas que trazem 
                  alegria e encantamento para a vida das pessoas, mantendo 
                  viva a tradição do artesanato feito à mão.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Visão
                </h3>
                <p className="text-gray-600">
                  Ser referência em artesanato de qualidade, reconhecida 
                  pela dedicação, criatividade e compromisso com a 
                  satisfação dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 