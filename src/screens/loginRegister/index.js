import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import background from "@assets/images/background.png";
import logo from "@assets/images/Mini-Logo.png";
import Button from "@components/button";

const LogInRegister = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={background} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.text}>Bonjour je m’appelle madu 👋</Text>
          <Text style={styles.text}>Quel plaisir de vous rencontrez !</Text>
        </View>
        <View style={styles.groupBtn}>
          <Button
            text={"S'inscrire"}
            onPress={() => navigation.navigate("signIn")}
            color="blue"
          />
          <Button
            text={"Se connecter"}
            onPress={() => navigation.navigate("signIn")}
            underlayColor={"#B8B8C9"}
            outline
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: 32,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    marginBottom: 160,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginBottom: 30,
    width: 48,
    height: 34,
  },
  text: {
    fontSize: 17,
    lineHeight: 28,
    textAlign: "center",
  },
  groupBtn: {
    paddingBottom: 20,
    width: "100%",
  },
});

export default LogInRegister;
