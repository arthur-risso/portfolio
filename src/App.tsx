import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
