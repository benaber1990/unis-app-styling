import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../misc/COLORS";

function HomeListItem({ title, iconName, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.itemStyle}>
      <View
        style={{
          // backgroundColor: COLORS.grey,
          padding: 10,
          alignItems: "center",
          borderRadius: 6,
          // marginBottom: 10,
        }}
      >
        <Ionicons
          name={iconName}
          size={28}
          color={COLORS.mainGreen}
          style={{}}
        />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    // flexDirection: "row",
    // alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#d1f1e5",
    // paddingVertical: 20,
    // paddingHorizontal: 20,

    // height: 125,
    margin: 8,
    borderRadius: 8,
    width: 70,
    // elevation: 2,
  },
  textStyle: {
    // color: "white",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default HomeListItem;
