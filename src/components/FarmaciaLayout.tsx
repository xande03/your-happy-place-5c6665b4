import React from 'react';
import { Navbar } from './Navbar';
import { PillBar } from './PillBar';

interface FarmaciaLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function FarmaciaLayout({ children, title, subtitle, actions }: FarmaciaLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {title ? (
        <PillBar 
          title={title} 
          subtitle={subtitle}
          actions={actions}
        />
      ) : (
        <Navbar />
      )}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
