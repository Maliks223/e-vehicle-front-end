import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";
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
    width: "70%",
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
  modalContainer: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"none",
    height:"100%",
    width:"100%",
    backgroundColor:"rgba(0, 0, 0, 0.1)"
  },
  modalFormContainer: {
    borderRadius:3,
    height:"20%",
    width:"85%",
    backgroundColor:"white",
    
  },
  upperForm: {
    display:"flex",
    height:"40%",
    // backgroundColor:"grey",
    padding:5,
    justifyContent:"center",
    alignItems:"center",
  },
  upperFormText: {
    fontSize:18
  },
  lowwerForm: {
    display:"flex",
    flexDirection:"row",
    height:"60%",
    // backgroundColor:"red",
    width:"100%",

  },
  lowwerFormLeft: {
    // backgroundColor:"yellow",
    width:"50%",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"black"

  },
  lowwerFormRight: {
    width:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"black"
  },
  formLogoutBtn: {
    height:"40%",
    width:"80%",
    backgroundColor:"red",
    borderRadius:3,
    justifyContent:"center",
    alignItems:"center"
  },
  formLogoutBtnText: {
    fontSize:17,
    color:"white"
  },
  formCloseBtn: {
    height:"40%",
    width:"80%",
    backgroundColor:"white",
    borderRadius:3,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:.5
  },
  formCloseBtnText: {
    fontSize:17
  }
});
export default settingsStyles;
