import React, { useState } from "react";
import PostStyles from "./postStyles.js";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { BASE_URL } from "../../Variables/config.js";

const Post = ({ data, index }) => {
  const category = data.categories[0];
  const description = data.desc;
  const image = data.img;
  const title = data.title;
  const author = data.author;

  return (
    <SafeAreaView style={PostStyles.container}>
      <View style={PostStyles.postWrapper}>
        <View style={PostStyles.postUpper}>
          <Text style={PostStyles.author}>{author}</Text>
          <View style={PostStyles.categoryWrapper}>
            <Text style={PostStyles.category}>{category}</Text>
          </View>
        </View>
        <View>
          <Text style={PostStyles.title}>{title}</Text>
        </View>
        <Text style={PostStyles.desc}>{description}</Text>

        <Image
          style={PostStyles.img}
          resizeMode="cover"
          source={{ uri: `${BASE_URL}public/${image}` }}
        />
        <KeyboardAvoidingView style={PostStyles.commentsWrapper}>
          <TextInput
            style={PostStyles.textInput}
            placeholderTextColor="Black"
            placeholder="Write a comment..."
          />
          <Pressable style={PostStyles.commentButton}>
            <Text style={PostStyles.commentButtonText}>comment</Text>
          </Pressable>
        <Pressable style={PostStyles.allComments} >
          <Text style={PostStyles.allCommentsText} >See All Comments</Text>
        </Pressable>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};


export default Post;
