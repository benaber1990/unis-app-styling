import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import COLORS from "../misc/COLORS";
import EX_INDUCTIONS_DATA from "../misc/EX_INDUCTIONS_DATA";

export default function InductionsScreen({ navigation }) {
  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.screenStyle}>
      <Text>Inductions Screen</Text>
      <Button
        onPress={() => navigation.navigate("InductionsDisplay")}
        style={{}}
        title="Inductions"
      />
      <FlatList data={EX_INDUCTIONS_DATA} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
  },
});
