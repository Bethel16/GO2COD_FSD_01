import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',  // Ensure this URL matches your Django server
});

export default api;
