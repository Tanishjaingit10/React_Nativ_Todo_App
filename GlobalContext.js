import React, { useState } from 'react';

export const globalContext  =  React.createContext();

export default ContextProvider = ({children})=>{
    const initialTodos = [{
        title: "what to do",
        fav:false,
        key:1
    },
    {
        title: "what to do today",
        fav:true,
        key:2
    },
    {
        title: "Go and study DSA",
        fav:false,
        key:3
    }]

    const initialState = {key:10,todos:initialTodos}
    const [globalState, setGlobalState] = useState(initialState)
    return <globalContext.Provider value={{globalState,setGlobalState}}>
            {children}
        </globalContext.Provider>
}