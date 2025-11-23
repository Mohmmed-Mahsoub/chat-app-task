import { store } from "../state/index.js";
import { toggleThemeAction } from "../actions/index.js";
import { renderHeader } from "./headerView.js";
import { getTheme } from "../state/index.js";
import { renderInputArea } from "./inputView.js";

// Main template
const getChatTemplate = () => `
  <div class="chat-container" data-theme="light">
    <header id="chatHeader"></header>
    <main class="messages-container" id="messagesContainer"></main>
    <footer id="chatFooter"></footer>
  </div>
`;

// Track previous state for optimal updates
let previousState = null;

// Check if theme changed
const themeChanged = (prevState, currentState) => {
  return getTheme(prevState) !== getTheme(currentState);
};
const createMessage = () => {
  const inputElement = document.getElementById("messageInput");
  const content = inputElement?.value?.trim();
  if (content) {
    console.log("createMessage", content);
    //clear input
    inputElement.value = "";
  }
};

// Main app initialization
export const initializeApp = () => {
  const appContainer = document.getElementById("app");
  if (!appContainer) {
    console.error("App container not found");
    return;
  }
  appContainer.innerHTML = getChatTemplate();
  const chatContainer = appContainer.querySelector(".chat-container");

  // Initial render
  const initialState = store.getState();
  previousState = initialState;

  updateView(initialState, chatContainer, true);

  // Set up event listeners
  setupEventListeners();

  // Subscribe to state changes
  store.subscribe((state) => {
    updateView(state, chatContainer, false);
    previousState = state;
  });
};

const updateView = (state, container, isInitialRender = false) => {
  const headerContainer = container.querySelector("#chatHeader");
  const messagesContainer = container.querySelector("#messagesContainer");
  const footerContainer = container.querySelector("#chatFooter");

  messagesContainer.innerHTML = `
    <div class="message sent">
      <div class="message-content">message content</div>
      <div class="message-time">time</div>
    </div>
    <div class="message received">
      <div class="message-content">message content</div>
      <div class="message-time">time</div>
    </div>
  `;

  // Update theme if changed
  if (isInitialRender || themeChanged(previousState, state)) {
    const theme = getTheme(state);
    container.setAttribute("data-theme", theme);

    // Re-render header when theme changes (for theme label update)
    if (headerContainer) renderHeader(state, headerContainer);
  }

  // Always update input area (it handles its own optimizations)
  if (footerContainer) renderInputArea(footerContainer);
};

const setupEventListeners = () => {
  // Use event delegation for dynamic elements
  document.addEventListener("click", (event) => {
    if (
      event.target.id === "themeToggle" ||
      event.target.closest("#themeToggle")
    ) {
      toggleThemeAction();
    }
    if (
      event.target.id === "sendButton" ||
      event.target.closest("#sendButton")
    ) {
      createMessage();
    }
  });
  document.addEventListener("keypress", (event) => {
    if (event.target.id === "messageInput" && event.key === "Enter") {
      createMessage();
    }
  });
};
