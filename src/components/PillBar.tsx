import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PillBarProps {
  className?: string;
  children?: ReactNode;
}

export function PillBar({ className, children }: PillBarProps) {
  return (
    <div className={cn(
      'fixed top-0 left-0 right-0 z-50',
      'bg-gradient-to-r from-gold/90 to-amber-500/90 backdrop-blur-md',
      'border-b border-luxury-black/20 shadow-lg',
      'transform -translate-y-full transition-transform duration-300',
      'hover:translate-y-0',
      className
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-luxury-black"></div>
          <span className="text-sm font-medium text-luxury-black uppercase tracking-wider">
            Aura Boutique
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {children}
        </div>
      </div>
    </div>
  );
}

interface PillBarFixedProps {
  className?: string;
  children?: ReactNode;
}

export function PillBarFixed({ className, children }: PillBarFixedProps) {
  return (
    <div className={cn(
      'fixed top-0 left-0 right-0 z-50',
      'bg-gradient-to-r from-gold/95 to-amber-500/95 backdrop-blur-xl',
      'border-b border-luxury-black/20 shadow-xl',
      'transform transition-all duration-500',
      'hover:shadow-2xl',
      className
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-luxury-black"></div>
          <span className="text-sm font-medium text-luxury-black uppercase tracking-wider">
            Aura Boutique
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {children}
        </div>
      </div>
    </div>
  );
}
