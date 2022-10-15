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

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const { userInfo, userToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    description: "",
    img: "",
    author: userInfo.userName,
  });

  const createPost = async () => {
    const formData = new FormData();
    formData.append(title, inputs.title);
    formData.append(category, inputs.category);
    formData.append(description, inputs.description);
    formData.append(img, inputs.img);
    formData.append(author, inputs.author);
    try {
      let result = await fetch(`${BASE_URL}post`, {
        method: "POST",
        headers: {
          Authorization: `bearer${userToken}`,
        },
        body: formData,
      });
      result = await result.json();
      console.log("result:", result);
    } catch (error) {
      console.log(
        "🚀 ~ file: createPost.js ~ line 62 ~ createPost ~ error",
        error
      );
    }
  };

  const handleSubmit = () => {
    createPost();
    Keyboard.dismiss();
    setInputs({ title: "", category: "", description: "", img: "" });
    setLoading(true);
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
        {/* <View style={createPostStyles.loadingContainer} > */}
        {/* <WaveIndicator color="#0C46CE" size="40" /> */}
        {/* </View> */}
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
          <Pressable onPress={pickImage} style={createPostStyles.uploadImg} >
        <View >
            <Image
              source={require("../../assets/Icons/upload.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                // tintColor: focused ? COLORS.blue : COLORS.black,
              }}
            />
          {inputs.img && (
            <Image
              source={{ uri: inputs.img }}
              style={{ width: 200, height: 200 }}
              onChange={(e) => {
                inputs.img(e.target.files[0]);
              }}
            />
          )}
        </View>
            </Pressable>
      </View>
    </View>
  );
};

export default CreatePost;


// const options = {
//   title: "Select Image",
//   type: "library",
//   options: {
//     selectionLimit: 0,
//     mediaType: "photo",
//     includeBase64: false,
//   },
// };

// const openGallery = async () => {
//   try {
//     const images = await launchImageLibrary(options);
//         console.log(images);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

{
  /* <Pressable
          onPress={openGallery}
          onChange={(e) => {
            setImg(e.target.files[0]);
          }}
          style={createPostStyles.uploadImg}
        >
          <Text style={createPostStyles.buttonText}>
            Photo <Text style={createPostStyles.buttonTextLogo}>⏏</Text>
          </Text>
        </Pressable> */
}
