import axios from 'axios';

const api = axios.create({
  baseURL: 'http://copafilmes.azurewebsites.net/api',
});

export default api;
