import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useBookStore from '@/store/bookStore';

const BookDetailScreen = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const route = useRoute();
  const {workKey} = route.params;
  const fetchBookDetails = useBookStore(state => state.fetchBookDetails);
  const {bookDetails, loading, error} = useBookStore();

  useEffect(() => {
    fetchBookDetails(workKey);
  }, [fetchBookDetails, workKey]);

  const getCoverUrl = () => {
    if (bookDetails?.localCoverPath) {
      return `file://${bookDetails.localCoverPath}`;
    }
    if (bookDetails?.covers?.length > 0) {
      return `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`;
    }
    return null;
  };

  const coverUrl = getCoverUrl();

  const renderAuthor = author => {
    if (!author) {
      return <Text style={{color: 'red'}}>Autor no disponible</Text>;
    }
    if (typeof author === 'string') {
      return <Text style={{fontSize: 20}}>{author}</Text>;
    }
    if (typeof author === 'object' && author.name) {
      return <Text style={{fontSize: 20}}>{author.name}</Text>;
    }
    return <Text style={{color: 'red'}}>Autor no disponible</Text>;
  };

  return (
    <>
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#ff1c6d" />
        </View>
      ) : (
        <View className="flex items-start justify-center p-4 flex-1">
          {error && (
            <Text className="text-center text-lg text-red-500">{error}</Text>
          )}
          {!loading && bookDetails && (
            <ScrollView className="w-full">
              {coverUrl && (
                <View>
                  {imageLoading && (
                    <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                      <ActivityIndicator size="large" color="#ff1c6d" />
                    </View>
                  )}
                  <Image
                    source={{uri: coverUrl}}
                    className="w-full h-64"
                    onLoadStart={() => setImageLoading(true)}
                    onLoad={() => setImageLoading(false)}
                    onError={() => setImageLoading(false)}
                  />
                </View>
              )}
              {bookDetails.title && typeof bookDetails.title === 'string' ? (
                <Text className="text-2xl text-primary font-bold mt-4">
                  {bookDetails.title}
                </Text>
              ) : (
                <Text className="text-red-500 mt-4">Titulo no disponible</Text>
              )}
              {bookDetails.first_publish_date &&
                typeof bookDetails.first_publish_date === 'string' && (
                  <Text className="text-primary">
                    {bookDetails.first_publish_date}
                  </Text>
                )}
              {bookDetails.description &&
              typeof bookDetails.description === 'string' ? (
                <Text className="text-primary mt-4">
                  {bookDetails.description}
                </Text>
              ) : (
                <Text className="text-red-500 mt-4">
                  Descripcion no disponible
                </Text>
              )}

              <Text className="text-xl text-primary mt-4">
                {renderAuthor(bookDetails.author)}
              </Text>

              {bookDetails.author &&
              bookDetails.author.bio &&
              typeof bookDetails.author.bio === 'string' ? (
                <Text className="text-primary">{bookDetails.author.bio}</Text>
              ) : (
                <Text className="text-red-500 mt-4">
                  Biografía no disponible
                </Text>
              )}
            </ScrollView>
          )}
        </View>
      )}
    </>
  );
};

export default BookDetailScreen;
