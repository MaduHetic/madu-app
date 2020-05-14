import React from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import background from "@assets/images/background.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
});

const LogInRegister = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Button title="S’inscrire" onPress={() => navigation.navigate("signIn")} />
        <Button title="SE CONNECTER" onPress={() => navigation.navigate("signIn")} />
      </ImageBackground>
    </View>
  );
};

export default LogInRegister;
