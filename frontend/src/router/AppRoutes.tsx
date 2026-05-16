import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useLanguageController } from '../hooks/useLanguageController';
import HomeView from '../views/HomeView';
import NewsView from '../views/NewsView';

export default function AppRoutes() {
  const { language, setLanguage } = useLanguageController();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView language={language} setLanguage={setLanguage} />} />
        <Route path="/news" element={<NewsView language={language} setLanguage={setLanguage} />} />
      </Routes>
    </BrowserRouter>
  );
}
