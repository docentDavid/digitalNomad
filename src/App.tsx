import { lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Route-level code splitting — detail pages load on demand
const Home = lazy(() => import('./pages/Home'));
const WorkshopDetail = lazy(() => import('./pages/WorkshopDetail'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));

function Layout({ children }: { children: React.ReactNode }) {
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
      {/* Suspense boundary per route — shows nothing while chunk loads (fast on any connection) */}
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/workshops/:id',
    element: <Layout><WorkshopDetail /></Layout>,
  },
  {
    path: '/insights/:id',
    element: <Layout><InsightDetail /></Layout>,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

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

      <RouterProvider router={router} />
    </LangProvider>
  );
}
