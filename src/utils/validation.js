export const validateMessage = (content) => {
    const errors = [];

    if (!content || !content.trim()) {
        errors.push("Message cannot be empty");
    }

    if (content.length > 500) {
        errors.push("Message too long (max 500 characters)");
    }

    // Block excessive whitespace
    if (content.trim().length < content.length * 0.2) {
        errors.push("Message contains too much whitespace");
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

