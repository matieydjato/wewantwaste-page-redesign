# WeWantWaste Page Redesign

## Project Approach

This project is a modern React application for the WeWantWaste skip hire flow, designed with clarity, maintainability, and user experience in mind.

### Key Principles

- **Component-Driven Architecture:**  
  The UI is broken down into reusable, focused components (e.g., `Show`, `SkipCard`, `StepIndicator`). Each component handles a single responsibility, making the codebase easy to understand and extend.

- **Context and Reducer for State Management:**  
  The skip hire flow state (current step, selected skip, postcode, etc.) is managed using React Context and a reducer. This centralizes state logic and enables predictable updates across the app.

- **React Query for Data Fetching:**  
  Data fetching (e.g., available skips by location) is handled with [React Query](https://tanstack.com/query/latest), providing caching, loading, and error states out of the box.

- **TypeScript for Type Safety:**  
  All components and services are strongly typed, reducing runtime errors and improving developer experience.

- **Conditional Rendering:**  
  The `Show` component is used throughout to handle conditional UI rendering in a declarative way.

- **Responsive Design:** 1–2–3 column grid capped at `max-w-6xl`, centered on large screens.

- **Persistence:**  
  Selected skip data is persisted in `localStorage` to maintain user choices across sessions.

- **Minimal Comments, Clear Code:**  
  Comments are only added where necessary—complex logic, intent, or non-obvious decisions. The code is written to be self-explanatory wherever possible. Utility helpers extracted for styles (`SkipCard.utils.ts`)

### Folder Structure

- **`src/components/`** — Reusable UI pieces (cards, buttons, stepper, etc.)  
- **`src/containers/`** — Page‐level components that compose multiple pieces  
- **`src/contexts/`** — React Context Providers and state types  
- **`src/reducers/`** — Reducer functions and action definitions  
- **`src/hooks/`** — Custom hooks (e.g. `useSkipsByLocation`)  
- **`src/services/`** — API clients and utility functions (e.g. formatting, image lookup)  
- **`src/constants/`** — Static values (step keys, action types)  
- **`src/types/`** — Shared TypeScript interfaces/types

### How to Run Locally

1. Clone the repo  
   `git clone https://github.com/matieydjato/wewantwaste-page-redesign.git`  
2. Install dependencies  
   `npm install`  
3. Start in development mode  
   `npm run dev`  
4. (Optional) Build for production  
   `npm run build`  
5. Preview the production build  
   `npm run preview`

---

This approach ensures the project is scalable, easy to maintain, and provides a smooth user experience.

## Future Improvements

- Add error‐boundary UI for network failures.  
- Enhance pagination for large skip lists (infinite scroll or server‐side pagination).  
- Unit tests for reducers and utility functions.
