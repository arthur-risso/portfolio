# Arthur Risso | Portfolio

Portfólio pessoal de Arthur Risso — desenvolvedor web e designer UI/UX. Site estático de página única com seções de apresentação, sobre, projetos e contato.

**Live:** _(adicionar link após o deploy)_

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/) — build e dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — tokens de design via `@theme` em `src/index.css`
- [Motion](https://motion.dev/) (Framer Motion) — animações
- [Radix UI](https://www.radix-ui.com/) — primitivos acessíveis (modal, slot)
- [Embla Carousel](https://www.embla-carousel.com/) — carrossel de projetos
- [Web3Forms](https://web3forms.com/) — envio do formulário de contato sem backend próprio

## Rodando localmente

Pré-requisitos: Node.js na versão indicada em [`.nvmrc`](.nvmrc) (use `nvm use`, se disponível).

```bash
npm install
cp .env.example .env   # preencha VITE_WEB3FORMS_ACCESS_KEY com sua chave do Web3Forms
npm run dev
```

### Scripts disponíveis

| Comando           | Descrição                                 |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Sobe o servidor de desenvolvimento (Vite) |
| `npm run build`   | Type-check (`tsc -b`) + build de produção |
| `npm run preview` | Serve o build de produção localmente      |
| `npm run lint`    | Roda o ESLint                             |

Husky + lint-staged rodam `eslint --fix` e `prettier --write` automaticamente no pre-commit.

## Variáveis de ambiente

| Variável                    | Descrição                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Chave de acesso gerada em [web3forms.com](https://web3forms.com/) para o formulário de contato funcionar. |

Veja [`.env.example`](.env.example).

## Estrutura

```
src/
├── components/
│   ├── layout/     Header, Footer, Container
│   ├── sections/   Hero, About, TechMarquee, Projects, Contact
│   ├── about/      Foto e modal da seção Sobre
│   ├── projects/   Card e modal de projeto
│   ├── contact/    Formulário e botão de copiar e-mail
│   └── ui/         Primitivos (Button, Input, Switch, ...)
├── data/projects.ts   Lista de projetos exibidos na seção Projetos
├── providers/          Contexto de tema (claro/escuro)
└── hooks/              Hooks compartilhados (useTheme)
```

Os projetos exibidos vêm de `src/data/projects.ts` — edite esse arquivo para substituir os projetos de exemplo pelos seus.

## Deploy

Projeto 100% estático (sem backend), pronto para qualquer host de site estático — recomendado [Vercel](https://vercel.com/) (detecta Vite automaticamente). Lembre-se de configurar `VITE_WEB3FORMS_ACCESS_KEY` nas variáveis de ambiente do provedor escolhido.

Um workflow de CI (`.github/workflows/ci.yml`) roda lint e build a cada push/PR na branch `main`.
