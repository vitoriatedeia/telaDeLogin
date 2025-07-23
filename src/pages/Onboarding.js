import { styles } from "../styles/StylesOnboarding";

import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Onboarding() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/fundo2.jpg")}
      blurRadius={5}
    >
      <MaterialCommunityIcons
        name="flower-tulip-outline"
        size={90}
        color="#8B4513"
        style={styles.icon}
      />
      <Text style={styles.login}>WELCOME</Text>
      <Text style={styles.subLogin}>
        Do meditation. Stay focused. Live a healthy life
      </Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtbtn}>Login With Email</Text>
      </TouchableOpacity>

      <View style={styles.test}>
        <Text style={styles.cadastro}>Dont't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.botaoCadastro}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <StatusBar hidden />
    </ImageBackground>
  );
}
