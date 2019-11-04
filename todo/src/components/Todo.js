import React from "react";
import ToDoItem from "./ToDoItem.js";

function Todo(){
    return (
        <div>
            <ToDoItem text="Todo Item 1"/>
            <ToDoItem text="Todo Item 2"/>
            <ToDoItem text="Todo Item 3"/>
        </div>
    )
}

export default Todo;