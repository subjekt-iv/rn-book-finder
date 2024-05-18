import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useBookStore from '@/store/bookStore';

const BookDetailScreen = () => {
  const route = useRoute();
  const {workKey} = route.params;
  const fetchBookDetails = useBookStore(state => state.fetchBookDetails);
  const {bookDetails, loading, error} = useBookStore();

  useEffect(() => {
    fetchBookDetails(workKey);
  }, [fetchBookDetails, workKey]);

  return (
    <View className="p-4">
      {loading && <Text className="text-center text-lg">Loading...</Text>}
      {error && (
        <Text className="text-center text-lg text-red-500">{error}</Text>
      )}
      {bookDetails && (
        <View>
          <Image source={{uri: bookDetails.cover}} className="w-full h-64" />
          <Text className="text-2xl font-bold mt-4">{bookDetails.title}</Text>
          <Text className="text-gray-500">
            {bookDetails.first_publish_year}
          </Text>
          <Text className="mt-4">{bookDetails.description}</Text>
          <Text className="mt-4 text-xl">{bookDetails.author_name}</Text>
          <Text className="text-gray-500">{bookDetails.author.bio}</Text>
        </View>
      )}
    </View>
  );
};

export default BookDetailScreen;
