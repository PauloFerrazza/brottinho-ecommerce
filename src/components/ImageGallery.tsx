'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa'

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-6">
      {/* Imagem Principal */}
      <div className="relative h-[500px] rounded-lg overflow-hidden bg-white">
        <Image
          src={images[selectedImage]}
          alt="Imagem do produto"
          width={500}
          height={500}
          className="w-full h-full object-contain"
          priority
          quality={100}
        />
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-3 gap-4 max-w-[60%] mx-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden bg-white ${
              selectedImage === index ? 'ring-2 ring-[#d4a0a0]' : ''
            }`}
          >
            <Image
              src={image}
              alt={`Miniatura ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-full object-contain"
              quality={100}
            />
          </button>
        ))}
      </div>

      {/* Modal de Zoom */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={images[selectedImage]}
              alt="Imagem ampliada"
              width={1200}
              height={1200}
              className="w-full h-full object-contain"
              quality={100}
              priority
            />
            
            {/* Navegação no Zoom */}
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <FaChevronRight size={24} />
                </button>
              </>
            )}

            {/* Fechar Zoom */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 hover:text-white/90 transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 