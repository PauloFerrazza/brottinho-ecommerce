'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Termos de Uso
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
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-600 mb-4">
                Ao acessar e utilizar o site da Brottinho Artesanatos, você concorda 
                com estes termos de uso. Se você não concordar com qualquer parte 
                destes termos, não deverá utilizar nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Uso do Site
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Você concorda em:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Fornecer informações precisas e completas</li>
                  <li>Manter suas informações de login seguras</li>
                  <li>Não usar o site para fins ilegais</li>
                  <li>Não tentar acessar áreas restritas do site</li>
                  <li>Não interferir no funcionamento do site</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Produtos e Serviços
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Em relação aos produtos e serviços:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Os preços podem ser alterados sem aviso prévio</li>
                  <li>As imagens dos produtos são meramente ilustrativas</li>
                  <li>A disponibilidade dos produtos pode variar</li>
                  <li>Os prazos de entrega são estimativas</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Propriedade Intelectual
              </h2>
              <p className="text-gray-600 mb-4">
                Todo o conteúdo do site, incluindo textos, imagens, logos e design, 
                é propriedade da Brottinho Artesanatos e está protegido por leis de 
                propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-600 mb-4">
                A Brottinho Artesanatos não será responsável por danos indiretos, 
                incidentais ou consequentes decorrentes do uso ou impossibilidade 
                de uso do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Modificações
              </h2>
              <p className="text-gray-600 mb-4">
                Reservamos o direito de modificar estes termos a qualquer momento. 
                As alterações entram em vigor imediatamente após sua publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Lei Aplicável
              </h2>
              <p className="text-gray-600 mb-4">
                Estes termos são regidos pelas leis do Brasil. Qualquer disputa 
                será submetida à jurisdição exclusiva dos tribunais de São Paulo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Contato
              </h2>
              <p className="text-gray-600 mb-4">
                Para questões relacionadas a estes termos, entre em contato:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>E-mail: juridico@brottinho.com.br</li>
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