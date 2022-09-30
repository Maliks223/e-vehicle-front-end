import React, { useState } from "react";
import PostStyles from "./postStyles.js";
import { Text, View, SafeAreaView, Image, Pressable } from "react-native";

const Post = () => {
  return (
    <SafeAreaView style={PostStyles.container}>
      <View style={PostStyles.postWrapper}>
        <Text style={PostStyles.author}> I am the author </Text>
        <Text style={PostStyles.title}> I am the title </Text>

        <Text style={PostStyles.desc}>
          {" "}
          I am the description Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. In totam, animi praesentium facere natus culpa
          ratione consequatur ut ducimus accusamus.{" "}
        </Text>
        <Pressable></Pressable>

        <Image
          style={PostStyles.img}
          resizeMode="cover"
          source={require("../../assets/Icons/logo2.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Post;
