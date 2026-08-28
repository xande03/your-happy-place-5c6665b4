import React from 'react';
import { PillBar } from './PillBar';

export function SplashScreen() {
  return (
    <div className="relative min-h-screen flex flex-col bg-green-900">
      <PillBar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-fade-in">
            Aura Boutique
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in delay-100">
            O seu lugar feliz, onde luxo e bem-estar encontram-se em perfeita harmonia
          </p>
          <button className="bg-white hover:bg-white/90 text-green-900 uppercase tracking-widest text-sm font-bold py-4 px-8 rounded-none transition-all transform hover:scale-105 animate-fade-in delay-200">
            Descubra Nossa Coleção
          </button>
        </div>
      </div>
      
      <div className="h-64 bg-gradient-to-t from-green-900 to-transparent absolute bottom-0 left-0 right-0"></div>
    </div>
  );
}