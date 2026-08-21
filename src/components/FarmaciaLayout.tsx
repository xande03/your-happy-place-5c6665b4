import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface FarmaciaLayoutProps {
  children: React.ReactNode;
}

export const FarmaciaLayout: React.FC<FarmaciaLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-gray-600">
        desenvolvido por Alexandre
      </footer>
    </div>
  );
};