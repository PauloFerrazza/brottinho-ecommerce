import React from 'react';
import Image from 'next/image';
import { cn } from '../utils/utils';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderDetailsProps {
  order: {
    id: string;
    customer: {
      name: string;
      email: string;
      phone: string;
    };
    address: {
      street: string;
      number: string;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
    items: OrderItem[];
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    total: number;
    shipping: number;
    createdAt: string;
  };
  className?: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, className }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendente';
      case 'processing':
        return 'Em processamento';
      case 'shipped':
        return 'Enviado';
      case 'delivered':
        return 'Entregue';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  return (
    <div className={cn('bg-white rounded-lg shadow p-6', className)}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-medium text-gray-900">
            Pedido #{order.id}
          </h2>
          <p className="text-sm text-gray-500">
            Realizado em {new Date(order.createdAt).toLocaleDateString('pt-BR')}
          </p>
        </div>
        <span
          className={cn(
            'px-3 py-1 text-xs font-medium rounded-full',
            getStatusColor(order.status)
          )}
        >
          {getStatusText(order.status)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Informações do Cliente
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-900">{order.customer.name}</p>
            <p className="text-sm text-gray-500">{order.customer.email}</p>
            <p className="text-sm text-gray-500">{order.customer.phone}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Endereço de Entrega
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-900">
              {order.address.street}, {order.address.number}
              {order.address.complement && `, ${order.address.complement}`}
            </p>
            <p className="text-sm text-gray-500">
              {order.address.neighborhood}
            </p>
            <p className="text-sm text-gray-500">
              {order.address.city} - {order.address.state}
            </p>
            <p className="text-sm text-gray-500">
              CEP: {order.address.zipCode}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium text-gray-500 mb-4">
          Itens do Pedido
        </h3>
        <div className="space-y-4">
          {order.items.map((item) => (
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
                <h4 className="text-sm font-medium text-gray-900">
                  {item.name}
                </h4>
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
              }).format(order.total - order.shipping)}
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Frete</span>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(order.shipping)}
            </span>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <span>Total</span>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(order.total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails; 