import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import COLORS from "../misc/COLORS";
import Checkbox from "expo-checkbox";

export default function InductionsDisplay() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.screenStyle}>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        Your Induction
      </Text>

      {/* Enter Name */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontWeight: "600",
            color: "lightgrey",
            marginBottom: 4,
            fontSize: 16,
          }}
        >
          Enter Your Full Name{" "}
        </Text>
        <TextInput style={styles.inputStyle} />
      </View>

      {/* Checkbox */}
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          style={{ marginRight: 10 }}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? COLORS.mainGreen : undefined}
        />
        <Text
          style={{
            color: "lightgrey",
          }}
        >
          I confirm that I have completed this induction
        </Text>
      </View>

      {/* Submit */}
      <View
        style={{
          backgroundColor: COLORS.mainGreen,
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 4,
          marginTop: 15
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "600" }}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
    paddingTop: 60,
  },
  inputStyle: {
    height: 50,
    width: 250,
    backgroundColor: "lightgrey",
    borderRadius: 4,
  },
});
