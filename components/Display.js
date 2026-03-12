import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

export default function Display({ value }) {
  return (
    <View>
      <Text style={styles.display}>
        {value || "0"}
      </Text>
    </View>
  );
}