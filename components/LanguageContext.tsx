'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Language, content } from '@/lib/content';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof content.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Compute language directly from pathname - no delays
  const pathLang = pathname.split('/')[1] as string;
  const language: Language = (pathLang === 'en' || pathLang === 'fr') ? pathLang : 'en';

  const [, forceUpdate] = useState({});
  const setLanguage = (lang: Language) => {
    // This is handled by router.push() in the component, not by state
    forceUpdate({});
  };

  const value = {
    language,
    setLanguage,
    t: content[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
