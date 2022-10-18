import React, { useContext } from "react";
import Login from "../Screens/Login/login";
import BottomTabNavigator from "../Components/BottomTabNavigator/bottomTabNavigator.js";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../Context/authContext.js";

const AppNav = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!userToken  ? <Login /> : <BottomTabNavigator/>  }
    </NavigationContainer>
  );
};

export default AppNav;
