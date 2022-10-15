import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Post from "../../Components/Post/post";
import SearchBar from "../../Components/SearchBar/searchBar";
import { BASE_URL } from "../../Variables/config";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <SearchBar allPosts={allPosts} setPosts={setPosts} />
      <ScrollView style={styles.scrollView} keyboardDismissMode="on-drag">
        {loading ? (
          <ActivityIndicator style={styles.loading} color="#0C46CE" />
        ) : (
          posts.map((post, index) => {
            return <Post key={index} data={post} index={index} />;
          })
        )}
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
    marginBottom: 55,
  },
  loading: {
    marginTop: "70%",
    transform: [{ scale: 1.7 }],
  },
});

export default Home;
