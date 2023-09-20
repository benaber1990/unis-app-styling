import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import COLORS from "../misc/COLORS";
import EX_USER_DATA from "../misc/EX_USER_DATA";
import { useIsFocused } from "@react-navigation/native";
import firebase from "firebase/compat";

// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";
import { StatusBar } from "expo-status-bar";
import { fetchAllImages } from "./helpers/helpers";
import FooterTextComp from "../components/FooterTextComp";

const {
  ID,
  firstName,
  surname,
  username,
  location,
  jobTitle,
  bio,
  skills,
  certificates,
  lastPlaceOfEmployment,
  phoneNumber,
  email,
  companyName,
  QR,
  isManager,
  isAdmin,
  profilePicture,
  age,
  dateOfBirth,
  postcode,
  gender,
} = EX_USER_DATA;

function UpdateProfile({ navigation }) {
  const isFocused = useIsFocused();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dob, setDob] = useState();
  const [userLocation, setUserLocation] = useState();
  const [postCode, setPostCode] = useState();
  const [phoneNumber, setPhone] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useState();
  const [imagesData, setImagesData] = useState([]);
  const fetchData = async () => {
    try {
      const { uid } = firebase.auth().currentUser;
      if (!uid) return;
      const collectionRef = firebase.firestore().collection("users").doc(uid);
      const snapshot = await collectionRef.get();
      setData(snapshot?.data());
      setDob(snapshot?.data()?.DOB);
      setPhone(snapshot?.data()?.phoneNumber);
      setPostCode(snapshot?.data()?.postcode);
      setUserLocation(snapshot?.data()?.location);
      setEmail(firebase.auth().currentUser?.email);

      // const snapshotImg = await collectionRefImage.get();
      // console.log("snapshotImg", snapshotImg);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.img} source={{ uri: item?.imageUrl }} />
    </View>
  );
  useEffect(() => {
    setImagesData(fetchAllImages());
    fetchData();
  }, [isFocused]);
  return (
    <View style={styles.screenStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
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

        <View style={{ alignItems: "center" }}>
          {/* First Name */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>

            <TextInput
              value={firstName}
              style={styles.textInputStyle}
              placeholder="First Name..."
              placeholderTextColor={COLORS.lightGreen}
            />
          </View>

          {/* Last Name */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>
            <TextInput
              value={lastName}
              style={styles.textInputStyle}
              placeholder="Last Name..."
              placeholderTextColor={COLORS.lightGreen}
            />
          </View>

          {/* Date of Birth */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>
            <TextInput
              value={dob}
              style={styles.textInputStyle}
              placeholder="Date of Birth..."
              placeholderTextColor={COLORS.lightGreen}
            />
          </View>

          {/* Location */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>
            <TextInput value={userLocation} style={styles.textInputStyle} />
          </View>

          {/* Postcode */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>
            <TextInput value={postCode} style={styles.textInputStyle} />
          </View>

          {/* Phone Number */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>
            <TextInput value={phoneNumber} style={styles.textInputStyle} />
          </View>

          {/* Email */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>
            <TextInput value={email} style={styles.textInputStyle} />
          </View>

          {/* Gender */}
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 20,
                backgroundColor: COLORS.mainGreen,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                marginRight: -2,
                marginTop: -2,
                marginBottom: -2,
              }}
            ></View>
            <TextInput
              value={gender}
              style={styles.textInputStyle}
              placeholder="Gender"
              placeholderTextColor={COLORS.lightGreen}
            />
          </View>
        </View>

        {/* <View style={{}}>
          <FlatList
            data={imagesData}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        </View> */}
        {/* Submit & Save */}
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={{
              backgroundColor: COLORS.yellow,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 4,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Submit & Save
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            backgroundColor: COLORS.lightGreen,
            paddingVertical: 20,
            paddingHorizontal: 20,
            marginTop: 20,
            borderRadius: 12,
            // marginBottom: 20,
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: 16, color: COLORS.black }}
          >
            Build Your Unis Profile
          </Text>
          <Text>
            Your Unis profile gives site managers instant access to your info
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Profile")}
            style={{
              backgroundColor: COLORS.mainGreen,
              paddingVertical: 5,
              paddingHorizontal: 8,
              borderRadius: 4,
              elevation: 1,
              alignSelf: "flex-start",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                color: "white",
              }}
            >
              Update now
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: COLORS.black,
    flex: 1,
    alignItems: "center",
  },
  img: { width: 50, height: 50 },
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textInputStyle: {
    height: 50,
    width: 240,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 15,
    // marginBottom: 20,
    backgroundColor: COLORS.grey,
    fontSize: 16,
    color: "white",
  },
  labelTextStyle: {
    marginBottom: 5,
    fontWeight: "500",
    fontSize: 16,
    color: "lightgrey",
  },
});

export default UpdateProfile;
