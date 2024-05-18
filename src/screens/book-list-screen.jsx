import React, {useState} from 'react';
import {View} from 'react-native';
import useBookStore from '@/store/bookStore';
import BookListTemplate from '@/components/templates/book-list-template';

const BookListScreen = () => {
  const [query, setQuery] = useState('');
  const fetchBooks = useBookStore(state => state.fetchBooks);
  const {books, loading, error} = useBookStore();

  const searchHandler = () => {
    if (query.length > 3) {
      fetchBooks(query);
    }
  };

  return (
    <BookListTemplate
      query={query}
      setQuery={setQuery}
      onSearch={searchHandler}
      books={books}
      loading={loading}
      error={error}
    />
  );
};

export default BookListScreen;
