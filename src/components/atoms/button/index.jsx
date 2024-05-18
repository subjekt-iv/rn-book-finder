import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({name, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-brik p-2 w-full rounded-lg mt-4">
    <Text className="text-black text-lg  text-center">{name}</Text>
  </TouchableOpacity>
);

export default Button;
