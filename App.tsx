import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Search } from './components/Search';
import { Settings } from './components/Settings';
import { Splashscreen } from './components/Splashscreen';
import { Navigation } from './components/Navigation';
import { Home as HomeIcon, Search as SearchIcon, Settings as SettingsIcon, User } from 'lucide-react';

// Create a context for theme settings
export const ThemeContext = React.createContext({
  isDarkMode: true,
  fontSize: 'normal',
  language: 'pt',
  notifications: true,
  setTheme: (settings: any) => {},
});

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'home' | 'search' | 'profile' | 'settings'>('splash');
  const [showSplash, setShowSplash] = useState(true);
  const [themeSettings, setThemeSettings] = useState({
    isDarkMode: true,
    fontSize: 'normal',
    language: 'pt',
    notifications: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setCurrentScreen('home');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splashscreen />;
  }

  return (
    <ThemeContext.Provider value={{ ...themeSettings, setTheme: setThemeSettings }}>
      <div className={`min-h-screen ${themeSettings.isDarkMode ? 'bg-black' : 'bg-white'} 
        ${themeSettings.fontSize === 'large' ? 'text-lg' : themeSettings.fontSize === 'small' ? 'text-sm' : 'text-base'}
        ${themeSettings.isDarkMode ? 'text-white' : 'text-black'}`}>
        {currentScreen === 'home' && <Home />}
        {currentScreen === 'search' && <Search />}
        {currentScreen === 'profile' && <Profile />}
        {currentScreen === 'settings' && <Settings />}
        
        <Navigation
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
          items={[
            { id: 'home', icon: HomeIcon },
            { id: 'search', icon: SearchIcon },
            { id: 'settings', icon: SettingsIcon },
            { id: 'profile', icon: User }
          ]}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;