'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTrash, FaArrowLeft } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, total, itemsCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#fff5f5] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-gray-600 mb-8">
              Adicione alguns produtos para começar suas compras
            </p>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 bg-[#d4a0a0] text-white px-6 py-3 rounded-xl hover:bg-[#b88d8d] transition-colors"
            >
              <FaArrowLeft />
              <span>Continuar Comprando</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Seu Carrinho
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de Produtos */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl p-6 shadow-lg"
                >
                  <div className="flex gap-6">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-[#d4a0a0] font-semibold mb-4">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resumo do Pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Resumo do Pedido
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({itemsCount} itens)</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Frete</span>
                    <span>Grátis</span>
                  </div>
                  <div className="border-t border-[#f3e7e7] pt-4">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 bg-[#d4a0a0] text-white px-6 py-3 rounded-xl hover:bg-[#b88d8d] transition-colors">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 