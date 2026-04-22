// Initial state
export const initialToastState = {
    isShow: false,
    message: "",
    type: "",
}

// State selectors
export const getToast = (state) => state.toast;

// State updaters
export const setToast = (toast, state) => ({
    ...state,
    toast: {
        ...state.toast,
        ...toast,
    },
});
