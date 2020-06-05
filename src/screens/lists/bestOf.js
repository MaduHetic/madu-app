import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const BestOfList = () => {
  const { params } = useRoute();
  return (
    <SafeAreaView>
      <View style={{ padding: 24 }}>
        <Text>{params.list}</Text>
      </View>
    </SafeAreaView>
  );
};

export default BestOfList;
