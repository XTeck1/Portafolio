# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick start commands

- **Start the development server** (hot‑reload, auto‑open browser):
  ```bash
  ng serve --open
  ```
  or
  ```bash
  npm run start
  ```
  The server runs at `http://localhost:4200/`.

- **Build for production**:
  ```bash
  ng build --configuration production
  ```
  or simply
  ```bash
  npm run build
  ```
  Artifacts are placed in `dist/`.

- **Run all unit tests** (Karma + Jasmine):
  ```bash
  ng test
  ```
  or
  ```bash
  npm run test
  ```

- **Run a single test by name** (use the full `describe`/`it` string, case‑sensitive):
  ```bash
  ng test --filter="Spec name"
  ```

- **Lint the code** (requires Angular CLI lint support):
  ```bash
  ng lint
  ```

- **Open VS Code debugging configuration**:
  Launch configurations are defined in `.vscode/launch.json`. The two available profiles are `ng serve` (hot‑reload) and `ng test` (unit test debugging).

## Project structure & architecture

```
src/
├─ main.ts           # Bootstraps the Angular application with `bootstrapApplication`
├─ index.html        # Host page that contains the `<app-root>` element (loads GSAP from CDN)
├─ styles.css        # Global CSS file (Tailwind directives)
└─ app/
   ├─ app.ts               # Root component (`App`): shell with navbar, theme toggle and footer
   ├─ app.html             # Template for `App` (navbar + <app-*> section components + footer)
   ├─ app.css              # Root component styles (hero styles live in hero.component.css)
   ├─ app.config.ts        # Provides the `ApplicationConfig` with error listeners, zone change detection, and router setup
   ├─ app.routes.ts        # Array of Angular routes (currently empty; single-page site with anchor scrolling)
   ├─ app.spec.ts          # Unit tests for the `App` shell (nav, section anchors, footer)
   ├─ theme.service.ts     # Dark mode service (persists choice in localStorage)
   ├─ safe-html.pipe.ts    # `safeHtml` pipe: injects class/fill into simple-icons SVGs
   └─ sections/            # One standalone component per page section
      ├─ hero/          # #inicio — hero title with GSAP word animation
      ├─ experience/    # #experiencia — work experience timeline
      ├─ projects/      # #proyectos — project cards
      ├─ technologies/  # #tecnologias — frontend/backend icon grids
      ├─ about/         # #sobre-mi — bio and skills
      └─ contact/       # #contacto — mailto CTA
```

* **Bootstrapping** – `src/main.ts` calls `bootstrapApplication(App, appConfig)` where `appConfig` is imported from `app.config.ts`.
* **Single-page architecture** – `App` renders the fixed navbar and composes the six section components. Navigation uses `scrollToSection(id)` + `scroll-behavior: smooth`. The `routes` array is empty and ready if real routes are ever needed (add an entry and render `<router-outlet>` in `app.html`).
* **Content editing** – Editable data is marked with `// TODO` comments: name (`hero.component.ts`), experience (`experience.component.ts`), projects (`projects.component.ts`), email (`contact.component.ts`).
* **Testing harness** – The test suite is driven by Karma. Run headless with `ng test --watch=false --browsers=ChromeHeadless`. Test files follow the `*.spec.ts` convention next to each component.

## Common Angular patterns used

* **Functional bootstrap** – Uses the modern `bootstrapApplication` API instead of legacy `NgModule` bootstrap.
* **Zone change detection** – Enabled with `{ eventCoalescing: true }` to reduce DOM churn.
* **Global error listeners** – Added via `provideBrowserGlobalErrorListeners()` to capture uncaught errors in the UI.

## VS Code integration

The following launch configurations are pre‑configured:

| Profile | Command | Debug URL |
|---------|----------|------------|
| `ng serve` | `npm: start` | `http://localhost:4200/` |
| `ng test` | `npm: test` | `http://localhost:9876/debug.html` |

Use the `Run > Start Debugging` menu or `F5` after selecting the desired profile.

## Helpful reminders

- Every new component can be generated with:
  ```bash
  ng generate component component-name
  ```
- The application uses TypeScript version 5.8; ensure your editor is configured to use this compiler.
- The default `tsconfig.app.json` and `tsconfig.spec.json` provide strict type‑checking for production and tests, respectively.

Feel free to ask about any other tooling or architecture detail!