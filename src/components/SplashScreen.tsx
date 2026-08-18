import React from 'react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  className?: string;
}

export function SplashScreen({ className }: SplashScreenProps) {
  return (
    <div className={cn(
      'flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100',
      className
    )}>
      <div className="text-center p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-pulse">
          Olá Mundo
        </h1>
        <p className="text-lg text-gray-600">Bem-vindo ao seu lugar feliz</p>
      </div>
    </div>
  );
}