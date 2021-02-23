import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60341c1a843b150017932257.mockapi.io/',
});

export default api;