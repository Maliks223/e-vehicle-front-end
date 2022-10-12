import React, { useContext } from "react";
import { Text, View, Pressable } from "react-native";
import { AuthContext } from "../../Context/authContext";
import settingsStyles from "./settings.Style";

const Setting = (children) => {
  const { logout } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);

  return (
    <View style={settingsStyles.container}>
      <View style={settingsStyles.nameContainer}>
        <Text style={settingsStyles.name}>Hello User </Text>
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
        <View style={settingsStyles.copyRightsContainer}>
          <Text style={settingsStyles.copyRightsText}>
            <Text>Copyright </Text>
            {new Date().getFullYear()}
            <Text> ©</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Setting;
