import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Variables/colors";
const { width, height } = Dimensions.get("window");
const createPostStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    display: "flex",
    alignItems: "center",
    width: "100%",
    // backgroundColor: COLORS.white,
    height: "100%",
  },
  loadingContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 200,
  },
  textInput: {
    width: "90%",
    height: 50,
    // borderWidth: 0.3,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "black",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  textInputDesc: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,

    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15,
    width: "90%",
    height: 100,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    paddingTop: 15,
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
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  helperText: {
    color: "red",
    letterSpacing:1
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
    // borderWidth: 0.4,
    // borderColor: COLORS.black,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
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
