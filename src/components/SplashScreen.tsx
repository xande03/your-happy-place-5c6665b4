import React from 'react';

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-pulse">Olá Mundo</h1>
        <p className="text-lg text-gray-600">Bem-vindo ao seu espaço feliz!</p>
        <div className="mt-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;