import React from 'react';
import { cn } from '@/lib/utils';

interface PillBarProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function PillBar({ 
  title, 
  subtitle, 
  actions, 
  className 
}: PillBarProps) {
  return (
    <div className={cn(
      'flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-gold/10 to-luxury-black/5 border border-luxury-ivory/30 rounded-full shadow-lg backdrop-blur-sm',
      className
    )}>
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-luxury-black tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-sm md:text-base text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      
      {actions && (
        <div className="flex items-center space-x-2 md:space-x-4">
          {actions}
        </div>
      )}
    </div>
  );
}
