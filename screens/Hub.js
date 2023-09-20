import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
  TextInput,
  Image,
} from "react-native";
import COLORS from "../misc/COLORS";
import LATEST_NEWS_DATA from "../misc/LATEST_NEWS_DATA";
import {
  Foundation,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

const tempLink =
  "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function Hub({ navigation }) {
  function NewListItem({ title, iconName, onPress }) {
    return (
      <Pressable onPress={onPress} style={styles.itemStyle}>
        <View
          style={{
            // backgroundColor: COLORS.grey,
            paddingVertical: 5,
            paddingHorizontal: 10,
            alignItems: "center",
            borderRadius: 6,
            // marginBottom: 10,
          }}
        >
          <Ionicons
            name={iconName}
            size={28}
            color={COLORS.lightGreen}
            style={{}}
          />
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </Pressable>
    );
  }

  const [text, setText] = useState("");
  const Item = ({ title, imageLink }) => (
    <View
      style={{
        alignSelf: "center",
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: COLORS.grey,
        borderRadius: 8,
        marginBottom: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          marginLeft: -30,
          marginTop: -10,
        }}
      >
        <Image
          source={{ uri: tempLink }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: COLORS.mainGreen,
            marginRight: 15,
          }}
        />
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              marginBottom: 6,
              color: "white",
            }}
          >
            Unis Extra{" "}
            <Text style={{ fontWeight: "400" }}>posted 3 hours ago</Text>
          </Text>
          <Text style={{ fontSize: 12, color: "lightgrey", marginTop: -6 }}>
            28,435 friends
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{ uri: imageLink }}
        style={{
          width: 300,
          height: 175,
          marginBottom: 30,
          justifyContent: "flex-end",
          paddingBottom: 20,
          paddingRight: 30,
          // marginRight: 40,
        }}
        imageStyle={{
          borderRadius: 8,
          borderWidth: 2,
          borderColor: COLORS.mainGreen,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.mainGreen,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 4,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>{title}</Text>
        </View>
      </ImageBackground>

      {/* Item Footer */}
      <View
        style={{
          marginTop: -10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ width: "30%", flexDirection: "row", marginLeft: -30 }}>
          {/* Col A */}
          <View style={{ marginRight: 10 }}>
            <Ionicons
              name="heart-outline"
              size={24}
              color={COLORS.lightGreen}
            />
          </View>

          {/* Col B */}
          <View style={{ marginRight: 12 }}>
            <Ionicons
              name="ios-share-social-sharp"
              size={24}
              color={COLORS.lightGreen}
            />
          </View>
          {/* Col C */}
          <View style={{}}>
            <Ionicons
              name="ios-bookmarks-outline"
              size={20}
              color={COLORS.lightGreen}
            />
          </View>
        </View>

        <View style={{ marginRight: -20 }}>
          <View
            style={{
              backgroundColor: COLORS.lightGreen,
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              Leave comment
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} imageLink={item.imageLink} />
  );

  return (
    <View style={styles.screenStyle}>
      <View
        style={{
          marginTop: 60,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "20%" }}>
          <Image
            source={{ uri: tempLink }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: COLORS.mainGreen,
              marginTop: -40,
            }}
          />
        </View>
        <View style={{ alignItems: "center", marginHorizontal: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: "800",
            }}
          >
            Welcome!
          </Text>
          <Text style={{ color: "white", fontSize: 18 }}>
            to the{" "}
            <Text style={{ color: COLORS.mainGreen, fontWeight: "700" }}>
              Hub
            </Text>
          </Text>
        </View>
        <View style={{ width: "20%", alignItems: "center" }}>
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
          <Ionicons
            name="notifications-sharp"
            size={32}
            color={COLORS.mainGreen}
            style={{ marginTop: -40, marginRight: -20 }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 20, marginTop: 30 }}>
        <NewListItem
          title="Jobs"
          iconName="briefcase-outline"
          onPress={() => {}}
        />
        <View style={{ marginRight: -5 }} />
        <NewListItem title="Friends" iconName="ios-people" onPress={() => {}} />

        <View
          style={{
            marginHorizontal: 20,
            justifyContent: "center",
            marginTop: -5,
          }}
        >
          <Ionicons
            name="md-globe-outline"
            size={36}
            color={COLORS.mainGreen}
          />
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Post
          </Text>
        </View>

        <NewListItem
          title="Training"
          iconName="checkmark-done-sharp"
          onPress={() => {}}
        />
        <View style={{ marginRight: -5 }} />
        <NewListItem
          title="Extra"
          iconName="ellipsis-horizontal-circle"
          onPress={() => {}}
        />
      </View>

      <FlatList
        data={LATEST_NEWS_DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <TextInput
                placeholder="Search the UNIS Hub..."
                style={styles.textInputStyle}
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
            <View
              style={{
                backgroundColor: COLORS.black,
                paddingBottom: 30,
                marginHorizontal: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: COLORS.lightGreen,
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 16,
                    color: COLORS.black,
                  }}
                >
                  Build Your Unis Profile
                </Text>
                <Text>
                  Your Unis profile gives site managers instant access to your
                  info
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
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 320,
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
  itemStyle: {
    // flexDirection: "row",
    // alignSelf: "center",
    alignItems: "center",
    backgroundColor: COLORS.grey,
    // paddingVertical: 20,
    // paddingHorizontal: 20,
    // borderWidth: 2,
    // borderColor: COLORS.lightGreen,

    // height: 125,
    margin: 8,
    borderRadius: 8,
    width: 70,
    // elevation: 2,
  },
  textStyle: {
    color: COLORS.mainGreen,
    marginTop: 1,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    // marginBottom: 2,
  },
});

export default Hub;
