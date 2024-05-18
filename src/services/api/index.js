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

export const searchBooks = async query => {
  try {
    const response = await apiClient.get(
      `/search.json?q=${encodeURIComponent(query)}`,
    );
    const limitedResults = response.data.docs.slice(0, 10);
    return {...response, data: {...response.data, docs: limitedResults}};
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const getBookDetails = workKey => {
  return apiClient.get(`${workKey}.json`);
};

export const getAuthorDetails = authorKey => {
  return apiClient.get(`${authorKey}.json`);
};
