import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BookRecentList = ({recentBooks}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex">
      <FlatList
        data={recentBooks}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('BookDetail', {workKey: item.key})
            }>
            <View className="border-b p-4">
              <Text className="text-xl text-primary">{item.title}</Text>
              <Text className="text-primary">{item.author.name}</Text>
              <Text className="text-primary">{item.first_publish_date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default BookRecentList;
