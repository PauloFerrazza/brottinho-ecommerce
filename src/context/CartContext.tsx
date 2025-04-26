'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface Product {
  id: number
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
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  total: number
  itemsCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [itemsCount, setItemsCount] = useState(0)

  useEffect(() => {
    // Carregar carrinho do localStorage
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    // Salvar carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(items))
    
    // Calcular total e quantidade de itens
    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const newItemsCount = items.reduce((acc, item) => acc + item.quantity, 0)
    
    setTotal(newTotal)
    setItemsCount(newItemsCount)
  }, [items])

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      }
      
      return [...prev, { ...product, quantity: product.quantity || 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return
    
    setItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
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