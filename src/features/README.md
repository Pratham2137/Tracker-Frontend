`features/` groups domain-specific UI + state.

Pattern:
- `featureName/`
  - `components/` (feature-scoped components)
  - `hooks/`
  - `api/` (feature-specific client calls)
  - `slice.js` (Redux slice if used)
  - `index.js`
