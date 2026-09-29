# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: prospective freelance clients.** Small businesses and founders who need a website or interface designed and built, evaluating whether Arthur can deliver and whether to get in touch.
- **Secondary: recruiters and hiring managers** assessing Arthur for a web development / UI-UX role.

Both audiences are Brazilian and read Portuguese.

## Product Purpose

A personal portfolio for Arthur Risso, web developer and UI/UX designer. It exists to turn a visit into a conversation: a freelance inquiry first, a hiring contact second. Success is a visitor reaching out through the contact form, the copied email, GitHub, or LinkedIn.

## Positioning

One person who both designs and builds the interface. Existing copy frames the stance: "Eu não decoro interfaces. Eu construo experiências que funcionam de verdade. Performance e acessibilidade não são extras." The site itself is evidence of the claim (the hero shows the same layout as a sketch and as the finished interface).

## Operating Context

- Single static page: Hero, About (photo + bio modal, tools list), Projects (index + sticky "stage": a browser window showing each live project; falls back to the interim "estudos de caso em produção" sheet if the list is empty), Como trabalho (process), Contact (form panel first, then email/WhatsApp; GitHub/LinkedIn live in the footer), Footer.
- Deployed on Vercel at https://portfolio-arthurrisso.vercel.app/.
- Contact form submits through Web3Forms (`VITE_WEB3FORMS_ACCESS_KEY`); no backend.
- Light and dark themes, persisted and initialized before paint (`public/theme-init.js`).

## Capabilities and Constraints

- Services offered (confirmed): **sites institucionais, landing pages, interfaces / UI de sistemas**.
- Process (confirmed): **Briefing → Design (protótipo no Figma para aprovar) → Código → Entrega**.
- No response-time promise is made; contact copy explains the next step instead.
- WhatsApp is a confirmed channel; the number is pending (`WHATSAPP_NUMBER` in `src/data/contact.ts`, button hidden while empty).
- Language: **pt-BR only**. No English version planned.
- Stack: React 19, TypeScript, Vite 8, Tailwind CSS 4 (tokens in `src/index.css` via `@theme`), Motion, Radix UI, Embla Carousel.
- Fully static; anything added must work without a server.
- Project entries live in `src/data/projects.ts`.

## Brand Commitments

- Name: Arthur Risso; footer signature "Arthur.dev".
- Voice: direct, informal Brazilian Portuguese, first person ("Me manda uma mensagem", "clica aí").
- Freelance availability is stated publicly ("Disponível para freelance!").

## Evidence on Hand

- Profile photo: `public/pfp-portfolio.jpeg`.
- GitHub: https://github.com/arthur-risso · LinkedIn: https://linkedin.com/in/arthur-risso.
- Tools shown: Figma, PostgreSQL, HTML, CSS, JavaScript, React, Node.js.
- The hero demo uses a fictional example business ("Aurora", a bakery) and is labeled as an example; it is not a client.
- **Projects:** Tsumiru (lead project) — https://tsumiru.vercel.app · https://github.com/arthur-risso/tsumiru. Full-page capture at `public/projects/tsumiru.jpg`; the live site sends `X-Frame-Options: DENY`, so it cannot be embedded until its `frame-ancestors` allows the portfolio. More real projects exist but are not written up yet. Do not invent project names, clients, results, metrics, or testimonials; optional case fields follow a problem → solution → result shape.
- No testimonials, client logos, or case-study results exist. Do not fabricate them.

## Product Principles

1. Every section moves a visitor toward contacting Arthur; freelance clients are the first reader.
2. Show, don't claim: working interactions and real work count more than adjectives.
3. Performance and accessibility are part of the pitch, not extras.
4. Honest evidence only. Fewer real projects beat more placeholder ones.

## Accessibility & Inclusion

Accessibility is an explicit brand claim, so the site itself must hold up to it: keyboard access, visible focus, sufficient contrast in both themes, and respect for reduced motion.
