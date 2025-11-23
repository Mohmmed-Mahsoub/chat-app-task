import { addMessage, store } from "../state/index.js";
import { generateId, formatTime, escapeHtml } from "../utils/helpers.js";

// Pure message creation
const createMessage = (content, isSent = false) => ({
  id: generateId(),
  content: escapeHtml(content),
  isSent,
  timestamp: new Date(),
  formattedTime: formatTime(new Date()),
});

// Action creators
export const sendMessage = (content) => {
  if (!content.trim()) return store.getState();

  const userMessage = createMessage(content, true);
  store.setState((state) => addMessage(userMessage, state));
  simulateAIResponse();
  return store.getState();
};

export const simulateAIResponse = () => {
  const responses = [
    "I understand your question. Let me check the documentation for you.",
    "That's an interesting point. Based on our documentation...",
    "I found relevant information in our knowledge base.",
    "Let me provide you with the most up-to-date information.",
    "According to our latest documentation...",
    "Great question! Here's what I found in our resources.",
    "I've analyzed your query and here's the relevant information.",
    "Based on my understanding, here's what you need to know.",
  ];

  const delay = 1000 + Math.random() * 2000;

  setTimeout(() => {
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    const aiMessage = createMessage(randomResponse, false);
    store.setState((state) => addMessage(aiMessage, state));
  }, delay);
};
