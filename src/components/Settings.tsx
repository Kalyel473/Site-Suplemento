import React, { useContext } from 'react';
import { Moon, Sun, Type, Bell, Globe, ChevronRight } from 'lucide-react';
import { ThemeContext } from '../App';

export const Settings: React.FC = () => {
  const { isDarkMode, fontSize, language, notifications, setTheme } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setTheme((prev: any) => ({ ...prev, isDarkMode: !prev.isDarkMode }));
  };

  const toggleNotifications = () => {
    setTheme((prev: any) => ({ ...prev, notifications: !prev.notifications }));
  };

  const changeFontSize = (size: string) => {
    setTheme((prev: any) => ({ ...prev, fontSize: size }));
  };

  const changeLanguage = (lang: string) => {
    setTheme((prev: any) => ({ ...prev, language: lang }));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} pb-20`}>
      <div className="p-4 space-y-6">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} animate-fade-in`}>
          Configurações
        </h1>

        <div className="space-y-4">
          {/* Aparência */}
          <div className="bg-gray-900 rounded-lg p-4 animate-slide-up">
            <h2 className="text-lg font-semibold mb-4">Aparência</h2>
            
            <div className="space-y-4">
              {/* Modo Escuro */}
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 transition-all"
              >
                <div className="flex items-center space-x-3">
                  {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                  <span>Modo Escuro</span>
                </div>
                <div className={`w-12 h-6 rounded-full relative ${isDarkMode ? 'bg-blue-600' : 'bg-gray-400'}`}>
                  <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-all duration-300
                    ${isDarkMode ? 'right-0.5' : 'left-0.5'}`} />
                </div>
              </button>

              {/* Tamanho da Fonte */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Type size={20} />
                  <span>Tamanho da Fonte</span>
                </div>
                <div className="flex space-x-2">
                  {['small', 'normal', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => changeFontSize(size)}
                      className={`px-4 py-2 rounded-lg transition-all
                        ${fontSize === size 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Idioma */}
          <div className="bg-gray-900 rounded-lg p-4 animate-slide-up stagger-delay-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Globe size={20} />
                <span>Idioma</span>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-gray-800 rounded-lg px-3 py-1"
                >
                  <option value="pt">Português</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
                <ChevronRight size={16} />
              </div>
            </div>
          </div>

          {/* Notificações */}
          <div className="bg-gray-900 rounded-lg p-4 animate-slide-up stagger-delay-2">
            <button
              onClick={toggleNotifications}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Bell size={20} />
                <span>Notificações</span>
              </div>
              <div className={`w-12 h-6 rounded-full relative ${notifications ? 'bg-blue-600' : 'bg-gray-400'}`}>
                <div className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-all duration-300
                  ${notifications ? 'right-0.5' : 'left-0.5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};