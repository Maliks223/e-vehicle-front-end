import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Variables/colors";
const { width, height } = Dimensions.get("window");
const settingsStyles = StyleSheet.create({
  container: {display:"flex",justifyContent: "space-around", height:"100%"},
  nameContainer: {
    display:"flex",
    alignItems:"center",
  },
  name:{
    fontSize:20,
    fontWeight:'500',
  },
  logoutButton: {
    backgroundColor: "red",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 150,
    // borderWidth: 1,
    borderColor: COLORS.black,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: "17",
    fontWeight: "600",
    letterSpacing: "1",
  },
});
export default settingsStyles;
