import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { COLORS } from "../../Variables/colors";

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setCLicked,
  setPosts,
  allPosts
}) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 2 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          defaultValue={text}
          onChangeText={(newText) => {
            setText(newText);
            newText = newText.toLowerCase();
            setPosts((prev) =>
            allPosts.filter(
                (post) =>
                  post?.title?.toLowerCase().includes(newText) ||
                  post?.author?.toLowerCase().includes(newText) ||
                  post?.categories[0]?.toLowerCase().includes(newText) ||
                  post?.desc?.toLowerCase().includes(newText)
              )
            );
          }}
          onBlur={(newText) => {
            // setText("")
            // setPosts(allPosts)
          }}
        />
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 8,
    flexDirection: "row",
    width: "95%",
    backgroundColor: COLORS.white,
    borderRadius: 5,

    marginLeft: 22,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    borderColor: COLORS.black,
    borderWidth: 1,
    flexDirection: "row",
    width: "80%",
    //   backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

export default SearchBar;
