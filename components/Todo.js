import React, { useContext, useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalContext } from '../GlobalContext'
import { AntDesign } from '@expo/vector-icons'; 

import { colors, ModalContainer } from '../styles/appStyles'

export default function Todo({todo}) {

    const {globalState,setGlobalState} = useContext(globalContext)
    const [text, setText] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const switchImportant = () => {
        setGlobalState(prev=>{
            let todos = prev.todos
            for(let i=0;i<todos.length;i++)
                if(todos[i].key === todo.key)
                    todos[i].fav = ! todos[i].fav
            return {...prev,todos}
        })
    }

    const handelSaveTodo = () => {
        setModalIsOpen(false)
        setGlobalState(prev=>{
            let todos = prev.todos
            for(let i=0;i<todos.length;i++)
                if(todos[i].key === todo.key)
                    todos[i].title = text
            return {...prev,todos}
        })
    }

    const handleDeleteTodo = () => {
        setGlobalState( prev => {
            return { ...prev,todos:prev.todos.filter(item=>item.key!==todo.key) };
        })
        setModalIsOpen(false)
    }
    
    return (
        <>
        <TouchableOpacity 
            style={{...styles.todo,backgroundColor:todo.fav?colors.important:colors.secondary}} 
            key={todo.key} 
            activeOpacity={0.5} 
            onPress={()=>{setModalIsOpen(true);setText(todo.title)}}
            >
            <Text style={styles.text}>{todo.title}</Text>
        </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalIsOpen}
            onRequestClose={()=>{setModalIsOpen(false);setText("")}}
        >
            <ModalContainer onPress={()=>setModalIsOpen(false)} style={{backgroundColor:colors.primary}}>
                <TextInput value={text} onChangeText={setText} style={{...styles.input,backgroundColor:todo.fav?colors.important:colors.secondary}} multiline={true}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.button,marginRight:10}} 
                        onPress={()=>{setModalIsOpen(false);setText("")}}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button,marginLeft:10,backgroundColor:todo.fav?colors.important:colors.secondary}}
                        onPress={()=>switchImportant()}
                    >
                        <Text style={styles.buttonText}>Imp </Text>
                        <AntDesign color="white" name={`${todo.fav?"star":"staro"}`} size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.button,marginRight:10}} 
                        onPress={()=>handleDeleteTodo()}
                    >
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button,marginLeft:10}}
                        onPress={()=>handelSaveTodo()}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ModalContainer>
        </Modal>
    </>
    )
}

const styles = StyleSheet.create({
    todo:{
        height:150,
        width:"46%",
        margin:"2%",
        borderRadius:15,
        padding:10
    },
    text:{
        color:colors.tertiary,
        fontSize:17
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'row',
    },
    button:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:colors.secondary,
        height:50,
        flex:1,
        borderRadius:10,
        margin:20,
        marginBottom:0,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:20,
        color:colors.tertiary
    },
    container:{
        position:'absolute',
        height:60,
        width:60,
        bottom:30,
        right:30,
        borderRadius:100,
        backgroundColor:colors.tertiary,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:100
    },
    input:{
        height:250,
        width:"90%",
        borderRadius:10,
        color:colors.tertiary,
        textAlignVertical:'top',
        padding:30,
        fontSize:20
    }
})