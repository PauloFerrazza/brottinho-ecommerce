import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const categorias = [
  {
    id: 1,
    nome: 'Amigurumis',
    imagem: '/images/produto1.jpg',
    slug: 'amigurumis'
  },
  {
    id: 2,
    nome: 'Decoração',
    imagem: '/images/produto1.jpg',
    slug: 'decoracao'
  },
  {
    id: 3,
    nome: 'Acessórios',
    imagem: '/images/produto1.jpg',
    slug: 'acessorios'
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-4xl font-heading text-center text-secondary mb-12">
          Categorias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="bg-white rounded-lg shadow-sm p-4">
              <Link href={`/categorias/${categoria.slug}`}>
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={categoria.imagem}
                    alt={categoria.nome}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority={categoria.id === 1}
                    quality={100}
                  />
                </div>
                <h3 className="text-xl font-medium text-secondary text-center">
                  {categoria.nome}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 