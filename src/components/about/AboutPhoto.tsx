import { Expand } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPhotoProps {
  onOpen: () => void;
}

export function AboutPhoto({ onOpen }: AboutPhotoProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, rotate: -6, y: 20 }}
      whileInView={{ opacity: 1, rotate: -3, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group w-40 cursor-pointer overflow-hidden rounded-xl border border-mist/15 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 sm:w-48"
      aria-label="Ampliar foto e ver um pouco mais sobre mim"
    >
      <div className="relative aspect-4/5">
        <img
          src="/pfp-portfolio.jpeg"
          alt="Foto de Arthur"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-200 group-hover:bg-ink/30 group-hover:opacity-100">
          <Expand className="text-paper" size={22} strokeWidth={1.75} />
        </div>
      </div>
      <p className="border-t border-mist/15 bg-surface px-3 py-2 font-mono text-[11px] text-mist transition-colors group-hover:text-signal">
        <span className="group-hover:hidden">// arthur.dev</span>
        <span className="hidden group-hover:inline">// clique para expandir</span>
      </p>
    </motion.button>
  );
}
