// Initial state
export const initialChatState = {
  messages: [
    {
      id: 1,
      content: "Hello! I'm your Pidima AI assistant. How can I help you today?",
      isSent: false,
      timestamp: new Date(),
      formattedTime: "Just now",
    },
  ],
  isIndecator: false,
};

// State selectors
export const getMessages = (state) => state.chat.messages;

// State updaters
export const addMessage = (message, state) => ({
  ...state,
  chat: {
    ...state.chat,
    messages: [...state.chat.messages, message],
  },
});

export const getIsIndecator = (state) => state.chat.isIndecator;
export const setIsIndecator = (state, isIndecator) => ({
  ...state,
  chat: {
    ...state.chat,
    isIndecator: isIndecator,
  },
});
