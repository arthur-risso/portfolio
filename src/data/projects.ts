export interface Project {
  id: string;
  name: string;
  summary: string;
  url: string;
  githubUrl?: string;
  stack: string[];
  /** Captura da página inteira em /public, usada quando o site não pode ser embutido. */
  screenshot: string;
  /** true só se o site permitir iframe (sem X-Frame-Options DENY / frame-ancestors 'none'). */
  embeddable?: boolean;
  /** Estudo de caso opcional. Só resultados reais e verificáveis. */
  problem?: string;
  solution?: string;
  result?: string;
}

// 1 a 3 projetos bem contados valem mais que vários genéricos.
// Com a lista vazia, a seção Projetos mostra o aviso de "estudos de caso em produção".
export const projects: Project[] = [
  {
    id: 'tsumiru',
    name: 'Tsumiru',
    summary:
      'O Tsumiru (積, "sua pilha de animes") é um site para registrar os animes que você assistiu, dar notas, escrever reviews e descobrir o próximo favorito.',
    url: 'https://tsumiru.vercel.app',
    githubUrl: 'https://github.com/arthur-risso/tsumiru',
    stack: ['Next.js', 'Supabase', 'AniList API'],
    screenshot: '/projects/tsumiru.jpg',
  },
];
