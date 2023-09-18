import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import firebase from "firebase/compat";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";
import COLORS from "../misc/COLORS";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

function AddNewCert({ navigation }) {
  const [title, setTitle] = useState("");

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  const addDataToFirestore = async () => {
    try {
      const collectionRef = firebase
        .firestore()
        .collection("UserWork")
        .doc(user.uid);
      await collectionRef.set({
        title: title,
        // Add more fields as needed
      });
      console.log("Data added to Firestore");
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const storage = getStorage();
  const [url, setUrl] = useState();
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState("");
  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.canceled) {
      setPickedImagePath(result.uri);
      /// function from above code block.
      await uploadImage(result?.uri, `${Date.now()}_photo`);
    }
  };

  const uploadImage = async (data, imageName) => {
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", data, true);
        xhr.send(null);
      });
      const imageRef = ref(storage, `images/${imageName}`);
      await uploadBytes(imageRef, blob).then(async (snapshot) => {
        let imgUrl = await getDownloadURL(imageRef).then((res) => {
          const { uid } = firebase.auth().currentUser;
          firebase
            .firestore()
            .collection("UserImages")
            .add(
              {
                imageUrl: res,
                userId: uid,
                title: "EXAMPLE_TITLE_HERE",
                category: "Certificates",
                // Add more fields as needed
              },
              { merge: true }
            )
            .catch((err) => {
              console.log("err", err);
            });
        });
        setUrl(imgUrl);
        console.log("Uploaded a blob or file!");
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <View style={styles.screenStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 20, marginVertical: 40 }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
            Create Profile
          </Text>
        </View>

        {/* {data.map((item) => (
        <Text key={item.id}>
          {item.field1} - {item.field2}
        </Text>
        // Render other fields as needed
      ))} */}

        {/* Create Profile */}
        <View>
          <View>
            <Text style={styles.label}>Work Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>

          <Pressable
            onPress={showImagePicker}
            style={{
              backgroundColor: "white",
              alignItems: "center",
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                borderColor: "black",
              }}
              source={{ uri: pickedImagePath }}
            />
            <Text style={{ marginTop: 20, fontWeight: "500" }}>
              Select Image
            </Text>
          </Pressable>

          {user && (
            <View>
              <Text>{user.uid}</Text>
              <Text syyle={{ color: "white" }}>Yes</Text>
            </View>
          )}
        </View>

        <Pressable
          onPress={uploadImage}
          style={{
            padding: 20,
            backgroundColor: COLORS.yellow,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 4,
            alignSelf: "center",
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            Save & Submit
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
    paddingTop: 60,
  },
  label: {
    color: "white",
    fontWeight: "500",
  },
  input: {
    height: 40,
    width: 270,
    paddingLeft: 15,
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 20,
    backgroundColor: COLORS.grey,
  },
});

export default AddNewCert;
