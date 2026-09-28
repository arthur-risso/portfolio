import { ArrowUp } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';
import { Container } from '@/components/layout/Container';
import { GITHUB_URL, LINKEDIN_URL } from '@/data/contact';

const SOCIALS = [
  { name: 'GitHub', href: GITHUB_URL, icon: SiGithub },
  { name: 'LinkedIn', href: LINKEDIN_URL, icon: FaLinkedinIn },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist/10 py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-ink">
            Tem um projeto em mente?{' '}
            <a
              href="#contato"
              className="rounded text-signal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
            >
              Vamos conversar.
            </a>
          </p>
          <p className="mt-2 font-mono text-xs text-mist">
            © {year} Arthur<span className="text-signal">.dev</span>
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/20 text-mist transition-colors duration-150 hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
              >
                <social.icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>

          <a
            href="#"
            className="flex w-fit items-center gap-1.5 rounded py-2 font-mono text-xs text-mist transition-colors duration-150 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            Voltar ao topo
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
