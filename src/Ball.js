import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

const Ball = () => {
  const [position, setPosition] = useState(new Animated.ValueXY(0, 0));

  useEffect(() => {
    Animated.timing(position, {
      toValue: { x: 200, y: 200 },
      duration: 1000,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ translateX: position.x }, { translateY: position.y }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
  },
});

export default Ball;
