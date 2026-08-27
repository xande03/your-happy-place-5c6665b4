import React from 'react';
import { PillBar } from './PillBar';

export function FarmaciaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-luxury-ivory">
      <PillBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif text-luxury-black mb-2">Aura Farmácia</h1>
          <p className="text-luxury-black/70">Seu bem-estar é nossa prioridade</p>
        </div>
        
        {children}
      </div>
    </div>
  );
}