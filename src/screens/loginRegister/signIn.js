import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { User } from "@core/user";
import { Color } from "@glossy/colors";

import HeaderLogin from "@components/headerLogin";
import Button from "@components/button";

import EmailTextField from "@components/emailTextField";
import PasswordTextField from "@components/passwordTextField";

const SignIn = () => {
  const navigation = useNavigation();
  const loggedIn = User.loggedIn();

  const signIn = User.signIn();
  const error = User.errors();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) {
      Alert.alert("Erreur", error);
    }
  }, [error]);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate("home");
    } else {
      navigation.navigate("signIn");
    }
  }, [loggedIn, navigation]);

  const submitIsValid = () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Merci de remplir tous les champs.");
    } else {
      signIn(email, password);
    }
  };

  return (
    <>
      <HeaderLogin title="Connection" />
      <View style={styles.container}>
        <View style={styles.form}>
          <EmailTextField
            label={"Entrez votre e-mail"}
            value={email}
            onValueChange={(val) => setEmail(val)}
          />
          <PasswordTextField
            label={"Entrez votre mot de passe"}
            value={password}
            onValueChange={(val) => setPassword(val)}
          />
        </View>
        <Button text={"Se connecter"} onPress={submitIsValid} color="blue" />
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 24,
    backgroundColor: Color.white,
  },
  form: {
    marginBottom: "auto",
  },
});
