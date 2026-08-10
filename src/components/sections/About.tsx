import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { AboutPhoto } from '@/components/about/AboutPhoto';
import { motion, type Variants } from 'motion/react';
import { AboutModal } from '@/components/about/AboutModal';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <section id="sobre" className="py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p
              variants={item}
              className="mb-4   nt-mono text-xs uppercase tracking-wider text-signal"
            >
              Sobre
            </motion.p>
            <motion.p
              variants={item}
              className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl md:text-4xl"
            >
              Eu não decoro interfaces.
            </motion.p>
            <motion.p
              variants={item}
              className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl md:text-4xl"
            >
              Eu construo experiências que{' '}
              <span className="text-signal">funcionam de verdade.</span>
            </motion.p>
            <motion.p
              variants={item}
              className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl md:text-4xl"
            >
              Performance e acessibilidade não são extras.
            </motion.p>
          </motion.div>

          <div className="md:mt-10 md:justify-self-end">
            <AboutPhoto onOpen={() => setIsPhotoOpen(true)} />
          </div>
        </div>
      </Container>
      <AboutModal open={isPhotoOpen} onClose={() => setIsPhotoOpen(false)} />
    </section>
  );
}
