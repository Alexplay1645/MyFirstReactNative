import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LiquidTouch from "./components/LiquidTouch";
import InfiniteAnimation from "./components/InfiniteAnimation";
import TouchableCircle from "./components/TouchableCircle";
import SwipeBox from "./components/SwipeBox";

export default function App() {
  return <HomeScreen />;
}

export default function App() {
  return <LiquidTouch />;
}

export default function App() {
  return <InfiniteAnimation />;
}

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableCircle />
    </View>
  );
}

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SwipeBox />
    </View>
  );
}