# Game Tracker

A simple game tracker application built with Typescript.

## Pnpm usage

This project uses [pnpm](https://pnpm.io/) as the package manager. To install dependencies, run:

```bash
pnpm install
```

To install a specific package, use:

```bash
pnpm --filter <package-name> install
```

### Workflow de développement

Setup initial
```bash
pnpm install
pnpm run build:shared
```

Développement quotidien
```bash
# Terminal 1 - Watch shared pour rebuild auto
pnpm run dev:shared

# Terminal 2 - Développement normal
pnpm run dev
```