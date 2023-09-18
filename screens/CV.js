import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  ImageBackground,
  Share,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import COLORS from "../misc/COLORS";
import Profile from "./Profile";
import EX_CV_INFO from "../misc/EX_CV_INFO";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import firebase from "firebase/compat";
import { useIsFocused } from "@react-navigation/native";
// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";

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

const profPic =
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function ListLabelItem({ label, data }) {
  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ fontWeight: "700", fontSize: 16, color: COLORS.black }}>
        {label}
      </Text>
      <Text style={{ fontSize: 16, color: COLORS.black }}>{data}</Text>
    </View>
  );
}

function UnisVerifiedBadge() {
  return (
    <View
      style={{
        backgroundColor: COLORS.yellow,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Entypo
        name="globe"
        size={24}
        color="lightgrey"
        style={{ marginRight: 10 }}
      />
      <Text style={{ fontWeight: "500", color: "lightgrey" }}>
        Verified by Unis
      </Text>
    </View>
  );
}

const onShare = async () => {
  try {
    const result = await Share.share({
      message: "Hello. My Unis code is: 392039203",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (err) {
    Alert.alert(err);
  }
};

function CV({ navigation }) {
  const [data, setData] = useState("");
  const [firstName, setFirstName] = useState("");

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
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={styles.screenStyle}>
        <StatusBar style="dark" />
        <Image
          source={{ uri: profPic }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            marginBottom: 10,
            borderWidth: 2,
            borderColor: COLORS.mainGreen,
          }}
        />
        <Text style={{ fontSize: 24, fontWeight: "500", color: "white" }}>
          {data.firstName} {data.location}
        </Text>
        <Text style={{ color: "lightgrey" }}>{data.jobTitle}</Text>

        {data.isVerified && <UnisVerifiedBadge />}

        {/* CV container */}
        <View style={styles.cvContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 24,
                  fontWeight: "500",
                  color: COLORS.black,
                }}
              >
                Your CV
              </Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("UpdateCV")}
              style={{ alignSelf: "flex-end", padding: 5 }}
            >
              <Foundation name="pencil" size={22} color={COLORS.black} />
            </Pressable>
          </View>
          <ListLabelItem label="Location" data={EX_CV_INFO.location} />
          <ListLabelItem label="Postcode" data={EX_CV_INFO.postcode} />
          <ListLabelItem label="Age" data={EX_CV_INFO.age} />
          <ListLabelItem label="Gender" data="Gender Here" />
          <ListLabelItem label="About Me" data={EX_CV_INFO.aboutMe} />
          <ListLabelItem label="Skills" data={EX_CV_INFO.mainSkills} />
        </View>
        <Pressable
          onPress={onShare}
          style={{
            backgroundColor: COLORS.mainGreen,
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 4,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="share" size={24} color={COLORS.black} />
          <Text
            style={{ fontWeight: "500", marginLeft: 10, color: COLORS.black }}
          >
            Share My CV
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
  cvContainer: {
    backgroundColor: COLORS.mainGreen,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 20,

    // borderColor: COLORS.yellow,
    marginHorizontal: 20,
  },
});

export default CV;
