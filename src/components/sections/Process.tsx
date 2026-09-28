import { motion, type Variants } from 'motion/react';
import { Container } from '@/components/layout/Container';

const STEPS = [
  {
    title: 'Briefing',
    body: 'Uma conversa sobre o seu negócio, o seu público e o que o site precisa resolver.',
    note: 'escopo definido com você',
  },
  {
    title: 'Design',
    body: 'Desenho as telas no Figma. Você vê e aprova a página antes de qualquer linha de código.',
    note: 'protótipo para aprovar',
  },
  {
    title: 'Código',
    body: 'Construo o site rápido, acessível e responsivo, do celular ao desktop.',
    note: 'performance e acessibilidade inclusas',
  },
  {
    title: 'Entrega',
    body: 'Publico o site e reviso tudo com você antes de encerrar.',
    note: 'site no ar',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const nodeFill: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export function Process() {
  return (
    <section id="processo" className="py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider text-signal">Como trabalho</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink text-balance md:text-4xl">
          Do briefing à entrega, com você vendo cada etapa.
        </h2>

        <motion.ol
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="relative mt-14 grid gap-10 pl-8 md:grid-cols-4 md:gap-8 md:pl-0 md:pt-10"
        >
          {/* Dimension line: vertical on mobile, horizontal from md. */}
          <motion.span
            aria-hidden="true"
            variants={{
              hidden: { scaleY: 0 },
              show: { scaleY: 1, transition: { duration: 1.1, ease: EASE } },
            }}
            className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-signal/40 md:hidden"
          />
          <motion.span
            aria-hidden="true"
            variants={{
              hidden: { scaleX: 0 },
              show: { scaleX: 1, transition: { duration: 1.1, ease: EASE } },
            }}
            className="absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-signal/40 md:block"
          />

          {STEPS.map((item, index) => (
            <motion.li key={item.title} variants={step} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-8 top-1.5 flex h-[11px] w-[11px] items-center justify-center rounded-full border border-signal bg-paper md:-top-10 md:left-0"
              >
                <motion.span
                  variants={nodeFill}
                  className="h-[5px] w-[5px] rounded-full bg-signal"
                />
              </span>
              <p className="font-mono text-xs text-mist">
                <span className="sr-only">Etapa </span>
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
              <p className="mt-4 border-t border-mist/15 pt-3 font-mono text-xs text-signal">
                {item.note}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
