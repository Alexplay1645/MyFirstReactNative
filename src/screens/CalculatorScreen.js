import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {

  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const squareNumber = () => {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      setResult(num * num);
    } else {
      setResult("Invalid number");
    }
  };

  const sqrtNumber = () => {
    const num = parseFloat(number);

    if (num < 0) {
      setResult("Number must be positive");
      return;
    }

    setResult(Math.sqrt(num));
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <CalculatorButton
        title="Square (x²)"
        onPress={squareNumber}
      />

      <CalculatorButton
        title="Square Root (√)"
        onPress={sqrtNumber}
      />

      <Text style={styles.result}>
        Result: {result}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },

  result: {
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
  }

});

export default CalculatorScreen;
