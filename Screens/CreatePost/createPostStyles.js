import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Variables/colors";
const { width, height } = Dimensions.get("window");
const createPostStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.white,
    height:"100%"
  },
  loadingContainer:{
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:200
  },
  textInput: {
    width: "90%",
    height: 50,
    borderWidth: 0.4,
    borderColor: "black",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  textInputDesc: {
    width: "90%",
    height: 100,
    borderWidth: 0.4,
    borderColor: "black",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  uploadImg: {
    backgroundColor: "white",
    height: 45,
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    borderWidth: .4,
    borderColor: "black",
   
  },
  postButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 40,
    width: "25%",
    backgroundColor: COLORS.blue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: COLORS.black,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  postButtonText: {
    color: "white",
    fontSize: 17,
  },
  buttonText: {
    fontSize: 16,
  },
  buttonTextLogo: {
    fontSize: 20,
    color: COLORS.blue,
  },
});

export default createPostStyles;
