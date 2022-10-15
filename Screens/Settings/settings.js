import React, { useContext, useState } from "react";
import { Text, View, Pressable, Modal } from "react-native";
import { AuthContext } from "../../Context/authContext";
import settingsStyles from "./settings.Style";

const Setting = (children) => {
  const { logout } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={settingsStyles.container}>
      <View style={settingsStyles.nameContainer}>
        <Text style={settingsStyles.name}>Hello {userInfo.userName} </Text>
      </View>
      <View style={settingsStyles.buttonContainer}>
        <Pressable
          style={settingsStyles.logoutButton}
          onPress={() => setModalVisible(true)}
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
        <Modal
        presentationStyle="pageSheet"
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={settingsStyles.modalContainer}>
            <View style={settingsStyles.modalFormContainer}>
              <View style={settingsStyles.upperForm}>
                <Text style={settingsStyles.upperFormText}>
                  Are you sure you want to logout ?
                </Text>
              </View>
              <View style={settingsStyles.lowwerForm}>
                <View style={settingsStyles.lowwerFormLeft}>
                  <Pressable
                    style={settingsStyles.formCloseBtn}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={settingsStyles.formCloseBtnText}>Close</Text>
                  </Pressable>
                </View>
                <View style={settingsStyles.lowwerFormRight}>
                  <Pressable
                    onPress={() => {
                      logout();
                    }}
                    style={settingsStyles.formLogoutBtn}
                  >
                    <Text style={settingsStyles.formLogoutBtnText}>Logout</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );

  //
};

export default Setting;
