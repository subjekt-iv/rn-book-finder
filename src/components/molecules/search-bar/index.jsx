import React from 'react';
import {View, Text} from 'react-native';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import {useNavigation} from '@react-navigation/native';

const SearchBar = ({query, setQuery, onSearch, loading}) => {
  const navigation = useNavigation();

  return (
    <View className="flex h-32 ">
      <Input value={query} onChangeText={setQuery} placeholder="Buscar" />
      <Button name={!loading ? 'Buscar' : 'Buscando...'} onPress={onSearch} />
      <View className="flex items-end">
        <Text
          className=" text-primary underline mt-4"
          onPress={() => navigation.navigate('BookRecent')}>
          Vistos recientemente
        </Text>
      </View>
    </View>
  );
};

export default SearchBar;
