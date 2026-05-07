import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkshopDetail from './pages/WorkshopDetail';
import InsightDetail from './pages/InsightDetail';

function ServerApp({ url }: { url: string }) {
  return (
    <StaticRouter location={url}>
      <LangProvider>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div id="aria-announcer" className="sr-only" aria-live="polite" aria-atomic="true" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops/:id" element={<WorkshopDetail />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </LangProvider>
    </StaticRouter>
  );
}

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <ServerApp url={url} />
    </StrictMode>
  );
}
