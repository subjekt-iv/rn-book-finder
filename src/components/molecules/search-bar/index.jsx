import React from 'react';
import {View, Text} from 'react-native';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';

const SearchBar = ({query, setQuery, onSearch, loading}) => (
  <View className="flex h-32 items-center">
    <Input value={query} onChangeText={setQuery} placeholder="Buscar" />
    <Button name={!loading ? 'Buscar' : 'Buscando...'} onPress={onSearch} />
  </View>
);

export default SearchBar;
