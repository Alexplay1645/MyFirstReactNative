import React, { useState } from "react";
import { View } from "react-native";

import Display from "./Display";
import Button from "./Button";

import { formatNumber, countDigits, MAX_DIGITS } from "../utils/numberFormat";

import styles from "../styles/styles";

export default function Calculator() {

  const [display, setDisplay] = useState("");

  const handleInput = (value) => {

    let raw = display.replace(/\s/g, "");

    if (value === "C") {
      setDisplay("");
      return;
    }

    if (value === "⌫") {
      raw = raw.slice(0, -1);
      setDisplay(formatNumber(raw));
      return;
    }

    if (value === ".") {
      if (raw.includes(".")) return;
    }

    if (value === "-") {
      if (raw.startsWith("-")) {
        raw = raw.slice(1);
      } else {
        raw = "-" + raw;
      }
      setDisplay(formatNumber(raw));
      return;
    }

    if (!isNaN(value)) {

      if (countDigits(raw + value) > MAX_DIGITS) {
        return;
      }

      raw = raw + value;
      setDisplay(formatNumber(raw));
      return;
    }
  };

  const buttons = [
    "7","8","9",
    "4","5","6",
    "1","2","3",
    "0",".","-",
    "⌫","C"
  ];

  return (
    <View style={styles.container}>

      <Display value={display} />

      <View style={styles.buttons}>

        {buttons.map((btn) => (
          <Button
            key={btn}
            title={btn}
            onPress={handleInput}
          />
        ))}

      </View>

    </View>
  );
}