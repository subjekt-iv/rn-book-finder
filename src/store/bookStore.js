import {create} from 'zustand';
import {searchBooks, getBookDetails, getAuthorDetails} from '@/services/api';

const useBookStore = create(set => ({
  books: [],
  bookDetails: null,
  loading: false,
  error: null,
  fetchBooks: async query => {
    set({loading: true, error: null});
    try {
      const response = await searchBooks(query);
      set({books: response.data.docs, loading: false});
    } catch (error) {
      set({error: error.message, loading: false});
    }
  },
  fetchBookDetails: async workKey => {
    set({loading: true, error: null});
    try {
      const response = await getBookDetails(workKey);
      const authorResponse = await getAuthorDetails(
        response.data.authors[0].author.key,
      );
      set({
        bookDetails: {...response.data, author: authorResponse.data},
        loading: false,
      });
    } catch (error) {
      set({error: error.message, loading: false});
    }
  },
}));

export default useBookStore;
