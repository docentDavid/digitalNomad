import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import About from '../components/About';
import WorkshopsList from '../components/WorkshopsList';
import InsightsList from '../components/InsightsList';
import CtaStrip from '../components/CtaStrip';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Expertise />
      <WorkshopsList />
      <InsightsList />
      <About />
      <CtaStrip />
    </main>
  );
}
