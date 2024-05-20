import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BookList = ({books}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex h-3/4">
      <FlatList
        data={books}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('BookDetail', {workKey: item.key})
            }>
            <View className="border-b p-4 ">
              <Text className="text-xl text-primary">{item.title}</Text>
              <Text className="text-primary">{item.author_name}</Text>
              <Text className="text-primary">{item.first_publish_year}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default BookList;
