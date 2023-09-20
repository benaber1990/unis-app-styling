import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../misc/COLORS";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import FooterTextComp from "../components/FooterTextComp";

const ItemBox = ({ title, number }) => (
  <View style={styles.boxContainer}>
    <View
      style={{
        flexDirection: "row",
        // marginVertical: 20,
      }}
    >
      <View
        style={{
          width: 20,
          backgroundColor: COLORS.mainGreen,

          marginRight: 30,
          //   paddingHorizontal: 40,
        }}
      ></View>
      <View>
        <Text
          style={{
            color: COLORS.lightGreen,
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 8,
          }}
        >
          {title}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            name="phone"
            size={24}
            color={COLORS.mainGreen}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
            {number}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default function ContactPage() {
  return (
    <View style={styles.screenStyle}>
      {/* Header */}
      <Text style={styles.header}>
        Contact <Text style={{ color: COLORS.mainGreen }}>UNIS</Text>
      </Text>

      {/* Body */}
      <ItemBox title="General Enquiries" number="03455 841 911" />
      <ItemBox title="Sales" number="03455 841 911" />
      <ItemBox title="Help & Support" number="03455 841 911" />
      <ItemBox title="Advertising" number="03455 841 911" />

      {/* Email */}
      <View
        style={{ marginTop: 30, flexDirection: "row", alignItems: "center" }}
      >
        <MaterialIcons
          name="email"
          size={28}
          color={COLORS.mainGreen}
          style={{ marginRight: 10 }}
        />
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          enquiries@uniscompliance.com
        </Text>
      </View>

      <View style={{ height: 60 }} />
      <FooterTextComp />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: COLORS.black,
    flex: 1,
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 30,
  },
  boxContainer: {
    backgroundColor: COLORS.grey,
    paddingRight: 30,
    borderRadius: 6,
    marginBottom: 30,
  },
});
