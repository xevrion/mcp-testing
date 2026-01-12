# My App – Modern Next.js 16 Starter with Tailwind & Animations  

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg)](https://nodejs.org/)  
[![Next.js](https://img.shields.io/badge/Next.js-16.0.2-black.svg)](https://nextjs.org/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC.svg)](https://tailwindcss.com/)  
[![Vercel – Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xevrion/mcp-testing)

---  

## Overview  

**My App** is a production‑ready starter template built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. It showcases a collection of reusable UI components, smooth animations (Framer Motion & React‑Spring), and a fully‑featured dark/light theme system powered by `next-themes`.  

- **Fast, SEO‑friendly** pages out‑of‑the‑box (Next.js 13+ app router).  
- **Zero‑config Tailwind** with utility‑first styling and `tailwind-merge` for class composition.  
- **Animated UI primitives** – animated text, cursor glow, grid background, etc.  
- **Accessible component library** built on Radix UI primitives.  

Ideal for developers who want a clean, modern foundation for blogs, portfolios, SaaS dashboards, or any React‑centric web app.

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **Theme Provider & Toggle** | Dark / light mode with automatic OS preference detection. | ✅ Stable |
| **Animated Text** | Typewriter‑style animated headings using `framer-motion`. | ✅ Stable |
| **Cursor Glow** | Interactive cursor effect that follows mouse movement. | ✅ Stable |
| **Grid Background** | Subtle animated grid backdrop for hero sections. | ✅ Stable |
| **Reusable UI primitives** | Buttons, cards, inputs, etc., built with Radix Slot & Tailwind. | ✅ Stable |
| **Icon set** | Ready‑to‑use icons from `lucide-react`. | ✅ Stable |
| **Responsive Layout** | Mobile‑first layout with a flexible `layout.tsx`. | ✅ Stable |
| **Utility Helpers** | Common helpers in `lib/utils.ts` (classNames, debounce, …). | ✅ Stable |
| **Linting & Formatting** | ESLint + Next.js config, TypeScript strict mode. | ✅ Stable |
| **Future‑proof** | Built on Next.js 16 (app router) and React 19. | ✅ Stable |

---  

## Tech Stack  

| Category | Tools & Versions |
|----------|------------------|
| **Framework** | Next.js `16.0.2` |
| **Language** | TypeScript `^5` |
| **UI** | React `19.2.0`, Radix UI Slot, Lucide‑React |
| **Styling** | Tailwind CSS `^4`, Tailwind‑Merge, PostCSS |
| **Animations** | Framer Motion `^12.23.24`, React‑Spring `^10.0.3` |
| **State / Utilities** | clsx, class‑variance‑authority |
| **Theme** | next‑themes `^0.4.6` |
| **Linting** | ESLint `^9`, eslint-config-next |
| **Package Manager** | pnpm (lockfile present) |
| **Deployment** | Vercel (first‑class support) |

---  

## Architecture  

```
my-app/
├─ app/                # Next.js 13+ app router (pages, layout, globals)
│   ├─ blog/           # Example blog routes (can be removed)
│   ├─ layout.tsx      # Root layout with ThemeProvider
│   └─ page.tsx        # Home page – showcases components
├─ components/         # Reusable UI components
│   ├─ animated-text.tsx
│   ├─ cursor-glow.tsx
│   ├─ grid-background.tsx
│   ├─ theme-provider.tsx
│   ├─ theme-toggle.tsx
│   └─ ui/             # Shared UI primitives (button, card, …)
├─ lib/                # Utility functions (e.g., classNames)
├─ public/             # Static assets (SVGs, favicons)
├─ styles/ (globals)   # Tailwind + global CSS
├─ next.config.ts      # Next.js configuration (future‑proof)
├─ tsconfig.json
└─ package.json
```

- **`app/`** – leverages the new **app router** for file‑system routing, server components, and layout nesting.  
- **`components/`** – pure React components (client side) that can be imported anywhere.  
- **`lib/utils.ts`** – small helper utilities used across the codebase.  

---  

## Getting Started  

### Prerequisites  

| Tool | Minimum Version |
|------|-----------------|
| Node.js | **20** (LTS) |
| pnpm | **8** (or npm/yarn – adjust commands) |
| Git | any recent version |

### Installation  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/xevrion/mcp-testing.git
cd mcp-testing/my-app

# 2️⃣ Install dependencies
pnpm install   # or `npm ci` / `yarn install`

# 3️⃣ Run the development server
pnpm dev       # starts http://localhost:3000
```

> **Tip:** If you prefer Docker, see the *Deployment* section for a ready‑to‑use Dockerfile example.

### Configuration  

The starter does not require any environment variables for local development.  
If you add API keys later, create a `.env.local` file at the project root:

```dotenv
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

The `next.config.ts` already loads `.env*` files automatically.

---  

## Usage  

### Development  

```bash
# Start dev server (hot‑reloading)
pnpm dev

# Build for production
pnpm build

# Start the production build locally
pnpm start

# Run ESLint
pnpm lint
```

### Component Showcase  

The home page (`app/page.tsx`) demonstrates all bundled components:

```tsx
import AnimatedText from '@/components/animated-text';
import CursorGlow from '@/components/cursor-glow';
import GridBackground from '@/components/grid-background';
import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-8">
      <GridBackground />
      <CursorGlow />
      <AnimatedText text="Welcome to My App!" className="text-4xl font-bold" />
      <ThemeToggle className="mt-6" />
    </main>
  );
}
```

Copy‑paste the snippet into any page to see the animated heading, cursor glow, and theme toggle in action.

### Adding New Pages  

Create a new folder under `app/` (e.g., `app/about/page.tsx`) and export a React component. The layout automatically inherits the theme provider.

```tsx
// app/about/page.tsx
export default function About() {
  return (
    <section className="prose mx-auto py-12">
      <h1>About This Starter</h1>
      <p>This page was added in just a few seconds.</p>
    </section>
  );
}
```

---  

## Development  

| Task | Command |
|------|---------|
| Lint code | `pnpm lint` |
| Type‑check | `pnpm type-check` *(add script if needed)* |
| Run tests | *(no test suite shipped – add Jest/Mocha as you wish)* |
| Format code | `pnpm format` *(configure Prettier if desired)* |

**Code style** – Follow the existing conventions: TypeScript strict mode, functional components, Tailwind utility classes, and `class-variance-authority` for variant handling.

---  

## Deployment  

### Vercel (recommended)  

1. Push the repository to GitHub.  
2. Import the project on Vercel – it detects the `next` framework automatically.  
3. Set the build command `pnpm build` and output directory `.next`.  

### Docker  

```dockerfile
# Dockerfile (place in repo root)
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start"]
```

Build & run:

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

### Environment Variables  

Add any required variables (e.g., API keys) via Vercel dashboard or Docker `-e` flags.

---  

## API Documentation  

This starter does **not** expose a backend API. All components are client‑side React. Extend the `app/api/` folder (Next.js API routes) if you need serverless endpoints.

---  

## Contributing  

We welcome contributions! Please follow these steps:

1. **Fork** the repository.  
2. **Create a feature branch**: `git checkout -b feat/awesome-feature`.  
3. **Install dependencies** (`pnpm install`).  
4. **Make your changes** – keep TypeScript strictness and ESLint rules satisfied.  
5. **Run lint**: `pnpm lint`.  
6. **Commit** with a clear message.  
7. **Push** to your fork and open a **Pull Request** against `main`.  

### Code of Conduct  

Please be respectful and inclusive. Harassment or discriminatory behavior will not be tolerated.

---  

## Troubleshooting & FAQ  

| Issue | Solution |
|-------|----------|
| **Port 3000 already in use** | Kill the process (`lsof -ti:3000 | xargs kill`) or change the port: `pnpm dev -- -p 3001`. |
| **Tailwind classes not applying** | Ensure `tailwind.config.cjs` (or `tailwind.config.ts`) includes the `./app/**/*.{js,ts,jsx,tsx}` paths. |
| **Missing `pnpm` command** | Install pnpm globally: `npm i -g pnpm`. |
| **Animations are jittery** | Verify you are using a modern browser and that `prefers-reduced-motion` is not set to reduce motion. |
| **Theme does not persist** | The theme is stored in `localStorage`. Clear site data if you suspect stale values. |

For more help, open an issue or join the discussion in the repository’s **Discussions** tab.

---  

## Roadmap  

- [ ] Add Jest + React Testing Library setup.  
- [ ] Provide a `components/ui` design system (buttons, modals, toast).  
- [ ] Example integration with a headless CMS (e.g., Contentful).  
- [ ] Internationalization (i18n) support.  

---  

## License & Credits  

**License:** MIT – see the [LICENSE](LICENSE) file.  

**Author:** © 2024 xevrion  

**Acknowledgments**  

- **Next.js** – React framework for production.  
- **Tailwind CSS** – Utility‑first CSS framework.  
- **Framer Motion** & **React Spring** – Animation libraries.  
- **Radix UI** – Accessible primitives.  
- **Lucide React** – Open‑source icons.  

---  

*Happy coding!*  