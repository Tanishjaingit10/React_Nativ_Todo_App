import React, { useContext } from 'react'

import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
} from "../styles/appStyles"

import { Entypo } from "@expo/vector-icons"
import { globalContext } from '../GlobalContext'

export default function Header() {
    const {setGlobalState} = useContext(globalContext)

    const clearTodos = ()=>{
        setGlobalState( prev => {
            return{...prev,todos:[]}
        })
    }
    
    return (
        <HeaderView>
            <HeaderTitle>Todo</HeaderTitle>
            <HeaderButton>
                <Entypo name="trash" size={25} onPress={clearTodos} color={colors.tertiary}/>
            </HeaderButton>
        </HeaderView>
    )
}
