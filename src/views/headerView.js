import { getTheme } from "../state/themeState.js";

export const renderHeader = (state, container) => {
  const theme = getTheme(state);
  const themeLabel = theme === "light" ? "Dark Mode" : "Light Mode";

  container.innerHTML = `
    <div class="chat-header">
      <h1 class="chat-title">Pidima AI Assistant</h1>
      <div class="theme-toggle" id="themeToggle">
        <span class="toggle-label">${themeLabel}</span>
        <div class="toggle-slider"></div>
      </div>
    </div>
  `;
};
