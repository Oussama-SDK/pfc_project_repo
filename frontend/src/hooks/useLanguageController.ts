import { useState } from 'react';

import type { Lang } from '../types/types';

export function useLanguageController(initialLanguage: Lang = 'fr') {
  const [language, setLanguage] = useState<Lang>(initialLanguage);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'fr' ? 'ar' : 'fr'));
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
}
