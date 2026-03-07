import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  text: string;
  enabled: boolean;
};

const MemoryButton: React.FC<Props> = ({ text, enabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, !enabled && styles.disabled]}
      disabled={!enabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    margin: 5,
    borderRadius: 8,
    width: 60,
    alignItems: "center",
  },

  disabled: {
    backgroundColor: "#ccc",
  },

  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MemoryButton;