import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { User } from "@core/user";

import HeaderLogin from "@components//headerLogin";
import Button from "@components/button";

import EmailTextField from "@components/emailTextField";
import PasswordTextField from "@components/passwordTextField";

import { Color } from "@glossy/colors";

const SignUp = () => {
  const signUp = User.signUp();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <HeaderLogin title="Inscription" />
      <View style={styles.container}>
        <View style={styles.form}>
          <EmailTextField label={"Entrez votre e-mail"} />
          <PasswordTextField label={"Entrez votre mot de passe"} />
        </View>
        <Button
          onPress={() => signUp(email, password)}
          text={"S'inscrire"}
          color="blue"
        />
      </View>
    </>
  );
};

export default SignUp;

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
