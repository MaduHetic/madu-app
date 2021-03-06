import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { User } from "@core/user";
import { Color } from "@glossy/colors";

import HeaderLogin from "@components//headerLogin";
import Button from "@components/button";

import InputTextField from "@components//inputTextField";
import EmailTextField from "@components/emailTextField";
import PasswordTextField from "@components/passwordTextField";

const SignUp = () => {
  const navigation = useNavigation();
  const loggedIn = User.loggedIn();

  const signUp = User.signUp();
  const error = User.errors();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      navigation.navigate("signUp");
    }
  }, [loggedIn, navigation]);

  const submitIsValid = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Erreur", "Merci de remplir tous les champs.");
    } else {
      signUp(firstName, lastName, email, password);
    }
  };

  return (
    <>
      <HeaderLogin title="Inscription" />
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.form}>
              <InputTextField
                label={"Entrez votre Prenom"}
                value={firstName}
                onValueChange={(val) => setFirstName(val)}
              />
              <InputTextField
                label={"Entrez votre Nom"}
                value={lastName}
                onValueChange={(val) => setLastName(val)}
              />
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
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <Button onPress={submitIsValid} text={"S'inscrire"} color="blue" />
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 120,
    paddingHorizontal: 24,
    backgroundColor: Color.white,
  },
  form: {
    paddingTop: 80,
    height: "100%",
  },
});
