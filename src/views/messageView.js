import { createElement, appendChildren } from "../utils/domHelpers.js";
import { getIsIndecator, getMessages } from "../state/index.js";

let lastRenderedCount = 0;

export const renderMessages = (state, container) => {
  const messages = getMessages(state);
  const isIndicator = getIsIndecator(state);

  // Only render new messages
  if (messages.length > lastRenderedCount) {
    const newMessages = messages.slice(lastRenderedCount);
    const newElements = newMessages.map(createMessageElement);
    appendChildren(container, newElements);
    lastRenderedCount = messages.length;
  }

  // Handle typing indicator separately
  const existingIndicator = container.querySelector('.typing-indicator');

  if (isIndicator && !existingIndicator) {
    container.appendChild(createIndecatorElement());
  } else if (!isIndicator && existingIndicator) {
    existingIndicator.remove();
  }

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
const createIndecatorElement = () => {
  const typingIndicator = createElement("div", "typing-indicator");
  typingIndicator.innerHTML = `
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;

  return typingIndicator;
};

const scrollToBottom = (container) => {
  container.scrollTop = container.scrollHeight;
};
