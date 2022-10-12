import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Variables/colors";
// const { width, height } = Dimensions.get("window");
const PostStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 6,
    marginBottom: 6,
    paddingTop: 10,
    // alignItems: "center",
    height: "100%",
    width: "100%",
  },
  postWrapper: {
    backgroundColor: COLORS.white,
    maxHeight: "100%",
    width: "100%",
    padding: 10,
    paddingBottom:40
  },
  categoryWrapper: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: COLORS.blue,
    width: "27%",
    height:"30%",
    borderRadius: 30,
  },
  author: {
    // marginBottom: 10,
    fontWeight: "700",
    fontSize: 20,
    color: COLORS.blue,
  },
  postUpper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 10,
    marginRight: 5,
  },
  title: { marginBottom: 5, fontWeight: "500", fontSize: 18 },
  category: {
    fontWeight: "600",
    fontSize: 13,
    color: "white",
  },
  desc: { marginBottom: 5, fontWeight: "300", fontSize: 16 },

  img: {
    marginTop: 10,
    width: "100%",
    height: 300,
  },
  commentsWrapper:{
    marginTop:20,
    display:"flex",
    justifyContent:"space-around",
    flexDirection:"row",
    flexWrap:"wrap",
    width:"100%",
    height:"50%",
    marginBottom:70
  },
  textInput:{
    height:"15%",
    width:"75%",
    borderWidth: 0.4,
    borderRadius: 5,
    paddingLeft:10,
    borderColor: "black",
    // height:"100%",
    // backgroundColor:"yellow"
  },
  commentButton:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"15%",
    width:"20%",
    backgroundColor:COLORS.blue,
    borderRadius: 10,

  },
  commentButtonText:{
    color:"white",
  },
  allComments: {
    borderTopWidth: 0.4,
    width:"100%",
    paddingTop:15,
    marginTop:20,
    paddingLeft:135
  },
  allCommentsText:{
    color:COLORS.blue
  }
});

export default PostStyles;
