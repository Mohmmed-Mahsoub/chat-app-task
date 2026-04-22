import { setToast } from "../state";
import { store } from "../state/index.js";

export const showToastAction = (toast) => {
    if (!toast && !toast.message && !toast.type) return store.getState();
    store.setState((state) => setToast(toast, state));
    setTimeout(() => {
        store.setState((state) => setToast({ isShow: false, message: "", type: "" }, state));
    }, 3000);
    return store.getState();
};