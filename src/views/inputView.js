export const renderInputArea = (container) => {
  container.innerHTML = `
    <div class="input-container">
      <input 
        type="text" 
        class="message-input" 
        id="messageInput" 
        placeholder="Type your message..." 
        value=""
      >
      <button class="send-button" id="sendButton">
        Send
      </button>
    </div>
  `;
};
