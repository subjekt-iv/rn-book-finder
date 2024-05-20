import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookListScreen from '@/screens/BookListScreen';
import BookDetailScreen from '@/screens/BookDetailScreen';
import BookRecentScreen from '@/screens/book-recent-screen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookList" component={BookListScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="BookRecent" component={BookRecentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
