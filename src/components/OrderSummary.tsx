import React from 'react';
import Image from 'next/image';
import { useCart } from '../../hooks/useCart';
import { cn } from '../utils/utils';

const OrderSummary = () => {
  const { items } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10; // Valor fixo de frete por enquanto
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Resumo do Pedido
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.quantity} x {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.price)}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 border-t border-gray-200 pt-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(subtotal)}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Frete</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <span>Total</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary; 