import { store } from "../state/index.js";
import { setTheme, getTheme } from "../state/themeState.js";

const changeTheme = (theme) => {
  if (theme !== "light" && theme !== "dark") return store.getState();

  store.setState((state) => setTheme(theme, state));
  localStorage.setItem("chat-theme", theme);
  return theme;
};

export const toggleThemeAction = () => {
  const currentState = store.getState();
  const currentTheme = getTheme(currentState);
  const newTheme = currentTheme === "light" ? "dark" : "light";
  return changeTheme(newTheme);
};
