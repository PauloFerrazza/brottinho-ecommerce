'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTrash, FaArrowRight, FaShoppingBag } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Seu Carrinho</h1>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[#f3e7e7] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShoppingBag className="text-[#d4a0a0] text-3xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Seu carrinho está vazio
              </h2>
              <p className="text-gray-600 mb-8">
                Adicione produtos ao seu carrinho para continuar comprando.
              </p>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a0a0] to-[#b88d8d] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-[#b88d8d] hover:to-[#d4a0a0]"
              >
                <span className="font-medium">Ver Produtos</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Lista de Produtos */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white rounded-2xl p-6 shadow-sm"
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
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-gray-900 mb-1">
                                {item.name}
                              </h3>
                              <p className="text-sm text-[#8e7474]">
                                {item.category}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <FaTrash size={18} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                className="w-8 h-8 rounded-full border border-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                className="w-8 h-8 rounded-full border border-[#f3e7e7] flex items-center justify-center text-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <p className="text-lg font-semibold text-[#d4a0a0]">
                              R$ {(item.price * (item.quantity || 1)).toFixed(2).replace('.', ',')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Resumo do Pedido */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Resumo do Pedido
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Frete</span>
                      <span>Calculado no checkout</span>
                    </div>
                    <div className="border-t border-[#f3e7e7] pt-4">
                      <div className="flex justify-between text-lg font-semibold text-gray-900">
                        <span>Total</span>
                        <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full mt-6 bg-gradient-to-r from-[#d4a0a0] to-[#b88d8d] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-[#b88d8d] hover:to-[#d4a0a0]"
                  >
                    Finalizar Compra
                  </button>
                  <Link
                    href="/produtos"
                    className="block text-center mt-4 text-[#8e7474] hover:text-[#d4a0a0] transition-colors"
                  >
                    Continuar Comprando
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 