import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import COLORS from "../misc/COLORS";
import { useNavigation } from "@react-navigation/native";

import firebase from "firebase/compat";

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

function Settings({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [user, setUser] = useState(null);

  const navigationHndl = useNavigation();

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User Signed Out!");
        navigationHndl.navigate("LogInScreen");
      })
      .catch((error) => {
        // Handle registration errors
        console.error("Registration error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((authenticatedUser) => {
        setUser(authenticatedUser);
      });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.screenStyle}>
      <Text>QR Screen</Text>

      {/* Log Out */}
      <Pressable
        onPress={handleLogOut}
        style={{
          backgroundColor: "#fafafa",
          alignSelf: "center",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 6,
        }}
      >
        <Text>Log Out</Text>
      </Pressable>

      {/* Password Reset */}
      <Pressable
        onPress={() => navigation.navigate("PasswordReset")}
        style={{
          backgroundColor: "#fafafa",
          alignSelf: "center",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 6,
        }}
      >
        <Text>Reset My Password</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
  },
});

export default Settings;
