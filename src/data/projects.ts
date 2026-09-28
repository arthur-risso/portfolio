export interface Project {
  id: string;
  title: string;
  /** Kind of work, in the client's words: "Landing page", "Site institucional", "Interface de sistema". */
  kind: string;
  /** One sentence: the problem this project solved for the client. */
  problem: string;
  /** What you decided and built to solve it. */
  solution: string;
  /** What changed after launch. Only real, verifiable outcomes. */
  result?: string;
  /** Screenshot or mockup under /public, e.g. "/projetos/aurora.webp" (16:10 works best). */
  image?: string;
  imageAlt?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Adicione aqui seus projetos reais (1 a 3 bem contados valem mais que vários genéricos).
// Enquanto a lista estiver vazia, a seção Projetos mostra um aviso honesto de "estudos de caso em produção".
//
// Exemplo de formato:
// {
//   id: 'padaria-aurora',
//   title: 'Padaria Aurora',
//   kind: 'Site institucional',
//   problem: 'As encomendas chegavam só por telefone e se perdiam em horário de pico.',
//   solution: 'Site com cardápio da semana e formulário de encomenda que chega organizado por e-mail.',
//   result: 'Encomendas passaram a chegar por escrito, com data e quantidade.',
//   image: '/projetos/aurora.webp',
//   imageAlt: 'Página inicial do site da Padaria Aurora no celular e no desktop',
//   tags: ['react', 'tailwind'],
//   liveUrl: 'https://...',
// },
export const projects: Project[] = [];
