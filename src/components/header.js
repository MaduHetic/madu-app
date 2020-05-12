import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Icon from "@assets/images/icon.jpg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    flex: 1,
    width: 50,
    resizeMode: "contain",
  },
});

const Header = () => (
  <View style={styles.container}>
    <Image source={Icon} style={styles.icon} />
  </View>
);

export default Header;
