import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import SearchBar from '@/components/molecules/search-bar';
import BookList from '@/components/organisms/book-list';

const BookListTemplate = ({
  query,
  setQuery,
  onSearch,
  books,
  loading,
  error,
}) => (
  <View>
    <View className="p-4">
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        loading={loading}
      />

      {error && (
        <Text className="text-center text-lg text-red-500">{error}</Text>
      )}
    </View>
    {loading && (
      <View className="flex justify-center items-center h-2/3">
        <ActivityIndicator size="large" color="#ff1c6d" />
      </View>
    )}
    {!loading && <BookList books={books} />}
  </View>
);

export default BookListTemplate;
