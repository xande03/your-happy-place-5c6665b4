import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export function SplashScreen({ onComplete, duration = 3000 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Olá,
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-300 tracking-wide">
            membros
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
