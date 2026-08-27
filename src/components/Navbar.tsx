import React from 'react';
import { PillBar } from './PillBar';

export function Navbar() {
  return (
    <div className="relative">
      <PillBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gold rounded flex items-center justify-center">
              <span className="text-luxury-black font-bold text-lg">A</span>
            </div>
            <h1 className="text-2xl font-serif text-luxury-black">Aura Boutique</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-luxury-black hover:text-gold transition-colors uppercase text-sm tracking-wider">Início</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors uppercase text-sm tracking-wider">Produtos</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors uppercase text-sm tracking-wider">Serviços</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors uppercase text-sm tracking-wider">Sobre Nós</a>
            <a href="#" className="text-luxury-black hover:text-gold transition-colors uppercase text-sm tracking-wider">Contato</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-luxury-black hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-luxury-black hover:text-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button className="bg-gold hover:bg-gold/90 text-luxury-black uppercase tracking-widest text-xs font-bold py-2 px-4 rounded-none transition-all">
              Minha Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}