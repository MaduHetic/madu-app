import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import TextWithDecorator from "@components/textWithDecorator";
import Interlayer from "@components/card/interlayer";
import FilterBarPOI from "@components/filterBarPOI";
import Place from "@components/card/places";
import BestOfList from "./bestOf";
import { Color } from "@glossy/colors";

import { Poi as PointOfIntress } from "@core/poi";

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export const List = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selected, setSelected] = React.useState("Food");
  const navigation = useNavigation();
  const allPoi = PointOfIntress.allPoi();
  const getAllPoi = PointOfIntress.getAllPoi();
  const [Lists, setLists] = useState([
    {
      data: allPoi.filter((p) => p.type === selected).slice(0, 2),
      title: "Au plus proche de vous",
      color: Color.peich,
      navigation: "bestOfList",
      navigationList: selected,
    },
    {
      data: allPoi.filter((p) => p.type === selected).slice(2, 4),
      title: "Au plus proche de vous",
      color: Color.swamp,
      navigation: "bestOfList",
      navigationList: selected,
    },
    {
      data: allPoi.filter((p) => p.type === selected).slice(4, 6),
      title: "Au plus proche de vous",
      color: Color.coral,
      navigation: "bestOfList",
      navigationList: selected,
    },
    {
      data: allPoi.filter((p) => p.type === selected).slice(6, 8),
      title: "Au plus proche de vous",
      color: Color.coral,
      navigation: "bestOfList",
      navigationList: selected,
    },
  ]);

  useEffect(() => {
    getAllPoi();
  }, [selected]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllPoi();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    setLists([
      {
        data: allPoi.filter((p) => p.type === selected).slice(0, 3),
        title: "Au plus proche de vous",
        color: Color.peich,
        navigation: "bestOfList",
        navigationList: selected,
      },
      {
        data: allPoi.filter((p) => p.type === selected).slice(4, 7),
        title: "Au plus proche de vous",
        color: Color.swamp,
        navigation: "bestOfList",
        navigationList: selected,
      },
      {
        data: allPoi.filter((p) => p.type === selected).slice(8, 12),
        title: "Au plus proche de vous",
        color: Color.coral,
        navigation: "bestOfList",
        navigationList: selected,
      },
      {
        data: allPoi.filter((p) => p.type === selected).slice(13, 16),
        title: "Au plus proche de vous",
        color: Color.coral,
        navigation: "bestOfList",
        navigationList: selected,
      },
    ]);
    console.log(Lists);
  }, [allPoi, selected]);

  return (
    <View style={{ flex: 1, paddingTop: 20, backgroundColor: Color.white }}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={{ paddingVertical: 24, position: "relative" }}>
          <FilterBarPOI selected={selected} setSelected={(item) => setSelected(item)} />
          {Lists.slice(0, 2).map((list, index) => {
            if (list.data.length === 0) return null;
            return (
              <View style={{ padding: 24 }} key={index}>
                <View style={styles.titleContainer}>
                  <TextWithDecorator text={list.title} color={list.color} />
                  <Icon
                    name="arrow-circle-o-right"
                    size={32}
                    onPress={() =>
                      navigation.navigate(list.navigation, {
                        list: list.navigationList,
                      })
                    }
                    color={list.color}
                  />
                </View>
                <View style={styles.section}>
                  <FlatList
                    data={list.data}
                    renderItem={({ item }) => <Place item={item} key={item.key} />}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            );
          })}
          <View style={{ padding: 24 }}>
            <Interlayer
              onPress={null}
              text="Nos coups de coeur recommandé"
              backgroundColor={Color.purple}
              image="Heart"
            />
          </View>
          {Lists.slice(2, 4).map((list, index) => {
            if (list.data.length === 0) return null;
            return (
              <View style={{ padding: 24 }} key={index}>
                <View style={styles.titleContainer}>
                  <TextWithDecorator text={list.title} color={list.color} />
                  <Icon
                    name="arrow-circle-o-right"
                    size={32}
                    onPress={() =>
                      navigation.navigate(list.navigation, { list: list.navigationList })
                    }
                    color={list.color}
                  />
                </View>
                <View style={styles.section}>
                  <FlatList
                    data={list.data}
                    renderItem={({ item }) => <Place item={item} key={item.key} />}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            );
          })}
          <View style={{ padding: 24 }}>
            <Interlayer
              onPress={null}
              text="Profitez des bonnes affaires du moment"
              backgroundColor={Color.melon}
              image="Percent"
            />
          </View>
          {Lists.slice(4, 6).map((list, index) => {
            if (list.data.length === 0) return null;
            return (
              <View style={{ padding: 24 }} key={index}>
                <View style={styles.titleContainer}>
                  <TextWithDecorator text={list.title} color={list.color} />
                  <Icon
                    name="arrow-circle-o-right"
                    size={32}
                    onPress={() =>
                      navigation.navigate(list.navigation, { list: list.navigationList })
                    }
                    color={list.color}
                  />
                </View>
                <View style={styles.section}>
                  <FlatList
                    data={list.data}
                    renderItem={({ item }) => <Place item={item} key={item.key} />}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            );
          })}
          <View style={{ padding: 24 }}>
            <Interlayer
              onPress={null}
              text="Retournez à vos endroits favoris"
              backgroundColor={Color.sunglow}
              image="Star"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Stack = createStackNavigator();

const ListNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"list"} component={List} />
      <Stack.Screen
        name={"bestOfList"}
        component={BestOfList}
        options={{
          headerShown: true,
          headerTitle: () => <View />,
          headerLeft: () => (
            <View style={styles.row}>
              <Icon
                name="arrow-circle-left"
                size={28}
                onPress={() => navigation.navigate("list")}
                style={{ marginLeft: 24, marginRight: 16 }}
                color={Color.white}
              />
              <Text style={{ fontSize: 24, lineHeight: 32, color: Color.white }}>
                Au plus proche de vous
              </Text>
            </View>
          ),
          headerStyle: { backgroundColor: Color.peich },
        }}
      />
    </Stack.Navigator>
  );
};

export default ListNavigator;
