import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { globalContext } from "../GlobalContext";
import { colors } from "../styles/Theme";

export default function Header() {
    const { setGlobalState } = useContext(globalContext);

    const clearTodos = () => {
        setGlobalState((prev) => {
            return { ...prev, todos: [] };
        });
    };

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Todo</Text>
            <View style={styles.button}>
                <Entypo
                    name="trash"
                    size={25}
                    onPress={clearTodos}
                    color={colors.tertiary}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        fontWeight: "bold",
        color: colors.tertiary,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: colors.tertiary,
        letterSpacing: 2,
    },
    view: {
        paddingVertical: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});
