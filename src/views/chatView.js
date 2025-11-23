import { getMessages, store } from "../state/index.js";
import { toggleThemeAction } from "../actions/index.js";
import { renderHeader } from "./headerView.js";
import { getTheme } from "../state/index.js";
import { renderInputArea } from "./inputView.js";
import { sendMessage } from "../actions/chatActions.js";
import { renderMessages } from "./messageView.js";

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
// Check if messages changed (for optimal rendering)
const messagesChanged = (prevState, currentState) => {
  const prevMessages = getMessages(prevState);
  const currentMessages = getMessages(currentState);

  if (prevMessages.length !== currentMessages.length) return true;

  // Check if any message content changed
  return prevMessages.some((prevMsg, index) => {
    const currentMsg = currentMessages[index];
    return !currentMsg || prevMsg.content !== currentMsg.content;
  });
};
const createMessage = () => {
  const inputElement = document.getElementById("messageInput");
  const content = inputElement?.value?.trim();
  if (content) {
    sendMessage(content);
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
  // Update messages if changed
  if (isInitialRender || messagesChanged(previousState, state)) {
    if (messagesContainer) renderMessages(state, messagesContainer);
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
