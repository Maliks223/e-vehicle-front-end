import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import Login from "../Screens/Login/login";
import BottomTabNavigator from "../Components/BottomTabNavigator/bottomTabNavigator.js";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../Context/authContext.js";



const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  // if (isLoading) {
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <ActivityIndicator  />
  //   </View>;
  // }

  return (
    <NavigationContainer>
      <BottomTabNavigator/>
      {/* <Login/> */}
      {/* {userToken !== null ? <BottomTabNavigator/> : <Login />} */}
    </NavigationContainer>
  );
};

export default AppNav;
