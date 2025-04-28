'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShoppingCart, FaSearch, FaHeart, FaChevronDown, FaCreditCard, FaGem, FaHandHolding, FaBars, FaTimes } from 'react-icons/fa'

const menuItems = {
  produtos: [
    { name: 'Ursos', href: '/produtos/ursos' },
    { name: 'Coelhos', href: '/produtos/coelhos' },
    { name: 'Elefantes', href: '/produtos/elefantes' },
    { name: 'Girafas', href: '/produtos/girafas' },
  ],
  sobre: [
    { name: 'Nossa História', href: '/sobre' },
    { name: 'Artesãs', href: '/sobre/artesas' },
    { name: 'Processo', href: '/sobre/processo' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
  ]
}

const benefitsData = [
  {
    icon: FaCreditCard,
    title: "Em até 12X",
    subtitle: "No Cartão"
  },
  {
    icon: FaHandHolding,
    title: "Feito à Mão",
    subtitle: "Sob Encomenda"
  },
  {
    icon: FaGem,
    title: "Alta Qualidade",
    subtitle: "Garantida"
  }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de busca
    console.log('Buscando:', searchQuery)
  }

  return (
    <>
      <header className="w-full z-50">
        {/* Barra de benefícios */}
        <div className="bg-[#d4a0a0] text-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-8 py-2">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <benefit.icon className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{benefit.title}</span>
                    <span className="text-xs opacity-90">{benefit.subtitle}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Header principal */}
        <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0 w-[200px]">
                <Link href="/" className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-[60px] h-[60px] bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src="/images/logo.PNG"
                      alt="Brottinho Artesanatos"
                      width={60}
                      height={60}
                      className="object-contain p-1"
                      priority
                    />
                  </motion.div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl font-semibold text-[#8e7474]">Brottinho</span>
                    <span className="text-sm text-[#b88d8d]">Artesanatos</span>
                  </div>
                </Link>
              </div>

              {/* Busca */}
              <div className="flex-1 flex justify-center items-center">
                <form onSubmit={handleSearch} className="w-full max-w-xl">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="O que você procura?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-[40px] pl-4 pr-10 rounded-full border border-[#f3e7e7] focus:border-[#d4a0a0] focus:outline-none text-sm transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e7474] hover:text-[#d4a0a0] transition-colors"
                    >
                      <FaSearch size={16} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Ícones */}
              <div className="flex-shrink-0 w-[200px] flex items-center justify-end gap-8">
                <Link
                  href="/favoritos"
                  className="text-[#8e7474] hover:text-[#d4a0a0] transition-colors relative group"
                >
                  <FaHeart size={20} />
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#d4a0a0] text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    0
                  </span>
                </Link>
                <Link
                  href="/carrinho"
                  className="text-[#8e7474] hover:text-[#d4a0a0] transition-colors relative group"
                >
                  <FaShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#d4a0a0] text-white text-xs rounded-full flex items-center justify-center">
                    2
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-[#8e7474] hover:text-[#d4a0a0] transition-colors"
                >
                  {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>

            {/* Menu de navegação */}
            <nav className="border-t border-[#f3e7e7]">
              <ul className="hidden lg:flex items-center gap-8 h-12">
                {['Início', 'Produtos', 'Sobre', 'Contato', 'Legal'].map((item) => (
                  <li
                    key={item}
                    className="relative h-full"
                    onMouseEnter={() => setActiveMenu(item.toLowerCase())}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {['Produtos', 'Sobre', 'Legal'].includes(item) ? (
                      <>
                        <button className="h-full flex items-center gap-1 text-[#8e7474] hover:text-[#d4a0a0] transition-colors text-sm font-medium">
                          {item}
                          <FaChevronDown className="w-3 h-3" />
                        </button>
                        
                        <AnimatePresence>
                          {activeMenu === item.toLowerCase() && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 border border-[#f3e7e7]"
                            >
                              {menuItems[item.toLowerCase() as keyof typeof menuItems].map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-[#8e7474] hover:bg-[#f3e7e7] hover:text-[#d4a0a0] transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item === 'Início' ? '/' : `/${item.toLowerCase()}`}
                        className="h-full flex items-center text-[#8e7474] hover:text-[#d4a0a0] transition-colors text-sm font-medium"
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#f3e7e7]"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {['Início', 'Produtos', 'Sobre', 'Contato', 'Legal'].map((item) => (
                  <li key={item}>
                    {['Produtos', 'Sobre', 'Legal'].includes(item) ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setActiveMenu(activeMenu === item.toLowerCase() ? null : item.toLowerCase())}
                          className="flex items-center justify-between w-full text-[#8e7474] hover:text-[#d4a0a0] transition-colors text-sm font-medium"
                        >
                          {item}
                          <FaChevronDown className={`w-3 h-3 transition-transform ${activeMenu === item.toLowerCase() ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeMenu === item.toLowerCase() && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2"
                            >
                              {menuItems[item.toLowerCase() as keyof typeof menuItems].map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-sm text-[#8e7474] hover:text-[#d4a0a0] transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item === 'Início' ? '/' : `/${item.toLowerCase()}`}
                        className="block text-[#8e7474] hover:text-[#d4a0a0] transition-colors text-sm font-medium"
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="h-[132px]" />
    </>
  )
} 