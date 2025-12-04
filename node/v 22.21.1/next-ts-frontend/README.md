# ShopSphere – Next.js + TypeScript E-Commerce UI

TypeScript version of the polished Next.js 14 demo store using the App Router.

## Features

- App Router with `app` directory
- Written in TypeScript (`.tsx` components)
- Sticky navbar and footer
- Pages:
  - `/` – Hero landing with featured product + stats
  - `/products` – Product listing
  - `/products/[slug]` – Product detail (highlights, includes, etc.)
  - `/cart` – Simple cart summary UI
  - `/checkout` – Two-column checkout form
  - `/dashboard` – Basic store stats dashboard shell
  - `/auth/login`, `/auth/register` – Auth form UIs
- Centralized typed product data in `components/data.ts`
- API route `/api/hello` as an example backend endpoint

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.
