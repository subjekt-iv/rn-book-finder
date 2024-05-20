import React from 'react';
import {View, SafeAreaView} from 'react-native';
import BookRecentList from '@/components/organisms/book-recent-list';

const BookRecentTemplate = ({recentBooks, loading, error}) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <BookRecentList
          recentBooks={recentBooks}
          loading={loading}
          error={error}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookRecentTemplate;
