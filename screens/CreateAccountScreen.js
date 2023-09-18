import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import COLORS from "../misc/COLORS";
import firebase from "firebase/compat";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

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

function CreateAccountScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [initEmail, setInitEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigationHndl = useNavigation();

  const email = initEmail.toLowerCase();

  const handleRegistration = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful, user is signed in
        const user = userCredential.user;
        console.log("Registration successful:", user);
        navigationHndl.navigate("CreateProfile");
      })
      .catch((error) => {
        // Handle registration errors
        console.error("Registration error:", error);
      });
  };

  return (
    <View style={styles.screenStyle}>
      {/* Logo */}
      <View style={{ marginBottom: 40 }}>
        <Image
          source={require("../assets/unis-logo.png")}
          style={{ height: 100, resizeMode: "contain" }}
        />
      </View>

      <View>
        <Text
          style={{
            color: "white",
            marginBottom: 30,
            fontWeight: "500",
            fontSize: 16,
            color: "lightgrey",
          }}
        >
          Create Your Account
        </Text>
      </View>

      {/* Email */}
      <View>
        <Text style={styles.label}>Your Email Address</Text>
        <TextInput
          style={styles.input}
          value={initEmail}
          onChangeText={(text) => setInitEmail(text)}
          placeholder="Enter Your Email Address"
          placeholderTextColor={"grey"}
        />
      </View>

      {/* Password */}
      <View>
        <Text style={[styles.label, { marginTop: 20 }]}>Create a Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          placeholder="Enter New Password"
          placeholderTextColor={"grey"}
        />
      </View>

      <View
        style={{
          marginTop: 15,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          style={{ marginRight: 6 }}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? COLORS.mainGreen : undefined}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: "lightgrey" }}>
            By signing up to use Unis, I accept the Unis T&C's as{"\n"}
            <Pressable onPress={() => navigation.navigate("SignUpTCs")}>
              <Text
                style={{ color: "lightgrey", textDecorationLine: "underline" }}
              >
                outlined here
              </Text>
            </Pressable>
          </Text>
        </View>
      </View>

      {/* Submit Button */}
      {!isChecked && (
        <Pressable
          onPress={handleRegistration}
          style={[
            styles.button,
            {
              backgroundColor: COLORS.lightGreen,
            },
          ]}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Submit</Text>
        </Pressable>
      )}
      {isChecked && (
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: COLORS.mainGreen,
            },
          ]}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Submit</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: COLORS.black,
  },
  label: {
    marginBottom: 5,
    color: "lightgrey",
    textAlign: "left",
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 5,
  },
  input: {
    height: 60,
    width: 260,
    paddingLeft: 15,
    backgroundColor: COLORS.grey,
    borderRadius: 4,
    color: "white",

    fontSize: 18,
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 30,
  },
});

export default CreateAccountScreen;
