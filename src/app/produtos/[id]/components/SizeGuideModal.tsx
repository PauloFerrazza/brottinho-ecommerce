'use client'

import React from 'react'
import { FaTimes } from 'react-icons/fa'

interface SizeGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-lg p-8 max-w-lg w-full mx-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-2xl font-medium mb-4">Guia de Medidas</h2>
        
        <p className="text-gray-600 mb-6">
          Para garantir a melhor escolha, confira as medidas do produto abaixo. 
          Todas as dimensões são aproximadas e podem variar ligeiramente.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="font-medium">Altura</span>
            <span className="text-gray-600">30 cm</span>
          </div>
          
          <div className="flex items-center justify-between border-b pb-2">
            <span className="font-medium">Largura</span>
            <span className="text-gray-600">40 cm</span>
          </div>
          
          <div className="flex items-center justify-between border-b pb-2">
            <span className="font-medium">Profundidade</span>
            <span className="text-gray-600">15 cm</span>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          * As medidas podem variar em até 2cm devido ao processo artesanal de fabricação.
          Em caso de dúvidas, entre em contato conosco.
        </p>
      </div>
    </div>
  )
}