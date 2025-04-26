'use client'

import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import Cart from './Cart'

const CartIcon = () => {
  const { totalItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="relative p-2 text-primary hover:text-secondary transition-colors"
      >
        <FaShoppingCart className="text-2xl" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <Cart />
        </>
      )}
    </>
  )
}

export default CartIcon 