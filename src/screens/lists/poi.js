import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const Poi = () => {
  const { params } = useRoute();
  return (
    <SafeAreaView>
      <View style={{ padding: 24 }}>
        <Text>this poi id number is: {params.id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Poi;
