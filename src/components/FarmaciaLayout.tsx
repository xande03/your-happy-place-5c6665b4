import React from 'react';
import { PillBar } from './PillBar';
import { Button } from './ui/button';
import { Bell, Settings, User } from 'lucide-react';

interface FarmaciaLayoutProps {
  children: React.ReactNode;
}

export function FarmaciaLayout({ children }: FarmaciaLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-ivory/50 to-luxury-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PillBar 
          title="Farmácia Aura" 
          subtitle="Sua saúde em primeiro lugar"
          actions={
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-luxury-black hover:bg-luxury-ivory/50 rounded-full p-2"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-luxury-black hover:bg-luxury-ivory/50 rounded-full p-2"
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-luxury-black hover:bg-luxury-ivory/50 rounded-full p-2 flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span className="hidden md:inline text-sm">Dr. Silva</span>
              </Button>
            </div>
          }
        />
        
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
