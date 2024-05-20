import {create} from 'zustand';
import {searchBooks, getBookDetails, getAuthorDetails} from '@/services/api';
import {setItem, getItem} from '@/services/storage';

const useBookStore = create(set => ({
  books: [],
  bookDetails: null,
  recentBooks: [],
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
  fetchRecentBooks: async () => {
    set({loading: true, error: null});
    try {
      const recentBooks = (await getItem('recentBooks')) || [];
      set({recentBooks: recentBooks, loading: false});
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
      const bookDetails = {...response.data, author: authorResponse.data};
      set({
        bookDetails: bookDetails,
        loading: false,
      });
      await setItem('bookDetails', bookDetails);
      const recentBooks = (await getItem('recentBooks')) || [];
      const updatedRecentBooks = [
        bookDetails,
        ...recentBooks.filter(book => book.key !== bookDetails.key),
      ];
      const limitedRecentBooks = updatedRecentBooks.slice(0, 10);
      await setItem('recentBooks', limitedRecentBooks);
    } catch (error) {
      set({error: error.message, loading: false});
    }
  },
}));

export default useBookStore;
