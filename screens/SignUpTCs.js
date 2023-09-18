import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SignUpTCs() {
  return (
    <View style={styles.screenStyle}>
      <Text>Sign Up T&C's</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    paddingTop: 60,
    alignItems: "center",
  },
});
