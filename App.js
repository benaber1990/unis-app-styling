import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import DisplayPage from "./screens/DisplayPage";
import LogInScreen from "./screens/LogInScreen";
import UserScreen from "./screens/UserScreen";
import QRScreen from "./screens/QR";
import Profile from "./screens/Profile";
import JobList from "./screens/JobList";
import Hub from "./screens/Hub";
import Membership from "./screens/Membership";
import Support from "./screens/Support";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import SubmittedCard from "./screens/SubmittedCard";
import NotificationsScreen from "./screens/NotificationsScreen";
import NotDisplayListing from "./screens/NotDisplayListing";
import CV from "./screens/CV";
import AllCards from "./screens/AllCards";
import SingleQualScreen from "./screens/SingleQualScreen";
import AllQuals from "./screens/AllQuals";
import AddNewCard from "./screens/AddNewCard";
import COLORS from "./misc/COLORS";
import ViewMyCards from "./screens/ViewMyCards";
import ContentDisplay from "./screens/ContentDisplay";
import EnterScreen from "./screens/EnterScreen";
import AddNewDocument from "./screens/AddNewDocument";
import UpdateProfile from "./screens/UpdateProfile";
import GenerateQR from "./screens/GenerateQR";
import CreateProfile from "./screens/CreateProfile";
import AddNewCert from "./screens/AddNewCert";
import UploadWork from "./screens/UploadWork";
import AllMyWork from "./screens/AllMyWork";
import WorkDislay from "./screens/WorkDisplay";
import AllDocuments from "./screens/AllDocuments";
import CardDisplay from "./screens/CardDisplay";
import UpdateCV from "./screens/UpdateCV";
import WorkDisplay from "./screens/WorkDisplay";
import ScanQR from "./screens/ScanQR";
import Settings from "./screens/Settings";
import AddNewWork from "./screens/AddNewWork";
import AddCardCamera from "./screens/AddCardCamera";
import DocumentDisplay from "./screens/DocumentDisplay";
import PasswordReset from "./screens/PasswordReset";
import SendAccessFile from "./screens/SendAccessFile";
import DisplayProfile from "./screens/DisplayProfile";
import InitLogIn from "./screens/InitLogIn";
import PermitsScreen from "./screens/PermitsScreen";
import InductionsScreen from "./screens/InductionsScreen";
import { UsernameProvider } from "./components/IDContext";
import SignUpTCs from "./screens/SignUpTCs";
import InductionsDisplay from "./screens/InductionsDisplay";
import SearchUser from "./screens/SearchUser";
import SiteScreen from "./screens/SiteScreen";
import HumanResources from "./screens/HumanResources";
import HealthSafety from "./screens/HealthSafety";
import AllDocs from "./screens/AllDocs";
import PromoScreen from "./screens/PromoScreen";
import ContactPage from "./screens/ContactPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.mainGreen,
        tabBarInactiveTintColor: COLORS.lightGreen,
        tabBarStyle: {
          paddingBottom: 6,
          paddingTop: 6,
          backgroundColor: COLORS.grey,
          borderTopColor: COLORS.grey,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hub"
        component={Hub}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-globe-outline" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="qr-code-outline"
              size={20}
              color={color}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-add" size={20} color={color} />
                ),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={20} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

function App() {
  return (
    <UsernameProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerShown: false,
            headerTintColor: COLORS.lightGreen,
            headerStyle: { backgroundColor: COLORS.black },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={MyTabs}
            // options={{ headerShown: false }}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DisplayPage" component={DisplayPage} />
          <Stack.Screen
            name="LogInScreen"
            component={LogInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="JobList" component={JobList} />
          <Stack.Screen name="Hub" component={Hub} />
          <Stack.Screen name="Membership" component={Membership} />
          <Stack.Screen name="Support" component={Support} />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccountScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Submitted" component={SubmittedCard} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="NotDisplay" component={NotDisplayListing} />
          <Stack.Screen name="SingleCard" component={CardDisplay} />
          <Stack.Screen name="AllCards" component={AllCards} />
          <Stack.Screen name="SingleQualScreen" component={SingleQualScreen} />
          <Stack.Screen name="AllQuals" component={AllQuals} />
          <Stack.Screen name="AddNewCard" component={AddNewCard} />
          <Stack.Screen name="ViewMyCards" component={ViewMyCards} />
          <Stack.Screen name="ContentDisplay" component={ContentDisplay} />
          <Stack.Screen name="EnterScreen" component={EnterScreen} />
          <Stack.Screen name="AddNewDoc" component={AddNewDocument} />
          <Stack.Screen
            name="UpdateProfile"
            component={UpdateProfile}
            options={{ title: "Profile" }}
          />
          <Stack.Screen name="GenerateQR" component={GenerateQR} />
          <Stack.Screen
            name="CreateProfile"
            component={CreateProfile}
            options={{ title: "Set Up Your Profile" }}
          />
          <Stack.Screen name="AddNewCert" component={AddNewCert} />
          <Stack.Screen name="UploadWork" component={UploadWork} />
          <Stack.Screen name="AllMyWork" component={AllMyWork} />
          <Stack.Screen name="WorkDisplay" component={WorkDisplay} />
          <Stack.Screen name="AllDocuments" component={AllDocuments} />
          <Stack.Screen name="UpdateCV" component={UpdateCV} />
          <Stack.Screen name="ScanQR" component={ScanQR} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="AddNewWork" component={AddNewWork} />
          <Stack.Screen name="AddCardCamera" component={AddCardCamera} />
          <Stack.Screen name="DocumentDisplay" component={DocumentDisplay} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
          <Stack.Screen name="SendAccessFile" component={SendAccessFile} />
          <Stack.Screen name="DisplayProfile" component={DisplayProfile} />
          <Stack.Screen name="PermitsScreen" component={PermitsScreen} />
          <Stack.Screen name="InductionsScreen" component={InductionsScreen} />
          <Stack.Screen name="SignUpTCs" component={SignUpTCs} />
          <Stack.Screen
            name="InductionsDisplay"
            component={InductionsDisplay}
          />
          <Stack.Screen name="SearchUser" component={SearchUser} />
          <Stack.Screen
            name="SiteScreen"
            component={SiteScreen}
            options={{ title: "Site" }}
          />
          <Stack.Screen
            name="HumanResources"
            component={HumanResources}
            options={{ title: "Human Resources" }}
          />
          <Stack.Screen
            name="HealthSafety"
            component={HealthSafety}
            options={{ title: "Health & Safety" }}
          />
          <Stack.Screen
            name="AllDocs"
            component={AllDocs}
            options={{ title: "Documents" }}
          />
          <Stack.Screen
            name="PromoScreen"
            component={PromoScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="ContactPage"
            component={ContactPage}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsernameProvider>
  );
}

export default App;
