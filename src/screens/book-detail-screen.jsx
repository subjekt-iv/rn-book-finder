import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
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
    <View className="flex items-start justify-center p-4">
      {error && (
        <Text className="text-center text-lg text-red-500">{error}</Text>
      )}
      <ScrollView>
        {bookDetails && (
          <View>
            {bookDetails.cover && typeof bookDetails.cover === 'string' && (
              <Image source={{uri: bookDetails.cover}} className="w-full h-2" />
            )}
            {bookDetails.title && typeof bookDetails.title === 'string' && (
              <Text className="text-2xl text-primary font-bold mt-4">
                {bookDetails.title}
              </Text>
            )}
            {bookDetails.first_publish_year &&
              typeof bookDetails.first_publish_year === 'string' && (
                <Text className="text-primary">
                  {bookDetails.first_publish_year}
                </Text>
              )}
            {bookDetails.description &&
              typeof bookDetails.description === 'string' && (
                <Text className="mt-4 text-primary">
                  {bookDetails.description}
                </Text>
              )}
            {bookDetails.author_name &&
              typeof bookDetails.author_name === 'string' && (
                <Text className="mt-4 text-xl text-primary">
                  {bookDetails.author_name}
                </Text>
              )}
            {bookDetails.author &&
              bookDetails.author.bio &&
              typeof bookDetails.author.bio === 'string' && (
                <Text className="text-primary">{bookDetails.author.bio}</Text>
              )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default BookDetailScreen;
