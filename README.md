# My App  

![Next.js](https://img.shields.io/badge/Next.js-16.0.2-black?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-38B2AC?logo=tailwindcss) ![License](https://img.shields.io/badge/License-MIT-green) ![Build](https://img.shields.io/github/actions/workflow/status/xevrion/mcp-testing/ci.yml?branch=main&label=CI)  

**A modern, animated, theme‑aware starter kit built with Next.js 16, React 19 and Tailwind CSS.**  

---  

## Table of Contents  

1. [Overview](#overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Architecture](#architecture)  
5. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Configuration](#configuration)  
6. [Usage](#usage)  
7. [Development](#development)  
8. [Deployment](#deployment)  
9. [Contributing](#contributing)  
10. [Roadmap](#roadmap)  
11. [License & Credits](#license--credits)  

---  

## Overview  

**My App** is a lightweight, production‑ready starter template that showcases a handful of reusable UI components (animated text, cursor glow, grid background, theme toggling) while demonstrating best practices for a Next.js 16 + Tailwind CSS project. It is ideal for developers who want a jump‑start for personal portfolios, marketing sites, or any project that benefits from smooth animations and dark/light theme support.  

Current version: **0.1.0** (private)  

---  

## Features  

| Feature | Description | Status |
|---------|-------------|--------|
| **Animated Text** | Text that types, erases and loops using `framer-motion` and `react-spring`. | Stable |
| **Cursor Glow** | A trailing glow effect that follows the mouse pointer, built with `react-spring`. | Stable |
| **Grid Background** | Subtle animated grid that adapts to the current theme. | Stable |
| **Theme Provider & Toggle** | Dark / light theme handling via `next-themes` with a smooth CSS transition. | Stable |
| **Responsive Layout** | Full‑screen layout with Tailwind utilities, ready for mobile & desktop. | Stable |
| **SEO‑ready** | Built‑in `<Head>` handling, automatic favicons, and Open Graph tags. | Stable |
| **TypeScript** | Strict typing throughout the codebase (`tsconfig.json`). | Stable |
| **ESLint + Prettier** | Linting rules from `eslint-config-next` and Tailwind plugin. | Stable |

---  

## Tech Stack  

| Category | Technology | Reason |
|----------|------------|--------|
| **Framework** | **Next.js 16.0.2** | File‑system routing, server‑side rendering, edge runtime. |
| **UI Library** | **React 19.2.0** | Modern concurrent features, hooks. |
| **Styling** | **Tailwind CSS 4** + **PostCSS** | Utility‑first CSS, fast build times. |
| **Animations** | **framer‑motion 12.23.24**, **@react‑spring/web 10.0.3** | Declarative, physics‑based animations. |
| **Icons** | **lucide‑react 0.553.0** | Open‑source SVG icon set. |
| **Theme Management** | **next‑themes 0.4.6** | Simple dark/light toggle. |
| **Utility Libraries** | `clsx`, `class-variance-authority`, `tailwind-merge` | Conditional class handling. |
| **Build Tools** | **pnpm**, **TypeScript 5**, **ESLint 9**, **PostCSS** | Fast, type‑safe development workflow. |
| **Dev Dependencies** | `@tailwindcss/postcss`, `tw-animate-css` | Tailwind plugins for animation utilities. |

---  

## Architecture  

```
my-app/
├─ app/                # Next.js 13+ App Router (pages, layout, globals)
│  ├─ blog/            # Example nested route (can be removed)
│  ├─ layout.tsx       # Root layout with ThemeProvider
│  ├─ page.tsx         # Home page – demonstrates components
│  └─ globals.css      # Tailwind base styles
├─ components/         # Reusable UI components
│  ├─ animated-text.tsx
│  ├─ cursor-glow.tsx
│  ├─ grid-background.tsx
│  ├─ theme-provider.tsx
│  ├─ theme-toggle.tsx
│  └─ ui/              # Small UI primitives (buttons, cards, …)
├─ lib/
│  └─ utils.ts         # Helper functions (e.g., classNames)
├─ public/             # Static assets (svg, favicon)
├─ .next/              # Build output (generated)
├─ .mcp.json           # Project‑specific metadata (ignored by README)
├─ next.config.ts      # Next.js configuration (rewrites, images, …)
├─ tailwind.config.ts  # Tailwind configuration (custom colors, plugins)
├─ tsconfig.json       # TypeScript compiler options
└─ package.json        # Scripts, dependencies, version
```

* **App Router (`app/`)** – All UI lives under the new App Router, enabling server components and layout nesting.  
* **Components** – Pure React components, fully typed, and styled with Tailwind + animation libs.  
* **`lib/utils.ts`** – Centralised utility helpers (e.g., `cn` wrapper around `clsx`).  

---  

## Getting Started  

### Prerequisites  

| Tool | Minimum version |
|------|-----------------|
| **Node.js** | 18.x (LTS) |
| **pnpm** | 8.x (recommended) |
| **Git** | any recent version |

> **Note**: The project uses **pnpm** for deterministic lockfiles, but `npm` or `yarn` will also work with minor adjustments.

### Installation  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/xevrion/mcp-testing.git
cd mcp-testing/my-app

# 2️⃣ Install dependencies (pnpm recommended)
pnpm install

# 3️⃣ Verify the installation
pnpm run lint   # should exit with 0 errors
```

### Configuration  

The app reads environment variables from a `.env.local` file at the project root. The only optional variable for the starter is:

```dotenv
# .env.local
NEXT_PUBLIC_SITE_TITLE="My App"
```

Copy the example below if you need a placeholder:

```bash
cp .env.example .env.local   # (if an example file exists)
```

No further configuration is required to run the demo locally.

---  

## Usage  

### Development  

```bash
pnpm dev
```

Open <http://localhost:3000> – the development server supports hot‑module replacement and fast refresh.

### Production Build  

```bash
pnpm build   # creates an optimized .next/ folder
pnpm start   # runs the production server
```

### Component Example  

Below is a minimal example of how to use the **AnimatedText** component on any page:

```tsx
// app/example/page.tsx
import AnimatedText from '@/components/animated-text';

export default function ExamplePage() {
  return (
    <section className="flex h-screen items-center justify-center bg-background">
      <AnimatedText
        words={['Hello', 'World', 'From', 'My App']}
        className="text-4xl font-bold text-primary"
        loop={true}
        typingSpeed={150}
        deletingSpeed={100}
        delay={2000}
      />
    </section>
  );
}
```

**Result** – The words type out one by one, pause, then delete before looping again.  

### Theme Toggle  

```tsx
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-xl font-medium">My App</h1>
      <ThemeToggle />
    </header>
  );
}
```

The toggle automatically persists the user's preference in `localStorage`.

---  

## Development  

| Task | Command |
|------|---------|
| **Run tests** (none shipped yet) | `pnpm test` |
| **Lint** | `pnpm lint` |
| **Format** (via Prettier) | `pnpm format` |
| **Generate Types** | `pnpm tsc --noEmit` |

**Code style** – Follow the rules from `eslint-config-next`. Use `tsx`/`ts` extensions for all new files.  

**Debugging** – The app runs in development mode with source maps. Use Chrome DevTools or VS Code's debugger attached to `next dev`.

---  

## Deployment  

The project is optimized for **Vercel**, but any Node‑compatible platform works.

### Vercel (recommended)

1. Push your changes to a Git branch.  
2. Import the repository in the Vercel dashboard.  
3. Vercel automatically detects the **Next.js** framework and runs `pnpm install && pnpm build`.  
4. Set any required environment variables in the Vercel UI (`NEXT_PUBLIC_SITE_TITLE`, etc.).  

### Docker (optional)

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "node_modules/next/dist/bin/next", "start"]
```

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

---  

## Contributing  

We welcome contributions! Please follow these steps:

1. **Fork** the repository and **clone** your fork.  
2. Create a feature branch: `git checkout -b feat/awesome-feature`.  
3. Make your changes, ensuring the code passes linting (`pnpm lint`).  
4. Write or update tests if applicable.  
5. Commit with a clear message and push: `git push origin feat/awesome-feature`.  
6. Open a **Pull Request** against `main`.  

### Pull Request Checklist  

- [ ] Code follows existing style (`eslint`, `prettier`).  
- [ ] All new components are typed (`.tsx`).  
- [ ] Documentation (README, component comments) is updated.  
- [ ] No new warnings appear in the CI pipeline.  

---  

## Roadmap  

- **Add unit & integration tests** (Jest + React Testing Library).  
- **Internationalization (i18n)** support via `next-intl`.  
- **Storybook** integration for component library documentation.  
- **Customizable theme colors** via Tailwind CSS CSS variables.  

---  

## License & Credits  

**License**: MIT © 2024 – [View License](https://github.com/xevrion/mcp-testing/blob/main/LICENSE)  

### Credits  

- **Next.js** – Vercel  
- **Tailwind CSS** – Tailwind Labs  
- **Framer Motion** – Framer  
- **React Spring** – Paul Henschel & contributors  
- **Lucide Icons** – Lucide community  

---  

*Happy coding! 🎉*  