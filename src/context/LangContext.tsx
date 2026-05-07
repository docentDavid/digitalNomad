import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import T from '../i18n/translations';
import type { Lang, TranslationKey } from '../i18n/translations';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  tHtml: (key: TranslationKey) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'nl') return saved;
  } catch {
    // localStorage unavailable
  }
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    document.title = next === 'nl'
      ? 'David Schol — UX/UI & Webdevelopment Educator'
      : 'David Schol — UX/UI & Webdevelopment Educator';
    try {
      localStorage.setItem('lang', next);
    } catch {
      // localStorage unavailable
    }
    // Announce language change to screen readers
    const announcer = document.getElementById('aria-announcer');
    if (announcer) {
      announcer.textContent = next === 'nl' ? 'Taal gewijzigd naar Nederlands' : 'Language changed to English';
      setTimeout(() => { announcer.textContent = ''; }, 1500);
    }
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return T[lang][key] ?? T['en'][key] ?? key;
  }, [lang]);

  const tHtml = useCallback((key: TranslationKey): string => {
    return T[lang][key] ?? T['en'][key] ?? key;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, tHtml }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
