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
  ImageBackground,
  Dimensions,
  ScrollView,
  Share,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Foundation,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import COLORS from "../misc/COLORS";
import HomeHeaderComp from "../components/HomeHeaderComp";
import HomeListItem from "../components/HomeListItem";
import LATEST_NEWS_DATA from "../misc/LATEST_NEWS_DATA";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat";
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

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const navigationHndl = useNavigation();
  const [userId, setUserId] = useState();
  const [hasNots, setHasNots] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        // console.log("Yes", authUser.uid);
        setUser(authUser);
        setUserId(authUser.uid);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts.
    return unsubscribe;
  }, []);

  if (!user) {
    navigationHndl.navigate("LogInScreen");
  }

  const [text, setText] = useState("");

  const updatedData = LATEST_NEWS_DATA.filter((i) => i.title.includes(text));

  const [testData, setTestData] = useState("");

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

  // Home Card Container
  function HomeCard() {
    return (
      <View style={styles.homeCardContainer}>
        <HomeListItem
          iconName="people-outline"
          title="HR"
          onPress={() => navigation.navigate("HumanResources")}
        />
        <HomeListItem
          iconName="medkit-outline"
          title="H&S"
          onPress={() => navigation.navigate("HealthSafety")}
          // onPress={onPress}
        />
        <HomeListItem
          iconName="md-document-outline"
          title="Docs"
          onPress={() => navigation.navigate("AllDocs")}
        />
        <HomeListItem
          iconName="hammer-outline"
          title="Site"
          onPress={() => navigation.navigate("SiteScreen")}
        />
      </View>
    );
  }

  // Search Box

  // Share
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Unis: Fast. Simple. Secure - get it now at https://google.com",
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
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  // FlatList
  const Item = ({ title, imageLink }) => (
    <Pressable
      onPress={() => navigation.navigate("PromoScreen")}
      style={{ marginRight: 30 }}
    >
      <Pressable
        onPress={() => navigation.navigate("PromoScreen")}
        style={{
          // marginBottom: 30,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: COLORS.mainGreen,
        }}
      >
        <ImageBackground
          style={{
            width: 220,
            height: 200,
            borderRadius: 12,
          }}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: imageLink }}
        >
          <View
            style={{
              justifyContent: "flex-end",
              paddingBottom: 30,
              paddingLeft: 20,
              paddingRight: 30,
              // width: 150,
              // backgroundColor: "rgba(0, 0, 0, 0.5)",
              flex: 1,
              borderRadius: 12,
            }}
          >
            {/* <Text style={{ color: COLORS.mainGreen, fontWeight: "600" }}>
              Health & Safety
            </Text>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
              {title}
            </Text>
            <Text
              style={{
                // marginTop: 5,
                color: "lightgrey",
                fontWeight: "600",
                // fontSize: 16,
              }}
            >
              Post excerpt can be displayed here
            </Text> */}
          </View>
        </ImageBackground>
      </Pressable>
      <View
        style={{
          backgroundColor: COLORS.grey,
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 4,
          alignSelf: "center",
          marginBottom: 30,
          marginTop: -20,
          borderWidth: 2,
          borderColor: COLORS.lightGreen,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 16, color: "white" }}>
          Read More
        </Text>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} imageLink={item.imageLink} />
  );

  // Welcome Message

  // if (!user) {
  //   navigation.navigate("LogInScreen");
  // }

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.screenStyle}>
      <StatusBar style="dark" />

      <View style={{ marginTop: 0, justifyContent: "flex-start" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 30,
            // backgroundColor: COLORS.grey,
            // paddingBottom: 10,
          }}
        >
          <Pressable style={{}}>
            <Image
              source={require("../assets/unis-new.png")}
              style={{
                height: 100,
                width: 100,
                resizeMode: "contain",
                // marginLeft: -20,
              }}
            />
          </Pressable>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginRight: 10,
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("Notifications")}
              style={{}}
            >
              <Ionicons
                name="notifications"
                size={28}
                color={hasNots ? COLORS.mainGreen : "white"}
              />
              <View
                style={{
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                }}
              />
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Profile")}
              style={{ marginLeft: 10 }}
            >
              <Image
                source={{ uri: data.imageUrl }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  marginRight: 10,
                  borderWidth: 2,
                  borderColor: COLORS.mainGreen,
                }}
              />
            </Pressable>
          </View>
        </View>

        {/* <View style={{ height: 20 }} /> */}
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "600",
              marginBottom: 6,
              marginLeft: 20,
            }}
          >
            Welcome, {data.firstName}!
          </Text>

          <Text
            style={{
              color: "white",
              // textAlign: "center",
              // marginTop: 6,
              fontSize: 16,
              marginBottom: -5,
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Search the{" "}
            <Text style={{ fontWeight: "700", color: COLORS.mainGreen }}>
              Unis
              <Text style={{ fontWeight: "400", color: COLORS.mainGreen }}>
                verse
              </Text>
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TextInput
            placeholder="Enter Your Search Here"
            style={styles.textInputStyle}
            // value={text}
            onChangeText={(text) => setText(text)}
            placeholderTextColor={"lightgrey"}
          />
          <View
            style={{
              justifyContent: "center",
              backgroundColor: COLORS.grey,
              paddingRight: 15,
              marginLeft: -3,
              borderTopRightRadius: 32,
              borderBottomRightRadius: 32,
            }}
          >
            <Ionicons
              name="ios-globe-outline"
              size={24}
              color={COLORS.mainGreen}
              style={{}}
            />
          </View>
        </View>

        <View style={{ height: 20 }} />
        {/* Home card */}
      </View>

      <ScrollView style={{ flex: 1 }}>
        <HomeCard />
        <View style={{ height: 20 }} />
        <FlatList
          data={
            updatedData.length > 0 ? updatedData : LATEST_NEWS_DATA.slice(0, 1)
          }
          // {searchResults.length > 0 ? searchResults : data.slice(0, 1)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            // Header
            <View style={{ marginLeft: 20 }} />
          )}
        />

        {/* Tiles */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: -10,
            // paddingBottom: 200,
          }}
        >
          <HomeListItem
            iconName="albums-outline"
            title="Certs"
            onPress={() => navigation.navigate("AllDocuments")}
          />

          <Pressable
            onPress={() => navigation.navigate("QR")}
            style={{
              backgroundColor: COLORS.grey,
              borderRadius: 12,
              paddingVertical: 20,
              paddingHorizontal: 30,
              // marginHorizontal: 10,
              marginHorizontal: 10,
              alignItems: "center",
              width: 150,
              borderWidth: 2,
              borderColor: COLORS.mainGreen,
            }}
          >
            <MaterialIcons
              name="qr-code-2"
              size={34}
              color={COLORS.mainGreen}
              style={{}}
            />
            <Text style={{ color: "white", fontWeight: "600" }}>
              Share Profile
            </Text>
          </Pressable>
          <HomeListItem
            iconName="card-outline"
            title="Cards"
            onPress={() => navigation.navigate("AllCards")}
          />

          {/* Footer */}
        </View>
        <View
          style={{
            backgroundColor: COLORS.black,
            paddingBottom: 60,
            marginHorizontal: 20,
            // marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.lightGreen,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginTop: 20,
              borderRadius: 12,
              // marginBottom: 20,
            }}
          >
            <Text
              style={{ fontWeight: "600", fontSize: 16, color: COLORS.black }}
            >
              Build Your Unis Profile
            </Text>
            <Text>
              Your Unis profile gives site managers instant access to your info
            </Text>

            <Pressable
              onPress={() => navigation.navigate("Profile")}
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
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Update now
              </Text>
            </Pressable>
          </View>
        </View>
        <FlatList
          data={
            updatedData.length > 0 ? updatedData : LATEST_NEWS_DATA.slice(0, 1)
          }
          // {searchResults.length > 0 ? searchResults : data.slice(0, 1)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            // Header
            <View style={{ marginLeft: 20 }} />
          )}
        />
        <View
          style={{
            backgroundColor: COLORS.black,
            paddingBottom: 60,
            marginHorizontal: 20,
            // marginBottom: 20,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.grey,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginTop: 20,
              borderRadius: 12,
              // marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                color: COLORS.lightGreen,
              }}
            >
              Explore
              <Text style={{ color: COLORS.mainGreen, fontWeight: "900" }}>
                {" "}
                UNIS
              </Text>{" "}
              Integration Features
            </Text>
            <Text style={{ color: "white" }}>
              Find out how the UNIS app seamlessly integrates with the UNIS
              portal to power your construction projects
            </Text>

            <Pressable
              onPress={() => navigation.navigate("Profile")}
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
                Book a Demo
              </Text>
            </Pressable>
          </View>
        </View>
        <FlatList
          data={
            updatedData.length > 0 ? updatedData : LATEST_NEWS_DATA.slice(0, 1)
          }
          // {searchResults.length > 0 ? searchResults : data.slice(0, 1)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            // Header
            <View style={{ marginLeft: 20 }} />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: COLORS.black,
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "center",
    // paddingBottom: 60,
    // paddingTop: 40,
    // alignItems: "center",
  },
  homeCardContainer: {
    // marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: COLORS.black,
  },
  textInputStyle: {
    height: 50,
    width: 330,
    // borderRadius: 2,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    backgroundColor: COLORS.grey,
    // alignSelf: "center",
    paddingLeft: 25,
    fontSize: 18,
    color: "white",
  },
});

export default HomeScreen;
