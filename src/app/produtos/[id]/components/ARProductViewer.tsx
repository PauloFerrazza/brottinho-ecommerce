'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FaTimes, FaCamera, FaArrowsAlt, FaUndo, FaRedo, FaInfoCircle } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface ARProductViewerProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  productImages: string[]
}

export function ARProductViewer({ isOpen, onClose, productName, productImages }: ARProductViewerProps) {
  const [isARMode, setIsARMode] = useState(false)
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (isARMode && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch(err => console.error('Erro ao acessar câmera:', err))
    }
  }, [isARMode])

  const handleARMode = () => {
    setIsARMode(!isARMode)
  }

  const handleScale = (delta: number) => {
    setScale(prev => Math.max(0.5, Math.min(2, prev + delta)))
  }

  const handleRotate = (delta: number) => {
    setRotation(prev => (prev + delta) % 360)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white rounded-lg p-6 max-w-4xl w-full mx-4 h-[90vh] overflow-hidden"
      >
        <div className="absolute right-4 top-4 flex gap-2 z-10">
          <button
            onClick={handleARMode}
            className="p-2 bg-[#d4a0a0] text-white rounded-full hover:bg-[#b88d8d] transition-colors"
          >
            <FaCamera size={20} />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="h-full flex flex-col">
          <h2 className="text-2xl font-medium mb-4 text-center">
            Visualização 3D - {productName}
          </h2>

          <div className="relative flex-1 bg-gray-100 rounded-lg overflow-hidden">
            {isARMode ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button
                    onClick={() => handleScale(-0.1)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <FaArrowsAlt size={16} />
                  </button>
                  <button
                    onClick={() => handleRotate(-15)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <FaUndo size={16} />
                  </button>
                  <button
                    onClick={() => handleRotate(15)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <FaRedo size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={productImages[0]}
                  alt={productName}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button
                    onClick={() => handleScale(-0.1)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <FaArrowsAlt size={16} />
                  </button>
                  <button
                    onClick={() => handleRotate(-15)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <FaUndo size={16} />
                  </button>
                  <button
                    onClick={() => handleRotate(15)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <FaRedo size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <FaInfoCircle />
            <span>
              {isARMode 
                ? 'Aponte a câmera para uma superfície plana para visualizar o produto em seu ambiente'
                : 'Clique no ícone da câmera para ativar a visualização em realidade aumentada'}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 