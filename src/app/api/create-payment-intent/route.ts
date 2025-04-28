import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount } = body

    if (!amount) {
      return NextResponse.json(
        { message: 'Valor inválido' },
        { status: 400 }
      )
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe trabalha com centavos
      currency: 'brl',
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao criar payment intent:', error)
    return NextResponse.json(
      { message: 'Erro ao processar pagamento' },
      { status: 500 }
    )
  }
} 