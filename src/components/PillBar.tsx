import React from 'react';
import { cn } from '@/lib/utils';

interface PillBarProps {
  className?: string;
}

export function PillBar({ className }: PillBarProps) {
  return (
    <div 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        "bg-gradient-to-r from-gold/90 via-gold to-gold/90",
        "border-b border-luxury-black/20 shadow-lg",
        "backdrop-blur-sm bg-opacity-90",
        "hover:shadow-xl hover:bg-opacity-100 transition-shadow",
        className
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-luxury-black mr-2"></div>
            <span className="text-luxury-black text-sm font-medium uppercase tracking-wider">
              Aura Boutique
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <div className="w-1 h-1 rounded-full bg-luxury-black"></div>
              <span className="text-luxury-black text-xs">Entrega Expressa</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <div className="w-1 h-1 rounded-full bg-luxury-black"></div>
              <span className="text-luxury-black text-xs">Atendimento 24h</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <div className="w-1 h-1 rounded-full bg-luxury-black"></div>
              <span className="text-luxury-black text-xs">Qualidade Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}