import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";

export default function Button({ title, onPress }) {

  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(title)}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );

}