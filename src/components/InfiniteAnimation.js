import React, { useRef, useState } from "react";
import { View, Animated, TouchableOpacity, StyleSheet } from "react-native";

export default function InfiniteAnimation() {
  const scale = useRef(new Animated.Value(1)).current;
  const [isRunning, setIsRunning] = useState(false);
  const animationRef = useRef(null);

  const startAnimation = () => {
    animationRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    animationRef.current.start();
    setIsRunning(true);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }
    setIsRunning(false);
  };

  const handlePress = () => {
    if (isRunning) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ scale }],
          },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    alignSelf: "center",
    marginTop: 100,
    borderRadius: 10,
  },
});