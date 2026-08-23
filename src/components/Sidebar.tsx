import React from 'react';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  FileText, 
  Settings,
  BarChart3,
  Calendar,
  User,
  ChevronDown,
  ChevronRight,
  Pill,
  Box,
  Users as UsersIcon,
  Briefcase,
  FileBarChart,
  Clock,
  Gear
} from 'lucide-react';

interface SidebarProps {}

interface MenuItem {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const menuSections: MenuSection[] = [
    {
      title: 'Principal',
      items: [
        { id: 1, name: 'Dashboard', icon: Home, href: '/' },
      ],
    },
    {
      title: 'Vendas',
      items: [
        { id: 2, name: 'PDV - Vendas', icon: ShoppingCart, href: '/pdv' },
        { id: 3, name: 'Serviços', icon: FileText, href: '/servicos' },
      ],
    },
    {
      title: 'Gestão',
      items: [
        { id: 4, name: 'Medicamentos', icon: Pill, href: '/medicamentos' },
        { id: 6, name: 'Estoque', icon: Box, href: '/estoque' },
        { id: 5, name: 'Funcionários', icon: UsersIcon, href: '/funcionarios' },
      ],
    },
    {
      title: 'Relatórios',
      items: [
        { id: 7, name: 'Relatórios', icon: FileBarChart, href: '/relatorios' },
        { id: 8, name: 'Agenda', icon: Clock, href: '/agenda' },
      ],
    },
    {
      title: 'Sistema',
      items: [
        { id: 9, name: 'Configurações', icon: Gear, href: '/configuracoes' },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-blue-50 to-white shadow-lg h-full flex flex-col border-r border-gray-100">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white">Farmácia Saúde+</h2>
            <p className="text-xs text-blue-100">Sistema de Gestão</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="flex items-center mb-3">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {section.title}
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:shadow-sm hover:border-l-4 hover:border-blue-500"
                  >
                    <div className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      
      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200 bg-gradient-to-t from-gray-50 to-white">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm border border-gray-100">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
            <User className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Administrador</p>
            <p className="text-xs text-gray-500 truncate">admin@farmacia.com</p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Sair da conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;