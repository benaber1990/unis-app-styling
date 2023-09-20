import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import COLORS from "../misc/COLORS";

export default function SearchUser({ navigation }) {
  [inputText, setInputText] = useState("");

  return (
    <View style={styles.screenStyle}>
      <View style={{ marginBottom: 40 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
          Search for User
        </Text>
      </View>

      {/* Search Bar */}
      <View style={{ marginBottom: 40 }}>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={"white"}
          placeholder="Enter user ID"
          value={inputText}
          onChangeText={(t) => setInputText(t)}
        />
      </View>

      {/* Submit Button*/}
      <Pressable
        onPress={() =>
          navigation.navigate("DisplayPage", {
            userId: "ABCDE",
          })
        }
        style={styles.buttonStyle}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Submit & Search
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
  },
  inputStyle: {
    backgroundColor: COLORS.grey,
    height: 60,
    width: 220,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.mainGreen,
    color: "white",
    fontSize: 18,
    paddingLeft: 20,
  },
  buttonStyle: {
    backgroundColor: COLORS.mainGreen,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
});
