export const renderInputArea = (container) => {
  // Only re-render if the container is empty or structure changed
  if (!container.innerHTML || !container.querySelector(".input-container")) {
    container.innerHTML = `
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
  }
};
