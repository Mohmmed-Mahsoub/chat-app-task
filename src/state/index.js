import { createStore } from "./store.js";
import { initialThemeState } from "./themeState.js";
import { initialChatState } from "./chatState.js";
import { initialToastState } from "./toastState.js";

// Combined initial state
export const initialState = {
  theme: initialThemeState,
  chat: initialChatState,
  toast: initialToastState,
};

// Create and export the store instance
export const store = createStore(initialState);

// Re-export all state functions
export * from "./themeState.js";
export * from "./chatState.js";
export * from "./toastState.js";
export * from "./store.js";
