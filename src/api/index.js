import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Error:', error);
    return Promise.reject(error);
  },
);

export const searchBooks = query => {
  return apiClient.get(`/search.json?q=${encodeURIComponent(query)}`);
};

export const getBookDetails = workKey => {
  return apiClient.get(`/works/${workKey}.json`);
};

export const getAuthorDetails = authorKey => {
  return apiClient.get(`/authors/${authorKey}.json`);
};
