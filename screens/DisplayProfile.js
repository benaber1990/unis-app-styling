import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import COLORS from "../misc/COLORS";
import firebase from "firebase/compat";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";

const exUrl =
  "https://images.pexels.com/photos/4067765/pexels-photo-4067765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

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

export default function DisplayProfile({ route }) {
  const { displayData } = route.params;
  const [data, setData] = useState("");

  const isFocused = useIsFocused();
  const fetchData = async () => {
    try {
      const { uid } = firebase.auth().currentUser;
      if (!uid) return;
      const collectionRef = firebase
        .firestore()
        .collection("users")
        .doc(displayData);
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

  const [imagesData, setImagesData] = useState("");

  useEffect(() => {
    fetchData();
    setImagesData(fetchAllImages());
  }, [isFocused]);

  const fetchAllImages = () => {
    let imgData = [];
    firebase
      .firestore()
      .collection("UserImages")
      .get()
      .then((querySnapshot) => {
        console.log("Total users: ", querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          console.log(
            "User ID: ",
            documentSnapshot.id,
            documentSnapshot.data()
          );
          imgData.push(documentSnapshot.data());
        });
      });
    return imgData;
  };

  // FlatList Item
  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.img} source={{ uri: item?.imageUrl }} />
    </View>
  );

  return (
    <View style={styles.screenStyle}>
      {/* Profile Picture */}
      <Image
        source={{ uri: exUrl }}
        style={{ height: 100, width: 100, borderRadius: 50 }}
      />

      <Text>Display Profile</Text>
      <Text>{displayData}</Text>

      {/* Profile Information */}
      <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
        {data.firstName} {data.surname}
      </Text>
      <Text style={{ color: "white" }}>{data.location}</Text>
      <Text style={{ color: "white" }}>{data.postcode}</Text>
      <Text style={{ color: "white" }}>{data.phoneNumber}</Text>

      {/* Work Information */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 6,
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "500" }}>Primary Skills</Text>
        <Text style={{}}>{data.primarySkills}</Text>
      </View>

      {/* <View style={{}}>
        <Image
          source={{ uri: imagesData }}
          style={{ height: 100, width: 100 }}
        />
      </View> */}

      <View>
        <Text style={{ color: "white" }}>Image here</Text>
      </View>

      {/* Work Images */}
      <View style={{ height: 20 }} />
      <FlatList
        data={imagesData}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    // padding: 20,
    marginVertical: 8,
    marginRight: 20,
  },
  img: { width: 100, height: 100 },
});
