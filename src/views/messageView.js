import { createElement, appendChildren } from "../utils/domHelpers.js";
import { getIsIndecator, getMessages } from "../state/index.js";

export const renderMessages = (state, container) => {
  const messages = getMessages(state);

  // Full re-render
  container.innerHTML = "";
  const messageElements = messages.map(createMessageElement);

  const isIndecator = getIsIndecator(state);
  const childrenToAppend = isIndecator
    ? [...messageElements, createIndecatorElement()]
    : messageElements;
  appendChildren(container, childrenToAppend);

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
