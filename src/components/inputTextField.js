import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  margin: {
    marginBottom: 16,
  },
  label: {
    position: "absolute",
    top: 20,
    left: 16,
    fontSize: 16,
    fontWeight: "500",
    color: Color.darkGrey,
  },
  labelUp: {
    top: 8,
    fontSize: 14,
    color: Color.mediumGrey,
  },
  input: {
    paddingTop: 28,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Color.mediumGrey,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
    color: Color.dark,
  },
  inputSucess: {
    borderColor: Color.primary,
  },
  inputError: {
    borderColor: Color.statusError,
  },
  error: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "500",
    color: Color.statusError,
  },
});

const InputTextField = ({ label, value, onValueChange, placeholder }) => {
  const [error, setError] = useState("empty");

  const isInputValid = () => {
    const text = value;
    // eslint-disable-next-line no-useless-escape
    const Pattern = /^[a-z ,.'-]+$/i;
    Pattern.test(String(text).toLowerCase()) ? setError("sucess") : setError("error");
  };

  return (
    <>
      <View style={[styles.container, error !== "error" && styles.margin]}>
        <Text style={[styles.label, value && styles.labelUp]}>{label}</Text>
        <TextInput
          style={[
            styles.input,
            error === "sucess" && styles.inputSucess,
            error === "error" && styles.inputError,
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onValueChange}
          onEndEditing={isInputValid}
        />
      </View>
      {error === "error" && <Text style={styles.error}>Champ invalide</Text>}
    </>
  );
};

export default InputTextField;
