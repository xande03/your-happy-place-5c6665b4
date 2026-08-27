import React, { useState, useEffect } from 'react';
import { PillBar } from './PillBar';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-luxury-black/10 to-luxury-ivory/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <PillBar 
          title="Aura Boutique" 
          subtitle="Sua experiência de luxo começa aqui"
          actions={
            <Button 
              variant="outline" 
              className="bg-white/80 hover:bg-white text-luxury-black border-luxury-ivory rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105"
              onClick={() => setIsVisible(false)}
            >
              Entrar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          }
        />
      </div>
    </div>
  );
}
