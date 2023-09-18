import React, {
  useState,
  useContext,
  useMemo,
  createContext,
  useEffect,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import APPWIDE from "../components/AppWide";

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

const MyContext = createContext();

function InitLogIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigationHndl = useNavigation();

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, user is signed in
        const user = userCredential.user;
        console.log("Login successful:", user.uid);
        console.log("this is email!", email);
        navigationHndl.navigate("Home", { userEmail: email });
      })
      .catch((error) => {
        // Handle login errors
        console.error("Login error:", error);
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

      {/* Email */}
      <View>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {/* Password */}
      <View>
        <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      {/* Submit Button */}
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Submit</Text>
      </Pressable>

      {/* Create Account Link */}
      <Pressable
        onPress={() => navigation.navigate("CreateAccount")}
        style={{ marginTop: 40, alignSelf: "center" }}
      >
        <Text style={{ color: "lightgrey", textAlign: "center" }}>
          New to UNIS?
        </Text>
        <Text style={{ color: "lightgrey", textAlign: "center" }}>
          Click here to create your account
        </Text>
      </Pressable>
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
    height: 50,
    width: 260,
    borderWidth: 1,
    paddingLeft: 15,
    backgroundColor: "lightgrey",
    borderRadius: 4,
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 30,
  },
});

export default InitLogIn;
