'use client'

import React, { useState } from 'react'
import { FaRuler, FaGift, FaCube } from 'react-icons/fa'
import { SizeGuideModal } from './SizeGuideModal'
import { ARProductViewer } from './ARProductViewer'

interface ProductActionsProps {
  productName: string
  productImages: string[]
}

export function ProductActions({ productName, productImages }: ProductActionsProps) {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [isARViewerOpen, setIsARViewerOpen] = useState(false)

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={() => setIsARViewerOpen(true)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8e7474] transition-colors"
      >
        <FaCube size={16} />
        <span>Visualizar em 3D</span>
      </button>

      <button
        onClick={() => setIsSizeGuideOpen(true)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8e7474] transition-colors"
      >
        <FaRuler size={16} />
        <span>Guia de Medidas</span>
      </button>

      <button
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8e7474] transition-colors"
      >
        <FaGift size={16} />
        <span>Embrulhar para Presente</span>
      </button>

      <SizeGuideModal 
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <ARProductViewer
        isOpen={isARViewerOpen}
        onClose={() => setIsARViewerOpen(false)}
        productName={productName}
        productImages={productImages}
      />
    </div>
  )
}