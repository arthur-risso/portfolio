import { motion, type Variants } from 'motion/react';
import { SiGithub, SiLinksys } from 'react-icons/si';
import { Container } from '@/components/layout/Container';
import { CopyEmail } from '@/components/contact/CopyEmail';
import { ContactForm } from '@/components/contact/ContactForm';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/arthur-risso', icon: SiGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/arthur-risso', icon: SiLinksys },
];

export function Contact() {
  return (
    <section id="contato" className="py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="order-1 md:order-2"
          >
            <motion.p
              variants={item}
              className="mb-4 font-mono text-xs uppercase tracking-wider text-signal"
            >
              Contato
            </motion.p>
            <motion.h2
              variants={item}
              className="font-display text-3xl font-bold text-ink md:text-4xl"
            >
              Vamos conversar.
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-base leading-relaxed text-mist">
              Tem um projeto em mente ou só quer trocar uma ideia? Me manda uma mensagem.
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <CopyEmail />
            </motion.div>

            <motion.div variants={item} className="mt-6 flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/20 text-mist transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 rounded-xl border border-mist/15 bg-surface p-6 sm:p-8 md:order-1"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-wider text-mist">
              Ou, se preferir, preenche o formulário
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
