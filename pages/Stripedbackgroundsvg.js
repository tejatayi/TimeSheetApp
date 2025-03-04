import React from "react";
import { Svg, Rect } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default function StripedBackground({ stripeWidth = 50 }) {
  return (
    <View style={styles.background}>
      <Svg height="100%" width="100%">
        {/* Repeat stripes across the screen */}
        {Array.from({length: Math.ceil(1000 / stripeWidth)}).map((_, i) => (
          <Rect
            key={i}
            x={i * stripeWidth * 2} // Moves each red stripe horizontally
            y="0"
            width={stripeWidth} // Width of each red stripe
            height="100%"
            fill="red" // Color of stripe
          />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
