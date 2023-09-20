import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import EX_CARDS from "../misc/EX_CARDS";
import COLORS from "../misc/COLORS";
import Title from "../components/Title";
import EX_QUALS from "../misc/EX_QUALS";
import { Ionicons } from "@expo/vector-icons";
import EX_PROFILE_DATA from "../misc/EX_PROFILE_DATA";
import EX_WORK_DATA from "../misc/EX_WORK_DATA";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "firebase/compat";
// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

//FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyA1ci4h0SPB2-CnHYXiQSQWQmiVZ7sOSS8",
  authDomain: "unis-test-f6925.firebaseapp.com",
  databaseURL:
    "https://unis-test-f6925-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "unis-test-f6925",
  storageBucket: "unis-test-f6925.appspot.com",
  messagingSenderId: "677730612042",
  appId: "1:677730612042:web:37028b16ccb1826808c7b3",
};

//FIREBASE APP

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ProfileTile = ({ title, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      margin: 10,
      padding: 20,
      width: 160,
      // height: 100,
      borderRadius: 8,
      justifyContent: "center",

      backgroundColor: COLORS.grey,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
        {title}
      </Text>
      <Entypo name="v-card" size={24} color={COLORS.mainGreen} />
    </View>

    <View
      style={{
        alignSelf: "flex-end",
        backgroundColor: COLORS.black,
        paddingTop: 4,
        paddingBottom: 5,
        paddingHorizontal: 12,
        marginTop: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.mainGreen,
      }}
    >
      <Text style={{ fontSize: 12, color: "white" }}>View All</Text>
    </View>
  </Pressable>
);

function Profile({ navigation }) {
  const [data, setData] = useState("");
  const isFocused = useIsFocused();
  const fetchData = async () => {
    try {
      const { uid } = firebase.auth().currentUser;
      if (!uid) return;
      const collectionRef = firebase.firestore().collection("users").doc(uid);
      const snapshot = await collectionRef.get();
      console.log("snapshotdata", snapshot?.data());
      // const fetchedData = snapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      // }));
      console.log("fetchedData", snapshot?.data());
      setData(snapshot?.data());
      // console.log("Hello");
      // console.log(data);
      // console.log(data[0].firstName);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  // Cards FlatList
  const Item1 = ({ title, cat, description }) => (
    <Pressable
      onPress={() => navigation.navigate("AllCards")}
      style={styles.item1Style}
    >
      <Image
        source={{ uri: EX_PROFILE_DATA.profPic }}
        style={{
          height: 130,
          width: 190,
          borderRadius: 14,
          borderWidth: 2,
          borderColor: COLORS.yellow,
        }}
      />
      <Text
        style={{
          color: "white",
          marginTop: 8,
          marginLeft: 5,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );

  const renderItem1 = ({ item }) => (
    <Item1 title={item.title} cat={item.cat} description={item.description} />
  );

  // Documents FlatList
  const Item2 = ({ title, cat, description }) => (
    <Pressable
      onPress={() => navigation.navigate("AllDocuments")}
      style={styles.item2Style}
    >
      <MaterialCommunityIcons
        name="file-certificate-outline"
        size={24}
        color="black"
        style={{ marginBottom: 10 }}
      />
      <Text>{title}</Text>
    </Pressable>
  );

  const renderItem2 = ({ item }) => (
    <Item2 title={item.title} cat={item.cat} description={item.description} />
  );

  // Work Flatlist
  const Item3 = ({ title, cat, description, imageLink }) => (
    <Pressable
      onPress={() => navigation.navigate("AllMyWork")}
      style={styles.item3Style}
    >
      <Image
        source={{ uri: imageLink }}
        style={{ height: 150, width: 150, borderRadius: 6 }}
      />
    </Pressable>
  );

  const renderItem3 = ({ item }) => <Item3 imageLink={item.imageLink} />;

  return (
    <View style={styles.screenStyle}>
      <ScrollView>
        <StatusBar style="dark" />
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: EX_PROFILE_DATA.profPic }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: COLORS.mainGreen,
            }}
          />
          <View style={{ justifyContent: "center", marginLeft: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: "white",
              }}
            >
              {data.firstName} {data.surname}
            </Text>
            <Text style={{ color: "lightgrey" }}>{data.jobTitle}</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Notifications")}
            style={{ marginLeft: 40, padding: 5, justifyContent: "center" }}
          >
            <Ionicons
              name="ios-notifications-sharp"
              size={24}
              color={COLORS.mainGreen}
            />
          </Pressable>
        </View>

        {/* Bio */}
        <View style={styles.bioContainer}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              marginBottom: 5,
              color: "white",
            }}
          >
            Bio
          </Text>
          <Text style={{ color: "white" }}>
            Dedicated construction worker with a passion for building and a
            strong commitment to safety and teamwork. With a proven track record
            of efficiently completing projects and a keen attention to detail, I
            strive to contribute my skills to create structures that stand the
            test of time
          </Text>
        </View>

        {/* Tiles */}
        <View style={{ alignSelf: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <ProfileTile
              title="Cards"
              onPress={() => navigation.navigate("AllCards")}
            />
            <ProfileTile
              title="Certs"
              onPress={() => navigation.navigate("AllDocuments")}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <ProfileTile
              title="Gallery"
              onPress={() => navigation.navigate("AllMyWork")}
            />
            <ProfileTile
              title="Hub"
              onPress={() => navigation.navigate("Hub")}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: COLORS.lightGreen,
            paddingVertical: 20,
            paddingHorizontal: 20,
            marginTop: 20,
            borderRadius: 12,
            marginHorizontal: 20,
            borderWidth: 2,
            borderColor: COLORS.mainGreen,
            // marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "900",
              fontSize: 17,
              // color: COLORS.lightGreen,
            }}
          >
            Your
            <Text style={{ color: COLORS.mainGreen, fontWeight: "900" }}>
              {" "}
              UNIS
            </Text>{" "}
            Profile
          </Text>
          <Text style={{}}>
            Update your personal profile so that managers and employers can see
            your latest information
          </Text>

          <Pressable
            onPress={() => navigation.navigate("UpdateProfile")}
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
                fontWeight: "600",
                // color: "white",
              }}
            >
              Update Your Profile
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: "row",
    marginHorizontal: 40,
    justifyContent: "center",
  },
  bioContainer: {
    backgroundColor: COLORS.grey,
    alignSelf: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  item1Style: {
    marginRight: 30,
    borderWidth: 2,

    // marginTop: -10,
  },
  item2Style: {
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 6,
    marginRight: 30,
    marginTop: 10,
    borderWidth: 2,
    borderColor: COLORS.yellow,
  },
  item3Style: {
    marginRight: 30,
    marginTop: 10,
    borderWidth: 2,
    borderColor: COLORS.yellow,
    borderRadius: 8,
  },
});

export default Profile;
