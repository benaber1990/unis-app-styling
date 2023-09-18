import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import COLORS from "../misc/COLORS";
import EX_USER_DATA from "../misc/EX_USER_DATA";
import QRCode from "react-native-qrcode-svg";
import firebase from "firebase/compat";
import { useUser } from "../components/IDContext";

// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";

import { useIsFocused } from "@react-navigation/native";

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

function QRScreen({ navigation }) {
  const [data, setData] = useState("");

  const { usernameID } = useUser();

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
    <View style={styles.screenStyle}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "500",
          color: "white",
          marginBottom: 40,
        }}
      ></Text>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 16,
          fontWeight: "500",
          color: "white",
        }}
      >
        You can display this QR to employers to share your profile
      </Text>

      <View style={{ marginTop: 40 }} />

      <Text style={{ color: "white", fontWeight: "500", marginBottom: 10 }}>
        Your Unique Unis QR
      </Text>

      <View style={styles.cardStyle}>
        <QRCode value={usernameID} size={250} />
      </View>

      <Text style={{ color: "white", marginTop: 30 }}>
        Some extra text can go here
      </Text>

      {/* Scan QR */}
      {!data.isManager && (
        <View>
          <Pressable
            onPress={() => navigation.navigate("ScanQR")}
            style={{
              padding: 20,
              marginTop: 20,
              backgroundColor: COLORS.mainGreen,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: "white" }}>
              Scan QR code
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("ScanQR")}
            style={{
              padding: 20,
              marginTop: 20,
              backgroundColor: COLORS.mainGreen,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: "white" }}>
              Share My Profile
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: COLORS.black,
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  cardStyle: {
    backgroundColor: COLORS.mainGreen,
    alignSelf: "center",
    paddingBottom: 30,
    paddingHorizontal: 30,
    borderRadius: 8,
    paddingTop: 30,
  },
});

export default QRScreen;
