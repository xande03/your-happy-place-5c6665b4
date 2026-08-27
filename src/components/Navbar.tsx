import React from 'react';
import { PillBar } from './PillBar';
import { Button } from './ui/button';
import { ShoppingCart, User, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-luxury-ivory/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillBar 
          title="Aura Boutique" 
          subtitle="Exclusividade e sofisticação"
          actions={
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-luxury-black hover:bg-luxury-ivory/50 rounded-full p-2"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-luxury-black hover:bg-luxury-ivory/50 rounded-full p-2 relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-luxury-black hover:bg-luxury-ivory/50 rounded-full p-2 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          }
        />
      </div>
    </nav>
  );
}
