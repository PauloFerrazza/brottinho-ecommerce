'use client'

import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { motion } from 'framer-motion'

interface PaymentFormProps {
  amount: number
  onSuccess: () => void
  onError: (error: string) => void
}

export default function PaymentForm({ amount, onSuccess, onError }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/pagamento/sucesso`,
        },
      })

      if (error) {
        onError(error.message || 'Ocorreu um erro ao processar o pagamento')
      } else {
        onSuccess()
      }
    } catch (error) {
      onError('Ocorreu um erro ao processar o pagamento')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Pagamento
        </h2>
        <p className="text-gray-600 mb-6">
          Total a pagar: R$ {amount.toFixed(2)}
        </p>
        <PaymentElement />
      </div>

      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full bg-[#d4a0a0] text-white py-3 rounded-lg hover:bg-[#c08f8f] transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Processando...' : 'Pagar'}
      </button>
    </motion.form>
  )
} 