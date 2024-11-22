// src/utils/csrfUtils.js
export const getCSRFToken = () => {
    const csrfCookie = document.cookie
        .split("; ")
        .find(row => row.startsWith("csrftoken="));
    return csrfCookie ? csrfCookie.split("=")[1] : null;
};
