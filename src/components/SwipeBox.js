import React, { useRef, useState } from "react";
import { Animated, PanResponder, Text } from "react-native";

export default function SwipeBox() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [direction, setDirection] = useState("Swipe me");

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > 10 ||
          Math.abs(gestureState.dy) > 10
        );
      },

      onPanResponderMove: (_, gestureState) => {
        position.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },

      onPanResponderRelease: (_, gestureState) => {
        let moveX = 0;
        let moveY = 0;
        let text = "";

        // определяем направление
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          if (gestureState.dx > 100) {
            moveX = 150;
            text = "Right";
          } else if (gestureState.dx < -100) {
            moveX = -150;
            text = "Left";
          }
        } else {
          if (gestureState.dy > 100) {
            moveY = 150;
            text = "Down";
          } else if (gestureState.dy < -100) {
            moveY = -150;
            text = "Up";
          }
        }

        setDirection(text || "No swipe");

        Animated.spring(position, {
          toValue: { x: moveX, y: moveY },
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        width: 150,
        height: 150,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        transform: [
          { translateX: position.x },
          { translateY: position.y },
        ],
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>
        {direction}
      </Text>
    </Animated.View>
  );
}