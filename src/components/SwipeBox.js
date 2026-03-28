import React, { useRef, useState } from "react";
import { Animated, PanResponder, Text } from "react-native";

export default function SwipeBox() {
  const position = useRef(new Animated.Value(0)).current;
  const [swiped, setSwiped] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 20;
      },

      onPanResponderMove: (_, gestureState) => {
        position.setValue(gestureState.dx);
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -100) {
          Animated.timing(position, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setSwiped(true);
          });
        } else {
          Animated.spring(position, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        width: 200,
        height: 100,
        backgroundColor: swiped ? "green" : "blue",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateX: position }],
      }}
    >
      <Text style={{ color: "white" }}>
        {swiped ? "Swiped!" : "Swipe left"}
      </Text>
    </Animated.View>
  );
}