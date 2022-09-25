import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./Components/Login/login.js";
import mainStyles from "./mainStyles.js"

export default function App() {
  return (
    <View style={mainStyles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

