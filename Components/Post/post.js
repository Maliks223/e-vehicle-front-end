import React, { useState } from "react";
import PostStyles from "./postStyles.js";
import { Text, View, SafeAreaView, Image, Pressable } from "react-native";
import { BASE_URL } from "../../Variables/config.js";

const Post = ({data, index}) => {
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
          <View>
            <Text style={PostStyles.category}>{category}</Text>
          </View>
        </View>
          <View>
            <Text style={PostStyles.title}>{title}</Text>
          </View>
        <Text style={PostStyles.desc}>
          {description}
        </Text>

        {/* <Pressable></Pressable> */}

        <Image
          style={PostStyles.img}
          resizeMode="cover"
          source={{uri: `${BASE_URL}public/${image}`}}
        />

      </View>
    </SafeAreaView>
  );
};

export default Post;
