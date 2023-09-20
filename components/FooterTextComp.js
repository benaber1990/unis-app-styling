import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../misc/COLORS";

export default function FooterTextComp() {
  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
        Powered by{" "}
        <Text style={{ color: COLORS.mainGreen, fontWeight: "800" }}>UNIS</Text>
        . All rights reserved. 2023
      </Text>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginTop: 15,
            fontWeight: "600",
          }}
        >
          Fast<Text style={{ color: COLORS.mainGreen }}>.</Text> Simple
          <Text style={{ color: COLORS.mainGreen }}>.</Text> Secure
          <Text style={{ color: COLORS.mainGreen }}>.</Text>
        </Text>
      </View>
    </View>
  );
}
