'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '@/lib/stripe'
import PaymentForm from '../components/PaymentForm'
import { motion } from 'framer-motion'

export default function PaymentPage() {
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState('')
  const [error, setError] = useState('')
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    // Aqui você pode pegar o valor total do carrinho
    const total = 100 // Exemplo
    setAmount(total)

    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount: total })
        })

        if (!response.ok) {
          throw new Error('Erro ao criar payment intent')
        }

        const data = await response.json()
        setClientSecret(data.clientSecret)
      } catch (error) {
        setError('Erro ao processar pagamento')
      }
    }

    createPaymentIntent()
  }, [])

  const handleSuccess = () => {
    router.push('/pagamento/sucesso')
  }

  const handleError = (error: string) => {
    setError(error)
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen bg-[#fff5f5] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-center text-gray-600">Carregando...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fff5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
                variables: {
                  colorPrimary: '#d4a0a0',
                },
              },
            }}
          >
            <PaymentForm
              amount={amount}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </Elements>
        </div>
      </div>
    </div>
  )
} 