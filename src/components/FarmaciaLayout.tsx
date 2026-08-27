import { PillBarFixed } from './PillBar';
import { Button } from '@/components/ui/button';
import { Bell, User } from 'lucide-react';

export function FarmaciaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-gold/5">
      {/* Barra superior fixa */}
      <PillBarFixed>
        <div className="flex items-center space-x-4">
          <div className="text-luxury-black text-sm font-medium">
            Bem-vindo, Cliente
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-luxury-black hover:bg-gold/20 transition-colors"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-luxury-black hover:bg-gold/20 transition-colors"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </PillBarFixed>
      
      {/* Conteúdo principal */}
      <main className="pt-20 pb-10">
        {children}
      </main>
    </div>
  );
}