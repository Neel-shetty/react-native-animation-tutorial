import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated } from "react-native";
import Ball from "./src/Ball";

export default function App() {
  // console.log(Animated.ValueXY())
  return (
    <View style={styles.container}>
      <Ball />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
