'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

interface Review {
  id: string
  rating: number
  comment: string
  createdAt: string
  user: {
    name: string
    image: string | null
  }
}

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          Ainda não há avaliações para este produto.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              {review.user.image ? (
                <Image
                  src={review.user.image}
                  alt={review.user.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#d4a0a0] text-white text-xl">
                  {review.user.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">
                  {review.user.name}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-2">
                {review.comment}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 