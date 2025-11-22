// Initial state
export const initialThemeState = {
  theme: localStorage.getItem("chat-theme") || "light",
};

// State selectors
export const getTheme = (state) => state.theme.theme;

// State updaters
export const setTheme = (theme, state) => ({
  ...state,
  theme: {
    ...state.theme,
    theme,
  },
});
