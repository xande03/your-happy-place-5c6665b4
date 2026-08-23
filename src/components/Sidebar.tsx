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
    <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-700 shadow-2xl h-full flex flex-col border-r border-blue-800">
      {/* Logo Section */}
      <div className="p-6 border-b border-blue-500 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <Package className="h-7 w-7 text-blue-600" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-white drop-shadow-lg">Farmácia Saúde+</h2>
            <p className="text-xs text-blue-100 font-medium">Sistema de Gestão</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto bg-gradient-to-b from-blue-600/50 to-blue-700/30">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-8">
            <div className="flex items-center mb-4">
              <div className="h-px bg-blue-400 flex-1"></div>
              <span className="px-4 text-xs font-bold text-blue-100 uppercase tracking-wider bg-blue-600/50 px-3 py-1 rounded-full">
                {section.title}
              </span>
              <div className="h-px bg-blue-400 flex-1"></div>
            </div>
            
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-white/90 rounded-xl hover:bg-white/10 hover:text-white hover:shadow-lg hover:border-l-4 hover:border-white transition-all duration-300 transform hover:translate-x-1"
                  >
                    <div className="p-3 rounded-xl bg-white/20 text-white/80 hover:bg-white/30 transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-white/90">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      
      {/* User Profile Section */}
      <div className="p-4 border-t border-blue-500 bg-gradient-to-t from-blue-700/50 to-blue-800/50">
        <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
            <User className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">Administrador</p>
            <p className="text-xs text-blue-100 truncate">admin@farmacia.com</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="text-xs text-white/80 hover:text-white font-bold py-2 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 w-full">
            Sair da conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;