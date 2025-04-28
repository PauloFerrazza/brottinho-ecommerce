'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

interface ReviewFormProps {
  productId: string
  onSubmit: (rating: number, comment: string) => void
  onCancel: () => void
}

export default function ReviewForm({ productId, onSubmit, onCancel }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(rating, comment)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Avaliação
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="text-2xl focus:outline-none"
            >
              <FaStar
                className={`${
                  star <= (hoveredRating || rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
          Comentário
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a0a0]"
          placeholder="Conte-nos sua experiência com o produto..."
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={!rating}
          className="flex-1 bg-[#d4a0a0] text-white py-3 rounded-lg hover:bg-[#c08f8f] transition-colors disabled:opacity-50"
        >
          Enviar Avaliação
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-white text-[#d4a0a0] py-3 rounded-lg border border-[#d4a0a0] hover:bg-[#f3e7e7] transition-colors"
        >
          Cancelar
        </button>
      </div>
    </motion.form>
  )
} 