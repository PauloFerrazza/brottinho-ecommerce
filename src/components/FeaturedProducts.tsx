import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'

// Dados temporários dos produtos
const produtos = [
  {
    id: 1,
    nome: 'Produto 1',
    categoria: 'Amigurumis',
    preco: 99.99,
    imagem: '/images/produto1.jpg'
  },
  {
    id: 2,
    nome: 'Produto 2',
    categoria: 'Amigurumis',
    preco: 149.99,
    imagem: '/images/produto1.jpg'
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-4xl font-heading text-center text-secondary mb-12">
          Destaques
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white rounded-lg shadow-sm p-4">
              <Link href={`/produtos/${produto.id}`}>
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority={produto.id === 1}
                    quality={100}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium text-secondary mb-1">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-primary/80 mb-2">{produto.categoria}</p>
                  <p className="text-lg font-medium text-primary">
                    R$ {produto.preco.toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/produtos"
            className="inline-block bg-[#d4a0a0] text-white px-8 py-3 rounded-full hover:bg-[#b88d8d] transition-colors duration-200"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  )
} 