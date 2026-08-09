import { motion, type Variants } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
import { Container } from '@/components/layout/Container';
import { TypingText } from '@/components/ui/TypingText';
import { useTheme } from '@/hooks/useTheme';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="flex min-h-[calc(100vh-6rem)] items-center py-16">
      <Container className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-4 font-mono text-xs uppercase tracking-wider text-signal"
          >
            <TypingText text="Disponível para freelance!" />
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] text-ink md:text-6xl"
          >
            Desenvolvedor Web & Designer
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-md text-base leading-relaxed text-mist">
            Transformo ideias em experiências reais, criando interfaces web que unem design e
            funcionalidade de forma intuitiva.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex gap-3">
            <Button>Ver projetos</Button>
            <Button variant="secondary">Entrar em contato</Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-mist/15 bg-surface p-6"
        >
          <p className="mb-4 font-mono text-xs text-mist">
            // isso é um componente de verdade, clica aí
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink">Modo escuro</span>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              aria-label="Alternar modo escuro"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
