'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
}

const trendingProducts: Product[] = [
  {
    id: '1',
    name: 'Boneca de Pano Artesanal',
    price: 89.90,
    originalPrice: 119.90,
    imageUrl: '/images/products/boneca-artesanal.jpg',
    category: 'Bonecas',
    rating: 5
  },
  {
    id: '2',
    name: 'Kit Decoração Infantil',
    price: 149.90,
    originalPrice: 179.90,
    imageUrl: '/images/products/kit-decoracao.jpg',
    category: 'Decoração',
    rating: 4.5
  },
  {
    id: '3',
    name: 'Móbile de Nuvens',
    price: 79.90,
    originalPrice: 99.90,
    imageUrl: '/images/products/mobile-nuvens.jpg',
    category: 'Móbiles',
    rating: 5
  },
  {
    id: '4',
    name: 'Almofada Personalizada',
    price: 69.90,
    originalPrice: 89.90,
    imageUrl: '/images/products/almofada.jpg',
    category: 'Almofadas',
    rating: 4.5
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function TrendingProducts() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f3e7e7] to-[#fff5f5]">
      {/* Elementos decorativos */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-64 h-64 bg-[#d4a0a0] opacity-5 rounded-full transform translate-x-32 -translate-y-32"
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4a0a0] font-medium mb-4 block">
            Feito com Amor
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossas peças mais amadas, cada uma feita à mão com carinho e dedicação
            para tornar seu ambiente mais acolhedor e especial.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trendingProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Link href={`/produtos/${product.id}`}>
                <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Badge de desconto */}
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 z-10 bg-[#d4a0a0] text-white text-sm font-medium px-2 py-1 rounded-full">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                  
                  {/* Container da imagem */}
                  <div className="aspect-square relative overflow-hidden bg-[#f3e7e7]">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Overlay com ações */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button className="bg-white p-3 rounded-full text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-colors">
                        <FaShoppingCart size={20} />
                      </button>
                      <button className="bg-white p-3 rounded-full text-[#d4a0a0] hover:bg-[#d4a0a0] hover:text-white transition-colors">
                        <FaHeart size={20} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Informações do produto */}
                  <div className="p-6">
                    <span className="text-sm text-[#d4a0a0] font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#d4a0a0] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                          size={14}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-[#d4a0a0]">
                        R$ {product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          R$ {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 