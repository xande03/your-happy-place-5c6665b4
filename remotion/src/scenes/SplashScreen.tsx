import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

export const SplashScreen: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg">
        <h1 
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          style={{
            transform: `scale(${1 + Math.sin(frame * 0.1) * 0.1})`,
            transition: 'transform 0.3s ease'
          }}
        >
          Olá Mundo
        </h1>
        <p className="text-lg text-gray-600">Bem-vindo ao seu lugar feliz</p>
      </div>
    </AbsoluteFill>
  );
};