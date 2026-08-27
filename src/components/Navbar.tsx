import { PillBarFixed } from './PillBar';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <>
      {/* Barra superior fixa */}
      <PillBarFixed>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-luxury-black">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+351 123 456 789</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-luxury-black">
            <Mail className="h-4 w-4" />
            <span className="text-sm">contact@auraboutique.com</span>
          </div>
          <Button 
            variant="ghost" 
            className="text-luxury-black hover:bg-gold/20 transition-colors"
            size="sm"
          >
            Entrar
          </Button>
        </div>
      </PillBarFixed>
      
      {/* Navegação principal */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-luxury-black/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gold"></div>
            <span className="text-xl font-serif font-bold text-luxury-black">Aura</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-luxury-black hover:text-gold transition-colors font-medium">Início</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors font-medium">Coleções</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors font-medium">Serviços</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors font-medium">Sobre Nós</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors font-medium">Contato</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-gold hover:bg-gold/90 text-luxury-black">
              Agendar Consultoria
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-luxury-black" />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}