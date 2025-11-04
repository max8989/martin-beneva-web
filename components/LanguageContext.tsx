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
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Extract language from URL path (e.g., /en or /fr)
    const pathLang = pathname.split('/')[1] as Language;
    if (pathLang === 'en' || pathLang === 'fr') {
      setLanguage(pathLang);
    }
  }, [pathname]);

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
