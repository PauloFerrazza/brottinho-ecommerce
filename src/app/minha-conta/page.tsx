'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaUser, FaShoppingBag, FaHeart, FaStar, FaSignOutAlt } from 'react-icons/fa'
import AuthGuard from '@/components/AuthGuard'

export default function AccountPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('perfil')

  const tabs = [
    { id: 'perfil', label: 'Meu Perfil', icon: FaUser },
    { id: 'pedidos', label: 'Meus Pedidos', icon: FaShoppingBag },
    { id: 'favoritos', label: 'Favoritos', icon: FaHeart },
    { id: 'avaliacoes', label: 'Minhas Avaliações', icon: FaStar }
  ]

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#fff5f5] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                  Minha Conta
                </h1>
                <button
                  onClick={() => router.push('/api/auth/signout')}
                  className="flex items-center gap-2 text-[#d4a0a0] hover:text-[#c08f8f] transition-colors"
                >
                  <FaSignOutAlt />
                  <span>Sair</span>
                </button>
              </div>

              <div className="flex gap-8">
                {/* Sidebar */}
                <div className="w-64">
                  <nav className="space-y-2">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-[#d4a0a0] text-white'
                            : 'text-gray-600 hover:bg-[#f3e7e7]'
                        }`}
                      >
                        <tab.icon />
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {activeTab === 'perfil' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Meu Perfil
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome
                          </label>
                          <input
                            type="text"
                            value={session?.user?.name || ''}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
                            disabled
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            value={session?.user?.email || ''}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
                            disabled
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'pedidos' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Meus Pedidos
                      </h2>
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Você ainda não fez nenhum pedido.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'favoritos' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Favoritos
                      </h2>
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Você ainda não tem produtos favoritos.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'avaliacoes' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Minhas Avaliações
                      </h2>
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Você ainda não fez nenhuma avaliação.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
} 