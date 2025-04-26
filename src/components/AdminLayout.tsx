import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '../utils/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const router = useRouter();

  const menuItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Produtos', href: '/admin/products' },
    { name: 'Pedidos', href: '/admin/orders' },
    { name: 'Categorias', href: '/admin/categories' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-xl font-heading text-primary">
              Painel Administrativo
            </h1>
          </div>
          
          <nav className="mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block px-4 py-2 text-sm font-medium transition-colors',
                  router.pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="p-8">
            {title && (
              <h1 className="text-2xl font-heading text-secondary mb-8">
                {title}
              </h1>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 