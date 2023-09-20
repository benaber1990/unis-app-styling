import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import COLORS from "../misc/COLORS";
import { SimpleLineIcons } from "@expo/vector-icons";

const tempLink =
  "https://lh3.googleusercontent.com/pw/AIL4fc98J0SuGZkY3O0P6TyCTwU082Mxw03v5IEL0OLZ_7U_XrWuqq1WEYmiQD3k9OQkqtn0hH44drdTyciwgjzAhTCuMOKCHdPcxVzUCrlg7M-SHr2qzaQSBb1Y5QijQ0WDuT6oMRui0sm4WgN6SKEwjZ-L-RWFWCzCsn4qYFMF1DQ41pQJHlMBB3CAWmSbyC6RZvlz_hBBhvZniEbliyUIRJKWWzXg8MaularQKbPZZsfRV60gKaes2uowmLUFZ8DgYvZF6fLdfQb3SH26IsysYiWX4owyYuV0AQ8eAMY4cPWb5LpTTmC5hgQF_SXtCPne8KtsmqFmLzfwSLcLbqvEb_KdWEOEdA2aPmecb0dilTlyan8KHZzxXP2V7SB5UaXJx8qgNip9qbHF5gosh2oHxuJ7CXm9mx3W8KXqNu7GZ4KMPUWFGYJlp3hlRvfEttmO_jXkFTu2JWJx7sN8pZyUp7S9OzKfJOgvVG6_4nvQRC1lMgrmJwmEkYR4g8MTZ5p5Umh9yHraytn7YlhI92LPk4ArWUHm2qg4Ihw1I1RnR1b_stvFV0yeXB87Bqw5OEecgt5eCOYe6wbI9St-r_hWlIqGDwv0gYR_c3RO9eRmJd6OlcTbNTghASNyosl6mtRwINFafFSCIlAaqaH2pabXjStCgmt0epw57nzqFCcYc1P_gJ608kT_Bx3QuW8kk--3K7vLOHq6J6-xUq1MdmKyi4pSRKiVIDVTLUfLoRSHK1LeEKjqSPB83cIzWNbFpN_iK4AQggg6Taojpd7Hcu187gg9oKJRbQP7BlDEe9zoQA6JYagjFPD2GMfbr9GMpq6POZ6sVjYvvBOviHARYo-nUF967R0eeT5h_tBKV8b6H52LVmHwBrUfJP3FtF5U6xa519bi0-wdxPC53etQIp6E0eBGMFl_aSk41LJ3zPH6u6nZeuERkMif20vd8ify=w800-h800-s-no?authuser=0";
export default function PromoScreen({ navigation }) {
  return (
    <View style={styles.screenStyle}>
      {/* Image */}
      <View>
        <Image
          source={{ uri: tempLink }}
          style={{
            width: 300,
            height: 300,
            borderWidth: 2,
            borderColor: COLORS.mainGreen,
            borderRadius: 4,
          }}
        />
      </View>
      {/* Header */}
      <Text style={styles.header}>Save up to £90 with Screwfix</Text>

      {/* Info Text */}
      <Text style={styles.body}>Informational content can be written here</Text>

      {/* Expiry */}
      <View
        style={{
          alignItems: "center",
          alignSelf: "center",
          paddingHorizontal: 30,
          paddingTop: 15,
          paddingBottom: 20,
          borderRadius: 8,
          backgroundColor: COLORS.grey,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white" }}>Offer expires in</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: 32,
              color: "white",
              marginRight: 5,
              marginBottom: -5,
              color: COLORS.lightGreen,
            }}
          >
            3
          </Text>
          <Text style={{ color: "white" }}>Days</Text>
        </View>
      </View>
      {/* Button */}
      <View style={styles.button}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Find Out More</Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate("ContactPage")}
        style={{ marginTop: 170 }}
      >
        <Text style={styles.body}>Would you like to advertise here?</Text>
        <Pressable
          onPress={() => navigation.navigate("ContactPage")}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 18,
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            backgroundColor: COLORS.grey,
            marginTop: 12,
            borderRadius: 6,
            borderWidth: 2,
            borderColor: COLORS.mainGreen,
          }}
        >
          <SimpleLineIcons
            name="globe"
            size={24}
            color={COLORS.mainGreen}
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontWeight: "600", color: COLORS.lightGreen }}>
            UNIS Media
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 30,
  },
  body: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    backgroundColor: COLORS.mainGreen,
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
});
