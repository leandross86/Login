import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles'

interface InputProps {
  placeholder: string;
  onChangeText: Function;
  isValidate?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, onChangeText, isValidate = true }) => {
  const [isEmail, setIsEmail] = useState(false)

  useEffect(() => {
    setIsEmail(isValidate);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={placeholder}
          autoCapitalize='none'
          secureTextEntry={placeholder === '******' ? true : false}
          onChangeText={text => onChangeText(text)}
          style={styles.textField}
        />
      </View>
    </View>
  );
}

export default Input;