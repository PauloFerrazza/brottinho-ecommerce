'use client'

import React from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { cn } from '../utils/utils';

const categorias = [
  { id: 1, nome: 'Todos', slug: '' },
  { id: 2, nome: 'Amigurumis', slug: 'amigurumis' },
  { id: 3, nome: 'Decoração', slug: 'decoracao' },
  { id: 4, nome: 'Acessórios', slug: 'acessorios' },
];

export default function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const categoriaAtual = searchParams.get('categoria') || '';

  const handleCategoriaClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (slug) {
      params.set('categoria', slug);
    } else {
      params.delete('categoria');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-secondary mb-4">Categorias</h3>
        <div className="flex flex-col space-y-2">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => handleCategoriaClick(categoria.slug)}
              className={`text-left px-4 py-2 rounded-lg transition-colors ${
                categoriaAtual === categoria.slug
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/10 text-secondary'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-secondary mb-4">Preço</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="number"
              placeholder="Mín"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              placeholder="Máx"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
} 