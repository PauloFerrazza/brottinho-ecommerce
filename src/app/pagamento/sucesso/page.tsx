'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'

export default function PaymentSuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="text-[#d4a0a0] text-6xl mb-6">
              <FaCheckCircle />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Pagamento Realizado com Sucesso!
            </h1>
            <p className="text-gray-600 mb-8">
              Obrigado por sua compra. Seu pedido foi recebido e está sendo processado.
            </p>
            <div className="space-y-4">
              <Link
                href="/minha-conta"
                className="block w-full bg-[#d4a0a0] text-white py-3 rounded-lg hover:bg-[#c08f8f] transition-colors"
              >
                Ver Meus Pedidos
              </Link>
              <Link
                href="/"
                className="block w-full bg-white text-[#d4a0a0] py-3 rounded-lg border border-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
              >
                Continuar Comprando
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 