/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import LandingHub, { PortfolioThemeKey } from './components/LandingHub';
import CyberPortfolio from './App';
import CozyPortfolio from './themes/cozy/CozyPortfolio';
import VaporwavePortfolio from './themes/vaporwave/VaporwavePortfolio';
import MinimalPortfolio from './themes/minimal/MinimalPortfolio';
import { LayoutGrid } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function RootApp() {
  const [currentView, setCurrentView] = useState<'landing' | PortfolioThemeKey>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const styleParam = params.get('style') as PortfolioThemeKey | null;
      if (styleParam && ['cyber', 'cozy', 'vaporwave', 'minimal'].includes(styleParam)) {
        return styleParam;
      }
    }
    return 'landing';
  });

  const { lang } = useLanguage();

  const handleSelectTheme = (theme: PortfolioThemeKey) => {
    setCurrentView(theme);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('style', theme);
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReturnToLanding = () => {
    setCurrentView('landing');
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('style');
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const styleParam = params.get('style') as PortfolioThemeKey | null;
      if (styleParam && ['cyber', 'cozy', 'vaporwave', 'minimal'].includes(styleParam)) {
        setCurrentView(styleParam);
      } else {
        setCurrentView('landing');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Floating Back to Hub Switcher Button when inside a portfolio */}
      {currentView !== 'landing' && (
        <aside
          aria-label="Controles de navegación de estilo"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 print:hidden"
        >
          <button
            onClick={handleReturnToLanding}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-black/85 hover:bg-black text-white text-xs font-mono tracking-wider border border-white/20 hover:border-[#00F0FF] shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer group hover:scale-105"
            title={lang === 'es' ? 'Volver a la selección de temas' : 'Back to Theme Selection Hub'}
          >
            <LayoutGrid size={14} className="text-[#00F0FF] group-hover:rotate-90 transition-transform" />
            <span className="font-semibold">
              {lang === 'es' ? 'CAMBIAR ESTILO' : 'SWITCH STYLE'}
            </span>
          </button>
        </aside>
      )}

      {currentView === 'landing' && <LandingHub onSelectTheme={handleSelectTheme} />}
      {currentView === 'cyber' && <CyberPortfolio />}
      {currentView === 'cozy' && <CozyPortfolio />}
      {currentView === 'vaporwave' && <VaporwavePortfolio />}
      {currentView === 'minimal' && <MinimalPortfolio />}
    </div>
  );
}
