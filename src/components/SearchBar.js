import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search currency..."
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  },
});