import React, {useEffect} from 'react';
import useBookStore from '@/store/bookStore';
import BookRecentTemplate from '@/components/templates/book-recent-template';

const BookRecentScreen = () => {
  const fetchRecentBooks = useBookStore(state => state.fetchRecentBooks);
  const {recentBooks, loading, error} = useBookStore(state => ({
    recentBooks: state.recentBooks,
    loading: state.loading,
    error: state.error,
  }));

  useEffect(() => {
    fetchRecentBooks();
  }, [fetchRecentBooks]);

  return (
    <BookRecentTemplate
      recentBooks={recentBooks}
      loading={loading}
      error={error}
    />
  );
};

export default BookRecentScreen;
