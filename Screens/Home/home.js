import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import Post from "../../Components/Post/post";
import SearchBar from "../../Components/SearchBar/searchBar";
import { BASE_URL } from "../../Variables/config";
import COLORS from "../../Variables/colors"

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
      });
      let response = await result.json();
      setPosts(response);
      setAllPosts(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />

      <SearchBar allPosts={allPosts} setPosts={setPosts} />
      <ScrollView style={styles.scrollView} keyboardDismissMode='on-drag'>
        {posts.map((post, index) => {
          return <Post key={index} data={post} index={index} />;
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
    marginBottom:55
  },
  
});


export default Home;
