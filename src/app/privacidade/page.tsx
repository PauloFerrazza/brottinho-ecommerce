'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-gray-600 text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introdução
              </h2>
              <p className="text-gray-600 mb-4">
                A Brottinho Artesanatos está comprometida em proteger sua privacidade. 
                Esta política descreve como coletamos, usamos e protegemos suas informações 
                pessoais quando você utiliza nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Informações que Coletamos
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Coletamos as seguintes informações:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Endereço de entrega</li>
                  <li>Número de telefone</li>
                  <li>Informações de pagamento</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Como Usamos suas Informações
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Processar seus pedidos</li>
                  <li>Enviar atualizações sobre seu pedido</li>
                  <li>Responder suas dúvidas</li>
                  <li>Enviar newsletters (com seu consentimento)</li>
                  <li>Melhorar nossos serviços</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Proteção de Dados
              </h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de segurança para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Seus Direitos
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Você tem o direito de:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir informações imprecisas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Retirar seu consentimento</li>
                  <li>Solicitar uma cópia dos seus dados</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                Utilizamos cookies para melhorar sua experiência em nosso site. 
                Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Contato
              </h2>
              <p className="text-gray-600 mb-4">
                Se você tiver dúvidas sobre nossa política de privacidade, entre em contato conosco:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>E-mail: privacidade@brottinho.com.br</li>
                <li>Telefone: (11) 99999-9999</li>
                <li>Endereço: Rua dos Artesãos, 123 - São Paulo - SP</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 