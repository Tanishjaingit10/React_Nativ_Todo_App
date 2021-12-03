import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../styles/Theme";
import { globalContext } from "../GlobalContext";

export default function AddTodo() {
    const [text, setText] = useState("");
    const { setGlobalState } = useContext(globalContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handelSaveTodo = () => {
        setGlobalState((prev) => {
            return {
                ...prev,
                key: prev.key + 1,
                todos: [
                    ...prev.todos,
                    { title: text, key: prev.key, date: "date" },
                ],
            };
        });
        setText("");
        setModalIsOpen(false);
    };

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.container}
            onPress={() => setModalIsOpen(true)}
        >
            <AntDesign color="black" name="plus" size={24} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalIsOpen}
                onRequestClose={() => {
                    setModalIsOpen(false);
                    setText("");
                }}
            >
                <View
                    onPress={() => setModalIsOpen(false)}
                    style={styles.ModalContainer}
                >
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        style={styles.input}
                        multiline={true}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={{ ...styles.button, marginRight: 10 }}
                            onPress={() => {
                                setModalIsOpen(false);
                                setText("");
                            }}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...styles.button, marginLeft: 10 }}
                            onPress={() => handelSaveTodo()}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        height: 50,
        flex: 1,
        borderRadius: 10,
        margin: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 20,
        color: colors.tertiary,
    },
    container: {
        position: "absolute",
        height: 60,
        width: 60,
        bottom: 30,
        right: 30,
        borderRadius: 100,
        backgroundColor: colors.tertiary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 100,
    },
    input: {
        height: 250,
        width: "90%",
        backgroundColor: colors.secondary,
        borderRadius: 10,
        color: colors.tertiary,
        textAlignVertical: "top",
        padding: 30,
        fontSize: 20,
    },
    ModalContainer: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.primary,
    },
});
