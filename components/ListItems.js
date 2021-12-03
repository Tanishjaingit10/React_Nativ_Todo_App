import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { colors } from "../styles/appStyles"

import { globalContext } from '../GlobalContext'
import Todo from './Todo'

export default function ListItems() {

    const {globalState} = useContext(globalContext)
    
    if(globalState.todos.length){
        return (
                <ScrollView style={{ height:"100%"}}>
                    <View style={styles.container}>
                    {
                        globalState.todos.map(todo=><Todo todo={todo}/>)
                    }
                    </View>
                </ScrollView>
        )
    }
    return <Text style={{color:colors.tertiary,textAlign:'center'}}>No Todos to display</Text>
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        flex:1
    }
})