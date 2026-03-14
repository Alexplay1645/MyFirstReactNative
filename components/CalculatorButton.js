import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CalculatorButton({ label, onPress, width }) {
  return (
    <TouchableOpacity style={[styles.button, { width }]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    margin: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: { fontSize: 20 },
});