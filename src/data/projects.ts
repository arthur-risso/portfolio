export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// TROQUE os dados abaixo pelos seus projetos reais
export const projects: Project[] = [
  {
    id: 'projeto-1',
    title: 'Nome do projeto',
    description: 'Frase curta explicando o problema que esse projeto resolve.',
    fullDescription:
      'Descrição completa: o desafio, as decisões técnicas que você tomou, e o resultado. Esse texto aparece no modal de detalhes.',
    tags: ['react', 'typescript', 'tailwind'],
    liveUrl: 'https://exemplo.com',
    githubUrl: 'https://github.com/seu-usuario/projeto-1',
  },
  {
    id: 'projeto-2',
    title: 'Nome do projeto',
    description: 'Frase curta explicando o problema que esse projeto resolve.',
    fullDescription: 'Descrição completa do segundo projeto.',
    tags: ['node', 'postgresql'],
    githubUrl: 'https://github.com/seu-usuario/projeto-2',
  },
  {
    id: 'projeto-3',
    title: 'Nome do projeto',
    description: 'Frase curta explicando o problema que esse projeto resolve.',
    fullDescription: 'Descrição completa do terceiro projeto.',
    tags: ['react', 'vite'],
    liveUrl: 'https://exemplo.com',
  },
  {
    id: 'projeto-4',
    title: 'Nome do projeto',
    description: 'Frase curta explicando o problema que esse projeto resolve.',
    fullDescription: 'Descrição completa do quarto projeto.',
    tags: ['typescript', 'express'],
    githubUrl: 'https://github.com/seu-usuario/projeto-4',
  },
];
