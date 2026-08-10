# CRM Design System

Shared UI components, design tokens and icons for CRM feature applications.

> **Private package** — published to GitHub Packages under the `@chinnaiya-r-2310` scope.

---

## Repository structure

```
crm-design-system/
├── src/
│   ├── index.ts                   ← package public API
│   └── design-system/
│       ├── components/            ← UI components
│       ├── foundations/           ← design tokens, icons
│       ├── patterns/              ← Storybook pattern stories
│       └── engine/                ← token engine
├── .storybook/                    ← Storybook configuration
├── vite.lib.config.ts             ← library build config
└── dist/                          ← generated package (git-ignored)
```

---

## For Design System developers

### Prerequisites

- Node.js >= 20
- npm >= 10

### Setup

```bash
npm install
```

### Develop with Storybook

```bash
npm run storybook
# → http://localhost:6006
```

### Build the npm package

```bash
npm run build
```

Produces in `dist/`:

| File | Description |
|---|---|
| `dist/index.js` | ESM bundle |
| `dist/index.cjs` | CJS bundle |
| `dist/index.d.ts` | TypeScript declarations |
| `dist/style.css` | Design tokens + component CSS |

### Verify the package

```bash
npm run build
node scripts/verify-package.mjs
```

### Create a local tarball for testing

```bash
npm run build
npm pack
# → crm-org-design-system-1.0.0.tgz
```

Install it in a feature app:

```bash
npm install /path/to/crm-org-design-system-1.0.0.tgz
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test
```

### Build Storybook (for GitHub Pages)

```bash
npm run build-storybook
# → storybook-static/
```

---

## For feature developers

### Authentication

The package is published to GitHub Packages (private registry).
You need a GitHub Personal Access Token with `read:packages` scope.

Add to your `~/.npmrc` (global) or the consuming project's `.npmrc`:

```
@chinnaiya-r-2310:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> **Do not commit your token.** Use environment variables:
>
> ```
> //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
> ```

### Install

```bash
npm install @chinnaiya-r-2310/design-system
```

### Usage

Import the CSS once in your app entry (e.g. `main.tsx`):

```ts
import '@chinnaiya-r-2310/design-system/style.css';
```

Then import components:

```ts
import { Button, Input, Modal, Dropdown } from '@chinnaiya-r-2310/design-system';
import type { ButtonProps, DropdownOption } from '@chinnaiya-r-2310/design-system';
```

All exports are available from the single package entry point — no deep imports needed.

### TypeScript

The package ships with full TypeScript declarations. No `@types/` package required.

---

## Release workflow

```
Design System change
       ↓
Pull Request → Review → Merge to master
       ↓
Update "version" in package.json and commit
       ↓
Create a GitHub Release with a version tag (e.g. v1.2.0)
       ↓
GitHub Actions runs publish.yml automatically
       ↓
Package published to GitHub Packages (@chinnaiya-r-2310/design-system@1.2.0)
       ↓
Feature teams update their dependency:
  npm install @chinnaiya-r-2310/design-system@1.2.0
```

### Versioning (SemVer)

| Change type | Version bump | Example |
|---|---|---|
| Bug fix | PATCH | `1.0.0` → `1.0.1` |
| New component / backward-compatible feature | MINOR | `1.0.0` → `1.1.0` |
| Breaking API change | MAJOR | `1.0.0` → `2.0.0` |

To release:

1. Update `"version"` in `package.json`
2. Commit and push to `master`
3. Create a GitHub Release tagged `v<version>` (e.g. `v1.1.0`)
4. The `publish.yml` workflow runs automatically

---

## GitHub repository setup

| Secret / Permission | Source | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | Auto-injected by GitHub Actions | Publish to GitHub Packages |

The workflow requests `packages: write` — declared in `publish.yml`, no manual configuration needed beyond ensuring the repo belongs to the correct GitHub organization.

---

## Contributing

1. Create a feature branch
2. Make changes and run `npm run storybook` to develop/preview
3. Run `npm run lint` and `npm test`
4. Open a pull request
5. After merge, create a GitHub Release to publish the updated package
