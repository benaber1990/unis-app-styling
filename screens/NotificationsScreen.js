import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import COLORS from "../misc/COLORS";
import NOTIFICATIONS_DATA from "../misc/NOTIFICATIONS_DATA";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function NotificationsScreen({ navigation }) {
  const Item = ({ alertTitle, alertCat }) => (
    <View style={{ flexDirection: "row" }}>
      <Pressable style={styles.itemStyle}>
        <View
          style={{
            width: 20,
            backgroundColor: COLORS.mainGreen,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            paddingTop: 15,
            paddingRight: 30,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("NotDisplay", { alertTitle, alertCat })
            }
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {alertTitle}
            </Text>
            <Text style={{}}>Notification information can go here</Text>
          </Pressable>
          {/* <Pressable
          onPress={() =>
            navigation.navigate("NotDisplay", { alertTitle, alertCat })
          }
          style={{ marginLeft: 15 }}
        >
          <Ionicons name="chevron-forward-circle" size={24} color="black" />
        </Pressable> */}
        </View>
      </Pressable>

      <View
        style={{
          marginLeft: 15,
          marginTop: 25,
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>3 Hours</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item alertTitle={item.alertTitle} alertCat={item.alertCat} />
  );

  return (
    <SafeAreaView style={styles.screenStyle}>
      <StatusBar style="dark" />
      <FlatList
        data={NOTIFICATIONS_DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <View style={{ marginTop: 20 }}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: COLORS.black,
    flex: 1,
    alignItems: "center",
  },
  itemStyle: {
    backgroundColor: COLORS.yellow,
    marginBottom: 8,
    borderRadius: 4,
    flexDirection: "row",
    height: 70,
    // alignItems: "center",
  },
});

export default NotificationsScreen;
