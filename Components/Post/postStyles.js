import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Variables/colors";
// const { width, height } = Dimensions.get("window");
const PostStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 6,
    marginBottom:6,
    paddingTop: 10,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  postWrapper: {
    backgroundColor: COLORS.white,
    maxHeight: "100%",
    width: "100%",
    padding: 10,
  },
  author: {
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 20,
    color: COLORS.blue,
  },
  title: { marginBottom: 5, fontWeight: "500", fontSize: 18 },
  desc: { marginBottom: 5, fontWeight: "300", fontSize: 16 },
 
  img: {
    marginTop: 15,
    width: "100%",
    // maxWidth:400,
    height: 300,
  },
});

export default PostStyles;
