import React, { useState, Dispatch, SetStateAction } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  KeyboardTypeOptions,
} from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#bebebe",
  },
  isFocused: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#1e629f",
  },
});

const Input = ({
  label,
  type,
  setValue,
  value,
  onFocus,
  onBlur,
  additionalStyle,
  keyboardType,
  clearTextOnFocus,
  placeholder,
  disabled,
}) => {
  const [isFocused, setOnFocus] = useState(false);

  return (
    <View style={additionalStyle}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={isFocused ? styles.isFocused : styles.input}
        autoCorrect={false}
        onChangeText={(text) => setValue(text)}
        value={value}
        secureTextEntry={type === "password"}
        autoCapitalize={"none"}
        onFocus={onFocus ? onFocus : () => setOnFocus(true)}
        onBlur={onBlur ? onBlur : () => setOnFocus(false)}
        keyboardType={keyboardType}
        clearTextOnFocus={clearTextOnFocus}
        placeholder={placeholder}
        editable={!disabled}
      />
    </View>
  );
};

Input.defaultProps = {
  type: "text",
  keyboardType: "default",
  clearTextOnFocus: false,
};

export default Input;
