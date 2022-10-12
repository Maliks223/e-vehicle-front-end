import React from "react";
import { Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import createPostStyles from "./createPostStyles";

const CreatePost = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}  >
    <View style={createPostStyles.container}>
      <Pressable style={createPostStyles.postButton}>
        <Text style={createPostStyles.postButtonText}>Post</Text>
      </Pressable>
      <TextInput
        style={createPostStyles.textInput}
        placeholderTextColor="Black"
        placeholder="Title"
        // required
      />
      <TextInput
        style={createPostStyles.textInput}
        placeholderTextColor="Black"
        placeholder="Add Category"
        // required
      />
      <TextInput
        style={createPostStyles.textInputDesc}
        placeholderTextColor="Black"
        placeholder="Description... "
        // required
      />
      <Pressable style={createPostStyles.uploadImg}>
        <Text style={createPostStyles.buttonText}>
          Photo   <Text style={createPostStyles.buttonTextLogo}>⏏</Text>
        </Text>
      </Pressable>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;
