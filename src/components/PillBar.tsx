import React from 'react';
import { Button } from '@/components/ui/button';

interface PillBarProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function PillBar({ title, subtitle, actions }: PillBarProps) {
  return (
    <div className="w-full bg-white rounded-full shadow-lg p-4 mb-6 flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex space-x-2">
        {actions}
      </div>
    </div>
  );
}
