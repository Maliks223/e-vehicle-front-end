import React, { useContext } from "react";
import { Text, View, Pressable } from "react-native";
import { AuthContext } from "../../Context/authContext";
import settingsStyles from "./settings.Style";

const Setting = (children) => {
  const { logout } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);

  console.log("batata", userInfo);

  return (
    <View style={settingsStyles.container}>
      <View style={settingsStyles.nameContainer}>
        <Text style={settingsStyles.name} >Hello Batata </Text>
      </View>
      <View style={settingsStyles.buttonContainer}>
        <Pressable
          style={settingsStyles.logoutButton}
          onPress={() => {
            logout();
          }}
        >
          <Text style={settingsStyles.buttonText}>LOG OUT</Text>
        </Pressable>

        {/* to be changes to name weh fetching register */}
      </View>
      <View style={settingsStyles.copyRightsContainer}>
        <Text>Copyright © batata</Text>
      </View>
    </View>
  );
};

export default Setting;
