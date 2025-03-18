import React from 'react';
import { Search, MapPin } from 'lucide-react';

export const Home: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Whey Protein Isolado',
      price: 'R$ 199,90',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'BCAA 2:1:1',
      price: 'R$ 89,90',
      image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Creatina 300g',
      price: 'R$ 149,90',
      image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Pré-Treino',
      price: 'R$ 129,90',
      image: 'https://images.unsplash.com/photo-1612532774276-cfa70ca7ed3b?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black pb-20">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between animate-fade-in">
          <h1 className="text-2xl font-bold">CLAYMORE</h1>
          <p className="text-gray-400">Olá, Junior</p>
        </div>

        <div className="relative animate-slide-up stagger-delay-1">
          <input
            type="text"
            placeholder="Buscar na Claymore"
            className="w-full bg-gray-800 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-white/20 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <div className="flex items-center space-x-2 text-gray-400 animate-slide-up stagger-delay-2">
          <MapPin size={16} className="animate-bounce" />
          <p className="text-sm">Av. Sen. Salgado Filho, 9170 - Natal - 59056-000</p>
        </div>

        <div className="grid grid-cols-2 gap-4 animate-fade-in stagger-delay-3">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-white">{product.name}</h3>
                <p className="text-green-400 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 animate-scale-in stagger-delay-3">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop"
              alt="Promotional Banner"
              className="w-full h-32 object-cover transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-4">
              <div>
                <h2 className="text-xl font-bold text-white">Oferta Especial</h2>
                <p className="text-green-400 font-bold">Até 40% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};