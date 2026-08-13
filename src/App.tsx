import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { TechMarquee } from '@/components/sections/TechMarquee';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          <Hero />
          <About />
          <TechMarquee />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
