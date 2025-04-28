'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  quantity?: number
}

interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  updateQuantity: (productId: string, quantity: number) => void
  total: number
  itemsCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [itemsCount, setItemsCount] = useState(0)

  useEffect(() => {
    // Carregar carrinho do localStorage apenas no cliente
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    }
  }, [])

  useEffect(() => {
    // Salvar carrinho no localStorage apenas no cliente
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
      
      // Calcular total e quantidade de itens
      const newTotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 0)), 0)
      const newItemsCount = cart.reduce((acc, item) => acc + (item.quantity || 0), 0)
      
      setTotal(newTotal)
      setItemsCount(newItemsCount)
    }
  }, [cart])

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id)
      
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        )
      }
      
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        total,
        itemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 