import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  Keyboard,
  Alert
} from "react-native";
import { AuthContext } from "../../Context/authContext";
import settingsStyles from "./settings.Style";
import createPostStyles from "../CreatePost/createPostStyles";

const Setting = (children) => {
  const { logout } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [alert, setAlert] = useState(false);
  const [inputs, setInputs] = useState({
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    Keyboard.dismiss();
    setInputs({ message: "", phone: ""});
    setAlert(true);
    Alert.alert('Message received');
  };

  return (
    <View style={settingsStyles.container}>
      <View style={settingsStyles.nameContainer}>
        <Text style={settingsStyles.name}>Hello {userInfo.userName} </Text>
      </View>
      <View style={settingsStyles.contactUs}>
        <View>
          <Text style={settingsStyles.contactUsTitle}>Contact Us ?</Text>
        </View>
        <TextInput
          keyboardType="phone-pad"
          style={createPostStyles.textInput}
          placeholderTextColor="grey"
          placeholder="Phone Number"
          value={inputs.phone}
          onChangeText={(phone) => setInputs({ ...inputs, phone: phone })}
        />
        <TextInput
          multiline
          numberOfLines={2}
          style={createPostStyles.textInputDesc}
          placeholderTextColor="grey"
          placeholder="Send a message..."
          value={inputs.message}
          onChangeText={(message) => setInputs({ ...inputs, message: message })}
        />
        <Pressable style={settingsStyles.sendButton} onPress={handleSubmit}>
          <Text style={createPostStyles.postButtonText}>Send</Text>
        </Pressable>
      </View>

      <View style={settingsStyles.buttonContainer}>
        <Pressable
          style={settingsStyles.logoutButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={settingsStyles.buttonText}>LOG OUT</Text>
        </Pressable>
        <View style={settingsStyles.copyRightsContainer}>
          <Text style={settingsStyles.copyRightsText}>
            <Text>Copyright </Text>
            {new Date().getFullYear()}
            <Text> ©</Text>
          </Text>
        </View>
          <Text style={settingsStyles.copyRightsText} >Powered By E-Vehicle</Text>
        <Modal
          // presentationStyle="pageSheet"
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
};

export default Setting;
