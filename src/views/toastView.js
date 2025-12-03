import { getToast } from "../state";

export const renderToast = (container, state) => {
    const toast = getToast(state);

    if (!toast.isShow) {
        container.innerHTML = '';
        return;
    }

    const toastTypeClass = toast.type ? `toast-${toast.type}` : 'toast-info';

    container.innerHTML = `
    <div class="toast-container ${toast.isShow ? 'toast-show' : ''}">
      <div class="toast ${toastTypeClass}">
        <div class="toast-icon">${getToastIcon(toast.type)}</div>
        <span class="toast-message">${toast.message}</span>
      </div>
    </div>
  `;
};

const getToastIcon = (type) => {
    switch (type) {
        case 'error':
            return '⚠️';
        case 'success':
            return '✓';
        case 'warning':
            return '⚡';
        case 'info':
        default:
            return 'ℹ️';
    }
};
