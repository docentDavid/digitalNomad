import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LangProvider } from './context/LangContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkshopDetail from './pages/WorkshopDetail';
import InsightDetail from './pages/InsightDetail';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Announce route change to screen readers
    const announcer = document.getElementById('aria-announcer');
    if (announcer) {
      announcer.textContent = document.title;
      const timer = setTimeout(() => { announcer.textContent = ''; }, 1500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [location.pathname]);

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/workshops/:id',
    element: (
      <Layout>
        <WorkshopDetail />
      </Layout>
    ),
  },
  {
    path: '/insights/:id',
    element: (
      <Layout>
        <InsightDetail />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return (
    <LangProvider>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Aria-live announcer — must be in DOM before routing */}
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
