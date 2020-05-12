import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import { includes, remove } from "lodash";
import { useNavigation } from "@react-navigation/native";

import Input from "@components/input";
import { User } from "@core/user";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  bodyContainer: {
    marginVertical: 20,
  },
  inputContainer: {
    margin: 20,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#bebebe",
  },
  onFocus: {
    backgroundColor: "#1e629f",
  },
  btn: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#1e629f",
    padding: 20,
    margin: 40,
    borderRadius: 20,
    borderWidth: 3,
  },
});

const SignIn = () => {
  const navigation = useNavigation();
  const signIn = User.signIn();
  const loggedIn = User.loggedIn();
  const errors = User.errors();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate("home");
    } else if (includes(errors, "wrong_credentials")) {
      Alert.alert("alert wrong creds", "something");
      remove(errors, "wrong_credentials");
    } else {
      navigation.navigate("login");
    }
  }, [loggedIn, navigation, errors]);

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <Input label="Email" type="email" setValue={setEmail} value={email} />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="Password"
            type="password"
            setValue={setPassword}
            value={password}
          />
        </View>
        <View style={styles.inputContainer}>
          <Button
            title="Submit"
            onPress={() => signIn({ email, password })}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;
