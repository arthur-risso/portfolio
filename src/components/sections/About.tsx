import { Container } from '@/components/layout/Container';
import { AboutPhoto } from '@/components/about/AboutPhoto';
import { motion, type Variants } from 'motion/react';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const STATS = [
  { value: '3+', label: 'anos de experiência' },
  { value: '15+', label: 'projetos entregues' },
  { value: '8', label: 'tecnologias no dia a dia' },
  { value: '100%', label: 'componentes acessíveis' },
];

export function About() {
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
            <AboutPhoto />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-mist/15 pt-10 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
              <p className="mt-1 text-xs text-mist">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
