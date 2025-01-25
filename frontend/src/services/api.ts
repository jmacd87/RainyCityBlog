import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.VITE_BACKEND_BASE_URL}/api/posts`,
});

export default api;
