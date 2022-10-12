import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Post from "../../Components/Post/post";
import SearchBar from "../../Components/SearchBar/searchBar";
import { BASE_URL } from "../../Variables/config";

const Home = (props) => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async (posts) => {
    try {
      let result = await fetch(`${BASE_URL}post/all`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }) 
      // console.log("🚀 ~ file: home.js ~ line 23 ~ getPosts ~ result", result)
      let response = await result.json()
      setPosts(response);
      setAllPosts(response)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=> {
    getPosts()
  }, [] )

  return (
    <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />

          <SearchBar allPosts={allPosts} setPosts={setPosts}/>
      <ScrollView style={styles.scrollView}>
        <ScrollView>
        </ScrollView>
        {posts.map((post, index) => {
          return (
            <Post key={index} data={post} index={index} />
          )
        })}
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
