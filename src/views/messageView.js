import { createElement, appendChildren } from "../utils/domHelpers.js";
import { getMessages } from "../state/index.js";

let lastMessageCount = 0;

export const renderMessages = (state, container) => {
  const messages = getMessages(state);

  // Only re-render if messages actually changed
  if (messages.length === lastMessageCount && container.children.length > 0) {
    // Check if we just need to append new messages
    if (messages.length > lastMessageCount) {
      const newMessages = messages.slice(lastMessageCount);
      const newMessageElements = newMessages.map(createMessageElement);
      appendChildren(container, newMessageElements);
    }
  } else {
    // Full re-render
    container.innerHTML = "";
    const messageElements = messages.map(createMessageElement);
    appendChildren(container, messageElements);
  }

  lastMessageCount = messages.length;
  scrollToBottom(container);
};

const createMessageElement = (message) => {
  const messageDiv = createElement(
    "div",
    `message ${message.isSent ? "sent" : "received"}`
  );
  messageDiv.innerHTML = `
    <div class="message-content">${message.content}</div>
    <div class="message-time">${message.formattedTime}</div>
  `;
  messageDiv.style.animation = "fadeIn 0.3s ease-out";
  return messageDiv;
};

const scrollToBottom = (container) => {
  container.scrollTop = container.scrollHeight;
};
