import React from 'react';
import { Button } from '@/components/ui/button';
import { PillBar } from './PillBar';

export function Navbar() {
  return (
    <div className="w-full">
      <PillBar 
        title="Aura Boutique" 
        subtitle="Sua experiência de luxo começa aqui"
        actions={
          <>
            <Button variant="outline" size="sm">
              Produtos
            </Button>
            <Button variant="outline" size="sm">
              Serviços
            </Button>
            <Button variant="outline" size="sm">
              Contato
            </Button>
            <Button size="sm">
              Agendar
            </Button>
          </>
        }
      />
    </div>
  );
}
