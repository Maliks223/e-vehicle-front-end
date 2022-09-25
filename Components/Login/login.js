import React, { useState } from "react";
import { StatusBar, Pressable } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import loginStyles from "./loginStyles.js";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  withSequence,
  withSpring,
} from "react-native-reanimated";

const Login = () => {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const formPosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpulation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpulation, { duration: 1000 }) },
      ],
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpulation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpulation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpulation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpulation + "deg", { duration: 1500 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    const interpulation = interpolate(
      formPosition.value,
      [0, 1],
      [(2 * height) / 3, height]
    );
    return {
      transform: [
        { translateY: withTiming(interpulation, { duration: 1000 }) },
      ],
      // opacity:
      //   imagePosition.value === 0
      //     ? withDelay(400, withTiming(1, { duration: 800 }))
      //     : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    formPosition.value = 0;
    if (isRegistering) {
      setIsRegistering(false);
    }
  };
  const registerHandler = () => {
    formPosition.value = 0;
    imagePosition.value = 0;
    if (!isRegistering) {
      setIsRegistering(true);
    }
  };

  return (
    <View style={loginStyles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            style={loginStyles.imgContainer}
            href={require("../../assets/login2.jpg")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidyMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Pressable
          onPress={() => {
            imagePosition.value = 1;
            formPosition.value = 1;
          }}
        >
          <Animated.View
            style={[
              loginStyles.closeButtonContainer,
              closeButtonContainerStyle,
            ]}
          >
            <Text>❌</Text>
          </Animated.View>
        </Pressable>
      </Animated.View>

      <View style={loginStyles.buttonContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={loginStyles.loginButton} onPress={loginHandler}>
            <Text style={loginStyles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={loginStyles.registerButton}
            onPress={registerHandler}
          >
            <Text style={loginStyles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>
      </View>
      <Animated.View
        style={[loginStyles.formInputContainer, formAnimatedStyle]}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardVerticalOffset={100}
          behavior={"position"}
        >
          {isRegistering && (
            <TextInput
              style={loginStyles.textInput}
              placeholderTextColor="Black"
              placeholder="Full Name"
            />
          )}

          <TextInput
            style={loginStyles.textInput}
            placeholderTextColor="Black"
            placeholder="Email"
          />

          <TouchableOpacity onPress={() => console.log("Pressed")}>
            <TextInput
              style={loginStyles.textInput}
              placeholderTextColor="Black"
              placeholder="Password"
            />
          </TouchableOpacity>

          <Pressable>
            <Animated.View
              style={[loginStyles.formButton, formButtonAnimatedStyle]}
            >
              <Text style={loginStyles.buttonText}>
                {isRegistering ? "REGISTER" : "LOGIN"}
              </Text>
            </Animated.View>
          </Pressable>
        </KeyboardAvoidingView>
      </Animated.View>
    </View>
  );
};

export default Login;
