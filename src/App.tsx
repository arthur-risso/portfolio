import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { BackgroundFX } from '@/components/layout/BackgroundFX';
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
        <BackgroundFX />
        <a
          href="#conteudo"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:rounded-md focus-visible:bg-signal focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
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
