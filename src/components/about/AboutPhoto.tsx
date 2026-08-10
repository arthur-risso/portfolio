import { motion } from 'motion/react';

export function AboutPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -6, y: 20 }}
      whileInView={{ opacity: 1, rotate: -3, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-40 overflow-hidden rounded-xl border border-mist/15 sm:w-48"
    >
      <div className="relative aspect-4/5">
        <img
          src="/pfp-portfolio.jpeg"
          alt="Foto de Arthur"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="border-t border-mist/15 bg-surface px-3 py-2 font-mono text-[11px] text-mist">
        // arthur.dev
      </p>
    </motion.div>
  );
}
