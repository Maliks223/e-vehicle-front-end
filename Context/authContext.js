import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../Variables/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const [generalError, setGeneralError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const login = async (email, password) => {
    let item = { email, password };
    try {
      let result = await fetch(`${BASE_URL}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      let response = await result.json();
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      await AsyncStorage.setItem("userToken", response.token);
      setUserInfo(response);
      setUserToken(response.token);
      setIsLoading(false);
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userInfo");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(setUserInfo);
      }
      setIsLoading(false);
      
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
