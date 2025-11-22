// Central store creation
export const createStore = (initialState) => {
  let state = initialState;
  let subscribers = [];

  const getState = () => ({ ...state });

  const setState = (updater) => {
    const newState = typeof updater === "function" ? updater(state) : updater;

    if (newState !== state) {
      state = newState;
      subscribers.forEach((subscriber) => subscriber(state));
    }

    return state;
  };

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
  };

  return { getState, setState, subscribe };
};
