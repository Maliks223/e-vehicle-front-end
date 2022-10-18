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
  Modal,
  ScrollView,
} from "react-native";
import { BASE_URL } from "../../Variables/config.js";
import { TouchableRipple } from "react-native-paper";

const Post = ({ data, index }) => {
  const category = data.categories[0];
  const description = data.desc;
  const image = data.img;
  const title = data.title;
  const author = data.author;
  const [modalVisible, setModalVisible] = useState(false);
  const [ comment, setComment] = useState()

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
            value={comment}
            style={PostStyles.textInput}
            placeholderTextColor="grey"
            placeholder="Write a comment..."
          />
          <Pressable onPress={()=> {setComment("")}} style={PostStyles.commentButton}>
            <Text style={PostStyles.commentButtonText}>comment</Text>
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={PostStyles.allComments}
          >
            <Text style={PostStyles.allCommentsText}>See All Comments</Text>
          </Pressable>
        </KeyboardAvoidingView>
        <Modal
          presentationStyle="pageSheet"
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={PostStyles.modalContainer}>
            <View style={PostStyles.upperModal}>
              <Text style={PostStyles.upperModalTitle}>All Comments</Text>
              <Pressable
                style={PostStyles.upperModalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={PostStyles.upperModalCloseButtonText}>
                  <Image
                    source={require("../../assets/Icons/cancel.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      // tintColor: focused ? COLORS.blue : COLORS.black,
                    }}
                  />
                </Text>
              </Pressable>
            </View>

            <ScrollView style={PostStyles.lowerModal}>
              <View style={PostStyles.modalComment}>
                <View>
                  <Text style={PostStyles.modalCommentText}>
                    You need to check the pipes, and make sure they fit
                    perfectly
                  </Text>
                </View>
                <View style={PostStyles.lowerComment}>
                  <Text style={PostStyles.modalCommentVote}> 3 votes</Text>
                  <Pressable>
                    <Text style={PostStyles.modalCommentVoteButton}>
                      <Image
                        source={require("../../assets/Icons/heart.png")}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                          // tintColor: focused ? COLORS.blue : COLORS.black,
                        }}
                      />
                    </Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Post;
