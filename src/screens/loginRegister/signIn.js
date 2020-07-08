import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HeaderLogin from "@components//headerLogin";
import Button from "@components/button";

import EmailTextField from "@components/emailTextField";
import PasswordTextField from "@components/passwordTextField";

import { User } from "@core/user";
import { Color } from "@glossy/colors";

const SignIn = () => {
  const navigation = useNavigation();
  const signIn = User.signIn();
  const loggedIn = User.loggedIn();
  const [email, setEmail] = useState("alex.lenglish@rosebeef.net");
  const [password, setPassword] = useState("admin");

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate("home");
    } else {
      navigation.navigate("login");
    }
  }, [loggedIn, navigation]);

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
        <Button
          text={"S'inscrire"}
          onPress={() => signIn({ username: email, password })}
          color="blue"
        />
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
