import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
    container: {
        paddingTop: 63,
        paddingHorizontal: 24,
        paddingBottom: 24,
        backgroundColor: Color.lightGrey,
        flexDirection: "row"
    },
    icon: {
        marginRight: 16
    },
    title: {
        fontSize: 24,
        color: Color.black
    }
});

export const HeaderLogin = ({
    title = "Title"
}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Icon
                style={styles.icon}
                name="arrow-left"
                size={25}
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};