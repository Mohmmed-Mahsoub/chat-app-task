import { createStore } from "./store.js";
import { initialThemeState } from "./themeState.js";

// Combined initial state
export const initialState = {
  theme: initialThemeState,
};

// Create and export the store instance
export const store = createStore(initialState);

// Re-export all state functions
export * from "./themeState.js";
export * from "./store.js";
