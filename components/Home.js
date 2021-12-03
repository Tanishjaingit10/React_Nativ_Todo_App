import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import Header from './Header'
import ListItems from './ListItems'
import AddTodoButton from './AddTodo'

export default function Home() {
    
    return (
        <>
            <Header/>
            <ListItems/>
            <AddTodoButton/>
        </>
    )
}
