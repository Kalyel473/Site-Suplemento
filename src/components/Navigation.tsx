import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavigationProps {
  currentScreen: string;
  onNavigate: (screen: any) => void;
  items: {
    id: string;
    icon: LucideIcon;
  }[];
}

export const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate, items }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 animate-slide-up backdrop-blur-lg bg-opacity-80">
      <div className="flex justify-around py-3">
        {items.map(({ id, icon: Icon }, index) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`p-2 rounded-lg transition-all duration-300 hover:bg-gray-800 ${
              currentScreen === id ? 'text-white scale-110' : 'text-gray-500 scale-100'
            } stagger-delay-${index + 1}`}
          >
            <Icon size={24} className="transition-transform duration-300 hover:scale-110" />
          </button>
        ))}
      </div>
    </nav>
  );
};