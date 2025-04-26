import React from 'react'
import Link from 'next/link'
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin, FiClock, FiCreditCard, FiTruck } from 'react-icons/fi'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8e7474] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-heading mb-4">Sobre Nós</h3>
            <p className="text-white/80 mb-4">
              A Brottinho é uma loja especializada em artesanato e produtos artesanais,
              oferecendo peças únicas e de alta qualidade feitas com amor e dedicação.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/brottinho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FiInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/brottinho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <FiFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-white/80 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="text-white/80 hover:text-white transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-white/80 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-white/80 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white/80">
                <FiMail className="mr-2" />
                contato@brottinho.com.br
              </li>
              <li className="flex items-center text-white/80">
                <FiPhone className="mr-2" />
                (11) 99999-9999
              </li>
              <li className="flex items-center text-white/80">
                <FiMapPin className="mr-2" />
                São Paulo, SP
              </li>
              <li className="flex items-center text-white/80">
                <FiClock className="mr-2" />
                Seg-Sex: 9h às 18h
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading mb-4">Formas de Pagamento</h3>
            <div className="space-y-4">
              <div className="flex items-center text-white/80">
                <FiCreditCard className="mr-2" />
                <span>Cartões de Crédito</span>
              </div>
              <div className="flex items-center text-white/80">
                <FiTruck className="mr-2" />
                <span>Entrega em todo Brasil</span>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Newsletter</h4>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  >
                    Assinar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-white/80">
              © {new Date().getFullYear()} Brottinho. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <img src="/images/payment/visa.png" alt="Visa" className="h-6" />
              <img src="/images/payment/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="/images/payment/amex.png" alt="American Express" className="h-6" />
              <img src="/images/payment/elo.png" alt="Elo" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 