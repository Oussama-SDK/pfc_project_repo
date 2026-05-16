import { useEffect, useState } from 'react';

import type { Lang, Translation } from '../types/types';

type UseHomeControllerArgs = {
  language: Lang;
  translations: Record<Lang, Translation>;
};

export function useHomeController({ language, translations }: UseHomeControllerArgs) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dir = t.direction;
    document.documentElement.lang = language;
  }, [language, t.direction]);

  return {
    showLoginModal,
    setShowLoginModal,
    showSignupModal,
    setShowSignupModal,
    t,
  };
}
