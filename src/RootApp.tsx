/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import LandingHub, { PortfolioThemeKey } from './components/LandingHub';
import { LayoutGrid, Loader2 } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const CyberPortfolio = lazy(() => import('./App'));
const CozyPortfolio = lazy(() => import('./themes/cozy/CozyPortfolio'));
const VaporwavePortfolio = lazy(() => import('./themes/vaporwave/VaporwavePortfolio'));
const MinimalPortfolio = lazy(() => import('./themes/minimal/MinimalPortfolio'));

const THEMES: readonly PortfolioThemeKey[] = ['cyber', 'cozy', 'vaporwave', 'minimal'] as const;
const isTheme = (val: string | null): val is PortfolioThemeKey =>
  Boolean(val && (THEMES as readonly string[]).includes(val));

export default function RootApp() {
  const [currentView, setCurrentView] = useState<'landing' | PortfolioThemeKey>(() => {
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('style');
      if (isTheme(param)) return param;
    }
    return 'landing';
  });

  const { lang } = useLanguage();

  const navigateTo = (view: 'landing' | PortfolioThemeKey) => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (view === 'landing') {
        url.searchParams.delete('style');
      } else {
        url.searchParams.set('style', view);
      }
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const param = new URLSearchParams(window.location.search).get('style');
      setCurrentView(isTheme(param) ? param : 'landing');
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
            onClick={() => navigateTo('landing')}
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

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#07080B] flex flex-col items-center justify-center text-white font-mono gap-3">
            <Loader2 size={24} className="animate-spin text-[#00F0FF]" />
            <span className="text-xs tracking-widest uppercase text-white/60">
              {lang === 'es' ? 'CARGANDO ESTILO...' : 'LOADING THEME...'}
            </span>
          </div>
        }
      >
        {currentView === 'landing' && <LandingHub onSelectTheme={navigateTo} />}
        {currentView === 'cyber' && <CyberPortfolio />}
        {currentView === 'cozy' && <CozyPortfolio />}
        {currentView === 'vaporwave' && <VaporwavePortfolio />}
        {currentView === 'minimal' && <MinimalPortfolio />}
      </Suspense>
    </div>
  );
}
