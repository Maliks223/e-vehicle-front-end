import React, { useState } from "react";
import { Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import { BASE_URL } from "../../Variables/config";
import createPostStyles from "./createPostStyles";

const CreatePost = () => {

    const [ title, setTitle ] = useState("");
    console.log("🚀 ~ file: createPost.js ~ line 9 ~ CreatePost ~ title", title)
    const [ category, setCategory ] = useState("")
    console.log("🚀 ~ file: createPost.js ~ line 11 ~ CreatePost ~ category", category)
    const [ description, setDescription ] = useState("")

  const createPost = async () => {
    try {
      let result= await fetch(`${BASE_URL}post`, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        result
      })
      console.log("🚀 ~ file: createPost.js ~ line 17 ~ createPost ~ result", result)
      
    } catch (error) {
      console.log("🚀 ~ file: createPost.js ~ line 11 ~ createPost ~ error", error)
      
    }
  }

  const handleSubmit = () => {
    createPost()
    setTitle("")
    setCategory("")
    setDescription("")
  }

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
        value={title}
        // onChange={(e)=>{setTitle(e.target.value)}}
      />
      <TextInput
        style={createPostStyles.textInput}
        placeholderTextColor="Black"
        placeholder="Add Category"
        value={category}
        // onChange={(e)=>{setCategory(e.target.value)}}
      />
      <TextInput
        style={createPostStyles.textInputDesc}
        placeholderTextColor="Black"
        placeholder="Description... "
        value={description}
        // onChange={(e)=>{setDescription(e.target.value)}}
      />
      <Pressable onPress={handleSubmit} style={createPostStyles.uploadImg}>
        <Text style={createPostStyles.buttonText}>
          Photo   <Text style={createPostStyles.buttonTextLogo}>⏏</Text>
        </Text>
      </Pressable>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;
