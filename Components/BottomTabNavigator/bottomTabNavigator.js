import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePost from "../../Screens/CreatePost/createPost.js";
import Home from "../../Screens/Home/home.js";
import Login from "../../Screens/Login/login.js";
import Settings from "../../Screens/Settings/settings.js";
import { COLORS } from "../../Variables/colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderRadius: 10,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../../assets/Icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.blue : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.blue : COLORS.black,
                  fontSize: 10,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../../assets/Icons/add.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.blue : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.blue : COLORS.black,
                  fontSize: 10,
                }}
              >
                Add
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen name="Login" component={Login} /> */}
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../../assets/Icons/settings.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.blue : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.blue : COLORS.black,
                  fontSize: 10,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabNavigator;
