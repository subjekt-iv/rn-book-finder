import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BookList = ({books}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={books}
      keyExtractor={item => item.key}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BookDetail', {workKey: item.key})
          }>
          <View className="border-b p-4 bg-brik-surface-2">
            <Text className="text-xl">{item.title}</Text>
            <Text className="text-gray-500">{item.author_name}</Text>
            <Text className="text-gray-500">{item.first_publish_year}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default BookList;
