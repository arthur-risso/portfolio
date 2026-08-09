import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          <Hero />
        </main>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
