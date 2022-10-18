import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
  Image,
} from "react-native";
import { AuthContext } from "../../Context/authContext";
import { BASE_URL } from "../../Variables/config";
import createPostStyles from "./createPostStyles";
import * as ImagePicker from "expo-image-picker";
import { Button, HelperText, Snackbar } from "react-native-paper";

const CreatePost = () => {
  const { userInfo, userToken } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imageError, setImageError] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    description: "",
    author: userInfo.userName,
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result);
    }
  };

  const createPost = async () => {
    setTitleError("");
    setCategoryError("");
    setDescriptionError("");
    setImageError("");

    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("categories", inputs.category);
    formData.append("desc", inputs.description);
    formData.append("img", image);
    formData.append("author", inputs.author);
    try {
      let result = await fetch(`${BASE_URL}post`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      result = await result.json();
      // console.log("🚀 ~ file: createPost.js ~ line 60 ~ createPost ~ result", result)
      if (result.errors) {
        if (result.errors.title) {
          setTitleError(result.errors.title);
        }
        if (result.errors.category) {
          setCategoryError(result.errors.category);
        }
        if (result.errors.description) {
          setDescriptionError(result.errors.description);
        }
        if (result.errors.image) {
          setImageError(result.errors.image);
        }
        return;
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  const handleSubmit = () => {
    createPost();
    Keyboard.dismiss();
    setInputs({ title: "", category: "", description: "" });
    setImage(null);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <View>
      <View style={createPostStyles.container}>
        <Pressable onPress={handleSubmit} style={createPostStyles.postButton}>
          <Text style={createPostStyles.postButtonText}>Post</Text>
        </Pressable>
        <TextInput
          style={createPostStyles.textInput}
          placeholderTextColor="grey"
          placeholder="Title"
          value={inputs.title}
          onChangeText={(title) => {
            setInputs({ ...inputs, title: title });
            setTitleError("");
          }}
        />
        <HelperText style={createPostStyles.helperText}>
          {titleError}
        </HelperText>
        <TextInput
          style={createPostStyles.textInput}
          placeholderTextColor="grey"
          placeholder="Add Category"
          value={inputs.category}
          onChangeText={(cat) => {
            setInputs({ ...inputs, category: cat });
            setCategoryError("");
          }}
        />
        <HelperText style={createPostStyles.helperText}>
          {categoryError}
        </HelperText>
        <TextInput
          multiline
          numberOfLines={2}
          style={createPostStyles.textInputDesc}
          placeholderTextColor="grey"
          placeholder="Description... "
          value={inputs.description}
          onChangeText={(desc) => {setInputs({ ...inputs, description: desc })
          setDescriptionError("")
        }}
        />
        <HelperText style={createPostStyles.helperText}>
          {descriptionError}
        </HelperText>
        <Pressable onPress={()=> {
          pickImage();
          setImageError("")
         }}
          style={createPostStyles.uploadImg}>
          <View>
            <Image
              source={require("../../assets/Icons/upload.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
            {/* {image.uri && (
              <Image
                source={{ uri: image.uri }}
                style={{ width: 200, height: 200 }}
              />
            )} */}
          </View>
        </Pressable>
        <HelperText style={createPostStyles.helperText}>
          {imageError}
        </HelperText>
      </View>
    </View>
  );
};

export default CreatePost;
