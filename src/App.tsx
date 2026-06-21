import Navigation from './components/Navigation';
import Hero from './components/Hero';
import DesignPortfolio from './components/DesignPortfolio';
import BrandKit from './components/BrandKit';
import SoftwareProjects from './components/SoftwareProjects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen" style={{ background: '#ffffff', color: '#0f1419' }}>
      <Navigation />
      <main>
        <Hero />
        <DesignPortfolio />
        <BrandKit />
        <SoftwareProjects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
