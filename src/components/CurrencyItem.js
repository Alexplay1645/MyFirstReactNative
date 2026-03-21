import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CurrencyItem({ item }) {
  return (
    <View style={styles.item}>
      <Text>{item.code}</Text>
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
});