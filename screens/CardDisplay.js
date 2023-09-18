import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../misc/COLORS";

export default function CardDisplay() {
  return (
    <View style={styles.screenStyle}>
      {/* Card */}
      <View style={styles.cardStyle}>
        <Text>This is Your Card</Text>
      </View>

      {/* Card Info */}
      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Card Title Here
        </Text>
        <Text style={{ textAlign: "center" }}>Card information here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: 300,
    height: 180,
    borderRadius: 12,
    backgroundColor: COLORS.yellow,
    padding: 20,
  },
});
