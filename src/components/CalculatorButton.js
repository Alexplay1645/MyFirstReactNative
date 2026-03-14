import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CalculatorButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default CalculatorButton;
