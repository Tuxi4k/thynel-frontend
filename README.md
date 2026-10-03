# Thynel (frontend)

![License: GPL--3.0](https://img.shields.io/badge/License-GPL--3.0-blue)
![SolidJS](https://img.shields.io/badge/SolidJS-F7DF1E?logo=solid&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![UnoCSS](https://img.shields.io/badge/UnoCSS-FF69B4?logo=unocss&logoColor=white)
![Oxc](https://img.shields.io/badge/Oxc-F5F5F5?logo=oxc&logoColor=black)

> _Music without the overhead._

An audio player that runs right in the browser (PWA). Fully local, but supports an optional backend for syncing across devices.

### _What is a PWA?_

A **PWA (Progressive Web App)** is a website that works like a native app:

- **Install:** installs directly from the site.
- **Offline:** no internet needed after the first load.
- **Auto-update:** you always have the latest version.

### Development status

The repository is still just a skeleton. There's **_no functionality yet._**

---

## Stack

- **SolidJS** — lightweight UI framework
- **Vite** — build tool and dev server
- **TypeScript** — strict mode
- **UnoCSS** — utility-first CSS
- **Oxlint + Oxfmt** — linter + formatter
- **Bun** — package manager and runtime

---

## Quick start

> This is the **frontend**. The sync backend is in a separate repository.

| Step                 | Bun       | npm           |
| -------------------- | --------- | ------------- |
| Install dependencies | `bun i`   | `npm i`       |
| Start dev server     | `bun dev` | `npm run dev` |

Open http://localhost:5173.

---

## Scripts

| Script            | Description                  |
| ----------------- | ---------------------------- |
| `bun run dev`     | Dev server (HMR)             |
| `bun run build`   | Production build             |
| `bun run preview` | Preview the production build |
| `bun run lint`    | Lint the code                |
| `bun run fmt`     | Format the code              |
| `bun run check`   | Lint and format              |

---

## Structure

```
thynel-frontend/
├── src/
│   └── main.tsx
├── public/
├── index.html
├── uno.config.ts
├── oxlint.config.ts
├── oxfmt.config.ts
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

---

## License

[**GNU General Public License v3.0**](./LICENSE)
