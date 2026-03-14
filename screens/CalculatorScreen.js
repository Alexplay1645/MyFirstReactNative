import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import { calculatePercentage, calculateTrig } from '../src/calculatorLogic';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      if (input.includes('%')) {
        const parts = input.split('%');
        if (parts.length === 2) {
          const res = calculatePercentage(parseFloat(parts[0]), parseFloat(parts[1]));
          setResult(isNaN(res) ? 'Error' : res.toString());
        } else setResult('Error');
      } else {
        try {
          setResult(eval(input).toString());
        } catch {
          setResult('Error');
        }
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (['sin', 'cos', 'tan', 'ctg'].includes(value)) {
      const angle = parseFloat(input);
      const res = calculateTrig(value, angle);
      setResult(res.toString());
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C','sin','cos','tan','ctg','%'
  ];

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((btn) => (
          <CalculatorButton
            key={btn}
            label={btn}
            onPress={() => handlePress(btn)}
            width={width / 6 - 10}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  input: { fontSize: 30, textAlign: 'right', marginBottom: 10 },
  result: { fontSize: 24, textAlign: 'right', marginBottom: 20, color: 'blue' },
  buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});