import React from 'react';
import {View, SafeAreaView} from 'react-native';
import BookRecentList from '@/components/organisms/book-recent-list';

const BookRecentTemplate = ({recentBooks, loading, error}) => {
  return (
    <View>
      <BookRecentList
        recentBooks={recentBooks}
        loading={loading}
        error={error}
      />
    </View>
  );
};

export default BookRecentTemplate;
