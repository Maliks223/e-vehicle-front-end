
import { StyleSheet, Dimensions } from "react-native";
import {COLORS} from "../../Variables/colors"
const {width, height} = Dimensions.get('window')
const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imgContainer: {
    zIndex:-3
  },
  closeButtonContainer: {
    height:40,
    top:-20,
    width:40,
    fontSize:244,
    backgroundColor:COLORS.white,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:20,
    shadowColor:COLORS.black,
    shadowOffset:{
      width:0,
      height:-3,

    },
    shadowOpacity:0.6,
    shadowRadius:3.84,
    elevation:7

  },
  formInputContainer: {
    height:200,
    marginTop:10,
    ...StyleSheet.absoluteFill,
    zIndex:1,
    justifyContent:'flex-end',

  },
  textInput: {
    height:50,
    borderWidth:1,
    borderColor:COLORS.black,
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:10,
    paddingLeft:15,
    backgroundColor: COLORS.white,
    justifyContent:"flex-end"
  },
  formButton: {
    backgroundColor: COLORS.white,
    height: 35,
    // width:200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop:10,
    borderWidth:1,
    borderColor:COLORS.black,
    shadowColor:COLORS.black,
    shadowOffset:{
      width:0,
      height:3,

    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:7
  },
  buttonContainer: {
    zIndex:1,
    justifyContent:'center',
    height: height/3,
  },
  loginButton: {
    backgroundColor: COLORS.white,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    borderWidth:1,
    borderColor: COLORS.black,
    shadowColor:COLORS.black,
    shadowOffset:{
      width:0,
      height:4,

    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5
  },
  registerButton: {
    backgroundColor: COLORS.white,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    borderWidth:1,
    borderColor: COLORS.black,
    shadowColor:COLORS.black,
    shadowOffset:{
      width:0,
      height:4,

    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5
  },
  buttonText: {
    color: COLORS.black,
    fontSize: "17",
    fontWeight: "600",
    letterSpacing: "1",
  },
});

export default loginStyles;
