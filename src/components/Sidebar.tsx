import React from 'react';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  FileText, 
  Settings,
  BarChart3,
  Calendar
} from 'lucide-react';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: Home, href: '/' },
    { id: 2, name: 'Medicamentos', icon: Package, href: '/medicamentos' },
    { id: 3, name: 'PDV - Vendas', icon: ShoppingCart, href: '/pdv' },
    { id: 4, name: 'Serviços', icon: FileText, href: '/servicos' },
    { id: 5, name: 'Funcionários', icon: Users, href: '/funcionarios' },
    { id: 6, name: 'Estoque', icon: Package, href: '/estoque' },
    { id: 7, name: 'Relatórios', icon: BarChart3, href: '/relatorios' },
    { id: 8, name: 'Agenda', icon: Calendar, href: '/agenda' },
    { id: 9, name: 'Configurações', icon: Settings, href: '/configuracoes' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Package className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-800">Farmácia Saúde+</h2>
            <p className="text-xs text-gray-500">Sistema de Gestão</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Administrador</p>
            <p className="text-xs text-gray-500">admin@farmacia.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
