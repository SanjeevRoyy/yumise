  // src/routes/AppRoutes.tsx
  import { Routes, Route } from 'react-router-dom';
  import HomePage from '../pages/HomePage';
  import FeaturesPage from '../pages/FeaturesPage';
  import AboutPage from '../pages/AboutPage';
  import NotFoundPage from '../pages/NotFoundPage';


  export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
