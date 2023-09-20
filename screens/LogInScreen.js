import React, { useState, createContext, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat";
import COLORS from "../misc/COLORS";
import { useUser } from "../components/IDContext";

// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";
import AppContext from "../components/AppContext";
import FooterTextComp from "../components/FooterTextComp";

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

createContext();

function LogInScreen({ navigation }) {
  const [initEmail, setInitEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigationHndl = useNavigation();

  const { setUID } = useUser();

  const email = initEmail.toLocaleLowerCase();

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, user is signed in
        const user = userCredential.user;
        console.log("Login successful:", user);
        setUID(user.uid);
        navigationHndl.navigate("HomeScreen", { userLogIn: "12345" });
      })
      .catch((error) => {
        // Handle login errors
        console.error("Login error:", error);
      });
  };

  return (
    <View style={styles.screenStyle}>
      {/* Logo */}
      <View style={{ marginBottom: 0, marginTop: -40 }}>
        <Image
          source={require("../assets/fast-simple.png")}
          style={{ height: 240, resizeMode: "contain" }}
        />
      </View>

      <View>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            color: "lightgrey",
            marginBottom: 12,
            fontSize: 16,
          }}
        >
          Log in to your UNIS Account
        </Text>
      </View>

      {/* Email */}
      <View>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          value={initEmail}
          onChangeText={(text) => setInitEmail(text)}
          placeholder="Username"
          placeholderTextColor={"lightgrey"}
        />
      </View>
      {/* Password */}
      <View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor={"lightgrey"}
        />
      </View>

      {
        <View style={{}}>
          <Pressable
            onPress={handleLogin}
            style={[
              styles.button,
              {
                backgroundColor: COLORS.mainGreen,
                alignSelf: "center",
                marginTop: 20,
              },
            ]}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Submit</Text>
          </Pressable>

          <Pressable
            style={[
              styles.button,
              { backgroundColor: "white", alignSelf: "center" },
            ]}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Sign in with Google
            </Text>
          </Pressable>
        </View>
      }
      <Pressable onPress={() => navigation.navigate("PasswordReset")}>
        <Text style={{ color: "lightgrey", marginTop: 10 }}>
          Lost password? Click here to reset
        </Text>
      </Pressable>

      {/* Create Account Link */}
      <Pressable
        onPress={() => navigation.navigate("CreateAccount")}
        style={{ marginTop: 40, alignSelf: "center" }}
        // onPress={() => console.log("clicked")}
      >
        <Text
          style={{
            color: "lightgrey",
            textAlign: "center",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          New to{" "}
          <Text style={{ color: COLORS.mainGreen, fontWeight: "900" }}>
            UNIS
          </Text>
          ?
        </Text>
        <Text
          style={{ color: "lightgrey", textAlign: "center", fontWeight: "600" }}
        >
          Click here to create your account
        </Text>
      </Pressable>

      <View style={{ marginTop: 80 }}>
        <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
          Powered by{" "}
          <Text style={{ color: COLORS.mainGreen, fontWeight: "800" }}>
            UNIS
          </Text>
          . All rights reserved. 2023
        </Text>
      </View>
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
    fontSize: 18,
    paddingLeft: 15,
    backgroundColor: COLORS.grey,
    borderRadius: 4,
    color: "white",
  },
  button: {
    backgroundColor: COLORS.yellow,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 30,
  },
});

export default LogInScreen;
