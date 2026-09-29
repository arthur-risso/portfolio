import { motion, type Variants } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { TypingText } from '@/components/ui/TypingText';
import { BlueprintDemo } from '@/components/hero/BlueprintDemo';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] items-center py-16">
      <Container className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-4 font-mono text-xs uppercase tracking-wider text-signal"
          >
            <TypingText text="Disponível para freelance" />
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] text-ink text-balance md:text-5xl lg:text-6xl"
          >
            Sites e interfaces que explicam seu negócio de primeira.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-mist text-pretty"
          >
            Sou Arthur, desenvolvedor web e designer UI/UX. Desenho e construo sites institucionais,
            landing pages e interfaces de sistemas — os painéis e ferramentas por trás do seu
            negócio — do briefing à entrega, sem intermediários.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#contato">Contar meu projeto</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#processo">Como trabalho</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <BlueprintDemo />
        </motion.div>
      </Container>
    </section>
  );
}
