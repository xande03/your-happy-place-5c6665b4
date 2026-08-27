import { PillBarFixed } from './PillBar';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fundo com efeito parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-gold/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/HOMEM DE FERRO.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      </div>
      
      {/* Barra superior fixa */}
      <PillBarFixed>
        <Button 
          variant="ghost" 
          className="text-luxury-black hover:bg-gold/20 transition-colors"
          size="sm"
        >
          Entrar
        </Button>
        <Button 
          className="bg-luxury-black text-gold hover:bg-luxury-black/90 transition-colors"
          size="sm"
        >
          Agendar Consultoria
        </Button>
      </PillBarFixed>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-luxury-black mb-6 font-serif">
          Aura Boutique
        </h1>
        <p className="text-xl md:text-2xl text-luxury-black/80 mb-12 max-w-2xl mx-auto">
          Experiências de luxo sob medida para você. Descubra a arte do bem-estar e da elegância.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            className="bg-gold hover:bg-gold/90 text-luxury-black text-lg py-3 px-8 rounded-none uppercase tracking-wider"
            size="lg"
          >
            Explorar Coleções
          </Button>
          <Button 
            variant="outline" 
            className="border-luxury-black text-luxury-black hover:bg-luxury-black/10 text-lg py-3 px-8 rounded-none uppercase tracking-wider"
            size="lg"
          >
            Agendar Consultoria
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-luxury-black mx-auto" />
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </div>
    </div>
  );
}