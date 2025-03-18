import React from 'react';
import { Package, HelpCircle, Box, Gift, Settings } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pb-20">
      <div className="p-4 space-y-6">
        <div className="bg-gray-900 rounded-lg p-4 animate-slide-up">
          <h2 className="text-xl font-bold">Junior da Silva Washingtong Jr.</h2>
          <p className="text-gray-400">Gerenciar perfil ›</p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4 flex items-center animate-slide-up stagger-delay-1 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
            <Package className="mr-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Meus Pedidos</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gray-900 rounded-lg p-4 flex items-center animate-slide-up stagger-delay-2 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
              <Box className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span>Comprar programada</span>
            </button>
            <button className="bg-gray-900 rounded-lg p-4 flex items-center animate-slide-up stagger-delay-2 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
              <HelpCircle className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span>Ajuda</span>
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 flex items-center animate-slide-up stagger-delay-3 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
            <Gift className="mr-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Benefícios</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gray-900 rounded-lg p-4 flex items-center animate-slide-up stagger-delay-3 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
              <Gift className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span>Cupons</span>
            </button>
            <button className="bg-gray-900 rounded-lg p-4 flex items-center animate-slide-up stagger-delay-3 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
              <Settings className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span>Direitos Personalizados</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};