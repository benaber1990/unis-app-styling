import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import COLORS from "../misc/COLORS";
import { Ionicons } from "@expo/vector-icons";
import HomeListItem from "../components/HomeListItem";

const ListComp = ({ title, iconName, onPress }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.grey,
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 18,
        borderRadius: 24,
        margin: 15,

        // marginTop: -20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 16,
            marginTop: 12,
          }}
        >
          {title}
        </Text>
        <Ionicons
          name="lock-closed"
          size={18}
          color="lightgrey"
          style={{ marginLeft: 10, alignSelf: "flex-end" }}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.black,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: COLORS.mainGreen,
          marginTop: 12,
          marginBottom: 12,
          paddingVertical: 6,
          paddingHorizontal: 12,
          alignSelf: "flex-end",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            color: "white",
            fontSize: 12,
          }}
        >
          Coming Soon
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function HumanResources({ navigation }) {
  return (
    <View style={styles.screenStyle}>
      <View style={{ alignSelf: "flex-start", marginLeft: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "600",
            color: "lightgrey",
            marginBottom: 20,
          }}
        >
          Your{" "}
          <Text style={{ color: COLORS.mainGreen, fontWeight: "800" }}>
            UNIS HR
          </Text>{" "}
          Tools
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <ListComp title="Timesheets" />
        <ListComp title="Annual Leave" />
      </View>
      <View style={{ flexDirection: "row" }}>
        {/* <ListComp title="Annual Leave" />
        <ListComp title="Annual Leave" /> */}
        {/* <ListComp title="Holiday Requests" /> */}
      </View>
      <ImageBackground
        source={require("../assets/bck-img.png")}
        style={{ height: "100%", alignItems: "center" }}
      >
        {/* Foooter */}
        <View style={{ height: 90 }} />
        <View
          style={{
            backgroundColor: COLORS.black,
            // paddingBottom: 60,
            marginHorizontal: 20,
            // marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.lightGreen,
              paddingVertical: 30,
              paddingHorizontal: 20,
              //   marginTop: 20,

              borderRadius: 12,
              // marginBottom: 20,
            }}
          >
            <Text
              style={{ fontWeight: "600", fontSize: 18, color: COLORS.black }}
            >
              Unlock More UNIS
            </Text>
            <Text style={{ marginVertical: 10 }}>
              Professional UNIS packages designed to take your construction
              business further
            </Text>

            <Pressable
              onPress={() => navigation.navigate("Profile")}
              style={{
                backgroundColor: COLORS.mainGreen,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 4,
                elevation: 1,
                alignSelf: "flex-start",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 16,
                  // color: "white",
                }}
              >
                Find out more...
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ marginTop: 100 }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
            Powered by{" "}
            <Text style={{ color: COLORS.mainGreen, fontWeight: "800" }}>
              UNIS
            </Text>
            . All rights reserved. 2023
          </Text>
        </View>
        <View>
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    // paddingTop: 60,
    alignItems: "center",
  },
});
