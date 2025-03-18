import React from 'react';
import { Search as SearchIcon, Clock } from 'lucide-react';

export const Search: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pb-20">
      <div className="p-4 space-y-6">
        <div className="relative animate-slide-up">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-800 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-white/20 focus:outline-none"
          />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <div className="space-y-4">
          <h3 className="text-gray-400 animate-fade-in">Histórico de busca</h3>
          
          {['Tênis', 'Docs', 'Testo', 'Darflex'].map((term, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-3 text-gray-300 animate-slide-up transition-all duration-300 hover:bg-gray-900 hover:scale-[1.02] p-2 rounded-lg cursor-pointer stagger-delay-${index + 1}`}
            >
              <Clock size={16} className="text-gray-400" />
              <span>{term}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};