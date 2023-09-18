import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import COLORS from "../misc/COLORS";

const tempImgLink =
  "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const LabelComp = ({ title }) => (
  <View>
    <Text style={{ color: "lightgrey", marginRight: 5 }}>{title}</Text>
  </View>
);

const InfoComp = ({ title }) => (
  <View>
    <Text style={{ color: "white", fontWeight: "600" }}>{title}</Text>
  </View>
);

function DisplayPage() {
  return (
    <View style={styles.screenStyle}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: tempImgLink }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 35,
            borderWidth: 2,
            borderColor: "white",
          }}
        />
        <Text
          style={{
            marginTop: 15,
            color: "white",
            fontSize: 24,
            fontWeight: "600",
          }}
        >
          Username Here
        </Text>
      </View>

      {/* Body Container*/}
      <View style={styles.body}>
        {/* Bio */}
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "lightgrey" }}>Bio</Text>
          <Text style={{ fontWeight: "600", color: "white" }}>
            Insert bio text here
          </Text>
        </View>

        {/* Information */}
        <View style={{ flexDirection: "row" }}>
          <LabelComp title="Location:" />
          <InfoComp title="Location Here" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelComp title="Age:" />
          <InfoComp title="Age Here" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelComp title="Gender:" />
          <InfoComp title="Age Here" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelComp title="Current Role:" />
          <InfoComp title="Age Here" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelComp title="Current Company:" />
          <InfoComp title="Age Here" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <LabelComp title="Years Exp:" />
          <InfoComp title="Age Here" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    paddingTop: 60,
    alignItems: "center",
    height: 300,
    width: "100%",
  },
  body: {
    backgroundColor: COLORS.grey,
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 20,
  },
});

export default DisplayPage;
