---
name: Arthur Risso Portfolio
description: A working blueprint — grid paper, navy ink, and real components annotated in code comments.
colors:
  blueprint-navy: '#1e3a5f'
  blueprint-navy-dark: '#5b8dc4'
  navy-wash: '#e8edf3'
  navy-wash-dark: '#16233a'
  drafting-paper: '#fafaf9'
  drafting-paper-dark: '#0d0d11'
  sheet-white: '#ffffff'
  sheet-white-dark: '#17171c'
  graphite-ink: '#14141a'
  graphite-ink-dark: '#f2f2f4'
  pencil-grey: '#5f5f68'
  pencil-grey-dark: '#9a9aa2'
  correction-red: '#b3261e'
typography:
  display:
    fontFamily: 'Space Grotesk, sans-serif'
    fontSize: 'clamp(2.25rem, 5vw, 3.75rem)'
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: 'Space Grotesk, sans-serif'
    fontSize: 'clamp(1.875rem, 4vw, 2.25rem)'
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: 'Space Grotesk, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: 'IBM Plex Sans, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: 'IBM Plex Sans, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: 'IBM Plex Mono, monospace'
    fontSize: '0.75rem'
    fontWeight: 500
    letterSpacing: '0.05em'
rounded:
  sm: '4px'
  md: '6px'
  xl: '12px'
  full: '9999px'
spacing:
  xs: '8px'
  sm: '12px'
  md: '24px'
  lg: '32px'
  xl: '48px'
  section: '96px'
components:
  button-primary:
    backgroundColor: '{colors.blueprint-navy}'
    textColor: '{colors.drafting-paper}'
    rounded: '{rounded.md}'
    padding: '0 16px'
    height: '40px'
  button-secondary:
    backgroundColor: '{colors.sheet-white}'
    textColor: '{colors.graphite-ink}'
    rounded: '{rounded.md}'
    padding: '0 16px'
    height: '40px'
  button-ghost:
    textColor: '{colors.graphite-ink}'
    rounded: '{rounded.md}'
    padding: '0 16px'
    height: '40px'
  input:
    backgroundColor: '{colors.drafting-paper}'
    textColor: '{colors.graphite-ink}'
    rounded: '{rounded.md}'
    padding: '0 14px'
    height: '44px'
  card:
    backgroundColor: '{colors.sheet-white}'
    rounded: '{rounded.xl}'
    padding: '24px'
  tag-chip:
    backgroundColor: '{colors.navy-wash}'
    textColor: '{colors.blueprint-navy}'
    typography: '{typography.label}'
    rounded: '{rounded.full}'
    padding: '4px 10px'
  icon-button-round:
    textColor: '{colors.pencil-grey}'
    rounded: '{rounded.full}'
    size: '44px'
---

# Design System: Arthur Risso Portfolio

## Overview

**Creative North Star: "The Working Blueprint"**

The page is a technical drawing that actually runs. A calm sheet of drafting paper carries a faint 56px grid, and one navy ink draws every line that matters: the calls to action, the active state, the focus ring, the annotation. Margin notes are written as code comments in monospace (`// exemplo: do esboço ao site no ar`, `// mais sobre mim`), so the site reads like a spec whose drawings become real things in front of the visitor.

Density is low and deliberate. Sections breathe on a 96px vertical rhythm inside a 72rem column, surfaces are flat sheets outlined in hairline pencil borders, and color is withheld until something is interactive. The blueprint is engineered first and playful second: the playfulness lives in small, earned moments (the hero sketch being inked into a finished page, the tilted photo that straightens on hover, the process line drawing itself) and never in decoration for its own sake.

Light and dark are two printings of the same drawing, not two designs. Every token has a paired value; the theme toggle lives in the header.

**Key Characteristics:**

- One accent (Blueprint Navy) on warm-neutral paper; everything else is graphite and pencil grey.
- Faint grid paper and slow, blurred navy glows drifting behind the content.
- Space Grotesk headlines, IBM Plex Sans body, IBM Plex Mono annotations.
- Flat bordered sheets; shadow only on floating dialogs.
- Motion that settles with a long ease-out, always gated by reduced-motion.

## Colors

A single-ink palette: warm near-white or near-black paper, graphite text, and one navy that means "this is live."

### Primary

- **Blueprint Navy** (#1e3a5f light / #5b8dc4 dark): the only accent. Primary buttons, section eyebrows ("Sobre", "Projetos", "Contato"), project tags, the ".dev" in the wordmark, hover states on links and icon buttons, every focus ring, and the drifting background glows.
- **Navy Wash** (#e8edf3 light / #16233a dark): tinted fill for small surfaces only — tag chips, selected project-type chips in the form, the success check, image placeholders, and the `hover:bg-signal-soft` wash on secondary/ghost buttons (visible in both themes, unlike the old paper-on-white hover).

### Neutral

- **Drafting Paper** (#fafaf9 light / #0d0d11 dark): page background and input fill. Warm off-white, not pure white.
- **Sheet White** (#ffffff light / #17171c dark): raised sheets — cards, the hero demo panel, the contact form panel, modals.
- **Graphite Ink** (#14141a light / #f2f2f4 dark): headlines, body emphasis, active nav, primary text on secondary buttons.
- **Pencil Grey** (#5f5f68 light / #9a9aa2 dark): supporting copy, mono annotations, inactive nav, and — at 10–15% opacity — decorative dividers and the grid lines themselves. Interactive-control borders (inputs, choice chips, secondary buttons) sit higher, at 40% resting / 60% hover, for real boundary contrast; decorative borders stay at the lighter end.
- **Correction Red** (#b3261e): form errors only.

### Named Rules

**The One Ink Rule.** Blueprint Navy is the only hue on the page. Adding a second accent breaks the drawing; express hierarchy with graphite vs. pencil grey and weight instead.

**The Pencil Border Rule.** Borders are Pencil Grey, never solid grey or black. Decorative borders (sheets, dividers) stay light (10–15%); a border that's the sole boundary of an interactive control (inputs, chips, secondary buttons) is Pencil Grey at 40%, darkening to 60% on hover, which is the deliberate exception to keeping the drawing quiet. On hover a border may also pick up navy instead (`signal/40` on cards, full navy on round icon buttons).

## Typography

**Display Font:** Space Grotesk (500, 700) with sans-serif fallback
**Body Font:** IBM Plex Sans (400, 500) with sans-serif fallback
**Label/Mono Font:** IBM Plex Mono (500) with monospace fallback

**Character:** Space Grotesk gives the headlines a drafted, slightly mechanical geometry; Plex Sans keeps paragraphs quiet and legible; Plex Mono is the annotator's hand — eyebrows, tags, captions, and code-comment asides.

### Hierarchy

- **Display** (700, 2.25rem → 3rem at md → 3.75rem at lg, line-height 1.1, balanced): the hero headline only.
- **Headline** (700, 1.875rem → 2.25rem at md, balanced): section titles ("Do briefing à entrega…", "Vamos conversar.") and the About statement (an h2, 1.5rem → 2.25rem, snug leading). The email link uses 1.25rem → 1.875rem and breaks anywhere on narrow screens.
- **Title** (700, 1.25rem): process steps, project card and modal titles.
- **Body** (400, 1rem / 0.875rem, line-height 1.625): intro and supporting paragraphs, capped around 32rem (`max-w-lg`) in the hero.
- **Label** (Mono 500, 0.75rem, 0.05em tracking, uppercase for eyebrows): section eyebrows in navy, step numbers and captions in pencil grey, project kind and step deliverables in navy. 0.75rem is the floor; nothing is set smaller.

### Named Rules

**The Margin Note Rule.** Asides that talk _about_ the interface are set in mono and prefixed with `//`. Real UI labels and content never use the comment prefix.

**The Eyebrow Rule.** Every section opens with an uppercase mono eyebrow in Blueprint Navy, followed by a Space Grotesk headline in Graphite Ink. A panel _inside_ a section (the Contact form card) earns its own plain heading instead — the eyebrow marks a section's entrance, not every box within it.

## Layout

A single centered column, max 72rem (`max-w-6xl`) with 24px side padding, shared by the sticky header and every section. Sections sit on a 96px vertical rhythm (`py-24`); the hero fills the viewport minus the header and centers its content.

Section order follows a client's questions: Hero (what and for whom) → Sobre (who) → Projetos (proof) → Como trabalho (how) → Contato — proof lands before the reassurance that closes the sale, and the process sits immediately before the ask.

Two-column splits appear from `md` (768px) up: the hero at 1.1fr / 1fr (copy / blueprint demo), About as text + an auto-width photo, Contact as two equal columns (**form panel first — the primary channel — with the direct-contact panel second**). Below `md` everything stacks with 48px gaps, form still first.

The process is a 4-column row from `md` hung under a horizontal dimension line; on mobile it becomes a vertical line with the steps to its right. Projects are a plain grid (1 / 2 / 3 columns at base / `sm` / `lg`), designed for 1–3 real case studies — no carousel. With no projects, the section shows one interim sheet instead.

In-page anchors use smooth scroll (reduced-motion gated) with a 4rem scroll-padding for the sticky header.

## Elevation & Depth

Flat by default. Depth comes from tonal layering — Sheet White panels on Drafting Paper, outlined by pencil borders — and from the background layer: the grid (5% opacity light, 8% dark, fading out toward the bottom) and three large navy radial glows blurred 64px, drifting on 22–32s loops.

### Shadow Vocabulary

- **Dialog float** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): modals only, over a 50% graphite scrim with a small backdrop blur.

### Named Rules

**The Flat Sheet Rule.** Nothing that lives in the page flow casts a shadow. Only surfaces that float above the drawing (dialogs) get one; the sticky header separates itself with an 80% paper tint, backdrop blur, and a hairline instead.

## Shapes

Gently rounded, never pill-heavy except where the shape carries meaning. Controls use a 6px radius; sheets (cards, panels, modals, the photo) use 12px; round things are fully round — the theme toggle, icon buttons, tag and choice chips, the stage switch in the hero demo, process nodes, and the drifting glows. Inside blueprint drawings (the hero sketch, the interim projects sheet), boxes use a 2px radius with dashed navy outlines. Focus-only wrappers on text links use a 4px radius so the ring hugs the text.

The one deliberate break from the grid is the About photo, which enters at −6°, rests at −3°, and straightens to 0° on hover — a pinned print on the drawing board.

## Components

### Buttons

Precise, with a small tactile press.

- **Shape:** gently rounded (6px); heights 36 / 40 / 44px for sm / md / lg.
- **Primary:** Blueprint Navy fill, paper text, Space Grotesk 500 at 0.875rem; hover drops to 90% navy.
- **Secondary:** Sheet White fill, Graphite Ink text, pencil border at 40%; hover shifts to Navy Wash and the border picks up navy at 50%.
- **Ghost:** text only; hover gains a Navy Wash fill.
- **States:** all buttons scale to 0.97 on press; focus shows a 2px navy ring with 2px offset; disabled is 50% opacity.

### Chips / Tags

- **Modal tags:** Navy Wash pill, navy mono text, 4×10px padding. Cards no longer show tech tags; they lead with the kind of work.
- **Choice chips (form "Tipo de projeto"):** pill radio labels, 44px tall, pencil border at 40%; checked turns navy border + Navy Wash fill + navy text; keyboard focus rings the chip.

### Cards / Containers

- **Corner Style:** 12px.
- **Background:** Sheet White.
- **Shadow Strategy:** none (see The Flat Sheet Rule).
- **Border:** pencil grey at 15%; project cards shift to navy at 40% on hover.
- **Internal Padding:** 24px, 32px on larger panels from `sm`.
- **Anatomy (project card):** optional 16:10 image, navy mono kind ("Landing page"), title, the problem in one sentence, then a "Ver estudo de caso" text button whose arrow nudges right on hover.
- **Case-study modal:** image, kind, title, then Problema / Solução / Resultado chapters with navy mono labels; tags and links close the sheet.

### Inputs / Fields

- **Style:** Drafting Paper fill (one step below the sheet it sits on), pencil border at 40% (60% on hover), 6px radius, 44px tall, 14px horizontal padding; text is 16px below `sm` so mobile Safari doesn't zoom on focus, 14px from `sm`; placeholder in pencil grey at 80%; navy caret.
- **Focus:** 2px navy ring and navy border.
- **Error:** Correction Red border (and red ring on focus), with a specific message under the field naming the fix; validation runs on submit, then live on the fields that failed.
- **Success:** the form is replaced by a confirmation (Navy Wash check, "Mensagem enviada.", next step) with a way to send another.

### Navigation

- **Header:** sticky, 64px, paper at 80% with backdrop blur and a 15% hairline. Wordmark "Arthur.dev" in Space Grotesk 700 with ".dev" in navy; a 44px sun/moon theme toggle sits at the right. The `<meta name="theme-color">` tag tracks the toggle (set in `theme-init.js` before paint and on every toggle), not the OS preference.
- **Links:** 0.875rem Plex Sans; inactive pencil grey → graphite on hover; the section in view is graphite at 500 weight (`aria-current`).
- **Mobile:** hamburger → collapsing panel under the header, each link a 44px row; the active section gets a small navy dot; Esc or a tap outside closes it.

### Round Icon Button

44px circles with a 20% pencil border and grey icon; hover turns border and icon navy. Used for social links and the copy-email button.

### Signature: Blueprint Demo

The hero's right column is a Sheet White panel on its own 24px navy grid, captioned `// exemplo: do esboço ao site no ar`, with an "Esboço / Pronto" pill switch. The sketch shows a small example page as dashed navy boxes with notched mono labels (logo, título, ação, foto); the finished version is revealed over it by a left-to-right clip wipe with a 1px navy "pen" riding the edge (0.9s, `cubic-bezier(0.65, 0, 0.35, 1)`). It plays once, when the panel actually enters the viewport (not on a timer from page load, so it isn't missed below the fold on a short phone); under reduced motion it starts finished and switches instantly. This is the blueprint's thesis: a drawing becoming a real thing. The canvas is `aspect-[5/4]` below `lg` (a narrow column needs the extra height for the built layer's copy) and `aspect-[4/3]` from `lg`, where the column widens.

### Signature: Process Line

"Como trabalho" hangs four steps (Briefing, Design, Código, Entrega) from a navy dimension line that draws itself on first view, each node filling in turn. Each step has a mono number, a title, one sentence, and a navy deliverable line under a hairline.

### Signature: Interim Sheet

Until real projects exist, Projetos shows an unfinished drawing sheet: copy on the left, and on the right a dashed frame with crossed diagonals and a technical title block ("folha: estudos de caso / status: em produção").

### Signature: Annotated Photo

The About photo is a 4:5 framed print with an always-visible mono caption strip (`// mais sobre mim` plus an expand icon, so touch users see the affordance), tilted as described in Shapes, opening a split-layout modal that scrolls within the viewport. The expand cue lives once, in that caption; the photo itself only darkens slightly on hover, without repeating the icon.

### Signature: Contact Panels

Contato leads with the form: a Sheet White panel with its own plain heading ("Me conta seu projeto"), not an eyebrow — the section eyebrow already introduced Contato, and the panel earns a heading of its own rather than a second one. Beside or below it, a lighter secondary panel offers the direct channels (e-mail, WhatsApp when a number is set) under a `//` note, sized down so it doesn't compete with the form. GitHub and LinkedIn live in the footer, not here — they're not how a client gets in touch.

## Do's and Don'ts

### Do:

- **Do** keep Blueprint Navy the single accent, and use it for everything interactive or live (The One Ink Rule).
- **Do** open every section with a navy uppercase mono eyebrow, then a Space Grotesk headline.
- **Do** write interface asides as `//` mono margin notes in pencil grey.
- **Do** outline decorative sheets and dividers with pencil grey at 10–15% opacity and keep them flat; give interactive-control borders 40% resting / 60% hover for real contrast.
- **Do** define every new color as a light/dark pair on the existing tokens (`paper`, `surface`, `ink`, `mist`, `signal`, `signal-soft`).
- **Do** animate entries with opacity + 16–20px rise on the `cubic-bezier(0.22, 1, 0.36, 1)` ease-out, 0.5s, staggered ~0.12s, once per view.
- **Do** gate every looping or decorative motion behind `prefers-reduced-motion: no-preference`.
- **Do** give every interactive element the 2px navy focus ring; offsets take the color of the surface underneath, never a white halo.
- **Do** keep touch targets at 44px, including modal close buttons.
- **Do** let every modal scroll within `100dvh - 2rem`.

### Don't:

- **Don't** add a second accent hue or gradient fills on content surfaces; the navy glows belong to the background layer only.
- **Don't** put shadows on in-flow cards, panels, or buttons (The Flat Sheet Rule).
- **Don't** use pure white (#ffffff) as the page background; the page is Drafting Paper, sheets are white.
- **Don't** use the `//` comment prefix on real content, headings, or button labels.
- **Don't** add playful motion that isn't tied to an interaction or an entry; the background drift is the only ambient loop (the typing line types once and holds).
- **Don't** give non-interactive things hover color; navy on hover means "this does something".
- **Don't** show placeholder content on the live page; an honest interim state beats fake entries.
