// Main template
const getChatTemplate = () => `
  <div class="chat-container" data-theme="light">
    <header id="chatHeader"></header>
    <main class="messages-container" id="messagesContainer"></main>
    <footer id="chatFooter"></footer>
  </div>
`;

// Main app initialization
export const initializeApp = () => {
  const appContainer = document.getElementById("app");
  if (!appContainer) {
    console.error("App container not found");
    return;
  }

  appContainer.innerHTML = getChatTemplate();

  const chatContainer = appContainer.querySelector(".chat-container");

  const headerContainer = chatContainer.querySelector("#chatHeader");
  const messagesContainer = chatContainer.querySelector("#messagesContainer");
  const footerContainer = chatContainer.querySelector("#chatFooter");

  headerContainer.innerHTML = `
    <div class="chat-header">
      <h1 class="chat-title">Pidima AI Assistant</h1>
      <div class="theme-toggle" id="themeToggle">
        <span class="toggle-label">dark</span>
        <div class="toggle-slider"></div>
      </div>
    </div>
  `;

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
  footerContainer.innerHTML = `
      <div class="input-container">
        <input 
          type="text" 
          class="message-input" 
          id="messageInput" 
          placeholder="Type your message..." 
          maxlength="500"
          value=""
        >
        <button class="send-button" id="sendButton">
          Send
        </button>
      </div>
    `;
};
