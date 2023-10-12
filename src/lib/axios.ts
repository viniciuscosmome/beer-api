import axios from 'axios';

export const PunkApi = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers',
  timeout: 5000,
  params: {
    per_page: 50,
  },
});
