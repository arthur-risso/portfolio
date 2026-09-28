import { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
} from 'react-icons/si';
import { Container } from '@/components/layout/Container';
import { AboutPhoto } from '@/components/about/AboutPhoto';
import { AboutModal } from '@/components/about/AboutModal';

const TOOLS = [
  { name: 'Figma', icon: SiFigma },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
];

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
              className="mb-4 font-mono text-xs uppercase tracking-wider text-signal"
            >
              Sobre
            </motion.p>
            <h2 className="font-display text-2xl font-bold leading-snug text-ink text-balance sm:text-3xl md:text-4xl">
              <motion.span variants={item} className="block">
                Eu não decoro interfaces.
              </motion.span>
              <motion.span variants={item} className="block">
                Eu construo experiências que{' '}
                <span className="text-signal">funcionam de verdade.</span>
              </motion.span>
              <motion.span variants={item} className="block">
                Performance e acessibilidade não são extras.
              </motion.span>
            </h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-sm leading-relaxed text-mist text-pretty"
            >
              Na prática: uma pessoa só do briefing à entrega. A página que você aprova no protótipo
              é a mesma que vai ao ar, sem nada se perder no caminho entre quem desenha e quem
              programa.
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <p className="text-xs font-medium text-mist">Ferramentas do dia a dia</p>
              <ul
                className="mt-3 flex flex-wrap gap-x-5 gap-y-2"
                aria-label="Ferramentas do dia a dia"
              >
                {TOOLS.map((tool) => (
                  <li key={tool.name} className="flex items-center gap-1.5 text-mist">
                    <tool.icon size={14} aria-hidden="true" />
                    <span className="font-mono text-xs">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
