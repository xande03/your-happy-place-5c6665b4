import React from 'react';
import { PillBar } from './PillBar';

export function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <PillBar 
          title="Aura Boutique" 
          subtitle="Sua experiência de luxo começa aqui"
          actions={
            <>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                Entrar
              </button>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                Cadastre-se
              </button>
            </>
          }
        />
        
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bem-vindo ao Aura</h2>
          <p className="text-gray-600 mb-8">
            Descubra nossa coleção exclusiva de produtos de luxo e serviços personalizados.
          </p>
          <div className="mb-8">
            <img 
              src="/HOMEM DE FERRO.png" 
              alt="Aura Boutique" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <button className="bg-indigo-600 text-white py-3 px-8 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg">
            Explorar Coleção
          </button>
        </div>
      </div>
    </div>
  );
}
