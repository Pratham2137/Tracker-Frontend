`routes/` holds route-level components (pages) and central routing configuration.

Suggested structure:
- `index.jsx` (AppRouter with `<BrowserRouter>` and route definitions)
- `ProtectedRoute.jsx` (auth guard HOC/component)
- `ErrorBoundary.jsx`

Each page lives under `pages/` and is imported here.
