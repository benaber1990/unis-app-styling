import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Button,
} from "react-native";
import firebase from "firebase/compat";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import * as ImagePicker from "expo-image-picker";
import "@react-native-firebase/storage";

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
  const app = firebase.initializeApp(firebaseConfig);
}
const SendAccessFile = () => {
  const [uploading, setUploading] = useState(false);
  const [test, setTest] = useState(null);

  const newLink = `"${test}"`;

  const testUploadHandle = () => console.log(test);

  const [image, setImage] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const example = result.assets[0].uri;

    console.log(example);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUpload = async () => {
    try {
      const reference = storage().ref("images/" + Date.now()); // Creating a unique path for each upload
      const pathToFile = imageUri;

      setUploading(true);
      await reference.putFile(pathToFile);
      setUploading(false);

      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Send Access File</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {/* Send File */}
      <Pressable
        onPress={testUploadHandle}
        style={{ padding: 20, marginTop: 60 }}
      >
        <Text>Send File</Text>
        {/* <Text>{result.assets[0].uri}</Text> */}
        <Text style={{ marginTop: 40 }}>{image}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SendAccessFile;
