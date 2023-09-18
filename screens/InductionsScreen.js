import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import COLORS from "../misc/COLORS";

export default function InductionsScreen({ navigation }) {
  return (
    <View style={styles.screenStyle}>
      <Text>Inductions Screen</Text>
      <Button
        onPress={() => navigation.navigate("InductionsDisplay")}
        style={{}}
        title="Inductions"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
