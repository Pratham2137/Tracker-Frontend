# Tracker Frontend

React + Vite app with Tailwind v4. This repo now includes a production-grade folder structure to scale features cleanly.

## Project structure

```
src/
	assets/                 # static assets
	components/             # shared UI
		common/               # generic, reusable UI (Button, Card, Input)
		layout/               # layout parts (Navbar, Footer, Sidebar)
	features/               # domain slices (e.g., habits, auth)
	hooks/                  # reusable React hooks
	pages/                  # route-level views
	routes/                 # route configuration
	services/               # API client(s) and integrations
		apiClient.js
	store/                  # Redux Toolkit store and slices
		index.js
	styles/                 # global style modules (beyond Tailwind)
	types/                  # shared typedefs (for TS/JSDoc)
	App.jsx
	main.jsx
	index.css               # Tailwind entry
```

Path alias is configured:

- `@` -> `src` (use like `import Button from '@/components/common/Button'`)

## Environment

Copy `.env.example` to `.env` and set values as needed:

```
VITE_API_URL=https://api.example.com
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build locally
- `npm run lint` — run ESLint

## Notes

- The Redux store (`src/store/index.js`) and the route config (`src/routes/index.jsx`) are scaffolded but not yet wired to `main.jsx` to avoid breaking the current UI. When ready, wrap `<App />` with `<Provider store={store}>` and add a router.
- Tailwind is already set up via `index.css` and `@tailwindcss/vite`.
