# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Premier League Predictor - Walkthrough

I have built the **Premier League Match Predictor** web application. It features a premium dark-mode design and currently runs with **Mock Data** to demonstrate the functionality immediately.

## Features Implemented
- **Dashboard**: Displays a grid of upcoming matches (using realistic mock data for Liverpool vs Man Utd and Man City vs Arsenal).
- **Match Details**: Click any match to view:
    - **Prediction Gauge**: Visual bar showing Win/Draw/Loss probabilities.
    - **Lineups**: Starting XI for both teams.
- **API Integration**: The app is structured to use **API-Football**. You can easily switch to real data by adding logic to `src/api/client.js` or I can add an Input Field for it next.

## Demo
![Verification Recording](file:///Users/dan/.gemini/antigravity/brain/07629d70-7187-48e1-9dda-2f11f00477e1/verify_prediction_app_1770155511118.webp)

## How to Run
1. Open a terminal in the project directory:
   ```bash
   cd premier-league-predictor
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the URL shown (usually `http://localhost:5173`).

## Verification Results
I performed a browser test verification:
- [x] **Home Page**: Loaded successfully and displayed match cards.
- [x] **Navigation**: Clicked into "Liverpool vs Man Utd" successfully.
- [x] **Data**: Verified that Lineups (e.g. Alisson) and Predictions (55% Home Win) are visible.
- [x] **Styles**: Premium glassmorphism effects are rendering correctly.

## Next Steps
- Add **API Key Input** in the UI to allow using real live data.
- Add more visual stats (Head-to-Head).
