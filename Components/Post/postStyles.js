import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Variables/colors";
// const { width, height } = Dimensions.get("window");
const PostStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 6,
    marginBottom: 6,
    // paddingTop: 10,
    // alignItems: "center",
    height: "100%",
    width: "100%",
  },
  modalContainer: {
    // backgroundColor: "green",
    height: "90%",
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  upperModal: {
    display: "flex",
    justifyContent: "center",
    height: "10%",
    width: "100%",
  },
  upperModalTitle: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
  upperModalCloseButton: {
    width: "9.5%",
    height: "48%",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  upperModalCloseButtonText: {
  
  },
  lowerModal: {
    padding: 20,
    // backgroundColor: "blue",
    width: "100%",
    height: "94%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 1.84,
    elevation: 7,
  },
  modalComment: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    padding: 7,
    minheight: "20%",
    borderRadius: 3,
    width: "90%",
    backgroundColor: COLORS.grey,
    // backgroundColor:COLORS.blue
  },
  lowerComment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalCommentText: {
    fontSize: 17,
    marginBottom: 15,
    fontWeight: "300",
    // color:COLORS.white
  },
  modalCommentVote: {
    // color:COLORS.white,
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
  },
  modalCommentVoteButton: {
    color: COLORS.blue,
  },
  postWrapper: {
    backgroundColor: COLORS.white,
    maxHeight: "100%",
    width: "100%",
    padding: 10,
    paddingBottom: 40,
  },
  categoryWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blue,
    width: "27%",
    height: "60%",
    borderRadius: 30,
  },
  author: {
    fontWeight: "700",
    fontSize: 20,
    color: COLORS.blue,
  },
  postUpper: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 10,
    marginRight: 5,
  },
  title: { marginBottom: 5, fontWeight: "500", fontSize: 20 },
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
  commentsWrapper: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "50%",
    marginBottom: 30,
  },
  textInput: {
    height: "15%",
    width: "75%",
    borderWidth: 0.4,
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: "black",
    // backgroundColor:"yellow"
  },
  commentButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
    width: "20%",
    backgroundColor: COLORS.blue,
    borderRadius: 10,
  },
  commentButtonText: {
    color: "white",
  },
  allComments: {
    borderTopWidth: 0.4,
    width: "100%",
    paddingTop: 15,
    marginTop: 20,
    paddingLeft: 135,
  },
  allCommentsText: {
    color: COLORS.blue,
  },
});

export default PostStyles;
