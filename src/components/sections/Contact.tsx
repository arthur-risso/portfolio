import { motion, type Variants } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { CopyEmail } from '@/components/contact/CopyEmail';
import { ContactForm } from '@/components/contact/ContactForm';
import { whatsappUrl } from '@/data/contact';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Contact() {
  return (
    <section id="contato" className="py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider text-signal">Contato</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Vamos conversar.
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-mist text-pretty">
          Me conta sobre o seu negócio e o que você precisa: um site institucional, uma landing page
          ou a interface de um sistema. Eu respondo com os próximos passos e, se fizer sentido,
          marcamos uma conversa.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 rounded-xl border border-mist/15 bg-surface p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-ink">Me conta seu projeto</h3>
            <p className="mt-1 font-mono text-xs text-mist">// direto pra minha caixa de entrada</p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="min-w-0 md:pt-2"
          >
            <motion.p variants={item} className="font-mono text-xs text-mist">
              // ou, se preferir, direto por aqui
            </motion.p>

            <motion.div variants={item} className="mt-4">
              <CopyEmail compact />
            </motion.div>

            {whatsappUrl && (
              <motion.div variants={item} className="mt-4">
                <Button variant="secondary" size="lg" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <FaWhatsapp className="mr-2" size={18} aria-hidden="true" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
