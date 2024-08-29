import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Homepage!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default HomePage;