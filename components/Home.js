import React from "react";

import Header from "./Header";
import ListItems from "./ListItems";
import AddTodoButton from "./AddTodo";

export default function Home() {
    return (
        <>
            <Header />
            <ListItems />
            <AddTodoButton />
        </>
    );
}
