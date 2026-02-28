# React + Vite

Single-page React application built with React 19, Tailwind CSS, and Vite, 
documenting the Dejanović/Dragaš family history. The site is bilingual (Serbian/
English) using a JSON-based translation system and features an interactive image 
gallery, horizontal carousel for historical articles, FAQ accordion, Patreon-style 
donation tiers with external payment integration, and a citizenship application form 
with email submission. Designed with a responsive layout, modern UI/UX patterns, 
and a modular component architecture for maintainability.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
