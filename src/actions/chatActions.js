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

  return store.getState();
};
