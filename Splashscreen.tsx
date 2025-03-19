import React from 'react';
import { Camera } from 'lucide-react';

export const Splashscreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative mb-8 animate-fade-in">
        <Camera size={64} className="text-white animate-bounce" />
        <div className="absolute inset-0 animate-ping bg-white/10 rounded-full" />
      </div>
      <h1 className="text-4xl font-bold text-white tracking-wider animate-slide-up">
        CLAYMORE
      </h1>
    </div>
  );
};
