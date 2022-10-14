import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BASE_URL } from "../../Variables/config";
import createPostStyles from "./createPostStyles";

const CreatePost = () => {
  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    description: "",
    img: "",
  });
  console.log("🚀 ~ file: createPost.js ~ line 20 ~ CreatePost ~ inputs", inputs)

  const createPost = async () => {
    try {
      let result = await fetch(`${BASE_URL}post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
           result = await result.json();
    } catch (error) {
     console.log(error);
    }
  };

  const handleSubmit = () => {
    createPost();
    Keyboard.dismiss();
    setInputs({ title: "", category: "", description: "", img: "" });
  };

  return (
    <TouchableWithoutFeedback>
      <View style={createPostStyles.container}>
        <Pressable onPress={handleSubmit} style={createPostStyles.postButton}>
          <Text style={createPostStyles.postButtonText}>Post</Text>
        </Pressable>
        <TextInput
          style={createPostStyles.textInput}
          placeholderTextColor="Black"
          placeholder="Title"
          value={inputs.title}
          onChangeText={(title) => setInputs({ ...inputs, title: title })}
        />
        <TextInput
          style={createPostStyles.textInput}
          placeholderTextColor="Black"
          placeholder="Add Category"
          value={inputs.category}
          onChangeText={(cat) => setInputs({ ...inputs, category: cat })}
        />
        <TextInput
          style={createPostStyles.textInputDesc}
          placeholderTextColor="Black"
          placeholder="Description... "
          value={inputs.description}
          onChangeText={(desc) => setInputs({ ...inputs, description: desc })}
        />
        <Pressable  onChange={(e) => {
            setImg(e.target.files[0]);
          }} style={createPostStyles.uploadImg}>
          <Text style={createPostStyles.buttonText}>
            Photo <Text style={createPostStyles.buttonTextLogo}>⏏</Text>
          </Text>
        </Pressable>
        </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;
