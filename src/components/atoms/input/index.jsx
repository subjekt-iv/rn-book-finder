import React from 'react';
import {TextInput} from 'react-native';

const Input = ({value, onChangeText, placeholder, className}) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor="#121317"
    className={`border p-2 w-full h-12 bg-brik-surface-3 text-primary rounded-lg ${className}`}
  />
);

export default Input;
