import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart, FaTruck, FaBox, FaCreditCard, FaPercent, FaHeart, FaShieldAlt, FaWhatsapp, FaGift, FaStar, FaRuler, FaHandsHelping, FaCrown, FaAward, FaMedal, FaCertificate } from 'react-icons/fa'
import { ImageGallery } from '../../../components/ImageGallery'
import { ProductActions } from './components/ProductActions'

// Dados temporários do produto (depois virá da API)
const produto = {
  id: 1,
  nome: 'Urso Aviador',
  categoria: 'Amigurumis',
  preco: 370.00,
  precoOriginal: 399.90,
  descricao: 'Urso aviador feito à mão em crochê, com detalhes delicados e acabamento premium. Perfeito para decoração do quarto do bebê ou como presente especial.',
  imagens: [
    '/images/produto1.jpg',
    '/images/produto1.jpg',
    '/images/produto1.jpg',
  ],
}

// Produtos relacionados (temporário)
const produtosRelacionados = [
  {
    id: 2,
    nome: 'Coelho Marinheiro',
    preco: 299.90,
    imagem: '/images/produto1.jpg',
  },
  {
    id: 3,
    nome: 'Elefante Bailarina',
    preco: 329.90,
    imagem: '/images/produto1.jpg',
  },
  {
    id: 4,
    nome: 'Girafa Princesa',
    preco: 349.90,
    imagem: '/images/produto1.jpg',
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const desconto = Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)
  const precoPix = produto.preco * 0.85

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Premium Animado */}
      <div className="bg-gradient-to-r from-[#f3e7e7] via-[#fff5f5] to-[#f3e7e7] py-3 relative overflow-hidden">
        <div className="animate-slide">
          <div className="flex items-center justify-center gap-8 text-sm font-medium">
            <span className="flex items-center gap-2 text-[#8e7474]">
              <FaCrown className="text-[#d4a0a0]" /> Produto Premium
            </span>
            <span className="flex items-center gap-2 text-[#8e7474]">
              <FaAward className="text-[#d4a0a0]" /> Artesã Certificada
            </span>
            <span className="flex items-center gap-2 text-[#8e7474]">
              <FaMedal className="text-[#d4a0a0]" /> Qualidade Garantida
            </span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Aprimorado */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-[#d4a0a0] hover:text-[#8e7474] transition-colors flex items-center gap-1">
                <FaCertificate className="text-xs" />
                Brottinho Premium
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/produtos" className="text-[#d4a0a0] hover:text-[#8e7474] transition-colors">
                {produto.categoria}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{produto.nome}</li>
          </ol>
        </nav>

        {/* Container Principal do Produto */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 relative">
          {/* Badge Exclusivo */}
          <div className="absolute -top-4 left-6 bg-gradient-to-r from-[#8e7474] to-[#d4a0a0] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            <span className="flex items-center gap-2">
              <FaCrown className="text-yellow-300" /> Coleção Exclusiva
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start pt-4">
            {/* Coluna da Esquerda - Galeria */}
            <div className="w-full">
              <ImageGallery images={produto.imagens} />
              <ProductActions 
                productName={produto.nome}
                productImages={produto.imagens}
              />
            </div>

            {/* Coluna da Direita - Informações */}
            <div className="w-full">
              {/* Badges Premium */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] text-white px-3 py-1 rounded-md shadow-sm">
                  <span className="flex items-center gap-1">
                    <FaPercent className="text-xs" />
                    {desconto}% OFF
                  </span>
                </div>
                <div className="bg-gradient-to-r from-[#8e7474] to-[#6b5757] text-white px-3 py-1 rounded-md shadow-sm">
                  <span className="flex items-center gap-1">
                    <FaHandsHelping className="text-xs" />
                    Feito à Mão
                  </span>
                </div>
                <div className="bg-gradient-to-r from-[#00a693] to-[#008577] text-white px-3 py-1 rounded-md shadow-sm">
                  <span className="flex items-center gap-1">
                    <FaCrown className="text-xs" />
                    Premium
                  </span>
                </div>
              </div>

              {/* Cabeçalho do Produto */}
              <div className="space-y-4 pb-6 border-b border-gray-200">
                <h1 className="text-3xl font-medium text-gray-800">
                  {produto.nome}
                </h1>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-gray-500 line-through">
                      de R$ {produto.precoOriginal.toFixed(2).replace('.', ',')}
                    </p>
                    <p className="text-2xl font-medium text-gray-900">
                      por R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    em até 12x de R$ {(produto.preco / 12).toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-[#00a693] font-medium">
                    R$ {precoPix.toFixed(2).replace('.', ',')} no PIX (15% de desconto)
                  </p>
                </div>
              </div>

              {/* Avaliação do Produto */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-[#FFD700]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(12 avaliações)</span>
              </div>

              {/* Preços com Destaque Premium */}
              <div className="bg-gradient-to-br from-white to-[#f3e7e7] p-6 rounded-lg mb-6 border border-[#f3e7e7] relative">
                <div className="absolute -top-3 right-4 bg-[#00a693] text-white text-xs px-3 py-1 rounded-full">
                  Melhor Oferta
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-gray-500 line-through">
                      de R$ {produto.precoOriginal.toFixed(2).replace('.', ',')}
                    </p>
                    <span className="bg-[#d4a0a0] text-white text-xs px-2 py-1 rounded">
                      -{desconto}%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-medium text-gray-900">
                      R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </p>
                    <span className="text-sm text-gray-500">à vista</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    em até <span className="font-medium">12x</span> de <span className="font-medium text-[#8e7474]">R$ {(produto.preco / 12).toFixed(2).replace('.', ',')}</span>
                  </p>
                  <div className="mt-4 p-4 bg-[#ebf7f5] rounded-md border border-[#00a693] border-opacity-20">
                    <p className="text-[#00a693] font-medium flex items-center gap-2">
                      <FaPercent className="text-sm" />
                      <span className="text-lg">R$ {precoPix.toFixed(2).replace('.', ',')}</span>
                      <span className="text-sm font-normal">no PIX com 15% OFF</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantidade e Botões Premium */}
              <div className="space-y-6 py-6">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-gray-700">Quantidade:</label>
                  <div className="relative">
                    <select className="w-24 pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a0a0] focus:border-transparent appearance-none">
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    className="w-full bg-gradient-to-r from-[#d4a0a0] to-[#8e7474] text-white py-4 px-6 rounded-md hover:from-[#b88d8d] hover:to-[#7a6363] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 font-medium text-lg shadow-md"
                  >
                    <FaShoppingCart className="text-xl" />
                    COMPRAR AGORA
                  </button>
                  
                  <button className="w-full border-2 border-[#d4a0a0] text-[#d4a0a0] py-3 px-6 rounded-md hover:bg-[#d4a0a0] hover:text-white transition-all flex items-center justify-center gap-2 group">
                    <FaHeart className="group-hover:scale-110 transition-transform" />
                    Adicionar à Lista de Desejos
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FaShieldAlt className="text-[#d4a0a0]" />
                  Compra 100% Segura
                </div>
              </div>

              {/* Benefícios Premium */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <FaCrown className="text-[#d4a0a0]" />
                  Benefícios Exclusivos
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-white to-[#f3e7e7] p-4 rounded-lg border border-[#f3e7e7]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <FaShieldAlt className="text-[#d4a0a0]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Garantia Premium</h4>
                        <p className="text-xs text-gray-500">30 dias de garantia</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-[#f3e7e7] p-4 rounded-lg border border-[#f3e7e7]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <FaTruck className="text-[#d4a0a0]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Frete Grátis</h4>
                        <p className="text-xs text-gray-500">Em compras acima de R$299</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-[#f3e7e7] p-4 rounded-lg border border-[#f3e7e7]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <FaGift className="text-[#d4a0a0]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Embalagem Especial</h4>
                        <p className="text-xs text-gray-500">Perfeita para presente</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-[#f3e7e7] p-4 rounded-lg border border-[#f3e7e7]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <FaHandsHelping className="text-[#d4a0a0]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Peça Exclusiva</h4>
                        <p className="text-xs text-gray-500">Feita especialmente para você</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards de Informações */}
              <div className="grid grid-cols-2 gap-4 py-6 border-t border-gray-200">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaTruck className="text-[#d4a0a0] text-xl mt-1" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Prazo de Entrega</h3>
                      <p className="text-sm text-gray-500">10 - 20 dias úteis</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaBox className="text-[#d4a0a0] text-xl mt-1" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Produto Artesanal</h3>
                      <p className="text-sm text-gray-500">Feito à mão com carinho</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaCreditCard className="text-[#d4a0a0] text-xl mt-1" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Formas de Pagamento</h3>
                      <p className="text-sm text-gray-500">Cartão, PIX ou Boleto</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="text-[#d4a0a0] text-xl mt-1" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Compra Segura</h3>
                      <p className="text-sm text-gray-500">Ambiente protegido</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Descrição Premium */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8">
              <button className="relative text-[#d4a0a0] pb-4 font-medium">
                Descrição
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#d4a0a0] to-[#8e7474]"></div>
              </button>
              <button className="text-gray-500 pb-4 font-medium hover:text-[#d4a0a0] transition-colors">
                Avaliações
              </button>
              <button className="text-gray-500 pb-4 font-medium hover:text-[#d4a0a0] transition-colors">
                Dúvidas Frequentes
              </button>
            </nav>
          </div>

          <div className="py-8 space-y-8">
            {/* Sobre o Produto com Design Premium */}
            <div className="bg-gradient-to-br from-white to-[#f3e7e7] p-8 rounded-lg border border-[#f3e7e7] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a0a0] opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2 text-lg">
                <FaHandsHelping className="text-[#d4a0a0]" />
                Sobre o produto
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {produto.descricao}
              </p>
            </div>

            {/* Diferenciais em Grid Premium */}
            <div className="space-y-6">
              <h3 className="font-medium text-gray-900 text-lg flex items-center gap-2">
                <FaCrown className="text-[#d4a0a0]" />
                Por que escolher nosso produto?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#f3e7e7]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a0a0] to-[#8e7474] flex items-center justify-center mb-4">
                    <FaHandsHelping className="text-white text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Artesanal</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Cada peça é única, feita à mão com dedicação e amor, garantindo exclusividade.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#f3e7e7]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a0a0] to-[#8e7474] flex items-center justify-center mb-4">
                    <FaStar className="text-white text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Premium</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Materiais selecionados de alta qualidade e acabamento impecável.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#f3e7e7]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a0a0] to-[#8e7474] flex items-center justify-center mb-4">
                    <FaGift className="text-white text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Presente Perfeito</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Embalagem especial para presentear com elegância e sofisticação.
                  </p>
                </div>
              </div>
            </div>

            {/* Informações Importantes Premium */}
            <div className="bg-gradient-to-br from-[#8e7474] to-[#d4a0a0] p-1 rounded-lg">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-[#d4a0a0]" />
                  Importante
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#f3e7e7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a0a0]"></div>
                    </div>
                    As cores podem variar de acordo com o monitor
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#f3e7e7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a0a0]"></div>
                    </div>
                    Por ser artesanal, pode haver pequenas variações entre as peças
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#f3e7e7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a0a0]"></div>
                    </div>
                    Produto sob encomenda - produzido especialmente para você
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Avaliações dos Clientes Premium */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-gray-900 flex items-center gap-2">
              <FaStar className="text-[#FFD700]" />
              Avaliações dos Clientes
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex text-[#FFD700]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="w-5 h-5" />
                ))}
              </div>
              <span className="text-2xl font-medium text-gray-900">4.9</span>
              <span className="text-sm text-gray-500">(12 avaliações)</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Exemplo de Avaliação Premium */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a0a0] to-[#8e7474] flex items-center justify-center text-white font-medium">
                    MS
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Maria S.</p>
                    <p className="text-sm text-gray-500">há 2 semanas</p>
                  </div>
                </div>
                <div className="flex text-[#FFD700]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="w-4 h-4" />
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 leading-relaxed">
                  Produto incrível! A qualidade é excepcional e o acabamento é perfeito. 
                  Superou minhas expectativas. O atendimento foi impecável e a embalagem 
                  muito caprichada. Recomendo muito!
                </p>
              </div>
            </div>
          </div>

          <button className="mt-6 text-[#d4a0a0] font-medium hover:text-[#8e7474] transition-colors flex items-center gap-2 mx-auto">
            Ver todas as avaliações
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Produtos Relacionados Premium */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-medium text-gray-900 mb-8 flex items-center gap-2">
            <FaGift className="text-[#d4a0a0]" />
            Você Também Vai Amar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {produtosRelacionados.map((produto) => (
              <Link href={`/produtos/${produto.id}`} key={produto.id} className="group">
                <div className="bg-white rounded-lg p-4 transition-all hover:shadow-md border border-gray-100 hover:border-[#f3e7e7]">
                  <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-[#d4a0a0] transition-colors">
                    {produto.nome}
                  </h3>
                  <p className="text-[#d4a0a0] font-medium mt-2">
                    R$ {produto.preco.toFixed(2).replace('.', ',')}
                  </p>
                  <button className="w-full mt-4 bg-white border border-[#d4a0a0] text-[#d4a0a0] py-2 rounded-md hover:bg-[#d4a0a0] hover:text-white transition-colors group-hover:opacity-100 opacity-0">
                    Ver Detalhes
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Garantia e Segurança Premium */}
        <div className="bg-gradient-to-r from-[#f3e7e7] to-[#fff5f5] rounded-lg shadow-sm p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-[#d4a0a0] text-2xl" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Garantia Artesanal</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Oferecemos garantia de 30 dias contra defeitos de fabricação. 
                Sua satisfação é nossa prioridade absoluta.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                <FaCreditCard className="text-[#d4a0a0] text-2xl" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Compra 100% Segura</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Site protegido e pagamento processado com a máxima segurança. 
                Seus dados estão protegidos conosco.
              </p>
            </div>
          </div>
        </div>

        {/* Fale Conosco Premium */}
        <div className="bg-gradient-to-br from-[#d4a0a0] to-[#8e7474] rounded-lg shadow-sm p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-32 translate-y-32"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-medium mb-4">Ficou com alguma dúvida?</h2>
            <p className="text-white text-opacity-90 mb-8">
              Nossa equipe está pronta para te ajudar! Entre em contato pelo WhatsApp 
              e receba um atendimento personalizado e exclusivo.
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#d4a0a0] py-4 px-8 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              <FaWhatsapp className="text-2xl" />
              Falar no WhatsApp
            </a>
            <p className="text-sm text-white text-opacity-75 mt-6">
              Horário de atendimento: Segunda a Sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 