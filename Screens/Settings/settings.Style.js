import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Variables/colors";
const { width, height } = Dimensions.get("window");
const settingsStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  nameContainer: {
    // display:"flex",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "red",
    height: 45,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    // marginHorizontal: 20,
    marginBottom: 10,
    borderColor: COLORS.black,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    padding:20,
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    // backgroundColor: "green",
    height: "30%",
    marginBottom: 90,
  },
  copyRightsContainer:{
    // backgroundColor:"yellow"
  },
  copyRightsText:{
    color:"#c4c4c4",
    fontSize: "15",
    letterSpacing:3,

  },
  buttonText: {
    color: "white",
    fontSize: "17",
    fontWeight: "600",
    letterSpacing: "1",
  },
});
export default settingsStyles;
