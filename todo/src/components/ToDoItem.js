import React from "react";

function ToDoItem(props){
    return (
        <div>
        <input type="checkbox"/> <p>{props.text}</p>
        </div>
        )
}

export default ToDoItem;