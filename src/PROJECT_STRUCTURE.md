# Health Care – Project Structure

This document describes the refactored, professional folder structure.

## Root

```
Health-Care/
├── public/                 # Static assets
├── src/
│   ├── app/                # Application shell
│   ├── assets/             # Images, fonts
│   ├── components/         # Reusable UI
│   ├── config/             # Constants, app config
│   ├── context/            # React context (e.g. auth)
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Route-level pages (one folder per page)
│   ├── services/           # API and utilities
│   ├── styles/             # Global/shared CSS
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## `src/` layout

| Folder | Purpose |
|--------|--------|
| **app/** | App root: `App.jsx` (router, layout), `App.css`. |
| **components/layout/** | Layout components: `Navbar/`, `Sidebar/`, `ProtectedRoute.jsx`. Each layout component can have its own folder with `.jsx` + `.css` and `index.jsx` for clean imports. |
| **components/ui/** | Shared UI: `HealthCard/`, `RiskBadge/`, `ChatBox/`. Same pattern: component folder with `index.jsx` re-export. |
| **config/** | App constants and config (e.g. `constants.js` for routes, app name). |
| **context/** | React context providers (e.g. `AuthContext.jsx`). |
| **hooks/** | Custom hooks (e.g. `useAuth.js`). |
| **pages/** | One folder per route: `Home/`, `Login/`, `Register/`, `Dashboard/`, `SymptomChecker/`, `ChatDoctor/`, `DietPlanner/`, `Profile/`. Each exports a default from `index.jsx`. |
| **services/** | `api.js` for API calls; `utils/pdfUtils.js` for PDF generation. |
| **styles/** | Global and feature-shared CSS (e.g. `Home.css`, `Features.css`, `Dashboard.css`, `AuthPages.css`, `Components.css`). |

## Import conventions

- **App:** `../context/AuthContext`, `../components/layout/Navbar`, `../components/layout/ProtectedRoute`, `../pages/Home`, etc.
- **Pages:** `../../components/layout/Sidebar`, `../../components/ui/HealthCard`, `../../context/AuthContext`, `../../services/utils/pdfUtils`, `../../styles/...`
- **Layout/UI:** Use `index.jsx` so you can import e.g. `from '../../components/layout/Navbar'` instead of specifying the inner file.

## Adding new features

1. **New page:** Add `src/pages/YourPage/index.jsx` and register the route in `app/App.jsx`.
2. **New layout component:** Add `src/components/layout/YourComponent/` with `YourComponent.jsx`, optional `YourComponent.css`, and `index.jsx`.
3. **New UI component:** Add `src/components/ui/YourComponent/` with the same pattern.
4. **New shared style:** Add a file under `src/styles/` and import it from the relevant page or component.
5. **New API or util:** Add under `src/services/` or `src/services/utils/` and import where needed.
