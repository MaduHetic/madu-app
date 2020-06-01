import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 16
  },
  label: {
    position: "absolute",
    top: 20,
    left: 16,
    fontSize: 16,
    color: Color.darkGrey
  },
  input: {
    paddingTop: 28,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Color.mediumGrey,
    fontSize: 14,
    lineHeight: 16,
    color: Color.dark
  },
  inputOnFocus: {

  },
  labelOnFocus: {
    top: 12,
    fontSize: 10,
    color: Color.mediumGrey
  }
});

export const Input = ({
  label,
  value,
  setValue,
  placeholder,
  type,
  disabled,
}) => {
  const inputStyle = [styles.input];
  const labelStyle = [styles.label];

  handleFocus = () => {
    // inputStyle.push(styles.inputOnFocus);
    // labelStyle.push(styles.labelOnFocus);
  }

  return (
    <View style={styles.container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        type={type}
        onFocus={() => handleFocus()}
        disabled={disabled}
        secureTextEntry={type === "password"}
      />
    </View>
  );
};
