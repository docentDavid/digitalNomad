import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const WorkshopDetail = lazy(() => import('./pages/WorkshopDetail'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const announcer = document.getElementById('aria-announcer');
    if (!announcer) return;
    announcer.textContent = document.title;
    const timer = setTimeout(() => { announcer.textContent = ''; }, 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops/:id" element={<WorkshopDetail />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      {/* Skip link — visible on focus, hidden otherwise */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Screen reader announcer for route and theme/lang changes */}
      <div
        id="aria-announcer"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      <Layout />
    </LangProvider>
  );
}
