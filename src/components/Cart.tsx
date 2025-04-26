'use client'

import React from 'react'
import { useCart } from '../context/CartContext'
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function Cart() {
  const { items, removeItem, updateQuantity, total, itemsCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <FaShoppingCart className="mx-auto text-6xl text-gray-300 mb-4" />
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Seu carrinho está vazio</h2>
        <p className="text-gray-600 mb-8">Adicione alguns produtos para começar suas compras</p>
        <Link
          href="/produtos"
          className="inline-flex items-center justify-center gap-2 bg-[#d4a0a0] text-white px-8 py-3 rounded-xl hover:bg-[#b88d8d] transition-colors"
        >
          Explorar Produtos
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Lista de Produtos */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-6 py-4 border-b border-gray-100 last:border-0">
            {/* Imagem do Produto */}
            <div className="relative w-24 h-24 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Informações do Produto */}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
              <p className="text-[#d4a0a0] font-medium">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </p>
            </div>

            {/* Controles de Quantidade */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <FaMinus size={12} />
              </button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <FaPlus size={12} />
              </button>
            </div>

            {/* Subtotal */}
            <div className="text-right">
              <p className="text-sm text-gray-500">Subtotal</p>
              <p className="font-medium text-gray-900">
                R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
              </p>
            </div>

            {/* Remover */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Resumo do Pedido */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Resumo do Pedido</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({itemsCount} {itemsCount === 1 ? 'item' : 'itens'})</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Frete</span>
            <span className="text-green-600">Grátis</span>
          </div>
          <div className="pt-3 border-t border-gray-100">
            <div className="flex justify-between text-lg font-medium text-gray-900">
              <span>Total</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Em até 12x sem juros</p>
          </div>
        </div>

        <button className="w-full mt-6 bg-[#d4a0a0] text-white py-3 rounded-xl hover:bg-[#b88d8d] transition-colors font-medium">
          Finalizar Compra
        </button>
      </div>
    </div>
  )
} 