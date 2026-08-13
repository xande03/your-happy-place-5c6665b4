import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ShoppingCart, 
  Package, 
  Users, 
  AlertTriangle,
  TrendingUp,
  Clock
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  // Dados fictícios para demonstração
  const stats = [
    { title: 'Vendas Hoje', value: 'R$ 2.845,90', icon: ShoppingCart, change: '+12%', color: 'bg-green-100 text-green-800' },
    { title: 'Estoque Baixo', value: '12 itens', icon: AlertTriangle, change: 'Reposição necessária', color: 'bg-yellow-100 text-yellow-800' },
    { title: 'Funcionários', value: '8', icon: Users, change: 'Em plantão', color: 'bg-blue-100 text-blue-800' },
    { title: 'Medicamentos Vencendo', value: '3', icon: Package, change: '30 dias', color: 'bg-red-100 text-red-800' },
  ];

  const recentSales = [
    { id: 1, client: 'Maria Silva', total: 'R$ 125,50', date: '10:30', status: 'Concluído' },
    { id: 2, client: 'João Santos', total: 'R$ 89,90', date: '09:45', status: 'Concluído' },
    { id: 3, client: 'Ana Paula', total: 'R$ 210,00', date: '09:20', status: 'Pendente' },
    { id: 4, client: 'Carlos Mendes', total: 'R$ 75,30', date: '08:55', status: 'Concluído' },
  ];

  const lowStockItems = [
    { id: 1, name: 'Paracetamol 500mg', quantity: 5, minQuantity: 20 },
    { id: 2, name: 'Amoxicilina 250mg', quantity: 8, minQuantity: 30 },
    { id: 3, name: 'Ibuprofeno 600mg', quantity: 12, minQuantity: 25 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Visão geral da farmácia e atividades recentes</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4">
                <Badge variant="outline" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendas Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Vendas Recentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div>
                    <p className="font-medium">{sale.client}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{sale.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold">{sale.total}</span>
                    <Badge 
                      variant={sale.status === 'Concluído' ? 'default' : 'secondary'}
                      className={sale.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' : ''}
                    >
                      {sale.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-center text-blue-600 hover:text-blue-800 font-medium">
              Ver todas as vendas
            </button>
          </CardContent>
        </Card>

        {/* Estoque Baixo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <span>Estoque Baixo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Estoque: {item.quantity} unidades</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-red-600 font-medium">Min: {item.minQuantity}</p>
                    <button className="mt-1 text-xs text-blue-600 hover:text-blue-800">
                      Repor
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-center text-blue-600 hover:text-blue-800 font-medium">
              Ver todos os itens
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Vendas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Previsão de Vendas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500">Gráfico de vendas será exibido aqui</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
