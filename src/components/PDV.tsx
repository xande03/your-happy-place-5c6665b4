import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  Plus, 
  Minus, 
  X, 
  ShoppingCart, 
  CreditCard, 
  Money,
  Receipt,
  Barcode
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: 'medicamento' | 'servico';
  prescription?: boolean;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
}

export const PDV: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Produtos disponíveis (exemplo)
  const products: Product[] = [
    { id: 1, name: 'Dorflex', price: 12.50, quantity: 1, type: 'medicamento' },
    { id: 2, name: 'Ibuprofeno 600mg', price: 8.90, quantity: 1, type: 'medicamento' },
    { id: 3, name: 'Paracetamol 500mg', price: 7.20, quantity: 1, type: 'medicamento' },
    { id: 4, name: 'Consulta Médica', price: 150.00, quantity: 1, type: 'servico' },
    { id: 5, name: 'Vacinação', price: 80.00, quantity: 1, type: 'servico' },
    { id: 6, name: 'Exame de Sangue', price: 65.00, quantity: 1, type: 'servico' },
  ];

  const paymentMethods: PaymentMethod[] = [
    { id: 'dinheiro', name: 'Dinheiro', icon: Money },
    { id: 'cartao', name: 'Cartão', icon: CreditCard },
    { id: 'pix', name: 'PIX', icon: Receipt },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    calculateTotal();
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
    calculateTotal();
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
    calculateTotal();
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(subtotal - discount);
  };

  const handlePayment = () => {
    if (cart.length === 0) {
      alert('Adicione itens ao carrinho antes de finalizar a venda');
      return;
    }
    
    if (!paymentMethod) {
      alert('Selecione um método de pagamento');
      return;
    }
    
    // Aqui iria a lógica de processamento do pagamento
    alert(`Venda concluída! Total: R$ ${total.toFixed(2)}`);
    
    // Limpar carrinho após venda
    setCart([]);
    setTotal(0);
    setDiscount(0);
    setPaymentMethod('');
    setCustomerName('');
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">PDV - Ponto de Venda</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setIsSearching(!isSearching)}>
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
          <Button variant="outline">
            <Barcode className="h-4 w-4 mr-2" />
            Código de Barras
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Produtos */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Produtos e Serviços</CardTitle>
            </CardHeader>
            <CardContent>
              {isSearching && (
                <div className="mb-4">
                  <Input
                    type="text"
                    placeholder="Buscar produtos ou serviços..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {product.type === 'medicamento' ? 'Medicamento' : 'Serviço'}
                          {product.prescription && ' (Receita obrigatória)'}
                        </p>
                      </div>
                      <Badge variant={product.type === 'medicamento' ? 'default' : 'secondary'}>
                        R$ {product.price.toFixed(2)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Carrinho de Compras */}
        <div>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Carrinho</span>
                <Badge variant="secondary">{cart.length} itens</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {cart.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-2" />
                    <p>Carrinho vazio</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 pt-2 border-t border-gray-100">
                        <span className="text-sm">Subtotal:</span>
                        <span className="font-medium">R$ {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Subtotal:</span>
                  <span>R$ {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="Desconto"
                    value={discount || ''}
                    onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                    className="w-1/2"
                  />
                  <Button 
                    variant="outline" 
                    className="w-1/2"
                    onClick={() => setDiscount(0)}
                  >
                    Remover
                  </Button>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-lg">R$ {total.toFixed(2)}</span>
                </div>
                
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Nome do cliente (opcional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                  
                  <div className="grid grid-cols-3 gap-2">
                    {paymentMethods.map((method) => (
                      <Button
                        key={method.id}
                        variant={paymentMethod === method.id ? 'default' : 'outline'}
                        className="flex flex-col items-center justify-center h-auto py-3"
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <method.icon className="h-5 w-5 mb-1" />
                        <span className="text-xs">{method.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4" 
                  onClick={handlePayment}
                  disabled={cart.length === 0 || !paymentMethod}
                >
                  Finalizar Venda
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
