'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart, FaUser, FaSearch, FaHeart } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="relative -mt-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Brottinho Artesanatos"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navegação */}
          <nav className="flex-1 flex justify-center -ml-[160px]">
            <ul className="flex items-center gap-12">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#d4a0a0] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-600 hover:text-[#d4a0a0] transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-[#d4a0a0] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-[#d4a0a0] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Ícones */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-[#d4a0a0] transition-colors">
              <FaSearch size={20} />
            </button>
            <button className="text-gray-600 hover:text-[#d4a0a0] transition-colors">
              <FaHeart size={20} />
            </button>
            <button className="text-gray-600 hover:text-[#d4a0a0] transition-colors">
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 