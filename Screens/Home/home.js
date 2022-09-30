import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Post from "../../Components/Post/post";
import SearchBar from "../../Components/SearchBar/searchBar";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ScrollView>
          <SearchBar/>
        </ScrollView>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    width: "100%",
    backgroundColor: "#eeeeee",
  },
  text: {
    // fontSize: 42,
  },
});

const refreshStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    height: 40,
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
