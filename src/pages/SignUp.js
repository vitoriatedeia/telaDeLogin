import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";

import { StatusBar } from "expo-status-bar";

// Import Styles!
import { stylesSignUp } from "../styles/StylesSignUp";

import { StylesOnboarding } from "../styles/StylesOnboarding";

// Import Icon!
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignUp() {
  return (
    <ImageBackground
      style={stylesSignUp.container}
      source={require("../assets/images/pag2.jpg")}
      blurRadius={15}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#00000088",
          padding: 40,
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name="flower-tulip-outline"
          size={50}
          color="white"
          style={{ marginBottom: 20 }}
        />
        <Text style={stylesSignUp.title}>Sign Up</Text>
        <Text style={stylesSignUp.text}>
          Sign up now for free and start meditating, and explore Medic.
        </Text>

        <View style={{ marginTop: 80 }}>
          <TextInput
            style={stylesSignUp.input}
            placeholderTextColor={"#bebebe"}
            placeholder="Name"
          />
          <TextInput
            style={stylesSignUp.input}
            placeholderTextColor={"#bebebe"}
            placeholder="Email Address"
          />
          <TextInput
            style={stylesSignUp.input}
            placeholderTextColor={"#bebebe"}
            placeholder="Password"
          />
        </View>

        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
        >
          <Text style={StylesOnboarding.txt}>Sign Up</Text>
        </TouchableOpacity>

        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontWeight: "bold", color: "#8b4513" }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}
