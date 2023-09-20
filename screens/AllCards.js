import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import EX_CARDS from "../misc/EX_CARDS";
import COLORS from "../misc/COLORS";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function AllCards({ navigation }) {
  const Item = ({ title, cat, description, imgLink }) => (
    <Pressable
      onPress={() => navigation.navigate("SingleCard")}
      style={styles.cardItemStyle}
    >
      <Image
        source={{ uri: imgLink }}
        style={{ width: 300, height: 200, borderRadius: 24 }}
      />
    </Pressable>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      cat={item.cat}
      description={item.description}
      imgLink={item.imgLink}
    />
  );

  return (
    <View style={styles.screenStyle}>
      <FlatList
        data={EX_CARDS}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Pressable
              onPress={() => navigation.navigate("AddNewCard")}
              style={{
                paddingHorizontal: 30,
                paddingVertical: 20,
                borderRadius: 6,
                backgroundColor: "#fafafa",
                marginBottom: 30,
                alignSelf: "center",
                marginTop: 40,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="add-circle-outline"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                Add New Card
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: "center",
    // paddingTop: 60,
    backgroundColor: COLORS.black,
  },
  cardItemStyle: {
    backgroundColor: COLORS.yellow,
    width: 300,
    // paddingVertical: 80,
    // paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 24,
    marginTop: -60,
    elevation: 3,
    // borderWidth: 2,
    // borderColor: "black",
  },
});

export default AllCards;
