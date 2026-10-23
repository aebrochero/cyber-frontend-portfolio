/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, ContentDictionary, DICTIONARY_ES, DICTIONARY_EN } from '@/data';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  dict: ContentDictionary;
}

const STORAGE_KEY = 'cyber_portfolio_lang';

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'es';
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === 'es' || saved === 'en') return saved;
    const browserLang = navigator.language?.toLowerCase() ?? '';
    return browserLang.startsWith('en') ? 'en' : 'es';
  });

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
      document.documentElement.lang = nextLang;
    } catch {
      // storage unavailable
    }
  };

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const dict = useMemo(() => {
    return lang === 'en' ? DICTIONARY_EN : DICTIONARY_ES;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, dict }),
    [lang, dict]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
