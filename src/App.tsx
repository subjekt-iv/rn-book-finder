import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BookListScreen from '@/screens/book-list-screen';
import BookDetailScreen from '@/screens/book-detail-screen';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="BookList"
            component={BookListScreen}
            options={{title: 'Búsqueda'}}
          />
          <Stack.Screen
            name="BookDetail"
            component={BookDetailScreen}
            options={{title: 'Detalles'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
