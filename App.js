import { StatusBar } from "expo-status-bar";
import React from "react";

import Home from "./components/Home";
import { colors, statusBarHeight } from "./styles/Theme";
import ContextProvider from "./GlobalContext";
import { StyleSheet, View } from "react-native";

export default function App() {
    return (
        <ContextProvider>
            <View style={styles.container}>
                <Home />
                <StatusBar style="light" />
            </View>
        </ContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 20,
        paddingBottom: 0,
        flex: 1,
        paddingTop: statusBarHeight,
    }
});
