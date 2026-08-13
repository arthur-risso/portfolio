import { ArrowUp } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-mist">
          © {year} Arthur<span className="text-signal">.dev</span> — todos os direitos reservados.
        </p>

        <a
          href="#"
          className="flex items-center gap-1.5 rounded font-mono text-xs text-mist transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          Voltar ao topo
          <ArrowUp size={14} />
        </a>
      </Container>
    </footer>
  );
}
