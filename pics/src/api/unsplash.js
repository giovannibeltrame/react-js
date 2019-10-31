import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID fe08dff46f10f1ee52302e4240f1f97aa92f8c1462db3691fe23df10608da7d5'
  }
});
