import React from 'react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  className?: string;
}

export function SplashScreen({ className }: SplashScreenProps) {
  return (
    <div className={cn(
      'fixed inset-0 z-50 flex items-center justify-center',
      'bg-gradient-to-br from-purple-600 via-pink-500 to-red-500',
      className
    )}>
      <div className="text-center space-y-8 animate-pulse">
        <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
          Olá Mundo
        </h1>
        <div className="w-32 h-1 bg-white/80 mx-auto rounded-full animate-bounce" />
      </div>
    </div>
  );
}

interface SplashScreenContainerProps {
  children: React.ReactNode;
  showSplash?: boolean;
}

export function SplashScreenContainer({ 
  children, 
  showSplash = true 
}: SplashScreenContainerProps) {
  return (
    <>
      {showSplash && <SplashScreen />}
      {children}
    </>
  );
}