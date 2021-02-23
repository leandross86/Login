import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles'

interface ButtonProps {
  title: string;
  onPress: Function;
}

const Button: React.FC<ButtonProps> = ({ title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress()}>
        <LinearGradient
          colors={[ '#9D25B0', '#383E71' ]}
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        >
          <Text
            style={styles.btnText}
          >{title}</Text>

        </LinearGradient>
      </TouchableOpacity>

    </View>
    )
}

export default Button;