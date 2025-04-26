'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'
import ProductCard from '@/app/components/ProductCard'

// Dados de exemplo - depois serão substituídos por uma API
const products = [
  {
    id: 1,
    name: 'Vestido Floral',
    price: 199.90,
    image: '/images/products/vestido-floral.jpg',
    category: 'Vestidos',
    description: 'Vestido floral com tecido leve e confortável'
  },
  {
    id: 2,
    name: 'Blusa Básica',
    price: 89.90,
    image: '/images/products/blusa-basica.jpg',
    category: 'Blusas',
    description: 'Blusa básica em algodão'
  },
  {
    id: 3,
    name: 'Calça Jeans',
    price: 159.90,
    image: '/images/products/calca-jeans.jpg',
    category: 'Calças',
    description: 'Calça jeans skinny com elastano'
  },
  {
    id: 4,
    name: 'Bolsa de Couro',
    price: 299.90,
    image: '/images/products/bolsa-couro.jpg',
    category: 'Acessórios',
    description: 'Bolsa de couro sintético com alça removível'
  },
  {
    id: 5,
    name: 'Vestido Preto',
    price: 249.90,
    image: '/images/products/vestido-preto.jpg',
    category: 'Vestidos',
    description: 'Vestido preto básico para ocasiões especiais'
  },
  {
    id: 6,
    name: 'Blusa de Tricô',
    price: 129.90,
    image: '/images/products/blusa-trico.jpg',
    category: 'Blusas',
    description: 'Blusa de tricô com detalhes em renda'
  }
]

const categories = [
  'Todos',
  'Vestidos',
  'Blusas',
  'Calças',
  'Acessórios'
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h1>
            <p className="text-gray-600">
              Encontre as peças perfeitas para o seu estilo
            </p>
          </div>

          {/* Barra de Busca e Filtros */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-[#f3e7e7] focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#d4a0a0]" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#f3e7e7] text-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
              >
                <FaFilter />
                <span>Filtros</span>
              </button>
            </div>

            {/* Filtros Mobile */}
            <motion.div
              initial={false}
              animate={{ height: showFilters ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <div className="py-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#d4a0a0] text-white'
                          : 'bg-white text-[#d4a0a0] hover:bg-[#f3e7e7]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Mensagem quando não há produtos */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 