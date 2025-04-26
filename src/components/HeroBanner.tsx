import React from 'react'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative bg-[#A67F5D] py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-heading text-white mb-6">
            Artesanatos Feitos com Amor
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Descubra peças únicas e especiais para decorar sua casa com muito estilo e aconchego.
          </p>
          <Link
            href="/produtos"
            className="inline-block bg-white text-[#A67F5D] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    </section>
  )
} 