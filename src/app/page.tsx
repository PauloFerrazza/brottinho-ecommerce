import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Categories from './components/Categories'
import ProductCarousel from './components/ProductCarousel'
import PromotionalBanner from './components/PromotionalBanner'
import Newsletter from './components/Newsletter'
import { FaWhatsapp } from 'react-icons/fa'

const featuredProducts = [
  {
    id: 1,
    name: 'Urso Aviador',
    price: 370.00,
    image: '/images/produto1.jpg',
    category: 'Ursos',
    description: 'Urso artesanal vestido de aviador, perfeito para decoração e colecionadores.'
  },
  {
    id: 2,
    name: 'Coelho Marinheiro',
    price: 299.90,
    image: '/images/produto1.jpg',
    category: 'Coelhos',
    description: 'Coelho fofo vestido de marinheiro, ideal para presentear crianças.'
  },
  {
    id: 3,
    name: 'Elefante Bailarina',
    price: 329.90,
    image: '/images/produto1.jpg',
    category: 'Elefantes',
    description: 'Elefante gracioso vestido de bailarina, uma peça única e encantadora.'
  },
  {
    id: 4,
    name: 'Girafa Princesa',
    price: 349.90,
    image: '/images/produto1.jpg',
    category: 'Girafas',
    description: 'Girafa elegante vestida de princesa, perfeita para decoração infantil.'
  }
]

const newArrivals = [
  {
    id: 5,
    name: 'Urso Astronauta',
    price: 390.00,
    image: '/images/produto1.jpg',
    category: 'Ursos',
    description: 'Urso artesanal vestido de astronauta, uma peça única e moderna.'
  },
  {
    id: 6,
    name: 'Coelho Super-Herói',
    price: 319.90,
    image: '/images/produto1.jpg',
    category: 'Coelhos',
    description: 'Coelho fofo vestido de super-herói, ideal para crianças.'
  },
  {
    id: 7,
    name: 'Elefante Mágico',
    price: 339.90,
    image: '/images/produto1.jpg',
    category: 'Elefantes',
    description: 'Elefante encantador vestido de mágico, perfeito para decoração.'
  },
  {
    id: 8,
    name: 'Girafa Bailarina',
    price: 359.90,
    image: '/images/produto1.jpg',
    category: 'Girafas',
    description: 'Girafa graciosa vestida de bailarina, uma peça única.'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <ProductCarousel
        title="Novidades"
        subtitle="Confira Nossas Novidades"
        products={newArrivals}
      />
      <PromotionalBanner
        title="Coleção Especial de Verão"
        description="Peças exclusivas feitas à mão com materiais selecionados para trazer mais cor e alegria ao seu ambiente."
        image="/images/banner.jpg"
        link="/colecao-verao"
        linkText="Conhecer Coleção"
      />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      
      {/* WhatsApp Flutuante */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </main>
  )
} 